export interface CelebrationFields {
  title: string
  high_rank: boolean
  celeb: boolean
  readings?: string[]
  day: number
  month: number
  tone?: string
  m_gosp?: string
}

export interface CelebrationEntry {
  id: string
  fields: CelebrationFields
}

export interface DayData {
  date: string
  fast: boolean
  cheese: boolean
  fish: boolean
  pres: boolean
  saint_basil: boolean
  dl: boolean
  readings: string[]
  content: CelebrationEntry[]
}