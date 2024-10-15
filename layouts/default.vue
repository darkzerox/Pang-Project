<template>
  <div>
    <NuxtSnackbar />
    <Header />
    <slot />
    <Footer />
    

  </div>
</template>

<script lang="ts" setup>
// Add Google Analytics
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-RYFT053JRB',
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RYFT053JRB');
      `,
    },
  ],
});
</script>
