<template>
    <main>
        <nav class=" navbar navbar-expand-md navbar-expand-lg" aria-label="Barre de navigation hors toile grande" _mstaria-label="449202" _msthash="32">
            <div class="container">
                <a class="navbar-brand" href="#" _msttexthash="1158677" _msthash="33">
                    <img class="img-fluid" width="50" height="50" v-bind:src="require('@/assets/images/mentor-hub.png')" alt="logo mentor-hub">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation" _msthidden="A" _mstaria-label="320099" _msthash="34">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div class="offcanvas-header" _msthidden="2">
                        <h5 class="offcanvas-title" id="offcanvasNavbar2Label" _msttexthash="133653" _msthidden="1" _msthash="35">Offcanvas</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" _msthidden="A" _mstaria-label="59709" _msthash="36"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item" v-for="menu in menus" v-bind:key="menu.id">
                                <router-link v-bind:to="{name: menu.namRouter}">
                                    <a class="nav-link fw-bold">{{ menu.name }}</a>
                                </router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" _msttexthash="313989" _msthash="39"> Liste déroulante </a>
                                <ul class="dropdown-menu" _msthidden="3">
                                    <li _msthidden="1"><a class="dropdown-item" href="#" _msttexthash="76466" _msthidden="1" _msthash="40">Action</a></li>
                                    <li _msthidden="1"><a class="dropdown-item" href="#" _msttexthash="232752" _msthidden="1" _msthash="41">Another action</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li _msthidden="1"><a class="dropdown-item" href="#" _msttexthash="349791" _msthidden="1" _msthash="42">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div>
                            <router-link to="/login">
                                <button type="button" class="btn bg-bleu me-2">Connexion</button>
                            </router-link>
                            <button type="button" class="btn bg-rose">Inscription</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    </main>

</template>


<script setup>
let menus =  [
    {namRouter: "home", name: "Acceuil"},
    {namRouter: "", name: "Nos Mentors"},
    {namRouter: "login", name: "FAQ"},
]
</script>

<style scoped>

.btn{
    border-radius: 20px;
}

</style>