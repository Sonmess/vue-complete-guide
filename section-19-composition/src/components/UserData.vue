<template>
  <section>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <h4>{{ result }}</h4>
  </section>
</template>

<script>
import {
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
onUpdated
} from 'vue';
export default {
  props: ['userName', 'age'],
  setup(props) {
    const result = computed(function () {
      return props.userName + ': ' + props.age;
    });

    onBeforeMount(function() {
      console.log('on before mount');
    });

    onMounted(function(){
      console.log('on mounted');
    });

    onBeforeUpdate(function() {
      console.log('on before update');
    });

    onUpdated(function(){
      console.log('on updated');
    });

    return { result };
  },
};
</script>
