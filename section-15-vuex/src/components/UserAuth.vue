<template>
    <button v-if="!isAuth" @click="login">Login</button>
    <button v-else @click="logOut">Logout</button>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.dispatch('login');
        },

        logOut() {
            this.$store.dispatch('logout');
        }
    },

    computed: {
        isAuth() {
            return this.$store.getters.isLoggedIn;
        }
    }
}
</script>