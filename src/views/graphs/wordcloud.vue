<template>
  <div class="chartTable">
    <div ref="echarts1" style="width: 1000px; height: 600px;margin-left:10%;margin-right:10%;margin-top:-2%;"></div>

</div>
<!-- <div class="chartTable">
    <div style="width: 1000px; height: 500px; margin-left:10%; margin-right:10%; overflow: auto;">
        <div ref="echarts" style="width: 1200px; height: 800px;"></div>
    </div>
</div> -->

</template>

<script>
import axios from 'axios'
import echarts from 'echarts';
import 'echarts-wordcloud';

export default {
  props:{
        jsonFilePath:String,
        required:true
    },
  data(){
      return{
          data0:[],
          msg: 'Welcome to Your Vue.js App',
          
      }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // 使用ECharts初始化图表
      const echarts = require('echarts');
      const chartContainer = this.$refs.echarts1;

      const myChart = echarts.init(chartContainer);
      const jsonFilePath = '/'+this.jsonFilePath+'.json';
      let _this=this
      axios
      .get(jsonFilePath)
      .then((response) => {
          _this.data0=response.data
          // console.log(_this.data0)
          const option = {
        // title: {
        //   text: 'artPaper_counts',
        //   subtext: '',
        //   left: 'left'
        // },
        tooltip: {
          trigger: 'item'
        },
        toolbox: {
            feature: {
                saveAsImage: {
                  show: true,
                  title: {
                // 自定义保存按钮的文本
                save: 'save'
            }
                }, // 允许保存图表为图片
                // dataZoom: {show: true,}     // 允许缩放和拖拽
            }
        },
    //     dataZoom: [
    //     {
    //         type: 'slider', // 使用滑动条型式的数据缩放
    //         start: 0,      // 数据窗口范围的起始百分比
    //         end: 100       // 数据窗口范围的结束百分比
    //     },
    //     {
    //         type: 'inside' // 使用内置的鼠标滚轮数据缩放
    //     }
    // ],
       
        series: [

        {
                type: "wordCloud",
                //用来调整词之间的距离
                gridSize: 8,
                shape:'rect',
                //用来调整字的大小范围
                // Text size range which the value in data will be mapped to.
                // Default to have minimum 12px and maximum 60px size.
                sizeRange: [10, 40],
                // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
                //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
                // rotationRange: [-45, 0, 45, 90],
                // rotationRange: [ 0,90],
                rotationRange: [0, 0],
                drawOutOfBound:false,
                //随机生成字体颜色
                // maskImage: maskImage,
                textStyle: {
                  
                    color: function() {
                      let colors=['#fea53e','#945bf6','#5183f6','#56cef8','#fad354','#f76965','#f5f1ee','#d47d7b'];
                      const randomColor = Math.round(Math.random() * 5);
                  
                      return colors[randomColor];
                    },
                    fontWeight: 'bold',
                   
                
                },
                //位置相关设置
                // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
                // Default to be put in the center and has 75% x 80% size.
                left: "center",
                top: "center",
                right: null,
                bottom: null,
                // width: "60%",
                // height: "80%",
                width: "80%",
                height: "80%",
                //数据
                data: this.data0
              }
        ]
      };

      // 将选项设置到图表中
      myChart.setOption(option);

      }).catch((error) => {
              console.error('Error reading local JSON file:', error);
          });

      
    }
          
  }
};
</script>

<style scoped>
/* 在这里添加样式，如果需要的话 */
.chartTable table {
          border-collapse: collapse;
      }
.chartTable table, th, td {
          border: 1px solid #ccc;
          padding: 8px;
      }
.floating-element {
  position: absolute;
  /* position: relative; */
    /* top: 90%; */
    top: 700px;
    left: 320px;
    padding: 10px;
    width:350px;
}

</style>
