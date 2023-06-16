const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "Bohac",
      anotherName: ''
    };
  },
  watch: {
    anotherName(newValue, oldValue) {
      if (newValue === 'Matej') {
        alert('Vitaj ' + newValue);
      }      
    }
  },
  computed: {
    fullName() {
      console.log('Running again ...');
      if (this.name === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    addCounter(number = 1) {
      this.counter = this.counter + number;
    },
    substractCounter(number = 1) {
      this.counter = this.counter - number;
    },
    setName(e) {
      this.name = e.currentTarget.value;
    },
    submitForm() {
      alert("Submitted");
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
