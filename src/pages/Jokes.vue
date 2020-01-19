<template>
  <Layout>
    <Hero
      title="Live together, laugh together"
      subtitle="The first computer dates back to Adam and Eve. It was an Apple with limited memory, just one byte. And then everything crashed."
    >
      <g-image src="~/assets/images/jokes.png" width="150px" class="is-round-image" />
    </Hero>
    <div class="container">
      <div class="columns has-margin-top-20">
        <div class="column is-8">
          <div class="columns is-multiline" v-if="$page.jokes.edges.length">
            <div class="column is-3" v-for="joke in $page.jokes.edges" :key="joke.node.id">
              <Joke :joke="joke.node" />
            </div>
          </div>
        </div>
        <div class="column">
          <vue-disqus :shortname="discuss_shortname" identifier="jokes"></vue-disqus>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
// Components
import Hero from "~/components/Hero";
import Joke from "~/components/Joke";

export default {
  name: "JokesPage",
  metaInfo: {
    title: "Live together, laugh together"
  },
  components: {
    Hero,
    Joke
  },
  data() {
    return {
      discuss_shortname: process.env.GRIDSOME_DISCUSS_SHORTNAME
    };
  }
};
</script>

<page-query>
query{
  jokes: allJoke{
  	edges{
      node{
        id
        joke
      }
    }
  }
}
</page-query>