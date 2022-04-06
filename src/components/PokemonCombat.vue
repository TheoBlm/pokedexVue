<template>
  <div>
    <div class="pokemon1">
      <h1>
        {{ pokemon1.name }}
        <img :src="url_image + '/' + pokemon1.name + '.png'" />
      </h1>
      <h2>
        {{ pokemon1.stats[0].base_stat }}
        /
        {{ pokemon1.stats[0].base_stat }}
        {{ pokemon1.stats[0].stat.name }}
      </h2>
      <div class="ability" v-bind:key="n" v-for="n in 4">
        {{ pokemon1.moves[n].move.name }}
        <!-- {{ getPokemon1Moves(n) }} -->
        <!-- {{ moves1[n].accuracy }} -->
      </div>
    </div>
    <div class="pokemon2">
      <h1>
        {{ pokemon2.name }}
        <img :src="url_image + '/' + pokemon2.name + '.png'" />
      </h1>
      <h2>
        {{ pokemon2.stats[0].base_stat }}
        /
        {{ pokemon2.stats[0].base_stat }}
        {{ pokemon2.stats[0].stat.name }}
      </h2>
      <div class="ability" v-bind:key="n" v-for="n in 4">
        {{ pokemon2.moves[n].move.name }}
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import config from "../config/config";
export default {
  data: () => {
    return {
      pokemon1: "",
      pokemon2: "",
      moves1: [],
      url_image: config.IMG_URL,
    };
  },
  props: ["Pokemon1", "Pokemon2"],
  methods: {
    getPokemon1Moves(n) {
      axios
        .get(this.pokemon1.moves[n].move.url)
        .then((response) => {
          console.log(response);
          this.moves1.push(response.data);
          console.log("move" + n + this.moves1[n]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeMount() {
    axios
      .get(this["Pokemon1"])
      .then((response) => {
        console.log(response);
        this.pokemon1 = response.data;
        console.log("pokemon 1" + this.pokemon1);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(this["Pokemon2"])
      .then((response) => {
        console.log(response);
        this.pokemon2 = response.data;
        console.log("pokemon 2" + this.pokemon2);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang="scss" scoped>
h1 {
  color: rgb(255, 230, 0);
}

.pokemon1 {
  margin-left: 25%;
  float: left;
  text-transform: capitalize;
}
.pokemon2 {
  margin-right: 25%;
  float: right;
  text-transform: capitalize;
}
.ability {
  color: rgb(23, 119, 10);
  margin: 0 10px 10px 0;
  border-radius: 20px;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: capitalize;
  word-wrap: none;
  word-break: keep-all;
  background-color: #ffffff;
  border: 3px solid;
}
</style>