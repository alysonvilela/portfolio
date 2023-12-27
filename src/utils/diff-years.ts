export function calculateYearsSince(date: Date, currentDate: Date): number {
  const diffInMilliseconds = currentDate.getTime() - date.getTime()
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25 // considerando ano bissexto

  return Math.floor(diffInMilliseconds / millisecondsInYear)
}
