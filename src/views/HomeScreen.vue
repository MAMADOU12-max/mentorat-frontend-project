<template>
    <div>

        <!-- Separation des section -->

        <!-- section1: navbar, footer booster votre carriere  [Javis]--> 

        <!-- section2: mentor et pourquoi mentor  [Mamadou]-->

        <!-- Section3: Faq et temoignage [Arnold]-->



        <!-- start navbar section [Javis]-->
        <appbar></appbar>
        <!-- end navbar section -->

        <!-- start Boostez votre carriere section [Javis]-->
        
        <!-- end Boostez votre carriere section -->

        <!-- start Nos mentors section [Mamadou-->
        <!-- end Nos mentors section -->

        <!-- start Pourquoi un mentor section [Mamadou-->
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


<script>
import Appbar from '../components/Appbar.vue'
import AppFooter from '../components/Appfooter.vue'
import AppTemoignage from '../components/AppTemoignage.vue'
import AppFaqsection from '../components/AppFaqsection.vue'

export default {
    name: 'App',
    components: {
        Appbar, 
        AppFooter,
        AppTemoignage,
        AppFaqsection
    }
}
</script>
