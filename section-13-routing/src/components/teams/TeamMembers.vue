<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users', 'teams'],
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      members: [],
      querySort: '',
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find((team) => {
        return team.id === teamId;
      });
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const user = this.users.find((user) => user.id === member);
        selectedMembers.push(user);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
      if (this.querySort === 'asc') {
        this.members.reverse();
      }
    },
  },
  created() {
    this.loadTeamMembers(this.teamId);
    this.querySort = this.$route.query.sort;
    console.log(this.querySort);
  },
  watch: {
    // $route(newRoute) {
    //   this.loadTeamMembers(newRoute);
    // },
    teamId(newValue) {
      this.loadTeamMembers(newValue);
    }
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
