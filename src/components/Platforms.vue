<template>
  <div class="columns connect-links">
    <div class="column" v-for="platform in $static.allPlatform.edges" :key="platform.node.title">
      <a :href="platform.node.target" target="_blank">
        <b-icon
          :pack="platform.node.icon_pack"
          :icon="platform.node.icon"
          size="is-medium"
          :style="{ color: platform.node.color}"
        ></b-icon>
      </a>
    </div>
  </div>
</template>

<style scoped>
.connect-links {
  width: 50%;
  min-width: 400px;
  margin: 0 auto;
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