import { writable } from 'svelte/store';
import type { DayData } from './types';

export const calendarData = writable<DayData[]>([]);
export const selectedDay = writable<DayData | null>(null);

const today = new Date();
export const currentYear = writable(today.getFullYear());
//export const currentYear = writable(2026)   # Only for testing
export const currentMonth = writable(today.getMonth());
