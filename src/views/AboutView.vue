<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="danger">+++</el-button>
    <el-button type="primary">+++</el-button>
    <el-button type="default">+++</el-button>
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
      ccReq.request({
        url: '/get',
        method: 'GET',
      })
    },
  })
</script>
