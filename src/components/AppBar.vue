<template>
    <nav class="navbar navbar-expand justify-content-between">
        <div class="container align-items-center ">
            <a href="#" class="navbar-brand flex-grow-1" >
                <img class="img-fluid" width="50" height="50" v-bind:src="require('@/assets/images/mentor-hub.png')" alt="logo mentor-hub">
            </a>
            <div class="d-flex justify-content-between flex-grow-1">
                <ul class="navbar-nav">
                    <li class="nav-item me-5" v-for="menu in menus" v-bind:key="menu.id">
                        <a class="nav-link fw-bold">{{ menu.name }}</a>
                        <!--                        <router-link v-bind:to="{name: menu.namRouter}">-->
                        <!--                            <a>{{ menu.name }}</a>-->
                        <!--                        </router-link>-->
                    </li>
                </ul>
                <div>
                    <button type="button" class="btn bg-bleu me-2">Connexion</button>
                    <button type="button" class="btn bg-rose">Inscription</button>
                </div>
            </div>
        </div>
    </nav>
</template>


<script setup>
let menus =  [
    {namRouter: "home", name: "Acceuil"},
    {namRouter: "", name: "Nos Mentors"},
    {namRouter: "", name: "FAQ"},
]
</script>

<style scoped>

.btn{
    border-radius: 20px;
}

</style>