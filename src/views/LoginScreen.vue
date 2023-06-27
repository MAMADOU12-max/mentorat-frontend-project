<template>
    <div class="container-fluid vh-100">
        <div class="row h-100">
            <div class="left h-100 col p-0">
                <div class="left-container h-100 w-100 d-flex align-items-center justify-content-center">
                    <img class="img-fluid w-100" v-bind:src="require('@/assets/images/community_manager.png')" alt="logo mentor-hub">
                </div>
            </div>
            <div class="col p-0 h-100">
                <div class="w-auto h-10 d-flex justify-content-end align-items-center">
                    <img class="h-80 me-4" v-bind:src="require('@/assets/images/mentor-hub.png')" alt="logo mentor-hub">
                </div>
                <div class="h-90 d-flex justify-content-center align-items-center text-center">
                    <form class="w-100 d-flex flex-column justify-content-between align-items-center" >
                        <h1 class="fw-bold">Se connecter </h1>
                        <div class="container-input ">
                            <div class="icon-input h-100 d-flex position-relative justify-content-center align-items-center">
                                <img class="img-fluid" v-bind:src="require('@/assets/images/important_mail_100px.png')" alt="logo mentor-hub">
                            </div>
                            <div class="div-input">
                                <h5>Emails</h5>
                                <input type="email" class="input" >
                            </div>
                        </div>
                        <div class="container-input">
                            <div class="icon-input h-100 d-flex position-relative justify-content-center align-items-center">
                                <img class="img-fluid" v-bind:src="require('@/assets/images/show_password_48px.png')" alt="logo mentor-hub">
                            </div>
                            <div class="div-input">
                                <h5>Password</h5>
                                <input type="password" class="input" >
                            </div>
                        </div>
                        <div class="form-check w-50 text-start mb-5">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label " for="flexCheckDefault">
                                Se souvenir de moi
                            </label>
                        </div>
                        <button class="modalBtn btn bg-rose text-white" data-bs-toggle="modal" data-bs-target="#modalBtn" >Connectez-Vous</button>
                        <p class="mt-3">pas de compte ? <a href="#" style="color: #a146a6">crée un compte</a></p>
                        <!-- Modal -->
                        <div class="modal fade" id="modalBtn">
                            <div class="modal-dialog ">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" aria-labelledby="modal title">
                                            Modal Title
                                        </h5>
                                        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" aria-describedby="content">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Expedita facere, veniam repellat id magni voluptas.
                                        </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-secondary" data-bs-dismiss="modal">
                                            Close
                                        </button>
                                        <button class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {onMounted} from "vue";

onMounted(() => {
    const inputs = document.querySelectorAll(".input");

    const modalBtn = document.querySelectorAll(".modalBtn");
    modalBtn.forEach((input) => {
        input.addEventListener("click", (e)=>{
            e.stopPropagation();
            e.preventDefault();
        });
    });

    function addclass(){
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function remclass(){
        let parent = this.parentNode.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", addclass);
        input.addEventListener("blur", remclass);
    })
});

</script>

<style scoped>
.h-10{
    height: 10%;
}

.h-15{
    height: 15%;
}

.h-60{
    height: 60%;
}

.h-80{
    height: 80%;
}

.h-90{
    height: 90%;
}

.left {
    filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, 0.2));
}

.left-container {
    background-color: #a146a6;
    clip-path: polygon(0% 100%, 0 0, 100% 0, 93% 100%);
}

form .container-input {
    position: relative;
    height: 15%;
    width: 50%;
    display: grid;
    grid-template-columns: 10% 90%;
    /*grid-gap: 0px 10px; */
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid;
}

.container-input > div {
    position: relative;
}

.container-input > div > h5 {
    position: absolute;
    top: 50%;
    color: #999;
    transform: translateY(-50%);
    font-size: 18px;
    transition: .3s;
}

.container-input:before, .container-input:after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: #a146a6;

    transition: .4s;
}

.container-input > div > input {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    font-size: 1.2rem;
    color: #555;
    font-family: 'poppins', sans-serif;
}

.container-input:before {
    right: 50%;
}

.container-input:after {
    left: 50%;
}

.container-input.focus:before, .container-input.focus:after {
    width: 50%;
}

.container-input.focus > div > h5 {
    top: -10px;
    font-size: 15px;
    color: #a146a6;
}

.container-input.focus > .icon-input > img {
    color: #38d39f;
}

.div-input {
    position: relative;
    padding-left: 2%;
}

input {
    outline: none;
    box-shadow: none;
    border: none;
}

input[type="email"], input[type="password"] {
    outline: none;
    height: 100%;
    width: 100%;
    border: none;
    -webkit-appearance: none;
}

input[type="checkbox"]:checked{
    background-color: #a146a6;
}

.btn:hover{
    background-color: #b846be;
    color: white;
}


@media screen and (max-width: 900px) {
    .left {
        display: none;
    }

    .right {
        width: 100%;
    }
}
</style>
