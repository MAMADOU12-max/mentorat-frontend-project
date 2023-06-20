<template>
<<<<<<< HEAD:src/views/LoginScreen.vue
    <div class="container">
        <div class="left">
            <div class="left-container">
                <img v-bind:src="require('@/assets/community_manager.png')" alt="logo mentor-hub">
            </div>
        </div>
        <div class="right">
            <div class="logo">
                <img v-bind:src="require('@/assets/mentor-hub.png')" alt="logo mentor-hub">
            </div>
            <div class="form">
                <div class="container-form">
                    <h1>Se connecter</h1>
                    <form>
                        <div class="container-input">
                            <div class="icon-input">
                                <img v-bind:src="require('@/assets/important_mail_100px.png')" alt="logo mentor-hub">
                            </div>
                            <div class="div-input">
                                <h5>Emails</h5>
                                <input type="email" class="input" required>
                            </div>
                        </div>
                        <div class="container-input">
                            <div class="icon-input">
                                <img v-bind:src="require('@/assets/show_password_48px.png')" alt="logo mentor-hub">
                            </div>
                            <div class="div-input">
                                <h5>Password</h5>
                                <input type="password" class="input" required>
                            </div>
                        </div>
                        <input type="submit" value="Connectez-Vous">
                    </form>
                    <p>pas de compte ? <a href="#" style="color: #a146a6">crée un compte</a> </p>
                </div>

            </div>
            <div class="contact">
                <p style="margin-right: 1%">Retrouver nous sur</p>
                <img v-for="image in images2" :key="image.id" v-bind:src="require(`../assets/icon/${image.name}`)"
                    v-bind:alt="image.alt" />
            </div>
        </div>
    </div>
=======
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
                      <form class="w-100 h-60 d-flex flex-column justify-content-between align-items-center" >
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
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            images: ["facebook_48px.png", "pinterest_60px.png", "whatsapp_60px.png"],
            images2: [
                { name: "pinterest_60px.png", alt: "pinterest icon" },
                { name: "facebook_48px.png", alt: "facebook icon" },
                { name: "whatsapp_60px.png", alt: "whatsapp icon" },
            ]
        }
    },
    mounted() {
        const inputs = document.querySelectorAll(".input");

<<<<<<< HEAD:src/views/LoginScreen.vue
        function addclass() {
=======
        const modalBtn = document.querySelectorAll(".modalBtn");
        modalBtn.forEach((input) => {
            input.addEventListener("click", (e)=>{
                e.stopPropagation();
                e.preventDefault();
            });
        });

        function addclass(){
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
            let parent = this.parentNode.parentNode;
            parent.classList.add("focus");
        }

        function remclass() {
            let parent = this.parentNode.parentNode;
            if (this.value == "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", addclass);
            input.addEventListener("blur", remclass);
        });




    }
}

</script>

<<<<<<< HEAD:src/views/LoginScreen.vue

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
=======
<style>
.h-10{
    height: 10%;
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
}

.h-15{
    height: 15%;
}

<<<<<<< HEAD:src/views/LoginScreen.vue
.icon-input {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
}

.icon-input img {
    width: 65%;
    height: 65%;
}

.container {
    display: flex;
    width: 100%;
    height: 100vh;
}

.left {
    width: 50%;
    height: 100%;
=======
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
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
    filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, 0.2));
}

.left-container {
<<<<<<< HEAD:src/views/LoginScreen.vue
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
=======
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
    background-color: #a146a6;
    clip-path: polygon(0% 100%, 0 0, 100% 0, 93% 100%);
}

<<<<<<< HEAD:src/views/LoginScreen.vue
.left-container img {
    width: 100%;
    height: 80%;
}

.right {
    width: 50%;
    height: 100%;
}

.logo {
    display: flex;
    justify-content: right;
    align-items: center;
    height: 10%;
}

.logo img {
    width: fit-content;
    height: 80%;
    margin-right: 3%;
}

.form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
}

.form .container-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;
}

.form form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 100%;
}

.form form .container-input {
=======


form .container-input {
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
    position: relative;
    height: 15%;
    width: 50%;
    display: grid;
    grid-template-columns: 10% 90%;
    grid-gap: 0px 10px;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid;
}

.container-input>div {
    position: relative;
}

.container-input>div>h5 {
    position: absolute;
    top: 50%;
    color: #999;
    transform: translateY(-50%);
    font-size: 18px;
    transition: .3s;
}

<<<<<<< HEAD:src/views/LoginScreen.vue
.container-input:before,
.container-input:after {
=======
.container-input:before, .container-input:after {
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: #a146a6;

    transition: .4s;
}

<<<<<<< HEAD:src/views/LoginScreen.vue
.container-input>div>input {
=======
.container-input > div > input {
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    /* padding: 0.5 rem 0.7 rem; */
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

<<<<<<< HEAD:src/views/LoginScreen.vue
.container-input.focus:before,
.container-input.focus:after {
    width: 50%;
}

.container-input.focus>div>h5 {
    top: -5px;
=======
.container-input.focus:before, .container-input.focus:after {
    width: 50%;
}

.container-input.focus > div > h5 {
    top: -10px;
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
    font-size: 15px;
    color: #a146a6;
}

<<<<<<< HEAD:src/views/LoginScreen.vue
.container-input.focus>.icon-input>img {
=======
.container-input.focus > .icon-input > img {
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
    color: #38d39f;
}

.div-input {
    position: relative;
}

input {
    outline: none;
    box-shadow: none;
    border: none;
}

<<<<<<< HEAD:src/views/LoginScreen.vue
input[type="email"],
input[type="password"] {
=======
input[type="email"], input[type="password"] {
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
    outline: none;
    height: 100%;
    width: 100%;
    border: none;
    -webkit-appearance: none;
}


<<<<<<< HEAD:src/views/LoginScreen.vue

.contact {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 10%;
}

.contact img {
    width: fit-content;
    height: 45%;
}

=======
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
@media screen and (max-width: 900px) {
    .left {
        display: none;
    }

    .right {
        width: 100%;
    }
}
<<<<<<< HEAD:src/views/LoginScreen.vue
</style>
=======
</style>
>>>>>>> 64c3490c0b1f60bd6f62925e3a7e3a8173198607:src/components/LoginPage.vue
