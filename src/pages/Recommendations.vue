<template>
  <Layout>
    <Hero
      title="My Recommendations"
      subtitle="Stuck on my tastebuds. Comment with like or hate-speech. It's a free country :-D"
    >
      <img src="/images/recommendations.png" width="150px" class="is-round-image" />
    </Hero>
    <div class="columns is-multiline" v-if="$page.recommendations.edges.length">
      <div
        class="column is-3"
        v-for="recommendation in $page.recommendations.edges"
        :key="recommendation.node.id"
      >
        <Recommendation :recommendation="recommendation.node" />
      </div>
    </div>
  </Layout>
</template>

<script>
// Components
import Hero from "~/components/Hero";
import Recommendation from "~/components/Recommendation";

export default {
  name: "RecommendationsPage",
  metaInfo: {
    title: "My Recommendations"
  },
  components: {
    Hero,
    Recommendation
  }
};
</script>

<page-query>
query{
  recommendations: allRecommendation{
  	edges{
      node{
        id
        title
        type
        thumbnail(width: 325, height: 500, quality: 90)
        excerpt
        path
      }
    }
  }
}
</page-query>