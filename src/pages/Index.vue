<template>
  <Layout>
    <div class="container">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-three-fifths has-text-centered">
          <g-image src="~/assets/images/ppic.png" width="200" class="is-round-image has-margin-20" />
          <h1 class="has-text-weight-bold is-capitalized is-size-5">KELVIN M NGUNYI</h1>
          <h3
            class="has-text-weight-semibold is-capitalized is-size-6 has-margin-20"
          >Full-time Software Engineer and aspiring tech rockstar!</h3>
          <p
            class="has-text-weight-light is-capitalized is-size-6 has-margin-20"
          >Design, development, integration and maintenance of web-based systems using the latest available technologies.</p>

          <div class="columns connect-links">
            <div class="column">
              <b-icon pack="fab" icon="twitter-square" size="is-medium" class="twitter"></b-icon>
            </div>
            <div class="column">
              <b-icon pack="fab" icon="medium" size="is-medium" class="medium"></b-icon>
            </div>
            <div class="column">
              <b-icon pack="fab" icon="gitlab" size="is-medium" class="gitlab"></b-icon>
            </div>
            <div class="column">
              <b-icon pack="fab" icon="github-square" size="is-medium" class="github"></b-icon>
            </div>
            <div class="column">
              <b-icon pack="fab" icon="linkedin" size="is-medium" class="linkedin"></b-icon>
            </div>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.connect-links {
  width: 50%;
  min-width: 400px;
  margin: 0 auto;
}

.twitter {
  color: #55acee;
}
.medium {
  color: #000000;
}
.gitlab {
  color: #fc6d27;
}
.github {
  color: #000000;
}
.linkedin {
  color: #2867b2;
}
</style>
