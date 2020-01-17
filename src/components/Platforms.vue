<template>
  <div class="columns connect-links">
    <div class="column has-text-centered" v-for="platform in $static.allPlatform.edges" :key="platform.node.title">
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