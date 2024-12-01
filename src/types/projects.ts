export type Projects = {
  ID: string
  name: string
  description: string
  notions: Notions[]
  created_at: string
  updated_at: string
  creator: {
    $ref: string
    $id: string
  }
}

export type Notions = {
  ID: string
  name: string
  description: string
  startTime: string
  endTime: string
  created_at: string
  updated_at: string
  project: {
    $ref: string
    $id: string
  }
}
