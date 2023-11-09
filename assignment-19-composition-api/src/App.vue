<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="showGoal">{{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
  <h3 v-if="myGoal.visibility">{{ myGoal.goal }}</h3>
  <button @click="toggleSecondGoal">Toggle second goal</button>
  <h3 v-if="anotherGoal.visibility">{{ anotherGoal.goal }}</h3>
  <button @click="toggleAnotherGoal">Toggle another goal</button>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    const courseGoal = 'Finish the course';
    const showGoal = ref(true);

    const myGoal = ref({goal: 'Second goal', visibility: true});
    const anotherGoal = reactive({goal: 'Another goal', visibility: true});
    console.log(anotherGoal);

    function toggleGoal() {
      showGoal.value = !showGoal.value;
    }

    function toggleSecondGoal() {
      console.log(myGoal);
      myGoal.value.visibility = !myGoal.value.visibility;
    }

    function toggleAnotherGoal() {
      console.log(anotherGoal);
      anotherGoal.visibility = !anotherGoal.visibility;
    }

    return { courseGoal: courseGoal, showGoal: showGoal, myGoal: myGoal, anotherGoal: anotherGoal, toggleGoal, toggleSecondGoal, toggleAnotherGoal };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
