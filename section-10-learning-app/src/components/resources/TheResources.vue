<template>
  <base-card>
    <base-button
      v-for="btn of tabs"
      :key="btn.id"
      @click="setSelectedTab(btn.component)"
      :mode="buttonMode(btn)"
      >{{ btn.title }}</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      tabs: [
        {
          id: 'stored-resources',
          component: 'stored-resources',
          title: 'Stored resources',
        },
        {
          id: 'add-resource',
          component: 'add-resource',
          title: 'Add resource',
        },
      ],
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google properly ...',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    buttonMode(btn) {
      return this.selectedTab === btn.component ? '' : 'flat';
    },
    addResource(title, description, link) {
      const newResource = {
        title: title,
        description: description,
        link: link,
        id: new Date().toISOString,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
        const resIndex = this.storedResources.findIndex((res) => {
            return res.id === resId;
        });
        this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>
