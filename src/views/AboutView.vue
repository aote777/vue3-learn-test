<template>
  <div class="about">
    <h1 :style="[{ color: 'red' }]">This is an about page</h1>
  </div>
</template>

<script lang="ts">
  import { ccReq } from '@/service/index'
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'about-view',
    data() {
      return {}
    },
    mounted() {
      // ccReq.request({
      //   url: '/get',
      //   method: 'GET',
      // })
    },
  })
</script>
