<script lang="ts">
    export let open: boolean
    export let onClose: () => void
</script>

{#if open}
    <div class="backdrop" on:click={onClose}>
        <div class="modal" on:click|stopPropagation>
            <slot />
            <button class="close" on:click={onClose}>Close</button>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
    }
    .close {
        margin-top: 1rem;
    }
</style>