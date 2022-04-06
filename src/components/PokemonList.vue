<template>
  <div class="list">
    <article
      v-bind:key="pokemon.id"
      v-for="pokemon in pokemonsFiltered"
      v-on:click="showPokemonDetail(pokemon)"
    >
      <h3>
        {{ pokemon.name }}
      </h3>
      <img :src="url_image + '/' + pokemon.name + '.png'" />
    </article>
  </div>
</template>

<script>
import axios from "axios";
import lodash from "lodash";
import config from "../config/config";
export default {
  data: () => {
    return {
      pokemons: [],
      url_image: config.IMG_URL,
    };
  },
  props: ["pokemonSearch"],
  methods: {
    showPokemonDetail: function (pokemon) {
      this.$emit("showPokemonDetailEmit", pokemon);
    },
  },
  computed: {
    pokemonsFiltered() {
      if (this.pokemonSearch == "") {
        return this.pokemons;
      } else {
        let search = this.pokemonSearch;
        return lodash.filter(this.pokemons, function (pokemon) {
          return lodash.includes(pokemon.name, search);
        });
      }
    },
  },
  beforeMount() {
    axios
      .get(config.API_URL + "/pokemon/")
      .then((response) => {
        console.log(response);
        this.pokemons = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  width: 100%;
  max-width: 510px;
}
article {
  height: 150px;
  background-color: #efefef;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
h3 {
  margin: 0;
}
#scroll-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 2rem;
  color: #efefef;
}

img {
  width: 96px;
  height: 96px;
}
</style>

