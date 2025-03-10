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
    <u-region region="bottom" class="home-content" ref="cardListRef">
      <UWaterfall>
        <template #default="{ item, index, styles, classname }">
          <u-card
            class="home-content__card"
            :class="classname"
            :style="styles"
            :data-id="index"
            :key="index"
            shadow="always"
          >
            <div class="home-content__card-img">
              <img :src="item.img" alt="随机图片" />
            </div>
            <div class="home-content__card-title">{{ item.title }}</div>
            <div class="home-content__card-desc">{{ item.desc }}</div>
          </u-card>
        </template>
      </UWaterfall>
    </u-region>
  </u-layout>
</template>
<script setup lang="ts">
import HomeHero from '@/components/HomeHero.vue'
import { faker } from '@faker-js/faker'
import { pxToRem } from 'ucc-utils'
import { CENTER_HEIGHT_KEY } from '@/constants'
import { useWaterfall } from 'ucc-utils'
import { UCard } from 'ucc-ui'
defineOptions({
  name: 'HomeView'
})

const centerHeight = inject(CENTER_HEIGHT_KEY)
const heroDesc = computed(() => $u.heroDesc)
const heroTitle = computed(() => $u.heroTitle)
const heroTop = computed<string>(() => pxToRem($u.heroTop))
const titleStyle = computed(() => $u.heroTitleStyle)
const descStyle = computed(() => $u.heroDescStyle)
const heroContentGap = computed<string>(() => pxToRem($u.heroContentGap))

// 生成随机尺寸的图片URL
const getRandomImage = (index: number) => {
  const width = Math.floor(Math.random() * 100) + 200 // 200-300
  const height = Math.floor(Math.random() * 200) + 300 // 300-500
  return `https://picsum.photos/${width}/${height}?random=${index}`
}

const cardList = new Array(100).fill(0).map((_, index) => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(3),
  desc: faker.lorem.paragraph(),
  img: getRandomImage(index)
  // img: faker.image.urlLoremFlickr({
  //   category: 'cats,nature',
  //   width: Math.floor(Math.random() * 100) + 200,
  //   height: Math.floor(Math.random() * 200) + 300
  // })
}))

const { Waterfall: UWaterfall, rowIndex } = useWaterfall<typeof cardList>(cardList, {
  column: 8,
  gap: 20,
  margin: 10,
  isLazy: true,
  isResize: true,
  unit: 'rem',
  onPixelTrans: v => pxToRem<number>(v, {isNumber: true}),
  placeholderImg: [
    new URL('@/assets/images/8.jpeg', import.meta.url).href,
    new URL('@/assets/images/9.jpg', import.meta.url).href,
    new URL('@/assets/images/10.jpg', import.meta.url).href,
    new URL('@/assets/images/11.jpg', import.meta.url).href,
    new URL('@/assets/images/12.jpg', import.meta.url).href,
    new URL('@/assets/images/13.jpg', import.meta.url).href,
    new URL('@/assets/images/14.jpg', import.meta.url).href,

  ]
})

</script>

<style scoped lang="scss">

</style>
