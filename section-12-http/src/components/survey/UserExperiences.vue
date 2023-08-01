<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadResults">Load Submitted Experiences</base-button>
      </div>
      <ul v-if="!isLoading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-if="isLoading">Loading ...</p>
      <p v-if="!isLoading && results.length === 0">No data found.</p>
      <p v-if="!isLoading && error.length > 0">{{ error }}</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: '',
    }
  },
  methods: {
    loadResults() {
      this.isLoading = true;
      this.error = '';
      fetch('https://vue-http-demo-8fd06-default-rtdb.europe-west1.firebasedatabase.app/surveys.json', {
        method: 'GET'
      }).then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        console.log(data);
        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating
          });
        }
        this.results = results;
        this.isLoading = false;
      }).catch((error) => {
        console.log(error);
        this.error = 'Failed to fetch data';
        this.isLoading = false;        
      });
    }
  },
  mounted() {
    this.loadResults();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>