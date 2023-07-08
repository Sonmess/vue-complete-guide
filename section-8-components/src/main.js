import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import FriendAdd from './components/FriendAdd.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('friend-add', FriendAdd);

app.mount('#app');
