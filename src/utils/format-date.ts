const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

/** Short en-US date, formatted in UTC so date-only values never shift a day. */
export function formatDate(date: Date): string {
  return formatter.format(date);
}
