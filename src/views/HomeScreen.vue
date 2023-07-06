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
                    <swiper class="bg-warning pb-4"
                            :slides-per-view="4"
                            :modules="configSwiper"
                            :space-between="20"
                            :loop="true"
                            :pagination="{clickable: true}"
                            :autoplay="{
                              delay: 7000,
                              disableOnInteraction: false,
                              pauseOnMouseEnter: true
                      }"
                    >
                      <swiper-slide class="container bg-success" v-for="slide in mesSlide" :key="slide.description">
                        <div class="row bg-bleu">
                          <h1>{{slide.nom}}</h1>
                          <p>{{slide.description}}</p>
                        </div>
                      </swiper-slide>
                    </swiper>
                  </div>
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
        <AppFaqsection></AppFaqsection>
        <!-- end FAQ section -->

        <!-- start Temoignages section [Arnold]-->
        <!-- <AppTemoignage></AppTemoignage> -->
        <AppTest></AppTest>
        <!-- end Temoignages section -->

        <!-- start footer section [Javis]-->
        <app-footer></app-footer>
        <!-- end footer section -->
        
    </div>
</template>

<script setup>

import Appbar from '../components/AppBar.vue'
import AppFooter from '../components/AppFooter.vue'
import AppFaqsection from '../components/AppFaqsection.vue'
// import AppTemoignage from '../components/AppTemoignage.vue'
import AppTest from '@/components/AppTest.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const configSwiper = [Autoplay,Pagination]

let mesSlide =  [
  {nom: "item 1", description: "Acceuil"},
  {nom: "item 2", description: "Nos Mentors"},
  {nom: "item 3", description: "FAQ"},
  {nom: "item 4", description: "Acceuil"},
  {nom: "item 5", description: "Nos Mentors"},
  {nom: "item 6", description: "FAQ"},
  {nom: "item 7", description: "Acceuil"},
  {nom: "item 8", description: "Nos Mentors"},
  {nom: "item 9", description: "FAQ"},
]

</script>

<style scoped>

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



