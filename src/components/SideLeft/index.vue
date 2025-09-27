<template>
  <u-layout class="side-left" :gutter="16" mode="column">
    <u-region class="side-left__item">
      <u-card body-class="side-left__item-card" shadow="always" header="信息栏" collapse>
        <div class="side-left__item-logo">
          <img :src="logo" alt="随机图片" />
        </div>
        <div class="side-left__item-name">
          <span>{{ faker.person.fullName() }}</span>
        </div>
        <div class="side-left__item-description">
          <span>{{ faker.lorem.sentence({ min: 10, max: 30 }) }}</span>
        </div>
      </u-card>
    </u-region>
    <u-region class="side-left__item">
      <u-card body-class="side-left__item-card" shadow="always" header="最新文章" collapse>
        <!-- {{ faker.lorem.sentence({ min: 50, max: 100 }) }} -->
        <SideLeftItem1></SideLeftItem1>
      </u-card>
    </u-region>
    <u-region class="side-left__item">
      <u-card body-class="side-left__item-card" shadow="always" header="信息栏2" collapse>
        {{ faker.lorem.sentence({ min: 50, max: 100 }) }}
      </u-card>
    </u-region>
    <u-region class="side-left__item">
      <u-card body-class="side-left__item-card" shadow="always" header="信息栏3" collapse>
        {{ faker.lorem.sentence({ min: 50, max: 100 }) }}
      </u-card>
    </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import api from '@/api'
import { CTables } from '@/types/const'
import { faker } from '@faker-js/faker'
import SideLeftItem1 from './SideLeftItem1.vue'
import { useHeaderStore } from '@/stores/header'

defineOptions({
  name: 'SideLeft'
})
const headerStore = useHeaderStore()
const logo = computed(() => headerStore.logo)
const apis = api(CTables.ARTICLE)

const articleList = apis.getArticleList()
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
