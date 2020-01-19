<template>
  <footer class="footer has-margin-top-30">
    <div class="columns">
      <div class="column is-9-desktop is-8-tablet has-text-centered-mobile">
        Made with
        &nbsp;
        <b-icon pack="fas" icon="heart" size="is-small" class="red" />&nbsp;
        on
        &nbsp;
        <a
          href="https://github.com/ngunyimacharia/ngunyimacharia.github.io/tree/dev"
          target="_blank"
        >
          <b-icon pack="fab" icon="github" size="is-small" />
        </a>
      </div>
      <div class="column">
        <Platforms />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.red {
  color: red;
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