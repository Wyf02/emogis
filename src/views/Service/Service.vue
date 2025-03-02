<template>
    <!-- <div style="{ backgroundImage: `url(${banner})` }" > -->
      
  <!-- <section></section> -->
  <!-- <br/> -->
  <!-- <h2>
    EXPLORE DATASET
  </h2> -->
  
  <div class="overlay-text">
    <h2>Coding review…… </h2>
  </div>
   
  <img src="@/assets/images/first/home.png" style="height:30vh; width:100%;object-fit: cover;">
  <div class="contentcv"> 
  <!-- <br/> -->
  <br/>
         <div class="filter-bar">
             
             <!-- <div class="filter-label" :style="{'margin-top': '-0.7%'}">Filter by Year:</div>
             <barbrush @messageToParent="handleMessageFromChild"/> -->
             <div class="filter-label">Filter by Place:</div>
             <div class="filter-options">
                 <button
                     class="filter-button"
                     :style="getTechColor('place',index)"
                     v-for="(place, index) in places"
                     :key="index"
                     @click="toggleFilter('place', index)"
                     :class="{ 'selected': isSelected('place', index) }"
                 >
                     {{ place }}
                 </button>
             </div>
   
             <div class="filter-label">Filter by Person:</div>
             <div class="filter-options">
                 <button
                     class="filter-button"
                     :style="getTechColor('person',index)"
                     v-for="(person, index) in persons"
                     :key="index"
                     @click="toggleFilter('person', index)"
                     :class="{ 'selected': isSelected('person', index) }"
                 >
                     {{ person }}
                 </button>
             </div>
     
             <div class="filter-label">Filter by Process1:</div>
             <div class="filter-options">
                 <button
                     class="filter-button"
                     :style="getTechColor('Process1',index)"
                     v-for="(technique, index) in Process1s"
                     :key="index"
                     @click="toggleFilter('Process1', index)"
                     :class="{ 'selected': isSelected('Process1', index) }"
                 >
                     {{ technique }}
                 </button>
             </div>
 
             <div class="filter-label">Filter by Process2:</div>
             <div class="filter-options">
                 <button
                     class="filter-button"
                     :style="getTechColor('Process2',index)"
                     v-for="(purpose, index) in Process2"
                     :key="index"
                     @click="toggleFilter('Process2', index)"
                     :class="{ 'selected': isSelected('Process2', index) }"
                 >
                     {{ purpose }}
                 </button>
             </div>

         </div>
 
         <section class="Articles" id="Articles" :style="{ 'padding': '0px'}">
         <ul class="cards" >
             <!-- <li class="card" v-for="(item, index) in filteredData" :key="index" :style="cardStyle(item.cluster)"> -->
            <li class="card" v-for="(item, index) in filteredData" :key="index">
             <!-- <img :src="item.img" alt="img"  style="aspect-ratio: 16 / 12;"> -->
             <img v-if="item.isImageLoaded" :src="require('@/assets/images/each/'+item.images )"  alt="img"   style="aspect-ratio: 16 / 9;"> 
             <img v-else :src="require('@/assets/images/each/Loading.jpg')" alt="LOADINGing" style="aspect-ratio: 16 / 9;">
             <p>
                <div class="text-container">
                    <div class="left-block">
                        <span style="text-align: left;font-size: 1.2rem;font-weight: bolder;color:black">{{ item.name  }}</span>
                        
                        <!-- <a :href="item.Link1[0]" target="_blank" style="display: inline-block; text-decoration: none;margin: 0; padding: 0;"> 
                            <img v-if="item.Link1" :src="require('@/assets/images/link.svg' )"  alt="link" style="padding: 0; margin-left: 5px;margin-bottom:2px;width:1.2rem;vertical-align: middle;">
                        </a> -->

                        <a v-if="item.Link1" v-for="(item1, index1) in item.Link1" :key="index" :href="item.Link1[index1]" target="_blank" style="display: inline-block; text-decoration: none;margin: 0; padding: 0;"> 
                            <i class="fas fa-book" style="color:black;padding: 0; margin-left: 5px;font-size: small"></i>
                        </a>
                        <a v-if="item.Link2" v-for="(item1, index1) in item.Link2" :key="index" :href="item.Link2[index1]" target="_blank" style="display: inline-block; text-decoration: none;margin: 0; padding: 0;"> 
                            <i class="fas fa-book" style="color:brown;padding: 0; margin-left: 5px;font-size: small"></i>
                        </a>
                        <a v-if="item.Link3" v-for="(item1, index1) in item.Link3" :key="index" :href="item.Link3[index1]" target="_blank" style="display: inline-block; text-decoration: none;margin: 0; padding: 0;"> 
                            <i class="fas fa-desktop" style="color:black;padding: 0; margin-left: 5px;font-size: small"></i>
                        </a>
                        <a v-if="item.Link4" v-for="(item1, index1) in item.Link4" :key="index" :href="item.Link4[index1]" target="_blank" style="display: inline-block; text-decoration: none;margin: 0; padding: 0;"> 
                            <i class="fa-regular fa-comment-dots" style="color:black;padding: 0; margin-left: 5px;font-size: small"></i>
                        </a>
                        
                    </div>
                    <!-- <div class="right-block">
                            <span style="float: right;">{{ item.time ? item.time.join(', ') : '' }}</span>
                    </div> -->
                </div></p>
             
             <p style="line-height:1.2 ;font-size: 1rem;">{{ item.author ? item.author  : '' }} </p>
                 <p style="line-height: 1.2 ;font-size: 1rem;color:brown">{{ item.place? item.place.join(', ')  : '' }}</p>
                 <p style="line-height: 1.2 ;font-size: 0.9rem;">
                        <!-- <span v-if="item.Process2.length > 0">{{ item.Process2 ? item.Process2.join(', ') : '' }}; </span>
                        <span v-if="item.place.length > 0">{{ item.place ? item.place.join(', ') : '' }}</span> -->
                    </p>
                    <p><span class="custom-tag1" :style="{'color':'#478F8D','border':`1px solid #478F8D`}" v-for="(item1, index1) in item.person" :key="index">{{ item1 }}</span></p>
                    <p><span class="custom-tag1" :style="{'color':'#1B4C79','border':`1px solid #1B4C79`}" v-for="(item1, index1) in item.Process1" :key="index">{{ item1 }}</span></p>
                    <p><span class="custom-tag1" :style="{'color':'#8A594E','border':`1px solid #8A594E`}" v-for="(item1, index1) in item.Process2" :key="index">{{ item1 }}</span></p>
                    <!-- <p style="line-height: 1.2 ;font-size: 0.9rem;">Place:  {{ item.place.length > 0 ? item.place.join(', ') : 'not specified' }}</p>
                    <p style="line-height: 1.2 ;font-size: 0.9rem;">Process1:  {{ item.Process1.length > 0 ? item.Process1.join(', ') : 'not specified' }}</p>
                    <p style="line-height: 1.2 ;font-size: 0.9rem;">Process2:  {{ item.Process2.length > 0 ? item.Process2.join(', ') : 'not specified' }}</p> -->
                 <p :style="{'margin-top':'15px','margin-left':'-6px'}">
                    
                    <!-- <table class="table1">
                    <tbody style=" vertical-align: top;width:100%;">
                        <tr :style="{'margin-top':'1px'}" v-if="item.Process1.length > 0">
                            <td><span class="custom1-tag">Design technique:</span></td>
                            <td style="text-align: left;"><span class="custom-tag" :style="tagStyle(item1)" v-for="(item1, index1) in item.Process1" :key="index" >{{ item1 }}</span></td>
                        </tr>
                        
                    </tbody>
                 </table> -->
                </p>

           </li>
         </ul>
       </section>
   
<!-- </div> -->
</div>
<canvas ref="particleCanvas"></canvas> 
 
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
        borderColors:{
            'Creating an audiovisual experience':"#9796BB", 'Making data tangible':"#DFB0C7",
       'Building an interactive tour':"#8db183", 'Polishing graphics':"#05a18c",
       'Bringing abstract data into a concrete scene':"#cea972"
        },
        categories:{},

        techniqueColors:{
        "place":"brown",
        "person":'#478F8D',
        "Process1":'#1B4C79',
        "Process2":'#8A594E'
        },
        canvas: null,
      ctx: null,
      particles: [],
      numParticles: 0,
        // t:"XEPA", 
        banner:require('@/assets/images/first/home.png'),        
        // times:['1996', '2002', '2003', '2004', '2006', '2007', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        persons:[
            'group/collective', 'individual',
            'class', 'traveller', 'special status', 'cultural', 'racial', 'age', 'residential', 'gender'  , 'not specified or anyone'  
        ],
        places: ['imagined/psychological place', 'realistic place', 'memorized place',
        'rural/non-urban', 'country/continent', 'architecture/area', 'island/marine', 'world', 'city/town'
    ],
        Process1s: 
        [
    'fieldwork', 'system/app using', 'Embodied movement', 'interview', 'historical material mining', 'draw/sketch', 'video recording/taking pictures', 'sensor/device', 'social activity', 'prepared toolkit', 'questionnaire/open call', 'inherent emotional attitude', 'personal experience'       
    ],
        Process2:['typography', 'collage', 'animation/simulation', 'sound', 'layout', 'wording', 'avatar', 'color', 'style', 'body language', '2.5D/3D', 'images/photos', 'annotated content/associated stories', 'shape', 'symbol/metaphor', 'personalization', 'physicalization',
         'cloth', 'screen printing', 'gauze', 'flour', 'paper', 'glass', 'organic', 'water/ice',
    'GUI interaction', 'add stickers',
    'performance', 'artifact', 'static image', 'installation', 'video', 'event', 'interactive interface'
    ],
        
        selectedFilters: {
            time: [],
            person: [],
            place: [],
            Process1: [],
            Process2: [],
            // 添加其他属性的选中状态
        },
        jsonData: [ ],
        filteredData: [] // 存储筛选后的数据
    } 
   },
             created() {
                 // 初始化时默认全选
                 this.selectAllFilters();
                 // 一开始默认展示所有数据
                // const jsonFilePath = '/output.json'
                const jsonFilePath = `${process.env.BASE_URL}output.json`;
                // console.log(jsonFilePath)
                 axios
                   .get(jsonFilePath)
                   .then((response) => {
                     this.jsonData = response.data;
                     this.jsonData.forEach(item => {
                        item.isImageLoaded = false; // 默认值为 false
                    });
                     this.filteredData = this.jsonData;
                     this.loadImages(); 
                   })
                   .catch((error) => {
                     console.error('Error reading local JSON file:', error);
                   });
                   
                   
                 
             },
             mounted() {
                
    this.initializeCanvas();
    this.generateParticles();
    this.draw();
    window.addEventListener('resize', this.handleResize);
  
  },
        methods: {
            getCategoryColor(category,index) {
        // 检查 category 是否存在于 borderColors 中，如果存在则返回对应颜色，否则返回默认颜色
        if (this.isSelected('cluster', index)){
            return{
                backgroundColor:this.borderColors[category] || '#969696',
                color: '#fff',
                border: `1px solid  ${this.borderColors[category]}`
        } 
        }
        else{
            return{
            color:this.borderColors[category] || '#969696',
            border: `1px solid  ${this.borderColors[category]}`
        } 
        }
           
        },
        getTechColor(technique,index) {
        // 检查 category 是否存在于 borderColors 中，如果存在则返回对应颜色，否则返回默认颜色
        if (this.isSelected(technique, index)){
            return{
                backgroundColor:this.techniqueColors[technique] || '#969696',
                color: '#fff',
                border: `1px solid  ${this.techniqueColors[technique]}`
        } 
        }
        else{
            return{
            color:this.techniqueColors[technique] || '#969696',
            border: `1px solid  ${this.techniqueColors[technique]}`
        } 
        }
           
        },
            tagStyle(technique) {
                return {
                    backgroundColor: this.techniqueColors[technique],
               
            };
                },
                cardStyle(cluster) {
            return {
                // borderColor: this.borderColors[cluster],
                // borderStyle: "solid",
                // borderWidth: "5px",
                borderRadius: "12px",
                boxShadow: `0 0 20px ${this.borderColors[cluster]}`
            };
        },
                handleMessageFromChild(message) {
    this.selectedFilters.time=message;
    this.applyFilters();
    },
                initializeCanvas() {
      this.canvas = this.$refs.particleCanvas;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },
    generateParticles() {
      this.numParticles = this.canvas.width / 20;
      const colorPalette = [
        "#6E746A88", "#478F8D88", "#00BEB988", "#83B3E388", "#AAD2E088", "#A2CCC088", 
        "#ADD9A188", "#DDD8BA88", "#EAC79388", "#F1D9CA88", "#DFB0C788", "#A857AA88", 
        "#9796BB88", "#D4D4D488"
    ];
    function normalDistribution(mean, stdDev) {
        let u1 = 1 - Math.random();
        let u2 = 1 - Math.random();
        let normalRandom = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        return mean + stdDev * normalRandom;
    }

      for (let i = 0; i < this.numParticles; i++) {
        let radius = normalDistribution(2.5, 2); // 平均值为5，标准差为2
        radius = Math.max(1, radius); // 确保半径不小于1
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius: radius,
          color:colorPalette[Math.floor(Math.random() * colorPalette.length)],
          speedX: Math.random() * 3 - 1.5,
          speedY: Math.random() * 3 - 1.5
        });
      }
    },
    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach(particle => {
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = particle.color;
        this.ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > this.canvas.width) {
          particle.x = Math.random() * this.canvas.width;
        }
        if (particle.y < 0 || particle.y > this.canvas.height) {
          particle.y = Math.random() * this.canvas.height;
        }
      });
      requestAnimationFrame(this.draw);
    },
    handleResize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },
    beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },

                loadImages() {
                this.jsonData.forEach(item => {
                    const img = new Image();
                    img.onload = () => {
                    item.isImageLoaded = true; // 图片加载完成后设置isImageLoaded为true
                    };
                    // console.log(item)
                    img.src = require('@/assets/images/each/' + item.images);
                });
                },
                isSelected(filterType, index) {
                    // 根据filterType和index检查按钮是否选中
                    return this.selectedFilters[filterType].includes(index);
                },
                 toggleAllFilters() {
                     // 切换全选状态
                     if (this.isAllSelected()) {
                         this.deselectAllFilters();
                     } else {
                         this.selectAllFilters();
                     }
                     this.applyFilters(); // 应用筛选
                 },
                 selectAllFilters() {
                     // 选中所有筛选条件
                    //  this.selectedFilters.time = [];
                     this.selectedFilters.person = [];
                    //  this.selectedFilters.cluster = [];
                     this.selectedFilters.place = [];
                     this.selectedFilters.Process1 = [];
                     this.selectedFilters.Process2 = [];
                    //  this.selectedFilters.whereField = [];
                     // 添加其他属性的选中状态
                 },
                 deselectAllFilters() {
                     // 取消选中所有筛选条件
                    //  this.selectedFilters.time = -1;
                     this.selectedFilters.person = -1;
                    //  this.selectedFilters.cluster = -1;
                     this.selectedFilters.place = -1;
                     this.selectedFilters.Process1 = -1;
                     this.selectedFilters.Process2 = -1;
                    //  this.selectedFilters.whereField = -1;
                     // 添加其他属性的选中状态
                 },
                 isAllSelected() {
                     // 检查是否所有筛选条件都已选中
                     return (
                        //  this.selectedFilters.time.length === 0 &&
                         this.selectedFilters.person.length === 0 &&
                        //  this.selectedFilters.cluster.length === 0 &&
                         this.selectedFilters.place.length === 0 &&
                         this.selectedFilters.Process1.length === 0 &&
                         this.selectedFilters.Process2.length === 0
                        //  this.selectedFilters.whereField.length === 0
                         // 检查其他属性的选中状态
                     );
                 },
                 toggleFilter(filterType, index) {
                     // 切换单个筛选条件
                    //  if (this.selectedFilters[filterType] === index) {
                    //      this.selectedFilters[filterType] = null;
                    //  } else {
                    //      this.selectedFilters[filterType] = index;
                    //  }
                    const selectedFilters = this.selectedFilters[filterType];
                    const selectedIndex = selectedFilters.indexOf(index);

                    if (selectedIndex === -1) {
                    // 如果未选中，则添加到已选中列表
                    selectedFilters.push(index);
                    } else {
                    // 如果已选中，则从已选中列表中移除
                    selectedFilters.splice(selectedIndex, 1);
                    }
                     this.applyFilters(); // 应用筛选
                 },
                 applyFilters() {
                     // 执行筛选操作
                     this.filteredData = this.jsonData.filter((item) => {
 
 // if (Array.isArray(item.designCategory)) {
 //   console.log('item.designCategory is an array',item);
 // } else {
 //   console.log('item.designCategory is not an array');
 // }
 
                        //  const timeFilter =
                        //      this.selectedFilters.time.length === 0 ||
                        //     //  item.time.some((time) => time === this.times[this.selectedFilters.time]);
                        //      this.selectedFilters.time.some((selectedIndex) => item.time.includes(this.times[selectedIndex]));
                         const personFilter =
                             this.selectedFilters.person.length === 0 ||
                             this.selectedFilters.person.some((selectedIndex) => item.person.includes(this.persons[selectedIndex]));
                        //  const clusterFilter =
                        //      this.selectedFilters.cluster.length === 0 ||
                        //      this.selectedFilters.cluster.some((selectedIndex) => item.cluster.includes(this.designCategories[selectedIndex]));
                         const placeFilter =
                             this.selectedFilters.place.length === 0 ||
                             this.selectedFilters.place.some((selectedIndex) => item.place.includes(this.places[selectedIndex]));
                         const Process1Filter =
                         this.selectedFilters.Process1.length === 0 ||
                             this.selectedFilters.Process1.some((selectedIndex) => item.Process1.includes(this.Process1s[selectedIndex]));
                         const Process2Filter =
                             this.selectedFilters.Process2.length === 0 ||
                             this.selectedFilters.Process2.some((selectedIndex) => item.Process2.includes(this.Process2[selectedIndex]));
                        //  const whereFieldFilter =
                        //      this.selectedFilters.whereField.length === 0 ||
                        //      this.selectedFilters.whereField.some((selectedIndex) => item.whereField.includes(this.whereField[selectedIndex]));
                         // 添加其他属性的筛选逻辑
                         return (
                            //  timeFilter &&
                             personFilter &&
                            //  clusterFilter &&
                             placeFilter &&
                             Process1Filter &&
                             Process2Filter
                            //  whereFieldFilter
                             // 添加其他属性的筛选逻辑
                         );
                     });
                 }
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

.contentcv {
  position: relative;
  z-index: 1; /* 将内容放置在 Canvas 上方 */
}
.overlay-text {
    position: absolute;
    top: 15vh;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: rgba(0, 0, 0, 0.7); */
    color: white;
    /* padding: 10px; */
    text-align: center;
    line-height:50px;
    font-size: 30px;
    font-weight: bold;
    width:100%;

}
@media (max-width: 400px) {
  .overlay-text {
    font-size: 20px;
  }
}
 .table1{
    width:100%;
 }
 .table1 td{
    border: 1px solid transparent; 
 }
 .custom1-tag {

            padding: 3px 10px; /* 内边距，可根据需要调整 */
            font-size: 0.7rem;
            /* margin:3px; */
            margin-right:3px;
            margin-left: -4px;
            font-weight: normal;
            white-space: nowrap;
           
            }
 .custom-tag {
            text-align: right;
            background-color: #3498db; /* 背景颜色 */
            border-radius: 6px; /* 圆角 */
            color: white; /* 字体颜色 */
            padding: 3px 10px; /* 内边距，可根据需要调整 */
            font-size: 0.7rem;
            margin:3px;
            white-space: normal; /* 默认的 white-space 值，允许内容换行 */
            word-wrap: break-word; /* 当内容太长时，允许单词内换行 */
            display: inline-block; /* 使元素以内联块元素显示 */
            }
 .custom-tag1 {
            text-align: right;
            background-color: transparent; /* 背景颜色 */
            border-radius: 6px; /* 圆角 */
            color: black; /* 字体颜色 */
            padding: 3px 10px; /* 内边距，可根据需要调整 */
            font-size: 0.9rem;
            margin:3px;
            white-space: normal; /* 默认的 white-space 值，允许内容换行 */
            word-wrap: break-word; /* 当内容太长时，允许单词内换行 */
            display: inline-block; /* 使元素以内联块元素显示 */
            }
 .text-container {
            display: flex;
            justify-content: space-between;
            
        }
        .left-block {
            flex: 5;
        }
        .right-block {
            flex: 1;
            text-align: right;
        }
    .filter-bar {
            /* background-color: #07021ad4; */
             background-color: #ffffff;
             padding: 30px;
             /* border: 1px solid #ddd; */
             border-radius: 20px;
             margin-left: 6%;
             margin-right: 6%;
             box-shadow: 0px 5px 14px rgba(182, 182, 182, 0.2); /* 添加底部阴影，可以根据需要调整参数 */
             /* color:white */
         }
         .filter-label {
             font-weight: bold;
             text-align: left;
             margin-top: 1%;
             margin-bottom: 0.2%;
             /* color:white; */
         }
         .filter-options {
             display: flex;
             gap: 10px;
             /* display: flex; */
            flex-wrap: wrap;
         }
         .filter-button {
             background-color: transparent;
             border: 1px solid #969696;
             border-radius: 5px;
             padding: 5px 10px;
             color: #969696;
             cursor: pointer;
             font-size: 0.9rem;
         }
         .selected {
             background-color: #969696;
             color: #fff;
         }
         .data-container {
             border: 1px solid #ddd;
             padding: 10px;
             border-radius: 5px;
         }
 </style>
 