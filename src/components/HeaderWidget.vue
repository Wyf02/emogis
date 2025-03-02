<template>
    <!-- <div class="head">
      <div class="ribbon" >
        <router-link to="/" class="homePage"> <img  src="../assets/images/logo.png" style="width: 80%; height:80%;opacity: 1;"> </router-link>
        <router-link tag="a" target="_blank" to="/About" class="homePage" >{{ About }}</router-link>
        <router-link tag="a" target="_blank" to="/service" class="homePage" >{{ Service }}</router-link>
        <router-link tag="a" target="_blank" to="/Report" class="homePage" >{{ Details }}</router-link>
        <router-link tag="a" target="_blank" to="/Connection" class="homePage" >{{ Find }}</router-link>
      <button class="button1" @click="changeCN">中</button><span style="color: white;"> | </span><button  class="button1" @click="changeEN">EN</button>
      </div>

    </div> -->
    
<div class="header1">
    <nav class="navbar">
      <router-link to="/" class="homePage" style="width: 40%;font-weight: bold;color:white;text-align: left;margin-left: 2%;font-size:2vw;white-space: nowrap;font-family: 'OPTIMA';"> 
        Emogis DataSet
<br/>
<!-- <span style="font-size: small;">(10 Years of VISAP)</span> -->
        <!-- <img  src="../assets/images/logo.png" style="width: 80%; height:80%;opacity: 1;"> -->
       </router-link>
        <input type="checkbox" id="menu-toggler">
        <label for="menu-toggler" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </label>
        <ul class="all-links">
        <li><router-link to="/DesignSpace"  >{{ DesignSpace}}</router-link></li>
        <!-- <li><router-link to="/Connection" >{{ Find }}</router-link></li> -->
        <li><router-link to="/DataSet"  >{{ Service }}</router-link></li>
        <!-- <li><router-link to="/ReportDetail" >{{ analyse }}</router-link></li> -->
        <li><router-link to="/Report" >{{ Details }}</router-link></li>

        
        </ul>
      </nav>
</div>

</template>
<script>
export default {
  data() {
    return {
      loginReg:false,
      Language:this.$store.state.Language,
      DesignSpace:"Design Space",
      Service:"Explore Our Dataset",
      Details:"DownLoad",
      // Find:"Findings",
      analyse:"Data Analysis",
    };
  },
  methods: {
    changeCN(){
      this.$store.commit('SetLanguage', 0);
    },
    changeEN(){
      this.$store.commit('SetLanguage', 1);
    },
    logout() {
  this.loginReg = false;
  this.$store.commit('SetLogin', false);
  localStorage.clear();
  // setTimeout(() => {
  //   this.$router.push({
  //     path: '/'
  //   }, () => {
  //   }, () => {
  //   });//退出登录后2秒后跳转至首页
  // }, 2000)
  //加()=>{},()=>{} 可解决路由重复后台报错问题
}
    },
    
    hideMenu() {
      //this.$refs.subMenuBox.style.top = "-250px";
      this.$nextTick(() => {  
        this.$refs.subMenuBox.style.transition = "all 0.5s"; 
        this.$refs.subMenuBox.style.top = "-250px"; 
      });
      
      },
};
</script>

<style>
.button1 {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: black;
  /* font-size: large; */
  font-size: 1.2rem;
}




.menu,.subMenuBox{
  font-family:  'Poppins';
}
@media screen and (max-width:768px){
  .head{
    height: 10%;
    /* background-color: rgb(7, 14, 86); */
    background-color: #212529;
    width: 100%;
    z-index: 999;
    position: fixed;
  }
  
  /* 设置两个分区样式和内部文字位置 */
  .ribbon,.account{
    display: flex;
    align-items: center;
    height: 100%;
  }
  .header1 a{
    color:white;
    text-decoration : none;
    padding: 15px;
    position: relative;
    transition: 0.2s all linear;
    cursor: pointer;
    font-size: 24px;
    line-height: 1;
    /* 使a标签块状展示，使得可以使用百分比来限制图标大小 */
    display: block;
  }
  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    /* border-bottom: 2px solid #ffffff;
    transition: 0.2s all linear; */
}
 
 a:hover::before {
    width: 100%;
    top: 0;
    left: 0;
    /* transition-delay: 0.1s;
    border-bottom-color: #f7f7f7; */
    z-index: -1;
}
 
  a:hover ~ a::before {
    left: 0;
}
  
  /* 设置分区在head内所处的不同位置 */
  .ribbon{
    /* width: 70%; */
    width: 90%;
    float: left;
  }
  .ribbon a:hover{
    background: #302337;
  }
  

  /* 设置文字样式 */
  .homePage,.console,.acc{
    display: block;
    color: white;
    /* 设置字体大小随页面一起变化 */
    font-size: 0.5em;
    font-family:  'Poppins';
    /* 取消a标签内的下划线 */
    text-decoration: none;
  }
  .menu{
    display: block;
    color: white;
    /* 设置字体大小随页面一起变化 */
    font-size: 0.5em;
    font-family: 'Poppins';
    /* 取消a标签内的下划线 */
    text-decoration: none;
    width: 30%
  }
  /* 使文字成排展示 */
  .homePage{
    width: 20%;
  }
  .acc{
    width: 100%;
  }
  
  /* 所处界面标识 */
  div a.router-link-exact-active {
    color: #42b983;
  }

  .subMenuBox{
    width: 100%;
    height: 200px;
    background: rgba(10, 10, 10, 0.9);
    border-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    position: absolute;
    left: 0;
    top: -250px;
    z-index: -1;
  }

  .subMenuBox ul{
    width: 100%;
    height: 250px;
    text-align: center;
    padding: 10px 50px;
    box-sizing: border-box;
  }
  .subMenuBox ul li{
    display: inline-block;
  }
}

@media screen and (min-width:768px) {
  .head{
    height: 10%;
    /* background-color: rgb(7, 14, 86); */
    /* background-color: #5b426b; */
    background: #212529;
    width: 100%;
    z-index: 999;
    position: fixed;
  }
  
  /* 设置两个分区样式和内部文字位置 */
  .ribbon,.account{
    display: flex;
    align-items: center;
    height: 100%;
    
  }
  a{
    color:white;
    text-decoration : none;
    padding: 15px;
    position: relative;
    transition: 0.2s all linear;
    cursor: pointer;
    font-size: 24px;
    line-height: 1;
  }
  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
}
 
 a:hover::before {
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}
 
  a:hover ~ a::before {
    left: 0;
}
  
  /* 设置分区在head内所处的不同位置 */
  .ribbon{
    /* width: 70%; */
    width: 90%;
    float: left;
  }
  .ribbon a:hover{
    background: #302337;
    
  }
  
  
  .account{
    width: 10%;
    float: right;
  }
  
  /* 设置文字样式 */
  .homePage,.console,.menu,.acc{
    display: block;
    color: white;
    /* 设置字体大小随页面一起变化 */
    font-size: 1.5vw;
    font-family:  'Poppins';
    /* 取消a标签内的下划线 */
    text-decoration: none;
  }
  
  /* 使文字成排展示 */
  .menu,.console{
    width: 20%;
  }
  .homePage{
    width: 15%;
  }
  .acc{
    width: 100%;
  }
  
  /* 所处界面标识 */
  div a.router-link-exact-active {
    color: #42b983;
  }

  .subMenuBox{
    width: 100%;
    height: 250px;
    background:#0b00264f;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    

    position: absolute;
    left: 0;
    top: -250px;
    z-index: -1;
  }

  .subMenuBox ul{
    width: 100%;
    height: 250px;
    text-align: center;
    padding: 10px 50px;
    box-sizing: border-box;
  }
  .subMenuBox ul li{
    display: inline-block;
  }
}
</style>

  
	