<template>
  <u-layout class="home">
    <u-region region="center" class="home-content" ref="cardListRef">
      <div class="home-content__inner">
        <ArticleList :data="articleList"> </ArticleList>
        <!-- <UWaterfall class="home-content__waterfall">
          <template #default="{ item, index, styles, classname }">
            <u-card
              class="home-content__card"
              :class="classname"
              :style="styles"
              :data-id="index"
              :key="index"
              shadow="hover"
            >
              <div class="home-content__card-img">
                <img :src="item.img" alt="随机图片" />
              </div>
              <div class="home-content__card-title">{{ item.title }}</div>
              <div class="home-content__card-desc">{{ item.desc }}</div>
            </u-card>
          </template>
        </UWaterfall>
        <div class="home-content__loading">
          <u-button plain :disabled="isLoading" @click="_ => rowIndex++">{{ isLoading ? '加载中...' : '加载更多🚀' }}</u-button>
        </div> -->
      </div>
    </u-region>
  </u-layout>
</template>
<script setup lang="ts">
import ArticleListStyles from '@/components/ArticleListStyles'
import type { Component } from 'vue'
import api from '@/api'
import { CTables } from '@/types/const'
import { useAppStore } from '@/stores/app'
import { useArticleStore } from '@/stores/model/article'
defineOptions({
  name: 'HomeView'
})
const appStore = useAppStore()
const articleStore = useArticleStore()

const ArticleList = computed<Component>(() => ArticleListStyles[appStore.articleListType])
const articleList = computed(() => articleStore.articleList)
</script>

<style scoped lang="scss">
.home-content {
  .home-content__inner {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .home-content__loading {
      width: 100%;
      margin: 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .u-button {
        width: 100%;
      }
    }
  }
}
</style>
