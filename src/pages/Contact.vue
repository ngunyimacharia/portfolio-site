<template>
  <Layout>
    <Hero title="Contact Me" subtitle="You're awesome, I'm delightful. What's on your mind?">
      <g-image src="~/assets/images/contact.png" width="150px" class="is-round-image" />
    </Hero>

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
            maxlength="100"
            placeholder="Tell me more..."
          ></b-input>
        </b-field>
        <div>
          <b-button class="is-success is-rounded is-pulled-right" @click="submit">Send Message</b-button>
        </div>
      </form>
      <br />
    </section>
  </Layout>
</template>

<script>
// Components
import Hero from "~/components/Hero";

export default {
  metaInfo: {
    title: "Contact Me"
  },
  components: {
    Hero
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

        .then(response => {
          this.$buefy.toast.open({
            message: "I have received your message. Thank you!",
            type: "is-success"
          });
          this.name = "";
          this.email = "";
          this.subject = "";
          this.message = "";
        })

        .catch(error => {
          this.$buefy.toast.open({
            message:
              "There was a problem sending your message. Please try again.",
            type: "is-success"
          });
          console.log(error);
        });
    }
  }
};
</script>
