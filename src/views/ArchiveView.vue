<template>
  <u-layout :padding="16">
    <u-region region="center">
      <u-timeline>
        <u-timeline-item v-for="item in articleList" :key="item.id" :date="item.updatedAt">
          <u-card :body-class="'timeline-item__card'" shadow="hover">
            {{ item.title }}
          </u-card>
        </u-timeline-item>
      </u-timeline>
    </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import { useArticleStore } from '@/stores/model/article'

defineOptions({
  name: 'ArchiveView'
})
const articleStore = useArticleStore()
const articleList = computed(() => articleStore.articleList)
console.log(articleList.value)
</script>
