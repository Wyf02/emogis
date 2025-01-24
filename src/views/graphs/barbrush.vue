<template>
      <div ref="barbrush" style="height: 100px;text-align: left;width: 90%;"></div>
  </template>
  
  <script>
  import echarts from 'echarts';
  
  export default {
    data() {
      return {
        selectedYears: [],
        inselect:[]
      };
    },
    mounted() {
      this.renderChart();
    },
    methods: {
    sendMessage() {
        let _this=this;
      this.$emit('messageToParent',_this.selectedYears);
    },
      renderChart() {
        const echarts = require('echarts');
        const chartContainer = this.$refs.barbrush;
        const myChart = echarts.init(chartContainer);
        const option = {
          color:["#9796BB"],
          xAxis: {
            type: 'category',
            data: ['1996', '2002', '2003', '2004', '2006', '2007', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {
            trigger: "axis"
          },
          brush: {
            toolbox: ['lineX', 'keep','clear'],
          },
          // dataZoom: [
          //   {
          //     type: 'inside',
          //   },
          // ],
          series: [
            {
              data: [1, 1, 1, 1, 1, 3, 4, 2, 5, 3, 12, 19, 22, 22, 18, 16, 17, 16, 18, 21, 16],
              type: 'bar'
            }
          ],
          grid: {
          left: 30 ,// 将图表从最左边开始画
          top: 10,
          bottom:20,
        }
        };

        myChart.setOption(option);
        myChart.dispatchAction({
  type: 'takeGlobalCursor',
  key: 'brush',
  brushOption: {
    brushType: 'lineX',
    brushMode: 'multiple'
  }
});
        myChart.on('brushSelected', this.handleBrushSelected);
        myChart.on('brushEnd', this.handleBrushEnd);
      },
      handleBrushSelected(params) {
    // 在刷选过程中处理选择逻辑
    // 这里不更新 selectedYears
    if(params){
        this.inselect=params.batch[0].selected[0].dataIndex;

    }
    
  },

  handleBrushEnd(params) {
    // 刷选结束后处理数据
    this.selectedYears = [];
    this.selectedYears=this.inselect

    this.sendMessage()
    //  console.log(this.selectedYears)
  }
     
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  