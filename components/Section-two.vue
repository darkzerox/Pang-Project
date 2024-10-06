<template>
  <div class="row section-two">
    <div class="col-12">
      <h2 class="text-center text-primary">Qualification</h2>
    </div>
  </div>
  <div class="row icon-box-container">
    <div class="col-3" v-for="(item, index) in qualifications" :key="index">
      <IconBox :icon="item.icon" :title="item.title" :description="item.description" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const qualifications = ref([
  {
    icon: 'icon1.png',
    title: 'Proficient in English communication',
    description: 'Proficient in English communication'
  },
  {
    icon: 'icon2.png',
    title: 'Must be undergraduate  student at BUUIC',
    description: 'Must be undergraduate  student at BUUIC'
  },
  {
    icon: 'icon3.png',
    title: 'Hospitality and service mindset',
    description: 'Hospitality and service mindset'
  },
  {
    icon: 'icon4.png',
    title: 'Being confident and assertive',
    description: 'Being confident and assertive'
  },
]);
</script>

<style scoped>
h2 {
  font-size: 50px;
}

.section-two {
  margin-top: 50px;
}

.icon-box-container {
  margin-top: 50px;
}
</style>
