<script lang="ts">
    import { calendarData, currentMonth, currentYear, selectedDay } from '../lib/store'
    import { getMonthMatrix } from '../lib/date'
    import DayCell from './DayCell.svelte'

    $: matrix = getMonthMatrix($currentYear, $currentMonth, $calendarData)

    function selectDay(dayData) {
        if (dayData) selectedDay.set(dayData)
    }
</script>

<div class="weekdays">
    <div style="color: darkred">일</div><div>월</div><div>화</div><div>수</div><div>목</div><div>금</div><div>토</div>
</div>

<div class="grid">
    {#each matrix as cell}
        {#if cell.date}
            <DayCell {cell} on:click={() => selectDay(cell.data)} />
        {:else}
            <div class="empty"></div>
        {/if}
    {/each}
</div>

<style>
    .weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 1.3rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
    }
    .empty {
        border: 1px solid transparent;
        min-height: 100px;
    }
</style>