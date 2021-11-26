<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hello-world1></hello-world1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld1 from '@/components/HelloWorld1.vue'

export default defineComponent({
  components: {
    HelloWorld1
  }
})
</script>

