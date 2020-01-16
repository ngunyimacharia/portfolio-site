<template>
  <Layout>
    <div class="title-bar columns is-vcentered is-gapless has-padding-top-20">
      <div class="column is-2 has-text-centered">
        <g-image src="~/assets/images/experience.png" width="150px" class="is-round-image" />
      </div>
      <div class="column has-margin-left-20">
        <div class="description has-padding-10 has-padding-left-30 has-padding-bottom-30">
          <h1
            class="has-text-weight-bold is-uppercase is-size-6 is-pulled-left has-margin-0"
          >My Experience</h1>
          <p
            class="is-size-7 is-pulled-right is-italic"
          >My life so far? Still running, started small, going big!</p>
        </div>
      </div>
    </div>

    <div class="experience has-padding-top-30">
      <div class="container has-margin-top-30">
        <timeline timeline-bg="#001934">
          <Experience
            v-for="experience in $page.experience.edges"
            :key="experience.id"
            :experience="experience.node"
          />
        </timeline>
      </div>
    </div>
  </Layout>
</template>

<style>
.title-bar .description {
  background: #091a28;
  border-radius: 100px 0 0 100px;
}
.experience {
  background: #001934;
}
</style>

<script>
// Components
import Experience from "~/components/Experience";
import { Timeline } from "vue-cute-timeline";

export default {
  components: {
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