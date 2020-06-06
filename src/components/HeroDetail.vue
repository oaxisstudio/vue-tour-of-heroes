<template>
  <div v-if="showHero">
    <h3>{{showHero.name.toUpperCase()}}</h3>
    <div>
      <span>id:</span>
      {{showHero.id}}
    </div>
    <div>
      <span>name:</span>
      <input type="text" placeholder="name" v-model="showHero.name" />
    </div>
  </div>
  <div v-else>
    <span>Please Select your hero</span>
  </div>
</template>

<script>
export default {
  name: "HeroesDetail",
  props: {
    showHero: Object
  },
  method: {}
};
</script>

<style scoped>
</style>