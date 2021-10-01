<template>
  <div id="app">
    <WindowSizesProvider>
      <DeviceProvider>
        <span>
          <router-link to="/">Aristidebenoist</router-link>
          <router-link to="/frontsprint">FrontSping</router-link>
          <router-link to="/twofaces">TwoFaces</router-link>
        </span>
        <router-view></router-view>
      </DeviceProvider>
    </WindowSizesProvider>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app',
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100vw;
  height: 100%;
}

span {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
}

span a {
  text-decoration: none;
  font-weight: 900;
}
</style>
