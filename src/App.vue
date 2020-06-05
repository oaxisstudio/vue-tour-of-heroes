<template>
  <div id="app">
    <h1>{{title}}</h1>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/heroes">Heroes</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data: function() {
    return {
      title: "Tour of Heroes@Vue.js"
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2,
h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body,
input[type="text"],
button {
  color: #333;
  font-family: Cambria, Georgia;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<style scoped lang="scss">
nav {
  display: flex;
  align-content: flex-start;
  & a {
    display: block;
    padding: 5px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #f5f5f5;
    text-decoration: none;
    color: #333;
  }
}
</style>
