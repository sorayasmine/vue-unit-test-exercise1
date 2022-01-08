<template>
  <div style="text-align: left; width: 640px">
    <header style="display: flex; justify-content: space-between">
      <form class="form" @submit.prevent="fetchData">
        <label for="username">
          <input v-model="username" id="username" type="text" role="inputUser" />
        </label>
        <button type="submit" role="buttonAdd">Add</button>
      </form>
      <button type="button" @click="clearALL">Clear All</button>
    </header>
    <div>
      <GithubUserListItem v-for="uname in data" :key="uname.id" :uname="uname" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import GithubUserListItem from "@/components/exercise/github-user-list-item.vue";

export default Vue.extend({
  data() {
    return {
      username: "",
      data: [],
      url: "",
    };
  },
  components: {
    GithubUserListItem,
  },
  methods: {
    composeUrl(username) {
      return `https://api.github.com/users/${username}`;
    },

    async fetchData() {
      this.url = this.composeUrl(this.username);
      const response = await fetch(this.url);
      this.data = await response.json();
    },
  },
});
</script>
