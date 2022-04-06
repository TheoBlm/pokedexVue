<template>
  <div class="container">
    <PokemonSearch v-on:searchPokemonEmit="setPokemonSearch" />
    <PokemonDetail
      v-if="isDetailOpen"
      v-on:closeDetail="closePokemonDetail"
      :pokemonUrl="this.pokemonUrl"
    />
    <PokemonList
      v-on:showPokemonDetailEmit="showPokemonDetail"
      :pokemonSearch="this.pokemonSearched"
    />
  </div>
</template>

<script>
import PokemonDetail from "../components/PokemonDetail.vue";
import PokemonList from "../components/PokemonList.vue";
import PokemonSearch from "../components/PokemonSearch.vue";

export default {
  data: () => {
    return {
      isDetailOpen: false,
      pokemonSearched: "",
    };
  },
  methods: {
    showPokemonDetail: function (pokemon) {
      this.pokemonUrl = pokemon.url;
      this.isDetailOpen = true;
    },
    closePokemonDetail: function () {
      this.isDetailOpen = false;
    },
    setPokemonSearch: function (pokemonInput) {
      this.pokemonSearched = pokemonInput;
    },
  },
  components: {
    PokemonDetail,
    PokemonList,
    PokemonSearch,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
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