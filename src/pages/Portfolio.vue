<template>
  <Layout>
    <Hero
      title="My Portfolio"
      subtitle="Feel free to contact me if you want us to work together towards something awesome"
    >
      <g-image src="~/assets/images/portfolio.png" width="150px" class="is-round-image" />
    </Hero>
    <div class="portfolio-list" v-if="$page">
      <div class="container">
        <b-field grouped group-multiline class="has-padding-top-20 has-padding-bottom-20">
          <b-field label="Stack" labelPosition="inside" expanded>
            <b-select placeholder="All technologies" expanded size="is-small" v-model="tool">
              <option :value="null">All technologies</option>
              <option
                v-for="tool in $page.tools.edges"
                :value="tool.node.id"
                :key="tool.node.id"
              >{{ tool.node.id }}</option>
            </b-select>
          </b-field>
          <b-field label="Status" labelPosition="inside" expanded>
            <b-select placeholder="All Statuses" expanded size="is-small" v-model="status">
              <option :value="null">All Statuses</option>
              <option
                v-for="status in $page.statuses.edges"
                :value="status.node.id"
                :key="status.node.id"
              >{{ status.node.id }}</option>
            </b-select>
          </b-field>
        </b-field>
        <div class="columns is-multiline" v-if="myPortfolio.length">
          <div class="column is-4" v-for="portfolio in myPortfolio" :key="portfolio.node.title">
            <Portfolio :portfolio="portfolio.node" />
          </div>
        </div>
        <div v-else class="has-text-centered">
          Ooops! No items in my portfolio match your filters!
          <br />Let's build one together. Contact me :-)
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
// Components
import Hero from "~/components/Hero";
import Portfolio from "~/components/Portfolio";

export default {
  components: {
    Hero,
    Portfolio
  },
  metaInfo: {
    title: "My Portfolio"
  },
  data: function() {
    return {
      myPortfolio: [],
      tool: null,
      status: null
    };
  },
  watch: {
    tool: function(tool) {
      this.filter();
    },
    status: function(status) {
      console.log(status);
      this.filter();
    }
  },
  created() {
    this.filter();
  },
  methods: {
    filter() {
      // Check if page data loaded
      if (!this.$page) {
        setTimeout(this.filter(), 1000);
        return;
      }

      // Filter
      if (this.tool && this.status) {
        this.myPortfolio = this.$page.portfolio.edges.filter(portfolio => {
          return (
            portfolio.node.tools.find(tool => tool.id == this.tool) &&
            portfolio.node.status.id == this.status
          );
        });
      } else if (this.tool) {
        this.myPortfolio = this.$page.portfolio.edges.filter(portfolio => {
          return portfolio.node.tools.find(tool => tool.id == this.tool);
        });
      } else if (this.status) {
        this.myPortfolio = this.$page.portfolio.edges.filter(portfolio => {
          return portfolio.node.status.id == this.status;
        });
      } else {
        this.myPortfolio = this.$page.portfolio.edges;
      }
    }
  }
};
</script>

<page-query>
query{
  portfolio: allPortfolio(sortBy:"dateCreated"){
    totalCount
  	edges{
      node{
        id
        title
        url
        image(width: 350, height: 235, quality: 90)
        status{
          id
        }
        content
        dateCreated
        tools{
          id
        }
      }
    }
  }
  tools: allTool(sortBy:"id",order:ASC){
    edges{
    	node{
        id
      }
    }
  }
  statuses: allStatus(sortBy:"id",order:ASC){
    edges{
    	node{
        id
      }
    }
  }
}
</page-query>