<template>
    <div class="container vh-100 py-3">
        <!-- <div class="position-absolute top-0 start-0 bg-dark h-25 w-25">BB</div> -->
        <div class="trait bg-rose"></div>
        <h2 class="Temoignage fw-bold">Témoignages</h2>

        <swiper class="pb-4" :slides-per-view="3" :modules="configSwiper" :space-between="20" :loop="true"
            :pagination="{ clickable: true }" :autoplay="{
                delay: 7000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }">
            <swiper-slide class="container" v-for="slide in mesSlide" :key="slide.id">
                <div class="row">
                    <div class="SectionCards">
                        <div class="row my-5">
                            <div class="col">
                                <div class="card px-2 py-5 mx-auto" style="width: 20rem; height: 23rem">
                                    <img v-bind:src="require(`../assets/images/${slide.image}`)"
                                        class="img-fluid w-50 rounded-circle mx-auto border border-4 border-rose"
                                        alt="..." />
                                    <div class="card-body">
                                        <h4 class="fw-bold text-center">{{ slide.nom }}</h4>
                                        <p class="card-text text-center">
                                            {{ slide.temoignage }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const configSwiper = [Autoplay, Pagination];

let mesSlide = [
    {
        image: "user-1.png",
        nom: "Mustaf Joop",
        temoignage:
            " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        image: "user-2.png",
        nom: "Mustaf Joop",
        temoignage:
            " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        image: "user-3.png",
        nom: "Mustaf Joop",
        temoignage:
            " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        image: "user-1.png",
        nom: "Mustaf Joop",
        temoignage:
            " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        image: "user-2.png",
        nom: "Mustaf Joop",
        temoignage:
            " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        image: "user-3.png",
        nom: "Mustaf Joop",
        temoignage:
            " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
];
</script>

<style scoped>
.Temoignage {
    color: #5c67b6;
}

.trait {
    width: 60px;
    height: 10px;
    border-radius: 5px;
    margin: 12px 0;
}

.card {
    border-radius: 20px;
    background-color: #d9d9d9;
}
</style>
