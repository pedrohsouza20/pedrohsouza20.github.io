<script setup lang="ts">
defineProps<{
  linkGo: string,
  text: string,
  targetType?: string,
  backgroundColor?: string
}>()
</script>

<template>
  <div v-if="linkGo">
    <a v-if="targetType === '_blank'" :href=linkGo target="_blank">
      <button>{{ text }}</button>
    </a>
    <a v-else>
      <button>{{ text }}</button>
    </a>
  </div>
  <div v-else>

  </div>
</template>

<style scoped>
button {
  user-select: none;
  margin-top: 22px;
  background-color: #AD14BA;
  width: 170px;
  height: 35px;
  border: none;
  font-family: 'Inter', sans-serif;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}
</style>

