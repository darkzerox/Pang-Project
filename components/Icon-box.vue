<template>
  <div class="icon-box row">
    <div class="icon-box-icon col-12 text-center">
      <NuxtImg :src="`/images/${icon}`" :alt="title" />
    </div>
    <div class="icon-box-content col-12 text-center">
      <slot v-if="$slots.description" name="content"></slot>
      <p v-else class="text-primary">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon?: string;
  title?: string;
  description?: string;
}>();
</script>

<style scoped>
.icon-box-icon {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
}

p {
  line-height: 1.5;
}
</style>
