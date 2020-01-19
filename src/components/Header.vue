<template>
  <header class="header">
    <b-navbar class="navbar" :transparent="true" fixed-top>
      <template slot="brand">
        <b-navbar-item tag="router-link" class="is-paddingless" :to="{ path: '/' }">
          <g-image src="~/assets/images/logo.png" width="200" height="50" alt="Logo" class="logo" />
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item>
          <g-link to="/portfolio/" class="link is-size-7">
            <span class="has-text-white">01.</span>&nbsp;
            Portfolio
          </g-link>
        </b-navbar-item>
        <b-navbar-item class="empty-nav-item">
          <!-- Nothing -->
        </b-navbar-item>
        <b-navbar-item>
          <g-link to="/experience/" class="link is-size-7">
            <span class="has-text-white">02.</span>&nbsp;Experience
          </g-link>
        </b-navbar-item>
        <b-navbar-item class="empty-nav-item">
          <!-- Nothing -->
        </b-navbar-item>
        <b-navbar-item>
          <g-link to="/education/" class="link is-size-7">
            <span class="has-text-white">03.</span>&nbsp;Education
          </g-link>
        </b-navbar-item>
        <b-navbar-item class="empty-nav-item">
          <!-- Nothing -->
        </b-navbar-item>
        <b-navbar-item>
          <g-link to="/contact/" class="link is-size-7">
            <span class="has-text-white">04.</span>&nbsp;Contact Me
          </g-link>
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<style scoped>
.logo {
  max-height: 50px;
}
.empty-nav-item{
  display: none;
}
</style>