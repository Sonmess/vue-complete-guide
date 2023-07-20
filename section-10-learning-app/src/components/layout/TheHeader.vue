<template>
  <header>
    <h1>{{ headline }}</h1>
  </header>
</template>

<script>
export default {
  props: ['headline'],
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #41b883;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
  text-transform: uppercase;
}
</style>
