const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    addCounter(number = 1) {
      this.counter = this.counter + number;
    },
    substractCounter(number = 1) {
      this.counter = this.counter - number;
    },
    setName(e, lastName) {
      this.name = e.currentTarget.value + " " + lastName;
    },
    submitForm() {
      alert("Submitted");
    },
  },
});

app.mount("#events");
