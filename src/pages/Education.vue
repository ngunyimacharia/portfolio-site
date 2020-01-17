<template>
  <Layout>

    <Hero title="My Education" subtitle="They say you start dying when you stop learning. How am I doing?">
      <img src="/images/education.png" width="150px" class="is-round-image" />
    </Hero>

    <div class="education has-padding-top-30">
      <div class="container has-margin-top-30">
        <timeline timeline-bg="#001934">
          <Education
            v-for="education in $page.education.edges"
            :key="education.id"
            :education="education.node"
          />
        </timeline>
      </div>
    </div>
  </Layout>
</template>

<script>
// Components
import Hero from "~/components/Hero";
import Education from "~/components/Education";
import { Timeline } from "vue-cute-timeline";

export default {
  components: {
    Hero,
    Education,
    Timeline
  },
  metaInfo: {
    title: "My Education"
  }
};
</script>

<page-query>
query{
  education: allEducation(sortBy:"dateCompleted"){
  	edges{
      node{
        id
        title
        institution
        image
        dateCompleted
      }
    }
  }
}
</page-query>