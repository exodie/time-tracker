export const calculateHours = (startDate: string, endDate: string) => {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const timeDifference = end.getTime() - start.getTime()

  return timeDifference / (1000 * 60 * 60)
}
