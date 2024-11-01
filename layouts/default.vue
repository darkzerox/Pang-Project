<template>
  <div>


    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDC8K265" height="0" width="0"
        style="display:none;visibility:hidden">
      </iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    <NuxtSnackbar />


    <Header />
    <slot />
    <Footer />


  </div>
</template>

<script lang="ts" setup>
useHead(
  {
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
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=AW-16706452945',
        async: true,
      },
      {
        children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16706452945');
      `,
      },
      {
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PDC8K265');`,
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
