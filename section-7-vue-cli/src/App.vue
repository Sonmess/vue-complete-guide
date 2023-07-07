<template>
    <section class="container">
        <h2>My friends</h2>
        <ul>
            <FriendContact v-for="item of friends" :key="item.id" :friend="item" />
        </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';

export default {
    components: {FriendContact},
    data() {
        return {
            friends: [
                {
                    id: 'matej',
                    name: 'Matej Bohac',
                    phone: '0123 456 78 90',
                    email: 'matej@localhost.com'
                },
                {
                    id: 'luca',
                    name: 'Lucia Sliacka',
                    phone: '0123 456 78 90',
                    email: 'lucia@localhost.com'

                }
            ]
        }
    }
}
</script>