<script lang="ts">
    import type { CalendarCell } from '../lib/date'
    export let cell: CalendarCell
</script>

<div class="cell" on:click>
    {#if cell.date?.getDay() === 0}
        <span class="num" style="color: darkred">{cell.date?.getDate()}</span>
        {#if cell.data}
            <small style="color: darkred !important;">{cell.data.content[0]?.fields.title}</small>
        {/if}
    {:else}
        <span class="num">{cell.date?.getDate()}</span>
        {#if cell.data}
            {#if cell.data.content[0]?.fields.high_rank}
                <small style="color: darkred !important;">{cell.data.content[0]?.fields.title}</small>
            {:else}
                <small>{cell.data.content[0]?.fields.title}</small>
            {/if}
        {/if}
    {/if}
</div>

<style>
    .cell {
        border: 2px solid #ddd;
        min-height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        background: white;
        padding: 0.4rem;
    }

    .cell:hover {
        background: #f0f6ff;
    }

    .num {
        font-weight: bold;
        font-size: 1.4rem;
        margin-bottom: 0.4rem;
    }

    small {
        font-size: 0.8rem;
        text-align: left;
        overflow-wrap: break-word;
        word-break: break-word;
        hyphens: auto;
        max-width: 95%;
        line-height: 1.2;
    }
</style>