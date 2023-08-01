<template>
  <ul>
    <li :class="activeClass('poor')">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="activeClass('average')">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="activeClass('great')">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
//   data() {
//     return {
//       activeOption: this.modelValue,
//     };
//   },
  computed: {
    activeOption() {
        return this.modelValue;
    }
  },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
    activeClass(option) {
      return this.activeOption === option ? 'active' : '';
    },
  },
};
</script>

<style scoped>
.active {
  border-color: darkviolet;
}
.active button {
  background-color: darkviolet;
  color: #fff;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

ul li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul li button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
