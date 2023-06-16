const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      showTasks: true,
    };
  },
  computed: {
    text() {
      return this.showTasks ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
  },
});

app.mount("#assignment");
