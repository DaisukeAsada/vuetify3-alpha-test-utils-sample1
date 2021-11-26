<template>
  <div>
    <v-btn data-test="btn" @click="count++">Count:{{ count }}</v-btn>
    <v-chip id="test-chip">{{ count }}</v-chip>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const count = ref<number>(0)

    return {
      count
    }
  },
})
</script>
