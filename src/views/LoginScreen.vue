<template>
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

        function addclass() {
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


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

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
    filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, 0.2));
}

.left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #a146a6;
    clip-path: polygon(0% 100%, 0 0, 100% 0, 93% 100%);
}

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
    position: relative;
    height: 15%;
    width: 50%;
    display: grid;
    grid-template-columns: 9% 91%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid;
}

.container-input>div {
    position: relative;
}

.container-input>div>h5 {
    position: absolute;
    left: 10px;
    top: 65%;
    color: #999;
    transform: translateY(-50%);
    font-size: 18px;
    transition: .3s;
}

.container-input:before,
.container-input:after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: #a146a6;

    transition: .4s;
}

.container-input>div>input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
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

.container-input.focus:before,
.container-input.focus:after {
    width: 50%;
}

.container-input.focus>div>h5 {
    top: -5px;
    font-size: 15px;
    color: #a146a6
}

.container-input.focus>.icon-input>img {
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

input[type="email"],
input[type="password"] {
    outline: none;
    height: 100%;
    width: 100%;
    border: none;
    -webkit-appearance: none;
}

.form form input[type="submit"] {
    width: fit-content;
    font-size: 1rem;
    padding: 1.5%;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #a146a6;
}


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

@media screen and (max-width: 900px) {
    .left {
        display: none;
    }

    .right {
        width: 100%;
    }
}
</style>