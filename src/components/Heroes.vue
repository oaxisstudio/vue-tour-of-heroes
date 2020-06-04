<template>
  <div class="heroes">
    <h3>{{hero.name}}</h3>
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
export default {
  name: "Heroes",
  data: function() {
    return {
      hero: {
        id: 1,
        name: "Windstorm"
      }
    };
  }
};
</script>

<style>
</style>