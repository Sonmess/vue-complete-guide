<template>
  <ul>
    <resource-item
      v-for="resource of resources"
      :key="resource.id"
      :resource="resource"
    ></resource-item>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
  components: { ResourceItem },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
