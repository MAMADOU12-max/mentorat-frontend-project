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

                <div class="your-class">
                    <div>your content</div>
                    <div>your content</div>
                    <div>your content</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end Nos mentors section -->

        <!-- start Pourquoi un mentor section [Mamadou] -->
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
// import slick from "../assets/slick-1.8.1/slick/slick.min.js";
import Appbar from '../components/Appbar.vue'
import AppFooter from '../components/Appfooter.vue'
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


// export default {

// };
</script>

<style>
/* @import "@/assets/slick-1.8.1/slick/slick.css"; */

/* Add any custom styles for your carousel here */
.slick-carousel {
    width: 100%;
}
</style>

