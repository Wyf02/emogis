<template>
    <meta name="viewport" content="initial-scale=1,maximum-scale=3,minimum-scale=1" />  
    <section class="Articles" id="Articles">
      <br/>
        <h2>{{data0.area[Language]}}</h2>
        <br/>
        <p>{{data0.areaAbstact[Language]}}</p>
        <ul class="cards">
            <li class="card" id="cardpeople" v-for="(item,index) in Service" :key="index" >
            <img :src="item.img" alt="img"  class="people">
            <h3 ><router-link tag="a" target="_blank" to="/Connection" style="color:black;">{{ item.content[Language] }}</router-link></h3>
            <p>{{ item.position[Language] }}</p>
            <p>{{ item.abstract[Language]}}</p>
          </li>
        </ul>
        <br/>
        <div class="c1">
          <!-- <i class="icon">🌟</i> -->
          {{data0.contact[Language]}}
  <!-- <i class="icon">🌟</i> -->
          <!-- <p></p> -->
        </div>
        
      </section>
  <!-- 栏目 让他自己联系，4=3+1个人际关系，高管样式 -->
      <section >
        
      </section>
  
  </template>
  
  <script>
  import "@/assets/css/style.css";
import store from "@/store";
  export default {
    watch:{
      '$store.state.Language':{
        handler(newVal){
          console.log("new:",newVal);
          this.Language=newVal;
        },
        deep: true
      }
    },
    data() {
      let self = this;
      return {
        Language:this.$store.state.Language,
        data0:{
            contact:["如需更为专业，精细化的服务，接触更多的行业专家与利益相关认识，请直接与我们联系，我们会根据您的需求，订制更为特色化的人际关系服务与咨询","ENEN"],
            service:["人际关系","ENEN"],
            area:["人际关系","Connection"],
            serviceAbstact:["初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍","EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"],
            areaAbstact:["1111","111"]
        },
        Service:[
            {   img:require('@/assets/images/people/1.png'),
                content:["11111","EN"],
                position:["1111","ENEN"],
                abstract:["11","EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"],
                link:'/service'
            },
           
            
           
        ]
  
       
      };
    },
   
  };
  </script>
  
  <style>
 .c1 {
  color: black; /* 主要文本颜色为网页主色 */
  font-family:  'Poppins';/* 字体家族 */
  font-size: 16px; /* 字体大小 */
  text-align: center; /* 文本对齐方式 */
  line-height: 1.6; /* 行高 */
  background-color: transparent; /* 背景颜色设为透明 */
  padding: 20px; /* 内边距 */
  margin-top: 20px; /* 顶部外边距，可根据需要调整间距 */
  position: relative; /* 相对定位，以容纳装饰线条 */
}

/* 添加上方和下方装饰性线条 */
.c1::before,
.c1::after {
  content: '';
  position: absolute;
  width: 100%; /* 线条宽度，占满整个文本宽度 */
  height: 1px; /* 线条高度，可根据需要调整 */
  background-color: black; /* 线条颜色 */
}

.c1::before {
  top: 0; /* 距离文本上方的位置 */
  left: 0; /* 距离文本左边的位置 */
}

.c1::after {
  bottom: 0; /* 距离文本下方的位置 */
  left: 0; /* 距离文本左边的位置 */
}



  </style>
  