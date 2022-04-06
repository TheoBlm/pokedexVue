<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Pokedex</router-link> |
      <router-link to="/combat">Combat</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: radial-gradient(#ffbf0b, #e20000);
}

#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
