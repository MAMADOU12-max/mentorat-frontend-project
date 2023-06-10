<template>
  <div class="container">
      <div class="left">
          <div class="left-container">
              <img v-bind:src="require('@/assets/images/community_manager.png')" alt="logo mentor-hub">
          </div>
      </div>
      <div class="right">
          <div class="logo">
              <img v-bind:src="require('@/assets/images/mentor-hub.png')" alt="logo mentor-hub">
          </div>
          <div class="form">
              <div class="container-form">
                  <h1>Se connecter</h1>
                  <form>
                      <div class="container-input">
                          <div class="icon-input">
                              <img v-bind:src="require('@/assets/images/important_mail_100px.png')" alt="logo mentor-hub">
                          </div>
                          <div class="div-input">
                              <h5>Emails</h5>
                              <input type="email" class="input" required>
                          </div>
                      </div>
                      <div class="container-input">
                          <div class="icon-input">
                              <img v-bind:src="require('@/assets/images/show_password_48px.png')" alt="logo mentor-hub">
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
              <img v-for="image in images2" :key="image.id" v-bind:src="require(`../assets/icons/${image.name}`)" v-bind:alt="image.alt" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "LoginPage",
    data(){
        return {
            images: ["facebook_48px.png", "pinterest_60px.png", "whatsapp_60px.png"],
            images2 : [
                { name: "pinterest_60px.png", alt: "pinterest icon" },
                { name: "facebook_48px.png", alt:"facebook icon" },
                { name: "whatsapp_60px.png", alt: "whatsapp icon" },
            ]
        }
    },
    mounted(){
        const inputs = document.querySelectorAll(".input");

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

        });
    }
}

</script>
