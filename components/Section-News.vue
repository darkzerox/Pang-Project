<template>

  <div class="section-header">
    <div class="dev-full">
      <h2 class="text-center text-primary text-shadow">News & Events</h2>
    </div>
  </div>

  <!-- section 1 June 2024 -->
  <div class="row flex flex-wrap">
    <div class="col-6 order-1">
      <img src="/images/img1.png" alt="">
    </div>
    <div class="col-6 order-0 ">
      <div class="content mb-4">
        <div class="heading-date text-shadow text-primary font-heading">June 2024</div>
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

  <!-- section 2 -->

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

  <!-- section 3 -->
  <div class="row flex flex-wrap">
    <div class="col-6 order-1">
      <img src="/images/img3.png" alt="">
    </div>
    <div class="col-6 order-0 ">
      <div class="content mb-4">
        <div class="heading-date text-shadow text-primary font-heading">August 2023</div>
        <h3 class="text-primary text-center text-shadow mb-4">Welcome Policy Studies from 
          Kansai University, Japan</h3>
        <p class="mb-4 ">BUUIC organized the Cultural Exchange and English Program for students of Policy Studies at Kansai University. The program proved to be fruitful, offering insights into Thai tradition and culture, along with BUUIC liaison students.</p>
        <div class="text-center ">
          <a href="https://buuic.buu.ac.th/web/home/index.php/2024/06/11/buuic-provides-an-intensive-english-program-for-fpt-university/"
            class="btn btn-secondary">Click for more information</a>
        </div>

      </div>
    </div>
  </div>

  <!-- section 4 -->

  <div class="row flex flex-wrap">
    <div class="col-6  ">
      <img src="/images/img4.jpeg" alt="">
    </div>
    <div class="col-6    ">
      <div class="content mb-4">
        <div class="heading-date text-shadow text-primary font-heading">July 2024</div>
        <h3 class="text-primary text-center text-shadow mb-4">Welcome students from Binus University, Indonesia
        </h3>
        <p class=" mb-4">
          Burapha University International College hosted a P2A Journey and Cultural Exchange Program for students from Binus University,Indonesia. These types of programs are part of the P2A partnership.</p>

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
  font-size: 3rem;
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

.heading-date {
  font-size: 20px;
  border-bottom: 3px solid #fccf0b;
  padding-left: 10px;
}
</style>