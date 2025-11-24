export function toLocalISO(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}
export function getMonthMatrix(year, month, data) {
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0);
    const days = [];
    const startDay = start.getDay();
    for (let i = 0; i < startDay; i++) {
        days.push({ date: null });
    }
    for (let d = 1; d <= end.getDate(); d++) {
        const date = new Date(year, month, d);
        const iso = toLocalISO(date);
        const entry = data.find(e => e.date === iso);
        days.push({ date, data: entry });
    }
    while (days.length % 7 !== 0)
        days.push({ date: null });
    return days;
}
export function formatDMY(isoDate) {
    const [y, m, d] = isoDate.split('-');
    return `${d}–${m}–${y}`;
}
//# sourceMappingURL=date.js.map