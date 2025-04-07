<template>
    <div class="taxonomy-page">
        <div class="taxonomy-container">
            <!-- 左侧大表格 -->
            <div class="table-section">
                <barbrush ref="barbrushRef" @point-selected="handlePointSelected" :selectedPoint="selectedPoint"/>
            </div>
            
            <!-- 右侧布局 -->
            <div class="right-section">
                <!-- 右上散点图 -->
                <div class="scatter-section">
                    <scatter-plot ref="scatterRef" @point-clicked="handleScatterPointClick"/>
                </div>
                
                <!-- 右下项目详情 -->
                <div class="detail-section">
                    <div v-if="selectedProject" class="project-details">
                        <h3>项目详情</h3>
                        <div class="detail-content">
                            {{ selectedProject }}
                        </div>
                    </div>
                    <div v-else class="no-selection">
                        请在散点图中选择一个项目
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
    import "@/assets/css/style.css";
    import axios from 'axios';
    import barbrush from '@/views/graphs/barbrush.vue';
    import ScatterPlot from '@/views/graphs/ScatterPlot.vue';

    export default {
        components: {
            barbrush,
            ScatterPlot
        },
        data() {
            return {
                selectedPoint: null,
                selectedProject: null,
                projectData: []
            }
        },
        methods: {
            handleScatterPointClick(point) {
                this.selectedPoint = point;
                this.selectedProject = this.projectData.find(p => p.id === point.id);
                this.$refs.barbrushRef.highlightRow(point.id);
            },
            
            handlePointSelected(point) {
                this.selectedPoint = point;
                this.selectedProject = this.projectData.find(p => p.id === point.id);
                this.$refs.scatterRef.highlightPoint(point.id);
            }
        }
    }
</script>
 
<style scoped>
    .taxonomy-page {
        padding-top: 64px; /* 为导航栏留出空间 */
        min-height: 100vh;
        background-color: #f5f5f5;
    }

    .taxonomy-container {
        display: flex;
        width: 100%;
        height: calc(100vh - 64px); /* 减去导航栏的高度 */
        padding: 20px;
        gap: 20px;
    }

    .table-section {
        flex: 3; /* 占更大的空间 */
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 15px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .right-section {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .scatter-section {
        flex: 1;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 15px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        min-height: 45%;
    }

    .detail-section {
        flex: 1;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 15px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        min-height: 45%;
        overflow-y: auto;
    }

    .project-details {
        height: 100%;
    }

    .no-selection {
        color: #999;
        text-align: center;
        margin-top: 20px;
    }

    canvas {
        position: relative !important;
        z-index: 1;
    }
</style>
 