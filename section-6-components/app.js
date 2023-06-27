const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 456 789",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654 321",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-list-item", {
  template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ showDetailsText }}</button>
        <ul v-if="showDetails">
            <li><strong>Phone: </strong>{{ friend.phone }}</li>
            <li><strong>Email: </strong>{{ friend.email }}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      showDetails: false,
    };
  },
  props: {
    friend: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
  computed: {
    showDetailsText() {
      return this.showDetails ? "Hide Details" : "Show Details";
    },
  },
});

app.mount("#app");
