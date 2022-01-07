<template>
  <li class="gh-list-item">
    <div class="gh-list-item__actions">
      <button role="duplicate">Duplicate</button>
      <button role="remove">Remove</button>
    </div>
    <figure class="gh-list-item__profpic">
      <div class="gh-list-item__profpic__inner">
        <img :src="data.avatar_url" :alt="data.name" />
      </div>
    </figure>
    <div>
      <header>
        <h3 style="margin: 0">{{ data.username }}</h3>
        <p style="margin: 0; font-size: 0.8rem">{{ data.location }}</p>
      </header>
      <section class="gh-list-item__section-info">
        <p class="gh-list-item__section-info__item">
          <span>Public Repos</span>
          <span>{{ data.public_repos }}</span>
        </p>
        <p class="gh-list-item__section-info__item">
          <span>Followers</span>
          <span>{{ data.followers }}</span>
        </p>
        <p class="gh-list-item__section-info__item">
          <span>Following</span>
          <span>{{ data.following }}</span>
        </p>
      </section>
      <section class="gh-list-item__section-info">
        <p class="gh-list-item__section-info__item">
          <span>Registered at</span>
          <span>{{ data.created_at }}</span>
        </p>
      </section>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      data: undefined,
      url: "",
    };
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
};
</script>

<style lang="scss" scoped>
.gh-list-item {
  position: relative;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  margin: 2rem 0;
  padding: 2rem 1rem 1rem 1rem;
  border: 1px solid #bdbdbd;
  border-radius: 8px;

  &__profpic {
    margin: 0;
    max-width: 128px;
    border: inherit;

    &__inner {
      position: relative;
      padding-top: 100%;
    }

    > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
  }

  &__section-info {
    display: flex;
    align-items: baseline;
    flex-wrap: nowrap;
    gap: 1.5rem;
  }

  &__section-info__item {
    display: flex;
    align-items: center;
    gap: 0.25em;
    font-size: 0.75rem;

    > span:nth-child(1) {
      opacity: 0.5;
    }
  }

  &__actions {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 0.5rem;

    > button[role="duplicate"] {
      background-color: green;
      color: white;
    }

    > button[role="remove"] {
      background-color: red;
      color: white;
    }
  }
}
</style>
