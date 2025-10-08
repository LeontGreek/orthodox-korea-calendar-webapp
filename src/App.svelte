<script lang="ts">
    import { onMount } from 'svelte'
    import MonthGrid from './components/MonthGrid.svelte'
    import DayPanel from './components/DayPanel.svelte'
    import Modal from './components/Modal.svelte'
    import { calendarData, selectedDay, currentMonth, currentYear } from './lib/store'
    import { fetchCalendar } from './lib/api'

    let loading = true
    let error: string | null = null

    $: monthLabel = new Date($currentYear, $currentMonth).toLocaleString('en', {
        month: 'long',
        year: 'numeric'
    })

    $: nextMonthLabel = new Date($currentYear, $currentMonth + 1).toLocaleString('en', {
        month: 'long'
    })

    $: prevMonthLabel = new Date($currentYear, $currentMonth - 1).toLocaleString('en', {
        month: 'long'
    })

    onMount(async () => {
        try {
            const data = await fetchCalendar()
            calendarData.set(data)
        } catch (e) {
            error = (e as Error).message
        } finally {
            loading = false
        }
    })

    function prevMonth() {
        if ($currentMonth === 0) {
            currentMonth.set(11)
            currentYear.set($currentYear - 1)
        } else {
            currentMonth.set($currentMonth - 1)
        }
        selectedDay.set(null)
    }

    function nextMonth() {
        if ($currentMonth === 11) {
            currentMonth.set(0)
            currentYear.set($currentYear + 1)
        } else {
            currentMonth.set($currentMonth + 1)
        }
        selectedDay.set(null)
    }

    function closePanel() {
        selectedDay.set(null)
    }
</script>

<main>
    <!-- <h1>OrthodoxKorea Calendar</h1> -->
    <br>
    <div class="controls">
        <button
                class="prev"
                on:click={prevMonth}
                disabled={$currentMonth === 0}
        >
            &ldca; {prevMonthLabel}
        </button>

        <span style="text-shadow: black 1px 1px 2px;">{monthLabel}</span>

        <button
                class="next"
                on:click={nextMonth}
                disabled={$currentMonth === 11}
        >
            {nextMonthLabel} &rdca;
        </button>
    </div>

    {#if loading}
        <p>Loading…</p>
    {:else if error}
        <p style="color:red">{error}</p>
    {:else}
        <br>
        <br>
        <MonthGrid />
        <Modal open={$selectedDay !== null} onClose={closePanel}>
            {#if $selectedDay}
                <DayPanel day={$selectedDay} />
            {/if}
        </Modal>
    {/if}
    <h4 style="color: #017501"><u>Flags</u>:</h4>
    <img src="https://github.com/CyberSystema-Technologies/orthodox-korea-calendar-webapp/blob/master/public/fast.jpeg?raw=true" style="display: block; height: 30px;" alt="Fast"> <b>Fast</b><img src="https://github.com/CyberSystema-Technologies/orthodox-korea-calendar-webapp/blob/master/public/cheese.jpeg?raw=true" style="display: block; height: 30px;" alt="Cheese"> <b>Dairy Product Permitted</b><img src="https://github.com/CyberSystema-Technologies/orthodox-korea-calendar-webapp/blob/master/public/fish.jpeg?raw=true" style="display: block; height: 30px;" alt="Fish"> <b>Fish Permitted</b><img src="https://github.com/CyberSystema-Technologies/orthodox-korea-calendar-webapp/blob/master/public/pres.jpeg?raw=true" style="display: block; height: 30px;" alt="Presanctified"> <b>Presanctified Divine Liturgy</b><img src="https://github.com/CyberSystema-Technologies/orthodox-korea-calendar-webapp/blob/master/public/bas_lit.jpeg?raw=true" style="display: block; height: 30px;" alt="Saint Basil Liturgy"> <b>Liturgy of Saint Basil the Great</b><img src="https://github.com/CyberSystema-Technologies/orthodox-korea-calendar-webapp/blob/master/public/div_lit.jpeg?raw=true" style="display: block; height: 30px;" alt="Divine Liturgy"> <b>Divine Liturgy</b>
</main>

<style>
    main {
        max-width: 1050px;
        margin: auto;
        padding: 1rem;
    }
    .controls {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        margin-bottom: 0.5rem;
        position: relative;
    }

    .controls span {
        grid-column: 2;
        justify-self: center;
        font-weight: bolder;
        font-size: 1.7rem;
        text-align: center;
        color: darkred;
    }

    .controls button {
        padding: 0.4rem 0.8rem;
        border: 2px solid #84a6fd;
        background: #003e0f;
        cursor: pointer;
        /*min-width: 170px;*/
        width: auto;
        font-size: 1.2rem;
        color: white;
        border-radius: 50px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }

    .controls button:hover:enabled {
        background: #eee;
        color: black;
    }

    .controls .prev {
        grid-column: 1;
        justify-self: start;
        text-align: left;
    }

    .controls .next {
        grid-column: 3;
        justify-self: end;
        text-align: right;
    }

    .controls button:disabled {
        visibility: hidden;
    }
</style>