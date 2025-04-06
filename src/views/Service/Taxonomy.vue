<template>
    
 </template>
 
 <script>
    import "@/assets/css/style.css";
    import  axios from 'axios'
    import barbrush from '@/views/graphs/barbrush.vue'
    export default {
        computed:{
            imgPath(name){
                return '@/assets/images/each/'+name +'.png'
            }
        },
        components:{barbrush},
        data(){
            return{

            } 
        },
        created() {

        },
        mounted() {

        },
        methods: {

        }
    }
 </script>
 
 <style scoped>
    canvas {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; /* 将 Canvas 放置在页面背景下 */
    }
 </style>
 