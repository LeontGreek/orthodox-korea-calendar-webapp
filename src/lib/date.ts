import type { DayData } from './types'

export interface CalendarCell {
  date: Date | null
  data?: DayData
}

export function toLocalISO(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getMonthMatrix(
  year: number,
  month: number,
  data: DayData[]
): CalendarCell[] {
  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0);
  const days: CalendarCell[] = [];

  const startDay = start.getDay();
  for (let i = 0; i < startDay; i++) {
    days.push({ date: null });
  }

  for (let d = 1; d <= end.getDate(); d++) {
    const date = new Date(year + 1, month, d);
    const iso = toLocalISO(date);
    const entry = data.find(e => e.date === iso);
    days.push({ date, data: entry });
  }
  while (days.length % 7 !== 0) days.push({ date: null });
  return days;
}

export function formatDMY(isoDate: string): string {
  const [y, m, d] = isoDate.split('-')
  return `${d}–${m}–${y}`
}
