<template>
  <timeline-item>
    <g-image
      v-if="education.image"
      :src="education.image"
      :alt="education.title"
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
        <div class="card-header-title has-text-weight-bolder is-block-mobile">
          <p class="is-block-mobile has-text-centered-mobile">{{education.title}}</p>
          <p class="is-hidden-mobile">&nbsp;-&nbsp;</p>
          <a
            :href="education.url"
            target="_blank"
            class="has-text-link is-block-mobile has-text-centered-mobile"
          >{{ education.institution }}</a>
        </div>
      </header>
      <div class="card-content">
        <div class="content is-size-7">
          <p>
            <span class="has-text-weight-bold has-text-info">{{ education.dateCompleted }}</span>
          </p>
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
    education: {
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
      return moment(this.education.dateStarted).format("LL");
    },

    dateStopped() {
      return this.education.dateStopped
        ? moment(this.education.dateStopped).format("LL")
        : "Present";
    }
  }
};
</script>