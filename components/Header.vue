<template>
  <div class="header container">
    <div class="header-content">
      <div class="img-box">
        <img src="/images/logo.png" alt="BUUIC Liaison Club" />
      </div>
      <div class="img-box">
        <img src="/images/sub-logo-2.svg" alt="BUUIC Liaison Club" />
      </div>
      <div class="img-box">
        <img src="/images/sub-logo.png" alt="BUUIC Liaison Club" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.header {

  padding: 2rem;
}

.header img {
  max-height: 80px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: max-content;
  margin: auto;
}

.img-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
