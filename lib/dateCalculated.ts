export function dateCalculated(date1: Date, date2: Date): number {
  const diffInSecs = date1.getTime() - date2.getTime()
  const diffInDays = Math.round(diffInSecs / (1000 * 3600 * 24))
  return diffInDays < 0 ? 0 : diffInDays
}

export function monthDiff(d1: Date, d2: Date) {
    let months;
    months = (d1.getFullYear() - d2.getFullYear()) * 12;
    months -= d2.getMonth();
    months += d1.getMonth();
    return months <= 0 ? 0 : months;
}