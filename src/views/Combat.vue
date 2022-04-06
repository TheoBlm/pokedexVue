<template>
  <div class="container">
    <PokemonCombat :Pokemon1="pokemon1" :Pokemon2="pokemon2" />
  </div>
</template>
<script>
import PokemonCombat from "../components/PokemonCombat.vue";

export default {
  data: () => {
    return {
      pokemon1: "https://pokeapi.co/api/v2/pokemon/1",
      pokemon2: "https://pokeapi.co/api/v2/pokemon/4",
    };
  },
  components: {
    PokemonCombat,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  // justify-content: center;

  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);
  //background: radial-gradient(#ffbf0b, #e20000);

  font-family: "Acme", arial;
  font-size: 1rem;
  font-weight: normal;
}

h1 {
  color: #efefef;
}
</style>
