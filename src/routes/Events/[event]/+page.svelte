<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    const eventData = data.event ?? null;
    const signees = data.amount ?? 0;
</script>

{#if !eventData}
    <h2>No event data available.</h2>
{:else}
    <h2>Event name: {eventData.name}</h2>
    <p>SignUppers: {signees} / {eventData.capacity}</p>

    <form method="POST">
        <label for="email">
            Please enter your email for sign up!
        </label>
        <input type="email" placeholder="Enter email" name="email">
        <button type="submit">Sign Up!</button>
    </form>
{/if}
