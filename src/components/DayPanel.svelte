<script lang="ts">
    import type { DayData } from '../lib/types'

    export let day: DayData
</script>

<div class="panel">

    <h2>{day.date}</h2>

    <h3><u>성서 구절</u>:</h3>
    {#if day.readings.length}
        <ul class="readings-list">
            {#each day.readings as reading}
                {reading}<br/>
            {/each}
        </ul>
    {:else}
        <p>성서 구절 없음</p>
    {/if}

    <h3><u>축일</u>:</h3>
    <ul>
        {#each day.content as entry}
            <li>
                <!-- <strong>{entry.fields.title}</strong> -->
                {#if entry.fields.high_rank}
                    <strong style="color: darkred !important; white-space: pre-line;">{entry.fields.title}</strong>
                {:else if entry.fields.celeb}
                    <strong style="color: darkblue !important; font-style: italic !important; white-space: pre-line;">{entry.fields.title}</strong>
                {:else}
                    <strong style="white-space: pre-line;">{entry.fields.title}</strong>
                {/if}
                {#if entry.fields.readings?.length}<br /><span style="font-style: italic"><u>조과 복음경</u>: {entry.fields.readings}</span>{/if}
                {#if entry.fields.tone}<br><span style="font-style: italic">제 {entry.fields.tone} 조</span>{/if}
                {#if entry.fields.m_gosp}<br><span style="font-style: italic">조과 복음 {entry.fields.m_gosp}</span>{/if}
            </li>
        {/each}
    </ul>

    {#if day.fast || day.cheese || day.fish || day.pres || day.saint_basil || day.dl}
        <!---<h4><u>의미</u>:</h4>-->
        <br>
        <ul>
            <!--{#if day.fast}Fast {/if}-->
            {#if day.fast}<img src="https://github.com/LeontGreek/orthodox-korea-calendar-webapp/blob/korean/public/fast.jpeg?raw=true" style="display: inline-block; height: 50px; padding: 5px;" alt="Fast"> {/if}
            {#if day.cheese}<img src="https://github.com/LeontGreek/orthodox-korea-calendar-webapp/blob/korean/public/cheese.jpeg?raw=true" style="display: inline-block; height: 50px; padding: 5px;" alt="Cheese"> {/if}
            {#if day.fish}<img src="https://github.com/LeontGreek/orthodox-korea-calendar-webapp/blob/korean/public/fish.jpeg?raw=true" style="display: inline-block; height: 50px; padding: 5px;" alt="Fish"> {/if}
            {#if day.pres}<img src="https://github.com/LeontGreek/orthodox-korea-calendar-webapp/blob/korean/public/pres.jpeg?raw=true" style="display: inline-block; height: 50px; padding: 5px;" alt="Presanctified"> {/if}
            {#if day.saint_basil}<img src="https://github.com/LeontGreek/orthodox-korea-calendar-webapp/blob/korean/public/bas_lit.jpeg?raw=true" style="display: inline-block; height: 50px; padding: 5px;" alt="Saint Basil Liturgy"> {/if}
            {#if day.dl}<img src="https://github.com/LeontGreek/orthodox-korea-calendar-webapp/blob/korean/public/div_lit.jpeg?raw=true" style="display: inline-block; height: 50px; padding: 5px;" alt="Divine Liturgy"> {/if}
        </ul>
    {/if}
</div>

<style>
    .panel {
        margin-top: 1rem;
        padding: 1rem;
        border: 1px solid #ddd;
        background: #fff;
        border-radius: 15px;
    }
</style>