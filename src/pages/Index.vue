<template>
  <Layout>
    <div class="container">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-three-fifths has-text-centered">
          <g-image src="~/assets/images/ppic.png" width="200" class="is-round-image has-margin-20" />
          <h1 class="has-text-weight-bold is-uppercase is-size-5">{{$page.metadata.siteName}}</h1>
          <h3
            class="has-text-weight-semibold is-capitalized is-size-6 has-margin-20"
          >{{$page.metadata.siteDescription}}</h3>
          <p
            class="has-text-weight-light is-capitalized is-size-6 has-margin-20"
          >Design, development, integration and maintenance of web-based systems using the latest available technologies.</p>
          <Platforms />
        </div>
        <div class="column"></div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<script>
// Components
import Platforms from "~/components/Platforms";

export default {
  components: {
    Platforms
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