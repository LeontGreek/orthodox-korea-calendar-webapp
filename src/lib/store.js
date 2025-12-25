import { writable } from 'svelte/store';
export const calendarData = writable([]);
export const selectedDay = writable(null);
const today = new Date();
export const currentYear = writable(today.getFullYear());
//export const currentYear = writable(2026)   # Only for testing
export const currentMonth = writable(today.getMonth());
//# sourceMappingURL=store.js.map