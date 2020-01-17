<template>
  <section class="hero is-small is-bold">
    <div class="hero-body">
      <div class="columns is-vcentered">
        <div class="column is-2 has-text-centered">
          <slot />
        </div>
        <div class="column">
          <h1 class="title is-size-5">{{title}}</h1>
          <h2 class="subtitle is-size-7 has-margin-top-10">{{subtitle}}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background-color: #0e2233;
}
</style>

<script>
export default {
  name: "Hero",
  props: {
    title: {
      required: true,
      type: String
    },
    subtitle: {
      required: true,
      type: String
    }
  }
};
</script>