<template>
  <section>
    <the-header :headline="headline"></the-header>
    <the-resources></the-resources>
  </section>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/resources/TheResources.vue';

export default {
  components: { TheResources, TheHeader },
  data() {
    return {
      headline: 'My learning project',
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
