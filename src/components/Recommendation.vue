<template>
  <g-link :to="recommendation.path">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by5">
          <g-image
            :src="recommendation.thumbnail"
            :alt="`${recommendation.title}'s hero image`"
            width="325px"
            height="500px"
            fit="contain"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media has-margin-bottom-10">
          <div class="media-content">
            <span class="title is-5">{{recommendation.title}}</span>
          </div>
        </div>

        <div class="content is-small has-margin-1" v-html="recommendation.excerpt" />
        <b-taglist>
          <b-tag>{{recommendation.type}}</b-tag>
        </b-taglist>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  name: "Recommendation",
  props: {
    recommendation: {
      required: true,
      type: Object
    }
  }
};
</script>