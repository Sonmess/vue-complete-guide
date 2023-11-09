<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <p>{{ age }}</p>

    <div>
      <h3>{{ user }}</h3>
      <p>{{ user.name }}</p>
      <p>{{ user.age }}</p>
    </div>

    <div>
      <h3>{{ user2 }}</h3>
      <p>{{ user2.name }}</p>
      <p>{{ user2.age }}</p>
    </div>

    <button @click="setNewAge">Set age</button>
  </section>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup() {
    const uName = ref('Matej');
    const uAge = ref(31);

    const user = ref({
      name: 'Keko',
      age: 9
    });

    const user2 = reactive({
      name: 'Marek',
      age: 59
    });

    setTimeout(function() {
      uName.value = 'Luna';
      uAge.value = 33;
      user.value.name = 'Breko';
      user.value.age = 5;
      user2.name = 'Chrenek';
      user2.age = 99;
    }, 2000);

    function setNewAge() {
      user.value.age = 33;
      user2.age = 50;
    }

    return { userName: uName, age: uAge, user: user, user2: user2, setNewAge };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>