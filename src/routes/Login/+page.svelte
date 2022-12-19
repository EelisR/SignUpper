<script lang="ts">
</script>

<form 
    method="POST"
    class="stack"
>

	<label for="email">Email</label>
    <input type="email" name="email" id="email"/>

    <label for="password">Password</label>
    <input type="password" name="password" id="password" />

    <label for="passwordVerified">Verify password</label>
    <input type="password" name="passwordVerified" id="passwordVerified" />

    <p></p>
    <button type="submit">Create account</button>
</form>

<style>
    form.stack{
        display: grid;
        width: 20em;
    }
</style>
