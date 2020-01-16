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
    <div class="content has-padding-10 has-text-white">
      <p>
        {{education.title}}
        -&nbsp;
        {{education.institution}}
      </p>
      <p class="is-size-7">{{ education.dateCompleted }}</p>
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