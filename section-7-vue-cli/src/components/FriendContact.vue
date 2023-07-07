<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <div class="details" v-if="detailsVisible">
            <div>{{ friend.phone }}</div>
            <div>{{ friend.email }}</div>
        </div>        
        <button @click="toggleDetails">Show / Hide</button>
    </li>
</template>

<script>
export default {
    props: {
        friend: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            detailsVisible: true
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
}
</script>