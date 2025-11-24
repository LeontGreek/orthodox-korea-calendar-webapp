export async function fetchCalendar() {
    //const remoteUrl = 'https://raw.githubusercontent.com/LeontGreek/orthodox-korea-calendar-webapp/refs/heads/main/public/calendar_en.json';
    try {
        const res = await fetch(remoteUrl);
        if (!res.ok)
            throw new Error(`Remote fetch failed: ${res.status}`);
        return await res.json();
    }
    catch (err) {
        console.warn('⚠️ Remote calendar not available, using local file.', err);
        const localRes = await fetch('/calendar_kr.json');
        if (!localRes.ok)
            throw new Error('Local fallback failed');
        return await localRes.json();
    }
}
//# sourceMappingURL=api.js.map