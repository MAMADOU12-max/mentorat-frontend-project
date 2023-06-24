import $ from 'jquery';
window.$ = window.jQuery = $; 
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'slick-carousel/slick/slick.css';
import './index.css';
import "./assets/slick-1.8.1/slick/slick.css";
// import "./assets/slick-1.8.1/slick/slick.min.js";


createApp(App).mount('#app')
