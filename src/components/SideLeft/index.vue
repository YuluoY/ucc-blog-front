<template>
  <u-layout class="side-left" :gutter="16" mode="column">
    <u-region class="side-left__item">
      <u-card body-class="side-left__item-card" shadow="always" header="个人信息" collapse>
        <BaseInfoCard></BaseInfoCard>
      </u-card>
    </u-region>
    <u-region class="side-left__item">
      <u-card body-class="side-left__item-card" shadow="always" header="最新文章" collapse>
        <LatestArticleCard></LatestArticleCard>
      </u-card>
    </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import BaseInfoCard from './BaseInfoCard.vue'
import LatestArticleCard from './LatestArticleCard.vue'
defineOptions({
  name: 'SideLeft'
})
</script>

<style scoped lang="scss">
.side-left {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 6;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;

  .side-left__item {
    width: 100%;
    height: fit-content;
    flex: unset;
    :deep(.side-left__item-card) {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      gap: 0.4rem;
      .side-left__item-logo {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
