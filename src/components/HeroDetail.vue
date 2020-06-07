<template>
  <div>
    <div v-if="hero">
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
    <div v-else>
      <span>Please Select your hero</span>
    </div>
    <button @click="goBack()" class="back">go back</button>
  </div>
</template>

<script>
import router from "../router/index";
import store from "../store/store";

export default {
  name: "HeroDetail",
  data: function() {
    return {
      hero: undefined
    };
  },
  created: function() {
    this.getHero();
  },
  methods: {
    getHero: function() {
      this.hero = store.getHero(this.$route.params.id);
    },
    goBack: function() {
      router.go(-1);
    }
  }
};
</script>

<style scoped>
label {
  display: inline-block;
  width: 3em;
  margin: 0.5em 0;
  color: #607d8b;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: 0.4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
.save {
  margin-left: 10px;
}
</style>