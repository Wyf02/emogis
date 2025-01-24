<template>
    <div class="chartTable">
      <div ref="echarts" style="width: 100%; height: 1000px;"></div>

    <table class="floating-element ">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data0" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  import echarts from 'echarts';

  export default {
    data(){
        return{
            data0:[]
        }
    },
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        // 使用ECharts初始化图表
        const echarts = require('echarts');
        const chartContainer = this.$refs.echarts;
  
        const myChart = echarts.init(chartContainer);
        // const jsonFilePath = '../artPaper_counts.json';
        // const jsonFilePath = '/Collection/artPaper_counts.json';
        const jsonFilePath = '/artPaper_counts.json';
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
          legend: {
            orient: 'vertical',
            left: '5%',
            bottom:'80%',
            itemWidth: 40, // 设置图例项的宽度
            itemHeight: 20, // 设置图例项的高度
            textStyle: {
              fontSize: 14, // 设置图例文字的字号，可根据需要调整
            },
          },
          series: [

            {
              name: 'Access From',
              type: 'pie',
              center: ['70%', '35%'],
              radius: '50%',
              data:_this.data0,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
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
  