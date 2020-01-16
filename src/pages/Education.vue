<template>
  <Layout>
    <div class="title-bar columns is-vcentered is-gapless has-padding-top-20">
      <div class="column is-2 has-text-centered">
        <g-image src="~/assets/images/education.png" width="150px" class="is-round-image" />
      </div>
      <div class="column has-margin-left-20">
        <div class="description has-padding-10 has-padding-left-30 has-padding-bottom-30">
          <h1
            class="has-text-weight-bold is-uppercase is-size-6 is-pulled-left has-margin-0"
          >My Education</h1>
          <p
            class="is-size-7 is-pulled-right is-italic"
          >They say you start dying when you stop learning. How am I doing?</p>
        </div>
      </div>
    </div>

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

<style>
.title-bar .description {
  background: #091a28;
  border-radius: 100px 0 0 100px;
}
.education {
  background: #001934;
}
</style>

<script>
// Components
import Education from "~/components/Education";
import { Timeline } from "vue-cute-timeline";

export default {
  components: {
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
        image(width: 50, height: 50, quality: 90)
        dateCompleted
      }
    }
  }
}
</page-query>