<template>
  <timeline-item>
    <g-image
      v-if="experience.image"
      :src="experience.image"
      :alt="experience.title"
      width="350px"
      fit="contain"
      slot="others"
    />
    <!-- <div
      class="append has-background-light has-margin-10 has-padding-20 has-text-grey-darker is-size-7"
    >
    </div>-->
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-weight-bolder">
          {{experience.title}}
          -&nbsp;
          <a
            :href="experience.url"
            target="_blank"
            class="has-text-link"
          >{{experience.company}}</a>
        </p>
      </header>
      <div class="card-content">
        <div class="content is-small">
          <p>
            <span class="has-text-weight-bold has-text-info">{{ dateStarted }} - {{dateStopped}}</span>
          </p>
          <div v-html="experience.content" />
        </div>
      </div>
    </div>
  </timeline-item>
</template>

<script>
// Packages
import * as moment from "moment";

// Components
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";

export default {
  props: {
    experience: {
      required: true,
      type: Object
    }
  },
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  computed: {
    dateStarted() {
      return moment(this.experience.dateStarted).format("LL");
    },

    dateStopped() {
      return this.experience.dateStopped
        ? moment(this.experience.dateStopped).format("LL")
        : "Present";
    }
  }
};
</script>