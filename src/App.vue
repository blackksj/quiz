<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html, body {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  height: 100%;
}

.click {cursor: pointer;}
.relative {position: relative}
.mt {margin-top: 1rem;}
</style>