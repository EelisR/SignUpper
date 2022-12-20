<script lang="ts">
  import {Navbar, Nav, NavItem, NavLink, NavbarBrand, Container, Row, Col } from 'sveltestrap/src';
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
      <NavLink href="Signups">Signups</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="User">User</NavLink>
    </NavItem>
  </Nav>
</Navbar>

<main class="content">
  <slot />
</main>

<style>
  main.content{
    margin: auto;
    width: 50%;
    text-align: center;
  }
</style>