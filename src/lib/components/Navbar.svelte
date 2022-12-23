<script lang="ts">
  import {Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'sveltestrap/src';
  export let loggedIn: boolean;
</script>

<Navbar>
  <NavbarBrand href="/">
    SignUpper
  </NavbarBrand>
  <Nav class="ms-auto">
    <NavItem>
      <NavLink href="/">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/Events">Events</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/User">{!loggedIn ? 'Log in or register' : 'Account'}</NavLink>
    </NavItem>
  </Nav>
</Navbar>

