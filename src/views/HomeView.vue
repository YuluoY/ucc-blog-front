<template>
  <div class="home">
    <u-layout>
      <u-region region="center"> home </u-region>
      <u-region region="bottom" class="home-bottom"> home bottom </u-region>
    </u-layout>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HomeView'
})
</script>

<style scoped lang="scss">
.home-bottom {
}
</style>
