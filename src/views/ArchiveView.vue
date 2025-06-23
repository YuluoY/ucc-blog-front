<template>
  <u-layout>
    <u-region region="center">
      <div>field</div>
    </u-region>
  </u-layout>
</template>

<script setup lang="ts">
import api from '@/api'
import { CTables } from '@/types/const'

defineOptions({
  name: 'ArchiveView'
})

const apis = api(CTables.ARTICLE)
</script>
