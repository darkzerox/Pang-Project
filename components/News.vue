<template>

  <div class="section-header">
    <div class="dev-full">
      <h2 class="text-center text-primary text-shadow">News & Events</h2>
    </div>
  </div>

  <div class="row flex flex-wrap">
    <div class="col-6 order-1">
      <img src="/images/img1.png" alt="">
    </div>
    <div class="col-6 order-0 ">
      <div class="content mb-4">
        <h3 class="text-primary text-center text-shadow mb-4">Welcome FPT University</h3>
        <p class=" mb-4">BUUIC provided academic services for 52 freshmen students from FPT University’s Cantho
          Campus in Vietnam.</p>

        <div class="text-center ">
          <a href="https://buuic.buu.ac.th/web/home/index.php/2024/06/11/buuic-provides-an-intensive-english-program-for-fpt-university/"
            class="btn btn-secondary">Click for more information</a>
        </div>
      </div>
    </div>
  </div>

  <div class="row flex flex-wrap">
    <div class="col-6  ">
      <img src="/images/img2.png" alt="">
    </div>
    <div class="col-6    ">
      <div class="content mb-4">
        <h3 class="text-primary text-center text-shadow mb-4">BUUIC Welcomed Delegates from Ton Duc Thang University,
          Vietnam
        </h3>
        <p class=" mb-4">BUUIC hosted representatives from Ton Duc Thang University, including faculty members
          and
          students from June 17 to 22, 2024, for English skill development and cultural exchange.</p>
        <div class="text-center ">
          <a href="https://buuic.buu.ac.th/web/home/index.php/2024/06/22/buuic-welcomed-delegates-from-ton-duc-thang-university-vietnam-for-the-cultural-exchange-program-in-thailand/"
            class="btn btn-secondary">Click for more information</a>
        </div>

      </div>
    </div>
  </div>

  <div class="row flex flex-wrap">
    <div class="col-6 order-1">
      <img src="/images/img3.png" alt="">
    </div>
    <div class="col-6 order-0 ">
      <div class="content mb-4">
        <h3 class="text-primary text-center text-shadow mb-4">Welcome FPT University</h3>
        <p class="mb-4 ">BUUIC provided academic services for 52 freshmen students from FPT University’s Cantho
          Campus in Vietnam.</p>
        <div class="text-center ">
          <a href="https://buuic.buu.ac.th/web/home/index.php/2024/06/11/buuic-provides-an-intensive-english-program-for-fpt-university/"
            class="btn btn-secondary">Click for more information</a>
        </div>

      </div>
    </div>
  </div>

  <div class="row flex flex-wrap">
    <div class="col-6  ">
      <img src="/images/img4.png" alt="">
    </div>
    <div class="col-6    ">
      <div class="content mb-4">
        <h3 class="text-primary text-center text-shadow mb-4">BUUIC Welcomed Delegates from Ton Duc Thang University,
          Vietnam

        </h3>
        <p class=" mb-4">
          BUUIC hosted representatives from Ton Duc Thang University, including faculty members and students from June
          17 to 22, 2024, for English skill development and cultural exchange. The visit featured a study of the
          Bangsaen 21 Running event and a trip to Wat Phra Kaew in Bangkok.
          This initiative strengthened ties between the two universities.</p>

        <div class="text-center ">
          <a href="https://buuic.buu.ac.th/web/home/index.php/2024/06/22/buuic-welcomed-delegates-from-ton-duc-thang-university-vietnam-for-the-cultural-exchange-program-in-thailand/"
            class="btn btn-secondary">Click for more information</a>
        </div>

      </div>
    </div>
  </div>


</template>

<script lang="ts" setup>

</script>

<style scoped>
h2 {
  font-size: 50px;
}

.section-header {
  height: 200px;
}

.section-header .dev-full {
  background-color: #f1f1f0;
  padding: 25px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

h3 {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .order-0 {
    order: 1;
  }

  .order-1 {
    order: 0;
  }
}
</style>