<template>
 <section></section>
 <div class="container">
            <div class="sidebar">
                <ul :style="{'margin-top': '15%'}">
                    <li v-for="section in sections" :style="{'font-weight': 'bold'}" :key="section.id">
                        <a @click="showSection(section.id)" class="a1" :class="{ 'active-link': section.id === selectedSectionId }"><div style="width:200px">{{ section.name }}</div></a>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div v-for="section in sections" :key="section.id" v-show="section.id === selectedSectionId">
                    <h2 class="h2c">{{ section.name }}</h2>
                    <!-- Add more content for other sections -->
                    <div v-if="section.id === 'introduction'">
                        <p class="p1">We collectively retrieved 230 records from the official website of IEEE VISAP(2013-2023) and 40 from other websites. After data cleaning (e.g., removing keynote talks & theoretical papers, and deduplicating works that were accepted by multiple venues), we ultimately obtained 219 works of artistic data visualization. These artworks were published between 1996 and 2023.</p>
                        <!-- <cricle1></cricle1> -->
                        <barchart :jsonFilePath="jsonFilePath[4]"/>
                    </div>
                     <!-- <div v-if="section.id === 'fields'">
                        <p class="p1">This page shows the design fields of the artworks (where).</p>
                        <barchart :jsonFilePath="jsonFilePath[6]"/>
                    </div>
                    <div v-if="section.id === 'tasks'">
                        <p class="p1">This page shows the design tasks of the artworks (what).</p>
                        <barchart :jsonFilePath="jsonFilePath[5]"/>
                    </div> -->
                    <!-- <div v-if="section.id === 'year'">
                        <p class="p1">This part shows {{ section.name }} of the artwork.</p>
                        <barchart :jsonFilePath="jsonFilePath[4]"/>
                    </div> -->
                    <div v-if="section.id === 'design-category'">
                        <p class="p1">This page shows the design genres of the artworks (how; high-level).</p>
                        <barchart :jsonFilePath="jsonFilePath[2]"/>
                    </div>
                    <div v-if="section.id === 'design-paradigm'">
                        <p >... Your introduction content goes here ...</p>
                        <barchart :jsonFilePath="jsonFilePath[3]"/>
                    </div>
                    <div v-if="section.id === 'design-Technique'">
                        <p class="p1">This page shows the design techniques used by the artworks (how; low-level).</p>
                        <barchart :jsonFilePath="jsonFilePath[7]"/>
                    </div>
                    <div v-if="section.id === 'using-data'">
                        <p class="p1">This page shows the special data inputs of the artworks.</p>
                        <barchart :jsonFilePath="jsonFilePath[1]"/>
                    </div>
                    
                    <div v-if="section.id === 'authors'">
                        <p  class="p1">This page shows the authors of the artworks (who).</p>
                        <h2 class="auh">authors</h2>
                        <wordchart :jsonFilePath="jsonFilePathCloud[0]"/>
                        <!-- <img src="@/assets/images/details/author.png" style="width:50%"> -->
                        <h2 class="auh">affiliations</h2>
                        <wordchart :jsonFilePath="jsonFilePathCloud[1]"/>
                        <!-- <img src="@/assets/images/details/school.png" style="width:50%"> -->
                        <h2 class="auh">majors</h2>
                        <wordchart :jsonFilePath="jsonFilePathCloud[2]"/>
                        <!-- <img src="@/assets/images/details/depart.png" style="width:50%"> -->
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import "@/assets/css/style.css";
import  axios from 'axios'
import cricle1 from '@/views/graphs/circle.vue'
import barchart from '@/views/graphs/barchart.vue'
import wordchart from '@/views/graphs/wordcloud.vue'
export default {
    components: {
        cricle1,barchart,wordchart,
    },
  
  data(){
   
   return{
    jsonFilePath:["emogis/artPaper_counts","emogis/datatype_counts","emogis/designCategory_counts",
    "emogis/designParadigm_counts","emogis/time_counts","emogis/whatPurpose_counts",
    "emogis/whereField_counts","emogis/designTechnique_counts_sorted"], 
    jsonFilePathCloud:['emogis/authors','emogis/affiliations','emogis/majors'],   
    selectedSectionId: 'introduction', // Initially show the 'Introduction' section
        sections: [
            { id: 'introduction', name: 'Introduction' },
            // { id: 'year', name: 'Time' },
            { id: 'authors', name: 'Authors' },
            // { id: 'fields', name: 'Design field' },
            // { id: 'tasks', name: 'Design task' },
            { id: 'design-category', name: 'Design genre' },
            { id: 'design-paradigm', name: 'DesignParadigm' },
            { id: 'design-Technique', name: 'Design technique' },
            // { id: 'using-data', name: 'Special input' },
            // Add more sections with their IDs and names
        ]   
    } 
  },
             methods: {
                showSection(sectionId) {
                    this.selectedSectionId = sectionId;
                }
            }
           
  
}
</script>
<style>
.h2c{
    text-align: left;
    margin-left:5%;
    font-size:50px;
}
.p1{
    text-align: left;
    margin-left:5%;
    width: 50%;
    font-size:15px;
}

.a1{
    color:rgb(138 138 138);
    font-size: 18px;
    font-weight: 600;
}
.active-link {
  /* background-color: #01243c;  */
  color: rgba(1, 165, 50, 0.814); /* 设置选中链接的文字颜色 */
}

        /* Your CSS styles go here */
        .container {
            display: flex;
        }
        .sidebar {
            /* width: 20%; */
            width: 240px;
            background-color: #f0f0f0c4;
            padding: 20px;
        }
        .sidebar li{
            color:rgb(138 138 138)
        }
        ul {
            list-style: none;
            padding: 0;
        }
        /* ul li {
            margin-bottom: 30px;
            
        } */
        .content {
            flex: 1;
            padding: 20px;
        }
        .auh{
            font-size: 24px;
        
        }
  
        
    </style>