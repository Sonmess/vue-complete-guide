<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div class="badges">
      <base-badge v-for="area in areas" :key="area" :type="area" :text="area"></base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="contactUrl">Contact</base-button>
      <base-button link :to="detailUrl">View details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['firstName', 'lastName', 'rate', 'areas', 'id'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    contactUrl() {
      return '/coaches/' + this.id + '/contact';
    },
    detailUrl() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
.badges {
    margin: 10px 0 20px;
    display: flex;
    justify-content: center;
}
</style>
