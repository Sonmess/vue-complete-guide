<template>
    <button @click="inc">Add 1</button>
    <button @click="increaseMore({value: 10})">Add More</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addONe() {
        //     this.$store.dispatch('increment');
        // }

        // ...mapActions(['increment', 'increase'])
        ...mapActions({
            inc: 'numbers/increment',
            increaseMore: 'numbers/increase'
        })
    }
}
</script>