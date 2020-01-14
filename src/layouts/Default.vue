<template>
  <div class="layout">
    <header class="header">
      <b-navbar class="navbar" :transparent="true">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <span class="logo">K | N</span>
          </b-navbar-item>
        </template>
        <template slot="start">
          <!-- Nothing here  -->
        </template>

        <template slot="end">
          <b-navbar-item href="#" class="is-size-7">Home</b-navbar-item>
          <b-navbar-item href="#" class="is-size-7">Projects</b-navbar-item>
          <b-navbar-item href="#" class="is-size-7">About</b-navbar-item>
          <b-navbar-item href="#" class="is-size-7">Blog</b-navbar-item>
          <b-navbar-item href="#" class="is-size-7">Contact Me</b-navbar-item>
        </template>
      </b-navbar>
    </header>
    <div class="content-container has-padding-top-20 has-padding-bottom-30">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  background: #001934;
  color: white;
  width: 100%;
  min-height: 100vh;
}

.logo {
  font-weight: 900;
}
.navbar {
  background: rgba(0, 25, 51, 0.5);
}
a.navbar-item,
.navbar-link {
  color: white;
  font-weight: 100;
}

.content-container {
  background: #022b57;
}
</style>
