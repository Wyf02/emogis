<template>
  <div ref="matrixTable" style="height: 100%; width: 100%;"></div>
</template>

<script>
import * as d3 from 'd3';
import { ref, onMounted } from 'vue';

export default {
  name: 'TaxoMatrixTable',
  setup() {
    const matrixTable = ref(null);
    
    // 存储处理后的数据
    let techHierarchy = [];
    let projects = [];
    let techMap = new Map();
    
    // 绘制表格的函数
    const drawTaxoMatrix = async () => {
      try {
        // 加载 CSV 文件
        const taxoData = await d3.csv('taxo.csv');
        const codingData = await d3.csv('coding.csv');
        
        // 处理 taxo 数据
        techHierarchy = taxoData.map(d => ({
          tech: d.tech,
          id: +d.id,
          dim: d.dim,
          parent: d.parent,
          subparent: d.subparent,
          count: +d.count
        }));
        
        // 创建 techMap 用于快速查找
        techHierarchy.forEach(tech => {
          techMap.set(tech.tech, tech);
        });
        
        // 处理 coding 数据
        projects = codingData.map(project => {
          const techUsage = {};
          Object.keys(project).forEach(key => {
            if (key !== 'name') {
              const value = +project[key];
              if (value === 1) {
                // 将键名转换为与 tech.tech 一致的格式
                const formattedKey = key.replace(/\s+/g, ' '); // 确保键名中的空格一致
                techUsage[formattedKey] = value;
              }
            }
          });
          return {
            name: project.name,
            techUsage: techUsage
          };
        });
        
        // 创建 SVG 容器
        const width = matrixTable.value.clientWidth;
        const height = matrixTable.value.clientHeight;
        const margin = { top: 10, right: 10, bottom: 10, left: 200 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
        
        const svg = d3.select(matrixTable.value)
          .append('svg')
          .attr('width', '100%')
          .attr('height', '100%')
          .attr('viewBox', `0 0 ${width} ${height}`)
          .attr('preserveAspectRatio', 'xMidYMid meet');
        
        const g = svg.append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);
        
        // 创建 tech 分组结构（替换 d3.nest()）
        const techGroups = Array.from(
          d3.group(
            techHierarchy,
            d => d.dim,
            d => d.parent
          ),
          ([dim, parentGroups]) => ({
            key: dim,
            values: Array.from(parentGroups, ([parent, techs]) => ({
              key: parent,
              values: Array.from(techs)
            }))
          })
        );
        
        // 计算列宽
        const headerHeight = height / 60 * 15;
        const cellWidth = innerWidth / techHierarchy.length;
        const cellHeight = height / 85;
        
        // 绘制表头
        let xPosition = 0;
        techGroups.forEach(dimGroup => {
          const dimName = dimGroup.key;
          const parentGroups = dimGroup.values;
          
          // 绘制 dim 分组标题
          g.append('rect')
            .attr('x', xPosition)
            .attr('y', 0)
            .attr('width', parentGroups.reduce((sum, pg) => sum + pg.values.length, 0) * cellWidth)
            .attr('height', headerHeight / 10)
            .attr('fill', '#ffffff') // 表头背景为白色
            .attr('stroke', '#ccc')
            .attr('stroke-width', 1);
          
          g.append('text')
            .attr('x', xPosition + (parentGroups.reduce((sum, pg) => sum + pg.values.length, 0) * cellWidth) / 2)
            .attr('y', headerHeight / 20)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .text(dimName)
            .style('font-weight', 'bold')
            .style('font-size', '10px');
          
          // 绘制 parent 分组标题
          parentGroups.forEach(parentGroup => {
            const parentName = parentGroup.key;
            const techsInGroup = parentGroup.values;
            
            g.append('rect')
              .attr('x', xPosition)
              .attr('y', headerHeight / 10)
              .attr('width', techsInGroup.length * cellWidth)
              .attr('height', headerHeight / 10)
              .attr('fill', '#ffffff') // 表头背景为白色
              .attr('stroke', '#ccc')
              .attr('stroke-width', 1);
            
            g.append('text')
              .attr('x', xPosition + (techsInGroup.length * cellWidth) / 2)
              .attr('y', headerHeight / 20 * 3)
              .attr('text-anchor', 'middle')
              .attr('dominant-baseline', 'middle')
              .text(parentName)
              .style('font-size', '6px');
            
            // 绘制 tech 名称
            g.append('rect')
              .attr('x', xPosition)
              .attr('y', headerHeight / 10 * 2)
              .attr('width', techsInGroup.length * cellWidth)
              .attr('height', headerHeight / 5 * 3)
              .attr('fill', '#ffffff') // 表头背景为白色
              .attr('stroke', '#ccc')
              .attr('stroke-width', 1);
            
            techsInGroup.forEach(tech => {
              const textX = xPosition + cellWidth / 2;
              const textY = headerHeight / 5 + headerHeight / 5 * 3 / 2;
              
              g.append('text')
                .attr('x', textX)
                .attr('y', textY)
                .attr('text-anchor', 'middle')
                .attr('dominant-baseline', 'middle')
                .attr('transform', `rotate(-90, ${textX}, ${textY})`)
                .style('font-size', '6px')
                .text(tech.tech);
              
              xPosition += cellWidth;
            });
          });
        });
        
        // 绘制 count 行
        let countY = headerHeight / 5 * 4;
        techHierarchy.forEach((tech, index) => {
          const xPosition = index * cellWidth;
          
          g.append('rect')
            .attr('x', xPosition)
            .attr('y', countY)
            .attr('width', cellWidth)
            .attr('height', cellHeight)
            .attr('fill', '#f0f0f0')
            .attr('stroke', '#ccc')
            .attr('stroke-width', 1);
          
          g.append('text')
            .attr('x', xPosition + cellWidth / 2)
            .attr('y', countY + cellHeight / 2)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .style('font-size', '6px')
            .text(tech.count);
        });
        
        // 绘制项目行
        projects.forEach((project, i) => {
          // 绘制项目名称
          g.append('text')
            .attr('x', -10)
            .attr('y', headerHeight / 5 * 4 + (i + 0.5) * cellHeight + cellHeight*1.5)
            .attr('text-anchor', 'end')
            .attr('dominant-baseline', 'middle')
            .style('font-weight', 'bold')
            .style('font-size', '4px')
            .text(project.name);
          
          // 绘制单元格
          let xPosition = 0;
          techHierarchy.forEach(tech => {
            // 格式化 tech.tech 以匹配 project.techUsage 的键名
            const formattedTech = tech.tech.replace(/\s+/g, ' ').toLowerCase();
            const value = project.techUsage[formattedTech] || 0;
            
            // 根据技术名称分配颜色
            const color = getColorForTech(formattedTech);
            
            const cellColor = value > 0 ? color : '#ffffff';
            
            g.append('rect')
              .attr('x', xPosition)
              .attr('y', headerHeight / 5 * 4 + i * cellHeight + cellHeight*1.5)
              .attr('width', cellWidth)
              .attr('height', cellHeight)
              .attr('fill', cellColor)
              .attr('stroke', '#ccc')
              .attr('stroke-width', 1)
              .on('mouseover', function(event) {
                d3.select(this).attr('opacity', 0.8);
                
                // 显示悬停提示
                const techInfo = techMap.get(tech.tech);
                const [x, y] = d3.pointer(event, this);
                
                g.append('text')
                  .attr('class', 'tooltip')
                  .attr('x', x+10)
                  .attr('y', y)
                  .attr('font-size', '8px')
                  .text(`${tech.tech} - ${techInfo.subparent} (${techInfo.count})`)
                  .style('fill', 'black');
              })
              .on('mouseout', function() {
                d3.select(this).attr('opacity', 1);
                g.selectAll('.tooltip').remove();
              });
            
            xPosition += cellWidth;
          });
        });
        
      } catch (error) {
        console.error('Error drawing taxo matrix:', error);
      }
    };
    
    // 根据技术名称分配颜色
    function getColorForTech(techName) {
      // 确保 techName 是一个有效的字符串
      if (!techName) return '#ffffff'; // 默认为白色
      
      techName = techName.toLowerCase();
      
      // 为不同技术类别分配颜色
      const colorMap = {
        'individual': '#F3E3E9',
        'group': '#E192AF',
        'residential': '#AEAAAA',
        'not specified or anyone': '#AEAAAA',
        'special status': '#AEAAAA',
        'traveler': '#AEAAAA',
        'cultural/racial': '#AEAAAA',
        'gender': '#AEAAAA',
        'age': '#AEAAAA',
        'class': '#AEAAAA',
        'world': '#204E78',
        'country': '#9BC2E6',
        'city': '#9BC2E6',
        'non-urban/rural': '#BDD7EE',
        'architecture/site': '#DDEBF7',
        'physical': '#203764',
        'memorized': '#8EA9DB',
        'psychological': '#D8E1F2',
        'inherent emotional attitude': '#EBE9E3',
        'personal experience': '#EBE9E3',
        'collaborative activity': '#F2E2D9',
        'embodied movement': '#F2E2D9',
        'interview': '#F2E2D9',
        'drawing/sketching': '#F2E2D9',
        'fieldwork and ethnography': '#F2E2D9',
        'video recording/taking pictures': '#F2E2D9',
        'posting sticky notes': '#F2E2D9',
        'prepared toolkit': '#F2E2D9',
        'hardware': '#F2E2D9',
        'historical material mining': '#F2E2D9',
        'system/platform development': '#F2E2D9',
        'questionnaire/open call': '#F2E2D9',
        'statis image/painting': '#E7E6E6',
        'event': '#E7E6E6',
        'interactive interface': '#E7E6E6',
        'artifact': '#E7E6E6',
        'performance': '#E7E6E6',
        'video': '#E7E6E6',
        'installation': '#E7E6E6',
        'color': '#D1DFDA',
        'images/photos': '#D1DFDA',
        'symbol/metaphor': '#D1DFDA',
        'tangible material/texture': '#D1DFDA',
        'shape': '#D1DFDA',
        'sound': '#D1DFDA',
        'style': '#D1DFDA',
        'animation/simulation': '#D1DFDA',
        'layout': '#D1DFDA',
        'typeface': '#D1DFDA',
        'annotated content/associated stories': '#BFDFE0',
        'collage': '#BFDFE0',
        'body language': '#BFDFE0',
        'wording/phrasing': '#BFDFE0',
        'personalized visual': '#BFDFE0'
      };
      
      return colorMap[techName] || '#ffffff'; // 默认为白色
    }
    
    onMounted(drawTaxoMatrix);
    
    return {
      matrixTable
    };
  }
};
</script>

<style scoped>
div {
  overflow: auto;
}
</style>