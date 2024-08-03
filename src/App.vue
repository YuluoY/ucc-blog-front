<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
const setRootFontSize = () => {
  const width = window.innerWidth
  const baseFontSize = width / 100 // 示例：每100px视口宽度1rem
  document.documentElement.style.fontSize = `${baseFontSize}px`
}
setRootFontSize()
window.addEventListener('resize', setRootFontSize)
</script>
