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

        <!-- start Nos mentors section [Mamadou-->
        <!-- end Nos mentors section -->

        <!-- start Pourquoi un mentor section [Mamadou-->
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


<script setup>
import Appbar from '../components/AppBar.vue'
import AppFooter from '../components/AppFooter.vue'

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


