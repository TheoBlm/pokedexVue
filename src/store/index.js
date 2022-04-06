import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    battle: [],
  },
  mutations: {
    setBattle(state, newBattle) {
      state.battle = newBattle;
    },
  },
  actions: {
    setBattle(context, newBattle) {
      context.commit("setBattle", newBattle);
    },
  },
  getters: {
    getBattle(state) {
      return state.battle;
    },
  },
});
