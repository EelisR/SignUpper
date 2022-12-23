<script lang="ts">
    import EventList from '$lib/components/EventList/EventList.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
    const events = data.events;
</script>


{#if events && events.length > 0}
    <EventList events={events} />
{:else}
    <h1>No open events at the moment</h1>
{/if}