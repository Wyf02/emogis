<template>
    <meta name="viewport" content="initial-scale=1,maximum-scale=3,minimum-scale=1" />  
      <section class="Programs" id="Programs">
        <br/>
        <h2>{{data0.service[Language]}}</h2>
        <!-- <p>{{data0.serviceAbstact[Language]}}</p> -->
        
        <table>
            <thead>
                <tr>
                    <th>{{title.time[Language]}}</th>
                    <th>{{title.name[Language]}}</th>
                    <th>{{title.content[Language]}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in displayedData" :key="item.id">
                    <td>{{ item.time }}</td>
                    <td>{{ item.name[Language] }}</td>
                    <td><button class="button" @click="getDetails(item.id)"><span style="color:black">More >></span></button></td>
                </tr>
            </tbody>
        </table>

        <div class="pagination">
            <span
                class="page-item"
                v-for="page in totalPages"
                :key="page"
                :class="{ active: page === currentPage }"
                @click="setCurrentPage(page)"
            >
                {{ page }}
            </span>
        </div>
      </section>
      <section></section>
    
  
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
//待定
    data() {
      let self = this;
      return {
        title:{
            time:["时间","time"],
            name:["名称","name"],
            content:["",""],
        },
        Language:this.$store.state.Language,
        data0:{
            service:["数据集下载","Dataset"],
            serviceAbstact:["初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍初级介绍","EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"],
        },
        data: [
        { id: 1, name:['待定1','ENENENEN'] , time: "待定1", content: '待定1' },
        { id: 2, name:['待定2','ENENENEN'] , time: "待定2", content: '待定1' },
        { id: 3, name:['待定3','ENENENEN'] , time: "待定3", content: '待定1' },
                ],
                pageSize: 12,   // 每页显示的条数
                currentPage: 1  // 当前页码
      };
    },
    created(){
        // axios.get('report/list').then(res=>{
        //     this.data = res.data;
      
        // }).catch(error => {
      //     console.error('Failed :', error);
      //   });

    },
    computed: {
        totalPages() {
            return Math.ceil(this.data.length / this.pageSize);
        },
        displayedData() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.data.slice(start, end);
        }
    },
    methods: {
        setCurrentPage(page) {
            this.currentPage = page;
        },
        getDetails(id){
            this.$router.push(`/Report/${id}`); 
        }
    }
  };
  </script>
  
  <style>
  table {
        width: 80%;
        border-collapse: collapse;
        margin: 20px auto;
    }
    th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: center;
    }
    th {
        background-color: #f0f0f0;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    /* 分页器样式 */
    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .page-item {
        margin: 0 5px;
        cursor: pointer;
    }
    .page-item.active {
        font-weight: bold;
    }

.button {
  background-color: transparent;
  border: none;
  text-align: right;
  /* width: 20px; */
  transition: all 0.5s;
  cursor: pointer;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
}
    
  </style>
  