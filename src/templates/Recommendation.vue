<template>
  <Layout v-if="$page">
    <div class="container has-margin-top-20">
      <div class="columns">
        <div class="column is-9">
          <Hero :title="$page.recommendation.title" :subtitle="$page.recommendation.excerpt">
            <g-image :src="$page.recommendation.thumbnail" width="150px" height="150px" />
          </Hero>
          <div class="content is-size-7 has-padding-20">
            <p class="has-padding-top-20" v-html="$page.recommendation.content" />
          </div>
        </div>
        <div class="column">
          <vue-disqus :shortname="discuss_shortname" :identifier="$page.recommendation.id"></vue-disqus>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
// Components
import Hero from "~/components/Hero";

export default {
  components: {
    Hero
  },
  data() {
    return {
      discuss_shortname: process.env.GRIDSOME_DISCUSS_SHORTNAME
    };
  }
};
</script>

<page-query>
query ($id: ID!) {
  recommendation(id: $id) {
        id
        title
        type
        thumbnail(width: 150, height: 150, quality: 90)
        excerpt
        content
  }
}
</page-query>