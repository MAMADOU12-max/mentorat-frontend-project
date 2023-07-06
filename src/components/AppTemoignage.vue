<template>
    <div class="position-relative container bg-primary vh-100 p-5 ">
        <!-- <div class="position-absolute top-0 start-0 bg-dark h-25 w-25">BB</div> -->
        <h2>Témoignages</h2>
        <div class="carrousel">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="..." class="d-block w-50" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-50" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-50" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>



        </div>
       
        
    </div>
</template>


<script>
export default {
    name: "AppTemoignage"
}
</script>