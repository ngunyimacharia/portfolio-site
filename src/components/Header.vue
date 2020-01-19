<template>
  <header class="header">
    <b-navbar class="navbar" :transparent="true" fixed-top>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="logo">K | N</span>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item>
          <g-link to="/portfolio/" class="link is-size-7">
            <span class="has-text-white">01.</span>&nbsp;
            Portfolio
          </g-link>
        </b-navbar-item>
        <b-navbar-item>
          <g-link to="/experience/" class="link is-size-7">
            <span class="has-text-white">02.</span>&nbsp;Experience
          </g-link>
        </b-navbar-item>
        <b-navbar-item>
          <g-link to="/education/" class="link is-size-7">
            <span class="has-text-white">03.</span>&nbsp;Education
          </g-link>
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