<template>
    <h3>{{ normalizedCounter }}</h3>
    <p>We do more ...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        // counter() {
        //     return this.$store.getters.normalizedCounter;
        // },

        ...mapGetters('numbers', ['normalizedCounter', 'finalCounter'])
    }
}
</script>