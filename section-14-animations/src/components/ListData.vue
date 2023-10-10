<template>
<transition-group tag="ul" name="list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
    {{ user }}
    </li>
</transition-group>

  <div>
    <input type="text" v-model="name" />
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Matej', 'Julie', 'Angela', 'Michael'],
      name: '',
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.name);
    },

    removeUser(user) {
      this.users = this.users.filter((usr) => usr != user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.list-enter-active {
    transition: all 1s ease-out;
}

.list-enter-to, .list-leave-enter {
    opacity: 1;
    transform: translateX(0);
}

.list-leave-active {
    transition: all 1s ease-in;
    position: absolute;
}

.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list-move {
    transition: transform 0.5s ease;
}
</style>
