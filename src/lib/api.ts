import type { DayData } from './types'

export async function fetchCalendar(): Promise<DayData[]> {
  const remoteUrl =
    'https://raw.githubusercontent.com/CyberSystema-Technologies/orthodox-korea-calendar-webapp/refs/heads/master/public/calendar_en.json'

  try {
    const res = await fetch(remoteUrl)
    if (!res.ok) throw new Error(`Remote fetch failed: ${res.status}`)
    return await res.json() as DayData[]
  } catch (err) {
    console.warn('⚠️ Remote calendar not available, using local file.', err)
    const localRes = await fetch('/calendar_en.json')
    if (!localRes.ok) throw new Error('Local fallback failed')
    return await localRes.json() as DayData[]
  }
}