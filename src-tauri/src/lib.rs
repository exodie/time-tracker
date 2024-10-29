use std::fs;
use std::path::PathBuf;

// https://tauri.app/v1/guides/features/command
#[tauri::command]
fn get_user_files() -> Result<Vec<String>, String> {
    let path = PathBuf::from("/Users/im/tracker");

    if !path.exists() || !path.is_dir() {
        return Err("The specified path does not exist or is not a directory.".to_string());
    }

    match fs::read_dir(path) {
        Ok(entries) => {
            let mut files = Vec::new();
            for entry in entries {
                match entry {
                    Ok(entry) => {
                        if let Some(file_name) = entry.file_name().to_str() {
                            files.push(file_name.to_string());
                        }
                    }
                    Err(e) => {
                        return Err(format!("Error reading entry: {}", e));
                    }
                }
            }
            Ok(files)
        }
        Err(e) => Err(format!("Error reading directory: {}", e)),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![get_user_files])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
