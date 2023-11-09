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

    <div>
      <h3>Name: {{ computedName }}</h3>
      <input type="text" placeholder="First name" @input="setFirstName" />
      <input type="text" placeholder="Last name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, watch } from 'vue';
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
      age: 9,
    });

    const user2 = reactive({
      name: 'Marek',
      age: 59,
    });

    const firstName = ref('');
    const lastName = ref('');

    const computedName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    setTimeout(function () {
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

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    watch([uAge, uName], function(newValues, oldValues) {
      if (newValues[0] >= oldValues[0]) {
        alert('Vyssi vek');
      } else {
        alert('Nizsi vek');
      }
    });

    return {
      userName: uName,
      age: uAge,
      user: user,
      user2: user2,
      lastName,
      setNewAge,
      setFirstName,
      setLastName,
      computedName,
    };
  },
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
