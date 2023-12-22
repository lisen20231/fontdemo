<template>
  <span v-if="icon" class="svg-icon" ref="svgContainer" />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const icon = ref('')

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    const svgContainer = ref(null)

    onMounted(() => {
      import(`@/assets/svg/${this.name}.svg`)
        .then(content => {
          icon.value = content.default || content
          if (svgContainer.value) {
            svgContainer.value.innerHTML = icon.value
          }
        })
        .catch(() => {
          console.error(`SVG icon "${this.name}" not found`)
        })
    })

    return { svgContainer }
  }
}
</script>

<style scoped>
/* 添加组件的样式 */
.svg-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
