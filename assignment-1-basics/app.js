const app = Vue.createApp({
  data() {
    return {
      message: "This is alert message, do not be afraid.",
      userText: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.message);
    },

    userInput(e) {
      this.userText = e.currentTarget.value;
    },
  },
});

app.mount('#assignment');