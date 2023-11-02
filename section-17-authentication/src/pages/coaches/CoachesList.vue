<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>

    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>

    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >Refresh</base-button>

          <base-button v-if="!isLoggedIn" link to="/auth?redirect=register">Log in</base-button>
          <base-button v-if="!isCoach && !isLoading && isLoggedIn" link to="/register"
            >Register as coach
          </base-button>
        </div>

        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>

        <div v-if="hasCoaches && !isLoading">
          <h2>List of coaches</h2>
          <ul>
            <coach-item
              v-for="item in filteredCoaches"
              :key="item.id"
              :first-name="item.firstName"
              :last-name="item.lastName"
              :id="item.id"
              :rate="item.hourlyRate"
              :areas="item.areas"
            ></coach-item>
          </ul>
        </div>
        <h3 v-else>No coaches found</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        backend: true,
        frontend: true,
        career: true,
      },
      isLoading: false,
      error: null,
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
      });
    },

    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },

    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },

    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },

    async loadCoaches(forceRefresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: forceRefresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    },

    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
