<template>
  <Layout>
    <Hero title="My Experience" subtitle="My life so far? Still running, started small, going big!">
      <g-image src="~/assets/images/experience.png" width="150px" class="is-round-image" />
    </Hero>

    <div class="container has-margin-top-30">
      <timeline timeline-bg="#001934">
        <Experience
          v-for="experience in $page.experience.edges"
          :key="experience.id"
          :experience="experience.node"
        />
      </timeline>
    </div>
  </Layout>
</template>


<script>
// Components
import Hero from "~/components/Hero";
import Experience from "~/components/Experience";
import { Timeline } from "vue-cute-timeline";

export default {
  components: {
    Hero,
    Experience,
    Timeline
  },
  metaInfo: {
    title: "My Experience"
  }
};
</script>

<page-query>
query{
  experience: allExperience(sortBy:"dateStarted"){
  	edges{
      node{
        id
        title
        company
        url
        image(width: 50, height: 50, quality: 90)
        country
        dateStarted
        dateStopped
        content
      }
    }
  }
}
</page-query>