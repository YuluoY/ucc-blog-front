<template>
  <section class="side-right">
    <div class="side-right__item">
      <u-card>
        asd
      </u-card>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SideRight'
})
</script>

<style scoped lang="scss">
.side-right {
  width: 100%;
  height: 100%;
  padding-left: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 6;
}
</style>
