<template>
    <div>

        <!-- Separation des section -->

        <!-- start navbar section [Javis]-->
        <appbar></appbar>
        <!-- end navbar section -->

        <!-- section1: navbar, footer booster votre carriere  [Javis]-->
        <div class="container py-5" id="landing">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-0 order-2 order-lg-1">
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
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-12">
                    <div class="trait bg-rose"></div>
                    <h3 class="text-rose fw-bold mb-4">Nos Mentors</h3>
                  
                  <div>
                    <swiper class="pb-4"
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
                      <swiper-slide class="container mb-4" v-for="slide in mesSlide" :key="slide.description">
                        <div class="row">
                          <!-- <h1>{{slide.nom}}df</h1>
                          <p>{{slide.description}}</p> -->
                           <div class="card p-0 rounded-4" >
                                <img class="card-img-top rounded-4" src="https://images.unsplash.com/photo-1688999558024-0bbeac1c0102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="Card image"
                                 style="width:100%; height: 200px" >
                                <div class="card-body">
                                <h5 class="card-title fw-bold" style="color: #a146a6">{{slide.nom}}</h5>
                                <p class="card-text mb-0">{{slide.description}}</p>

                                <div class="star-container">
                                    <i class="star">&#9733;</i>
                                    <i class="star">&#9733;</i>
                                    <i class="star">&#9733;</i>
                                    <i class="star">&#9733;</i>
                                    <i class="star">&#9733;</i>
                                    <div class="fw-bold pt-1" style="font-size: 13px"> &nbsp;(150)</div>
                                </div>

                                    <div class="d-flex justify-content-center mt-3">
                                        <button type="button" class="btn btn-outline-primary px-4">
                                            <strong style="font-size: 14px">View Profil</strong></button>
                                    </div> 
                                </div>
                            </div>
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
            <div class="trait bg-rose"></div>
            <h3 class="text-rose fw-bold">Pourquoi un mentor !</h3>
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
        <AppTemoignage></AppTemoignage>
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
import AppTemoignage from '../components/AppTemoignage.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const configSwiper = [Autoplay,Pagination]

let mesSlide =  [
  {nom: "Pr Romuald", description: " Some example text some example text."},
  {nom: "Javis", description: " Some example text some example text."},
  {nom: "Diouf Modou", description: " Some example text some example text."},
  {nom: "Dr Schaun", description: " Some example text some example text."},
  {nom: "Arnold", description: " Some example text some example text."},
  {nom: "Cheikh", description: " Some example text some example text."},
//   {nom: "item 7", description: "Acceuil"},
//   {nom: "item 8", description: "Nos Mentors"},
//   {nom: "item 9", description: "FAQ"},
]

</script>

<style scoped>

#landing{
    padding: 100px 0 100px 0;
}

.star-container {
display: flex;
align-items: left;
}
.star {
color: gold;
font-size: 1rem;
margin: 0 2px;
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



