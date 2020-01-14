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
          <b-navbar-item>
            <g-link to="/" class="link is-size-7">Home</g-link>
          </b-navbar-item>
          <b-navbar-item>
            <g-link to="/portfolio/" class="link is-size-7">Portfolio</g-link>
          </b-navbar-item>
          <b-navbar-item>
            <g-link href="#" class="link is-size-7">About</g-link>
          </b-navbar-item>
          <b-navbar-item>
            <g-link href="#" class="link is-size-7">Blog</g-link>
          </b-navbar-item>
          <b-navbar-item>
            <g-link href="#" class="link is-size-7">Contact Me</g-link>
          </b-navbar-item>
        </template>
      </b-navbar>
    </header>
    <div class="content-container has-margin-top-10">
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
.link {
  color: white;
  font-weight: 100;
}

.content-container {
  background: #022b57;
}

.is-round-image {
  border-radius: 250px;
}
</style>
