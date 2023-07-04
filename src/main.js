// import $ from 'jquery';
// window.$ = window.jQuery = $;
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'slick-carousel/slick/slick.css';
// import "./assets/slick-1.8.1/slick/slick.css";
// import "./assets/slick-1.8.1/slick/slick.min.js";

import './index.css'
import {createRouter, createWebHistory} from "vue-router";
import HomeScreen from "@/views/HomeScreen.vue";
import LoginScreen from "@/views/LoginScreen.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeScreen
        },
        {
            path: '/login',
            name: 'login',
            component: LoginScreen

        }
    ]
})

createApp(App).use(router).mount('#app')
