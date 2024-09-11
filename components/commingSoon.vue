<template>
  <div class="coming-soon">
    <h1>Coming Soon</h1>
    <p>We are working hard to bring you this feature. Stay tuned!</p>
  </div>
</template>

<script lang="ts" setup>
// No additional script needed for this simple page
</script>

<style scoped>
.coming-soon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f0f0f0;
  color: #333;
}

.coming-soon h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}

.coming-soon p {
  font-size: 1.5em;
}
</style>