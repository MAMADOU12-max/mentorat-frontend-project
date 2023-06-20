<template>
    <div>
        <!-- start navbar section -->
        <appbar></appbar>
        <!-- end navbar section -->

        <!-- start Boostez votre carriere section -->
        <!-- end Boostez votre carriere section -->

        <!-- start Nos mentors section -->
        <!-- end Nos mentors section -->

        <!-- start Pourquoi un mentor section -->
        <!-- end Pourquoi un mentor section -->

        <!-- start FAQ section -->
        <!-- end FAQ section -->

        <!-- start Temoignages section -->
        <!-- end Temoignages section -->

        <!-- start footer section -->
        <app-footer></app-footer>
        <!-- end footer section -->
        
    </div>
</template>


<script>
import Appbar from '../components/Appbar.vue'
import AppFooter from '../components/Appfooter.vue'

export default {
    name: 'App',
    components: {
        Appbar, 
        AppFooter
    }
}
</script>


