<template>
  <div id="app">
    <div>
      <AristidebenoistDemo />
    </div>
    <WindowSizesProvider>
      <DeviceProvider>
        <FrontSpringDemo />
        <TwoFacesDemo />
      </DeviceProvider>
    </WindowSizesProvider>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import FrontSpringDemo from './demos/FrontSpring.demo.vue'
import TwoFacesDemo from './demos/TwoFaces.demo.vue'
import AristidebenoistDemo from './demos/Aristidebenoist.demo.vue'

export default defineComponent({
  name: 'app',
  components: {
    FrontSpringDemo,
    TwoFacesDemo,
    AristidebenoistDemo,
  },
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
</style>
