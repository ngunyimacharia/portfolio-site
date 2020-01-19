<template>
  <Layout>
    <Hero title="Contact Me" subtitle="You're awesome, I'm delightful. What's on your mind?">
      <g-image src="~/assets/images/contact.png" width="150px" class="is-round-image" />
    </Hero>

    <section class="container has-margin-top-20">
      <form action method="POST" v-on:submit.prevent="submit">
        <b-field label="Name" labelPosition="inside">
          <b-input required v-model="message.name" placeholder="What shall we call you?"></b-input>
        </b-field>

        <b-field label="Email" labelPosition="inside">
          <b-input
            required
            type="email"
            v-model="message.email"
            placeholder="Everyone has one of these nowadays"
          ></b-input>
        </b-field>

        <b-field label="Subject" labelPosition="inside">
          <b-input
            required
            v-model="message.subject"
            placeholder="If you had only 5 words, what would you say?"
          ></b-input>
        </b-field>

        <b-field label="Message" labelPosition="inside">
          <b-input
            type="textarea"
            required
            v-model="message.message"
            maxlength="100"
            placeholder="Tell me more..."
          ></b-input>
        </b-field>
        <div>
          <input
            v-if="!loading"
            class="button is-success is-rounded is-pulled-right"
            type="submit"
            value="Send Message"
          />
          <button v-else class="button is-success is-rounded is-pulled-right is-loading">Loading</button>
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
      loading: false,
      message: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    submit() {
      this.loading = true;
      this.axios
        .post("https://getform.io/f/23ccbb3c-2f75-4941-a585-4b16df64c0b7", {
          name: this.message.name,
          email: this.message.email,
          subject: this.message.subject,
          message: this.message.message
        })

        .then(response => {
          this.loading = false;
          this.$buefy.toast.open({
            message: "I have received your message. Thank you!",
            type: "is-success"
          });
          this.message.name = "";
          this.message.email = "";
          this.message.subject = "";
          this.message.message = "";
        })

        .catch(error => {
          this.loading = false;
          this.$buefy.toast.open({
            message:
              "There was a problem sending your message. Please try again.",
            type: "is-danger"
          });
          console.log(error);
        });
    }
  }
};
</script>


<page-query>
query{
  countries: countries{
    code
    name
  }
}
</page-query>