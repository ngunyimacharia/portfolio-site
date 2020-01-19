<template>
  <div class="columns is-mobile connect-links">
    <span
      class="column"
      v-for="platform in $static.allPlatform.edges"
      :key="platform.node.title"
    >
      <a :href="platform.node.target" target="_blank">
        <b-icon :pack="platform.node.icon_pack" :icon="platform.node.icon" class="is-size-6 icon"></b-icon>
      </a>
    </span>
  </div>
</template>

<style scoped>
.icon {
  color: #00a672;
}
</style>

<script>
export default {
  name: "Platforms"
};
</script>

<static-query>
    query{
        allPlatform{
            edges{
            node{
                id
                title 
                icon_pack 
                icon
                target
                color
            }
            }
        }
    }
</static-query>