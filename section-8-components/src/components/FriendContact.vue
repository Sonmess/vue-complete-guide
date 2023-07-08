<template>
  <li>
    <h2>{{ name }} {{ favoriteText }}</h2>
    <button @click="toggleDetails">{{ buttonText }} Details</button>
    <button @click="toggleFavorite">{{ buttonFavoriteText }}</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete me</button>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true,
      validator: function(value) {
        return value.length > 0;
      }
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default : false
    },
    identifier: {
      type: String,
      required: true
    }
  },
  //emits: ['toggle-favorite'],
  emits: {
    'toggle-favorite': function(id) {
      if (id) {
        return true;
      }
      console.warn('Id is missing')
      return false;
    },
    'delete-friend': function(id) {
      if (id) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      detailsAreVisible: false
    };
  },
  computed: {
    buttonText() {
      return this.detailsAreVisible ? 'Hide' : 'Show';
    },
    favoriteText() {
      return this.isFavorite ? '(Favorite)' : '';
    },
    buttonFavoriteText() {
      return !this.isFavorite ? 'Favorite' : 'Unfavorite';
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.identifier);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.identifier);
    }
  }
};
</script>