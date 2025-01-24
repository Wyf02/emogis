<template>
<div id="contact-bar">
        <div id="contact-info">
            <!-- <p>Contact Info： <br/>hidden<br/>hidden<br/>hidden<br/></p>
            <p>Location： <br/>hidden</p> -->
        </div>
        <div id="links-and-copyright">
            <!-- <router-link tag="a" target="_blank" to="/" >{{Home[Language]}}</router-link>
            <router-link tag="a" target="_blank" to="/About" >{{About[Language]}}</router-link>
            <p>&copy; 2023 Your Company Name</p> -->
            <table class="table">
              <tr>
                <td></td>
                <td><a href="https://visap.net/2023" class="">2023</a></td>
                  <td><a href="https://visap.net/2022" class="">2022</a></td>
                  <td><a href="https://visap.net/2021" class="">2021</a></td>
                  <td><a href="https://visap.net/2020" class="">2020</a></td>
                  <td><a href="https://visap.net/2019" class="">2019</a></td>
                  
              </tr>
              <tr>
                <td><a href="https://visap.net/2018" class="">2018</a></td>
                  <td><a href="https://visap.uic.edu/2017" class="">2017</a></td>
                  <td><a href="https://visap.uic.edu/2016" class="">2016</a></td>
                  <td><a href="https://visap.uic.edu/2015" class="">2015</a></td>
                  <td><a href="https://visap.uic.edu/2014" class="">2014</a></td>
                  <td><a href="https://visap.uic.edu/2013" class="">2013</a></td>
                  <!-- 这里可以添加更多的链接 -->
              </tr>
          </table>
          <a href="https://ieeexplore.ieee.org/xpl/conhome/1824484/all-proceedings" class="">VISAP LINKS</a>
  
        </div>
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
    data() {
      let self = this;
      return {
        Language:this.$store.state.Language,
        Home:["首页","Home"],
        About:["关于","About"]
        
  
       
      };
    },
   
  };
  </script>
  
  <style>
  .table {
            border-collapse: collapse;
            /* width: 300px;  */
            text-align: right;
            margin:0px;
        }
        .table td {
          text-align: right;
            border: 1px solid transparent; /* 设置边框为透明 */
            /* padding: 10px; */
            margin:0px;
            padding: 0px;
        }
        .table tr {
          margin:0px;
            padding: 0px;
          text-align: right;
    
            /* padding: 10px; */
        }
        .table a {
            text-decoration: none;
            margin-right: 0px;
        }

#contact-bar {
    background-color: black;
    /* height:20%; */
    color: #fff;
    padding: 5vh 20vh 10vh 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#contact-info {
    flex: 1;
    text-align: left;
}
#contact-info p {
    margin: 0;
}
#links-and-copyright {
    text-align: right;
}
#links-and-copyright a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    font-size: large;
}
#links-and-copyright a:hover {
    text-decoration: underline;
}

@media screen and (max-width: 860px) {

#contact-bar {
    background-color: black;
    /* height:20%; */
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
}
  </style>
  