<template>
    <div class="chart-container">
      <div ref="echarts1"  style="width: 1200px; height: 550px;"></div>
      <div class="custom-legend" v-if="jsonFilePath =='designTechnique_counts_sorted'">
      <div v-for="(item, index) in legendItems" :key="index" class="legend-item">
        <div class="legend-color" :style="{ backgroundColor: item.color }"></div>
        <div class="legend-label">{{ item.label }}</div>
      </div>
    </div>
    </div>

  <!-- <div class="chartTable">
    <table>
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
  </div> -->
  </template>
  
  <script>
  import axios from 'axios'
  import echarts from 'echarts';

  export default {
    props:{
        jsonFilePath:String,
        required:true
    },
    data(){
        return{
            data0:[],
            legendItems: [
        { color: '#5470c6', label: 'Sensation' },
        { color: '#fac858', label: 'Interaction' },
        { color: '#91cc75', label: 'Narrative' },
        { color: '#ee6666', label: 'Physicality' },

      ],
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
        // const jsonFilePath = '../'+this.jsonFilePath+'.json';
        // const jsonFilePath = '/Collection/'+this.jsonFilePath+'.json';
        const jsonFilePath = '/'+this.jsonFilePath+'.json';
        let _this=this
axios
.get(jsonFilePath)
.then((response) => {
  _this.data0=response.data
  // console.log(_this.data0)
  let data0=_this.data0
  const option = {
  tooltip: {
    trigger: 'item'
  },
  grid: {
    bottom:'30%'
  },
    xAxis: {
      type: 'category',
      data:data0.map(obj => {return obj.name}),
      axisLabel: {
        show: true,
        interval:0,
        rotate:-45,
        inside:false,
        margin: 6,
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data:data0,
        // data:data0.map(obj => {return obj.value}),
        type: 'bar'
      }
    ]
  };
  if (jsonFilePath =="/designTechnique_counts_sorted.json"){
      // cate1=["Sensation","Narrative","Interaction","Physicality"]
      //  let legend=data0.map(obj => {return obj.category})
      //  console.log(legend)
      option["legend"]= {
        show:true,
          data: [
            { name: 'Sensation', icon: 'circle', textStyle: { color: '#5470c6' } },
            { name: 'Interaction', icon: 'circle', textStyle: { color: '#fac858' } },
            { name: 'Narrative', icon: 'circle', textStyle: { color: '#91cc75' } },
            { name: 'Physicality', icon: 'circle', textStyle: { color: '#ee6666' } }
        ]}
    // console.log(data0.map(obj => {return obj.category}))

  }
  
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
            width: 80%;
            border-collapse: collapse;
        }
.chartTable table, th, td {
            border: 1px solid #ccc;
            padding: 8px;
        }
        .chart-container {
  position: relative;
  /* 其他样式，如宽度、高度等 */
}
        .custom-legend {
  position: absolute;
  top: 20px; /* 调整垂直位置 */
  right: 20px; /* 调整水平位置 */
  background-color: white;
  padding: 10px;
  /* 其他样式，如边框、阴影等 */
}
.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.legend-color {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
}

.legend-label {
  font-size: 14px;
  /* 其他样式，如文本颜色等 */
}
  </style>
  