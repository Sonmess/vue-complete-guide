const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue.js",
      courseGoals: [
        'Finish the course and learn Vue.js',
        'Master the course and learn Vue.js'
      ],
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return this.courseGoals[0];
        } else {
            return this.courseGoals[1];
        }
    }
  }
});
app.mount("#user-goal");
