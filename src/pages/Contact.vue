<template>
  <Layout>
    <div class="title-bar columns is-vcentered is-gapless has-padding-top-20">
      <div class="column is-2 has-text-centered">
        <g-image src="~/assets/images/contact.png" width="150px" class="is-round-image" />
      </div>
      <div class="column has-margin-left-20">
        <div class="description has-padding-10 has-padding-left-30 has-padding-bottom-30">
          <h1
            class="has-text-weight-bold is-uppercase is-size-6 is-pulled-left has-margin-0"
          >Contact Me</h1>
          <p
            class="is-size-7 is-pulled-right is-italic"
          >You're awesome, I'm delightful. What's on your mind?</p>
        </div>
      </div>
    </div>

    <section class="container has-margin-top-20">
      <form action method="POST">
        <b-field label="Name" labelPosition="inside">
          <b-input required v-model="name" placeholder="What shall we call you?"></b-input>
        </b-field>

        <b-field label="Email" labelPosition="inside">
          <b-input required v-model="email" placeholder="Everyone has one of these nowadays"></b-input>
        </b-field>

        <b-field label="Subject" labelPosition="inside">
          <b-input
            required
            v-model="subject"
            placeholder="If you had only 5 words, what would you say?"
          ></b-input>
        </b-field>

        <b-field label="Message" labelPosition="inside">
          <b-input
            type="textarea"
            required
            v-model="message"
            minlength="10"
            maxlength="100"
            placeholder="Tell me more..."
          ></b-input>
        </b-field>
        <b-button @click="submit">Send Message</b-button>
      </form>
    </section>
  </Layout>
</template>

<style>
.title-bar .description {
  background: #091a28;
  border-radius: 100px 0 0 100px;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Contact Me"
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    submit() {
      this.axios
        .post("https://getform.io/f/23ccbb3c-2f75-4941-a585-4b16df64c0b7", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        })

        .then(function(response) {
          console.log(response);
        })

        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
