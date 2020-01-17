<template>
  <header class="header">
    <b-navbar class="navbar" :transparent="true" fixed-top >
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
          <g-link to="/experience/" class="link is-size-7">Experience</g-link>
        </b-navbar-item>
        <b-navbar-item>
          <g-link to="/education/" class="link is-size-7">Education</g-link>
        </b-navbar-item>
        <b-navbar-item>
          <g-link to="/contact/" class="link is-size-7">Contact Me</g-link>
        </b-navbar-item>
        <b-navbar-item>
          <g-link to="/recommendations/" class="link is-size-7">Recommendations</g-link>
        </b-navbar-item>
        <b-navbar-item>
          <g-link to="/jokes/" class="link is-size-7">Jokes</g-link>
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>