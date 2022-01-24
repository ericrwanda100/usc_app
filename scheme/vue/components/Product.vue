<template>
  <hooper class="university" :settings="hooperSettings">
    <slide><img src="/assets/myimages/cape.jpg" alt="" /></slide>
    <slide><img src="/assets/myimages/fologo.png" alt="" /></slide>
    <slide><img src="/assets/myimages/florida.jpg" alt="" /></slide>
    <slide><img src="/assets/myimages/kings.jpg" alt="" /></slide>
    <slide><img src="/assets/myimages/lazar.jpg" alt="" /></slide>
    <slide><img src="/assets/myimages/nest.png" alt="" /></slide>
    <slide><img src="/assets/myimages/pacific.png" alt="" /></slide>
  </hooper>
</template>

<script>
export default {
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        centerMode: true,
        autoPlay: true,
        playSpeed: 2000,
        trimWhiteSpace: true,
        infiniteScroll: true,
        breakpoints: {
          800: {
            itemsToShow: 2
          },
          1000: {
            itemsToShow: 3,
          },
          1200: {
            itemsToShow: 4,
          }
        }
      },
    };
  },
  mounted() {},
};
</script>

<style>
.university {
  max-width: 80%;
  margin-top: 20px;
}
.university div img {
  width: 140px;
  height: 60px;
}
.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 30px;
  line-height: 1;
  opacity: 0.75;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: red;
}
@media (max-width: 500px) {
  .university {
    max-width: 100%;
    margin-top: 0px;
    margin-left: -10vh;
  }
  .university div img {
    width: 70px;
    height: 40px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red;
  }
}
@media (max-width: 414px) {
  .university {
    max-width: 80%;
    /* margin-top: 20px; */
    margin-left: 5vh;
  }
  .university div img {
    width: 70px;
    height: 40px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red;
  }
}
@media (max-width: 411px) {
  .university {
    max-width: 100%;
    margin-top: 0px;
    margin-left: -10vh;
  }
  .university div img {
    width: 70px;
    height: 40px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red;
  }
}
@media (max-width: 375px) {
  .university {
    max-width: 100%;
    margin-top: 0px;
    margin-left: 0vh;
  }
  .university div img {
    width: 70px;
    height: 40px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red;
  }
}
@media (max-width: 360px) {
  .university {
    max-width: 100%;
    margin-top: 20px;
    margin-left: 0vh;
  }
  .university div img {
    width: 70px;
    height: 40px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red;
  }
}
@media (max-width: 320px) {
  .university {
    max-width: 80%;
    margin-top: 20px;
    margin-left: 3vh;
  }
  .university div img {
    width: 70px;
    height: 30px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: red;
  }
}
</style>
