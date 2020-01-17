<template>
  <timeline-item>
    <g-image
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
        <p class="card-header-title has-text-weight-bolder">{{education.title}}</p>
      </header>
      <div class="card-content">
        <div class="content is-small">
          <p>
            Institution:
            <span class="has-text-weight-bold">{{ education.institution }}</span>
          </p>
          <p>
            Date Completed:
            <span
              class="has-text-weight-bold has-text-info"
            >{{ education.dateCompleted }}</span>
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