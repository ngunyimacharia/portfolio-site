<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by2">
        <g-image
          v-if="portfolio.image"
          :src="portfolio.image"
          :alt="`${portfolio.title}'s hero image`"
          width="350px"
          fit="contain"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media has-margin-bottom-10">
        <div class="media-content">
          <a :href="portfolio.url" target="_blank">
            <span class="title is-5">
              {{portfolio.title}}
              <b-icon pack="fas" icon="link" size="is-small" />
            </span>
          </a>
          <div>
            <p
              v-if="portfolio.status.id == 'online' "
              class="is-capitalized has-margin-top-10 is-size-7 has-text-weight-bold is-pulled-left"
            >
              <b-icon pack="fas" icon="signal" size="is-small" class="has-text-success" />
              {{portfolio.status.id}}
            </p>
            <p
              v-else
              class="is-capitalized has-margin-top-10 is-size-7 has-text-weight-bold is-pulled-left"
            >
              <b-icon pack="fas" icon="plug" size="is-small" class="has-text-danger" />
              {{portfolio.status.id}}
            </p>
            <p class="is-pulled-right has-margin-top-10 has-text-info is-size-7">
              <b-icon pack="fas" icon="calendar" size="is-small" class="has-text-info" />
              {{portfolio.dateCreated}}
            </p>
          </div>
        </div>
      </div>

      <div class="content is-small has-margin-1" v-html="portfolio.content" />
      <b-taglist>
        <b-tag v-for="tool in portfolio.tools" :key="tool.id">{{tool.id}}</b-tag>
      </b-taglist>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    portfolio: {
      required: true,
      type: Object
    }
  }
};
</script>