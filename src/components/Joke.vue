<template>
  <div class="card">
    <div class="card-content">
      <div class="media has-margin-bottom-10">
        <div class="media-content has-text-centered">
          <span class="title is-7">{{joke.joke}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Joke",
  props: {
    joke: {
      required: true,
      type: Object
    }
  }
};
</script>