<template>
  <div class="section-social">
    <h3 class="text-primary text-center text-shadow mb-4">Stay Connected!</h3>
  </div>
  <div class="row social-row" >
    <div class="col-3 col-6-sm text-center ">
      <a href="https://www.facebook.com/buuic?mibextid=LQQJ4d&rdid=CNlrjaMW9vmMmamh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FrxYxFmB9wRUfdzpM%2F%3Fmibextid%3DLQQJ4d"
        target="_blank" rel="noopener noreferrer nofollow">
        <Icon name="la:facebook" style="color: black" />
      </a>
    </div>
    <div class="col-3 col-6-sm text-center ">
      <a href="https://www.instagram.com/buuic?igsh=bHVqeWY5bHg5ZnNk" target="_blank"
        rel="noopener noreferrer nofollow">
        <Icon name="ph:instagram-logo" style="color: black" />
      </a>
    </div>
    <div class="col-3 col-6-sm text-center ">
      <a href="https://x.com/thebuuic?s=21&t=-fJElGv9Lg_iMiz-ZjWf6w" target="_blank" rel="noopener noreferrer nofollow">
        <Icon name="hugeicons:new-twitter-ellipse" style="color: black" />
      </a>
    </div>
    <div class="col-3 col-6-sm text-center ">
      <a href="https://www.tiktok.com/@buuicofficial?_t=8qFuoQyxX5c&_r=1" target="_blank"
        rel="noopener noreferrer nofollow">
        <Icon name="hugeicons:tiktok" style="color: black" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
h3 {
  margin-top: 20px;
  font-size: 2rem;
}

.iconify {
  width: 100px;
  height: 100px;
  margin: auto
}

@media (max-width: 768px) {
  .iconify {
    width: 50px;
    height: 50px;
  }
}

.section-social {
  margin-top: 30px;
  margin-bottom: 30px
}

.social-row {
  max-width: 800px;
  margin: 0 auto 60px;
}

@media screen and (max-width: 768px) {
  .social-row {
    max-width: 60%;
  }
}
</style>