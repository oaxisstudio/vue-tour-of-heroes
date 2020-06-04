<template>
  <div class="heroes">
    <h3>{{hero.name.toUpperCase()}}</h3>
    <div>
      <span>id:</span>
      {{hero.id}}
    </div>
    <div>
      <span>name:</span>
      <input type="text" placeholder="name" v-model="hero.name" />
    </div>
  </div>
</template>

<script>
import store from "../store/store";
// import router from "../router/index";

export default {
  name: "Heroes",
  data: function() {
    return {
      hero: undefined,
      heroId: null
    };
  },
  created: function() {
    this.heroId = this.$route.params.id;
    this.getHero();
  },
  methods: {
    getHero: function() {
      this.hero = store.getHero(this.$route.params.id);
    }
  }
};
</script>

<style>
</style>