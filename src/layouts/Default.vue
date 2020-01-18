<template>
  <div class="layout">
    <Header />

    <div class="content-container">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.content-container {
  min-height: 80vh;
}

.is-round-image {
  border-radius: 250px;
}
</style>

<script>
// Components
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>