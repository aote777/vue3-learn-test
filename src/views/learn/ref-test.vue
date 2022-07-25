<template>
  <div>
    {{ $store.state.name }}
  </div>
</template>

<script lang="ts">
  declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $store: any
    }
  }
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'test',
    data() {
      return {}
    },
  })
</script>
