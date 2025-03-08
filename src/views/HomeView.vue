<template>
  <u-layout class="home">
    <u-region region="center">
      <HomeHero
        :style="{ height: centerHeight }"
        :title="heroTitle"
        :desc="heroDesc"
        :top="heroTop"
        :gap="heroContentGap"
        :title-style="titleStyle"
        :desc-style="descStyle"
      />
    </u-region>
    <u-region region="bottom" class="home-content">
      <u-card :shadow="'always'">
        <div v-for="item in cardList" :key="item.id">
          <div class="home-content__card-title">{{ item.title }}</div>
          <div class="home-content__card-desc">{{ item.desc }}</div>
          <div class="home-content__card-img">
            <img :src="item.img" alt="随机图片" />
          </div>
        </div>
      </u-card>
    </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import HomeHero from '@/components/HomeHero.vue'
import { faker } from '@faker-js/faker'
import { pxToRem } from 'ucc-utils'
import { CENTER_HEIGHT_KEY } from '@/constants'

defineOptions({
  name: 'HomeView'
})

const centerHeight = inject(CENTER_HEIGHT_KEY)
const heroDesc = computed(() => window.$u.heroDesc)
const heroTitle = computed(() => window.$u.heroTitle)
const heroTop = computed<string>(() => pxToRem(window.$u.heroTop))
const titleStyle = computed(() => window.$u.heroTitleStyle)
const descStyle = computed(() => window.$u.heroDescStyle)
const heroContentGap = computed<string>(() => pxToRem(window.$u.heroContentGap))

const cardList = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(3),
  desc: faker.lorem.paragraph(),
  img: faker.image.url()
}))

</script>

<style scoped lang="scss"></style>
