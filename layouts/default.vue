<template>
  <div>
    <NuxtSnackbar />
    <Header />
    <slot />
    <Footer />


  </div>
</template>

<script lang="ts" setup>
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
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-32x32.png',
      sizes: '32x32'
    }
  ]
});
</script>
