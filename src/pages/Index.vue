<template>
  <Layout>
    <div class="homepage">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-three-fifths has-text-centered">
            <g-image
              src="~/assets/images/ppic.png"
              width="150px"
              class="is-round-image has-margin-20"
            />
            <h1 class="has-text-weight-bold is-uppercase is-size-5">Kelvin M Ngunyi</h1>
            <h3
              class="has-text-weight-semibold is-capitalized is-size-6 has-margin-20"
            >Full-time Software Engineer and aspiring tech rockstar!</h3>
            <p
              class="has-text-weight-light is-capitalized is-size-6 has-margin-20"
            >Design, development, integration and maintenance of web-based systems using the latest available technologies.</p>
            <div class="container"></div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style scoped>
/* .content-container {
  background: url("/images/dot.png");
  height: 100%;
} */

.home-links a {
  margin-right: 1rem;
}
</style>

<script>
export default {
  metaInfo: {
    title: "About Me"
  }
};
</script>

<page-query>
    query metadata{
        metadata{
            siteName
            siteDescription
        }
    }
</page-query>