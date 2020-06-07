<template>
  <div class="heroes">
    <div class="list">
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li v-for="hero in heroes" :key="hero.id">
          <router-link :to="{name: 'HeroDetail', params: {id: hero.id}}">
            <span class="badge">{{hero.id}}</span>
            {{hero.name}}
          </router-link>
        </li>
      </ul>
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
      heroes: undefined
    };
  },
  mounted: function() {
    this.heroes = store.getHeroes();
  },
  methods: {}
};
</script>

<style scoped>
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #eee;
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607d8b;
  background-color: #ddd;
  left: 0.1em;
}
.heroes li.selected {
  background-color: #cfd8dc;
  color: white;
}
.heroes li.selected:hover {
  background-color: #bbd8dc;
  color: white;
}
.heroes a {
  color: #888;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color: #607d8b;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607d8b;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  bottom: 4px;
  background-color: gray !important;
  color: white;
}
.link-group {
  display: flex;
}
.link {
  width: 90%;
}
</style>