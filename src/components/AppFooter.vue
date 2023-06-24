<template>
    <div class="container bg-rose">
        <footer class="row row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-6 py-5 border-top">
            <div class="d-flex flex-column justify-content-between col mb-3">
                <div class="d-flex">
                    <div class="rounded-circle bg-white p-2">
                        <img class="img-fluid" width="50" height="50" v-bind:src="require('@/assets/images/mentor-hub.png')" alt="logo mentor-hub">
                    </div>
                </div>
                <div>
                    <p >besoin d'aide ?</p>
                    <div class="d-flex flex-column w-100 gap-2">
                        <input type="email" class="form-control" placeholder="Adresse Email">
                        <button class="btn bg-bleu" type="button">S’inscrire</button>
                    </div>
                </div>

            </div>

            <div class="col d-sm-none d-md-none d-lg-block  mb-3"></div>

            <div class="col mb-3">
                <h5>Apropos</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Domicile</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Fonctionnalités</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Prisée</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Foire aux questions</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Environ</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Mentor</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mentor</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mentor</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mentor</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mentor</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mentor</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Conctact</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Conctact</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Conctact</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Conctact</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Conctact</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Conctact</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Contribution</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mr...........</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mr...........</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mr...........</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mr...........</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mr...........</a></li>
                </ul>
            </div>
        </footer>
        <div class="row d-flex divider-custom">
            <div class="col divider-custom-line"></div>
            <div class="col d-flex justify-content-between">
                <img class="img-fluid" width="40"  v-for="image in images" :key="image.id" v-bind:src="require(`../assets/icons/${image.name}`)" v-bind:alt="image.alt" />
            </div>
            <div class="col divider-custom-line"></div>
        </div>
    </div>
</template>


<script setup>

let images = [
    { name: "pinterest_60px.png", alt: "pinterest icon" },
    { name: "facebook_48px.png", alt: "facebook icon" },
    { name: "whatsapp_60px.png", alt: "whatsapp icon" },
]

</script>

<style scoped>

.divider-custom {
    display: flex;
    justify-content: center;
    align-items: center;
}

.divider-custom .divider-custom-line {
    width: 100%;
    height: 0.25rem;
    background-color: #ffffff;
    border-color: #ffffff;
}

</style>