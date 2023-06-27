<template>
    <div>

        <!-- Separation des section -->

        <!-- start navbar section [Javis]-->
        <appbar></appbar>
        <!-- end navbar section -->

        <!-- section1: navbar, footer booster votre carriere  [Javis]-->
        <div class="container" id="landing">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1">
                        <div class="txt-landing">
                            <h1 class="mb-4">Booster votre carriere <br> avec <span style="color: #a146a6">un Mentor.</span></h1>
                            <h4 class="mb-4">
                                Vous étes étudiant(e), en reconversion
                                professionnelle ou méme déjà en poste ?
                                On ne cesse crapprendre dans le milieu
                                de l'informatique optez pour le mentorat
                                pour booster votre carrière.
                            </h4>
                            <a href="#" class="btn bg-bleu me-4"> Trouver mon Mentor </a>
                            <a href="#" class="btn bg-rose"> Devenez Mentor </a>
                        </div>
                    </div>
                    <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 ">
                        <img class="border-goutte img-fluid w-100  "  v-bind:src="require('@/assets/images/imgTest.jpg')" alt="logo mentor-hub">
                    </div>
                </div>
            </div>
        </div>

        <!-- section2: mentor et pourquoi mentor  [Mamadou]-->

        <!-- Section3: Faq et temoignage [Arnold]-->

        <!-- start Boostez votre carriere section [Javis]-->
        
        <!-- end Boostez votre carriere section -->

        <!-- start Nos mentors section [Mamadou]-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                <h3 class="mb-4">Nos Mentors</h3>
                <div>
                    <div ref="carousel" class="slick-carousel">
                        <!-- Your carousel items here -->
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </div>
                    </div>

                <div id="app">
                    <swiper :options="swiperOptions" :slides-per-view="3">
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    </swiper>
                </div>

             
            </div>
        </div>
        <!-- end Nos mentors section -->

        <!-- start Pourquoi un mentor section [Mamadou] -->
        <div class="container py-5">
            <h4 class="">Pourquoi un mentor !</h4>
            <div class="row my-3">
                <div class="col-md-6">
                    <div class="d-flex flex-row">
                        <div class="">
                            <img class="h-25" v-bind:src="require('@/assets/images/exchange-idea.png')">
                        </div>
                        <div class="p-2">
                            <h5>Pour rester motiver</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum iste mollitia id fugiat quia sint dicta doloremque magni quis!</p>
                        </div>
                    </div>
                </div>
                  <div class="col-md-6">
                    <div class="d-flex flex-row">
                        <div class="">
                            <img class="h-25" v-bind:src="require('@/assets/images/exchange-idea.png')">
                        </div>
                        <div class="p-2">
                            <h5>Pour se depasser !</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum iste mollitia id fugiat quia sint dicta doloremque magni quis!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-md-6">
                    <div class="d-flex flex-row">
                        <div class="">
                            <img class="h-25" v-bind:src="require('@/assets/images/exchange-idea.png')">
                        </div>
                        <div class="p-2">
                            <h5>Pour prendre des decisions plus eclairees !</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum iste mollitia id fugiat quia sint dicta doloremque magni quis!</p>
                        </div>
                    </div>
                </div>
                    <div class="col-md-6">
                    <div class="d-flex flex-row">
                        <div class="">
                            <img class="h-25" v-bind:src="require('@/assets/images/exchange-idea.png')">
                        </div>
                        <div class="p-2">
                            <h5>Pour elargir son reseau professionnel !</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum iste mollitia id fugiat quia sint dicta doloremque magni quis!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end Pourquoi un mentor section -->

        <!-- start FAQ section [Arnold]-->
        <!-- end FAQ section -->

        <!-- start Temoignages section [Arnold]-->
        <!-- end Temoignages section -->

        <!-- start footer section [Javis]-->
        <app-footer></app-footer>
        <!-- end footer section -->
        
    </div>
</template>

<script>

import Appbar from '../components/AppBar.vue'
import AppFooter from '../components/AppFooter.vue'
// import $ from 'jquery';
// import 'slick-carousel';

// $('.your-class').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
// });

export default {
    name: 'App',    
    components: {
        Appbar, 
        AppFooter
    },
    // mounted() {
    //     // Initialize the Slick.js carousel when the component is mounted
    //     this.$nextTick(() => {
    //         $(this.$refs.carousel).slick();
    //     });
    // },

   
}


</script>

<!-- <script> 
export default {
  name: 'App',
  data() {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
        },
      },
    }
  },
}
</script> -->

<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<style scoped>


/* @import "@/assets/slick-1.8.1/slick/slick.css"; */

/* Add any custom styles for your carousel here */
/* .slick-carousel {
    width: 100%;
} */

#landing{
    padding: 100px 0 100px 0;
}

.border-goutte{
}

.btn{
    border-radius: 20px;
}

@media (max-width: 991px){
    .txt-landing {
        text-align: center;
    }
}

</style>




