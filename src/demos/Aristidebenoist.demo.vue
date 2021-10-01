<template>
  <Aristidebenoist :items="items" />
</template>

<script>
import { defineComponent, ref } from 'vue'

function randomIntIncluded(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor() {
  const colors = [
    'aliceblue',
    'thistle',
    'antiquewhite',
    'whitesmoke',
    'wheat',
    'slategrey',
  ]

  const r = randomIntIncluded(0, colors.length)
  return colors[r]
}

export default defineComponent({
  name: 'aristidebenoist-demo',
  setup() {
    const items = ref(
      Array.from(Array(12).keys()).map(int => ({
        key: 'test-' + int,
        src: require(`@/assets/test/${int + 1}.jpg`),
        backgroundColor: randomColor(),
      }))
    )

    return { items }
  },
})
</script>
