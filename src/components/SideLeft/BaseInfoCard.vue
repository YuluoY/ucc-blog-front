<template>
  <u-layout class="base-info-card" mode="column" :gutter="10">
    <u-region class="base-info-card__avatar" justify="center">
      <img :src="user.avatar" :alt="user.namec" />
    </u-region>
    <u-region class="base-info-card__name" justify="center">
      {{ user.namec }}
    </u-region>
    <u-region class="base-info-card__bio" justify="center">
      {{ user.bio }}
    </u-region>
    <u-region class="base-info-card__socials" justify='space-between' style="width: 100%;">
      <template v-for="social in user.socials" :key="social.type">
        <a :href="social.url" target="_blank" style="display: flex; align-items: center; gap: 1rem; flex-direction: column;">
          <img :src="social.logo" :alt="social.type" width="50" />
          <span>{{ social.type }}</span>
        </a>
      </template>
    </u-region>
  </u-layout>
</template>

<script lang="ts" setup>
import { useLeftSideStore } from '@/stores/leftSide'
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'BaseInfoCard'
})

const { user } = storeToRefs(useLeftSideStore())

console.log(user.value)

</script>

<style scoped lang="scss">
.base-info-card {
  .u-region.base-info-card__avatar {
    width: 100%;
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>
