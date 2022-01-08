<template>
  <div class="home">
    <github-user-list />
  </div>
</template>

<script lang="ts">
import GithubUserList from "@/components/exercise/github-user-list.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {
    GithubUserList,
  },
});
</script>
