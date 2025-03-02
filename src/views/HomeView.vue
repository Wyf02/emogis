<template>
  <meta name="viewport" content="initial-scale=1,maximum-scale=3,minimum-scale=1" />
<div style="background-color: #f0f0f0;">
  <section class="homepage" id="home" >
      <div class="content">
        <div class="text">
          <h1>{{Page1.title}}</h1>
          <p >{{Page1.content}}</p>
        </div>
        <a href="/DataSet">{{details }} >></a>
      </div>
    </section>

    <!-- <section class="Aboards" id="Aboards"> -->
      
      <!-- <table class="AboardsTable">
        <tr>
         <td colspan="3"> <h2>{{Page2.title[Language]}}</h2> </td> 
        </tr>
      
      <tr v-for="item in Page2.content">
        <td style="text-align: center;color:rgb(164, 162, 162);">{{ item.time }}</td>
        <td style="text-align: left;">{{ item.name[Language] }}</td>
        <td style="text-align: center;color:rgb(164, 162, 162);">more >></td>
      </tr>
    </table> -->
  <!-- </section> -->

  <!-- <section class="Articles" id="Articles"> -->
    <section class="Articles" >
      <h2  >11111</h2>
    <div class="showPages" >
        <div class="imageRight">
          <img class="imageShow" :src="Page2.img" alt="图片描述">
        </div>
        <div class="textLeft">
          <h1>{{Page2.title[Language]}}</h1>
          <p>{{Page2.content}}</p>
        </div>
        
      </div>
    </section>

  <!-- <section></section> -->
   <section class="Articles" >
    <h2  >11111</h2>
    <div class="showPages" >
        <div class="imageRight">
          <img class="imageShow" :src="Page2.img" alt="图片描述">
        </div>
        <div class="textLeft">
          <h1>{{Page2.title}}</h1>
          <p>{{Page2.content}}</p>
        </div>
        
      </div>
    </section>
  <!-- <section></section> -->
  
 <section class="homepage"  :style="{ backgroundImage: `url(${Page3.img})` }" >
      <div class="content">
        <div class="text">
          <h1>{{Page3.title[Language]}}</h1>
          <p>{{Page3.content[Language]}}</p>
        </div>
        <a href="/service">{{ details[Language] }} >></a>
      </div>
    </section>

   
    <section class="homepage"  :style="{ backgroundImage: `url(${Page6.img})` }" >
      <div class="content">
        <div class="text">
          <h1>{{Page6.title[Language]}}</h1>
          <p>{{Page6.content[Language]}}</p>
        </div>
        <a href="/Connection">{{ details[Language] }} >></a>
      </div>
    </section>
    
    <section class="homepage"  :style="{ backgroundImage: `url(${Page5.img})` }" >
      <div class="content">
        <div class="text">
          <h1>{{Page5.title[Language]}}</h1>
          <p>{{Page5.content[Language]}}</p>
        </div>
        <a href="/Report">{{ details[Language] }} >></a>
      </div>
    </section>

  </div>
</template>

<script>
import "@/assets/css/style.css";
export default {
  watch:{
      '$store.state.Language':{
        handler(newVal){
          this.Language=newVal;
        },
        deep: true
      }
    },
    created(){
        // axios.get('Aboard/list').then(res=>{
        //     this.data = res.data;
      
        // }).catch(error => {
      //     console.error('Failed :', error);
      //   });

    },
  data() {
    let self = this;
    return {
      Language:this.$store.state.Language,
      details:"Explore",
      Page1:{title:"Emotional Landscapes",content:"Understanding Affective Geovisualization Design Through the Lens of People-Place Relationships",img:require('@/assets/images/first/home.jpg')},
      Page2:{title:["Aboard","Aboard"],content:['11','EN'],img:require('@/assets/images/first/home.jpg')},
      Page3:{title:["What We Do","What We Do"],content:['11','111'],img:require('@/assets/images/first/home.jpg')},
      Page4:{title:["About","About"],content:['11','EN'],img:require('@/assets/images/first/home.jpg')},
      Page5:{title:["Insights","Insights"],content:['11','11'],img:require('@/assets/images/first/home.jpg')},
      Page6:{title:["Our Connections","Our Connections"],content:['11','11'],img:require('@/assets/images/first/home.jpg')}

     
    };
  },
 
};
</script>

<style>
#home{
  background-image: url('@/assets/images/first/home.jpg');
}
@media screen and (max-width: 860px) {
  #home{
    background-image: url('@/assets/images/first/home.jpg');
  }
}
.AboardsTable{
  background-color: #fff;
  box-shadow: 10px 10px 5px #888888;
  width:80%;
  border-spacing: 20px;
  border: 1px solid rgba(197, 203, 208, 0.773);
}
td, th {
  border: none; /* 隐藏单元格内边框 */
  padding: 1px; /* 可选，设置单元格内边距 */
}

.showPages {
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 50%;
  background-color: #fff; /* 设置内容区域的背景颜色 */
  /* border-radius: 10px; 设置内容区域的圆角 */
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 设置内容区域的阴影效果 */
  padding: 20px;
  color:black
}

.textLeft {
  flex: 1;
}

.imageRight {
  /* height: 100%; */
  flex: 1;
  text-align: center;

}

.imageLeft {
  float:left; 
  margin: 5px;
  height: 100%;
  flex: 1;
  text-align: center;
}

/* 设置图片的最大宽度 */
.imageShow {
  max-width: 100%;
  /* min-height: 50%; */
  height: auto;
}




</style>
