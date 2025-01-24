<template>
  <!-- 登录表单 -->
<div class="login-div">
  <div class="login-container">
        <h2>{{loginpage.welcome[Language]}}</h2>
        <form>
            <div class="form-group">
                <label for="username">{{loginpage.username[Language]}}</label>
                <input type="text" id="username" name="username" :placeholder="loginpage.usernamecontent[Language]" required>
            </div>
            <div class="form-group">
                <label for="password">{{loginpage.password[Language]}}</label>
                <input type="password" id="password" name="password" :placeholder="loginpage.passwordcontent[Language]" required>
            </div>
            <button @click="login" type="submit" class="buttonlog">登录</button>
        </form>
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
    data(){
        return{
            Language:this.$store.state.Language,
            account:"123",
            pwd:"123",
            loginpage:{
                welcome:["欢迎登录","WELCOME!"],
                username:["用户名：","USER NAME:"],
                password:["密码：","PASSWORD:"],
                usernamecontent:["请输入用户名","Please enter your username"],
                passwordcontent:["请输入密码","Please enter your password"],

            }
        }
    },
  methods: {
    login() {
        let _this=this;
        _this.account= document.getElementById('username').value; // 使用输入框的 id 属性
        _this.pwd = document.getElementById('password').value;

        _this.$store.commit('SetAccount', _this.account,_this.pwd);
        // 登录成功后，可以重定向到目标URL
        // axios.post("user/login", {
        //      Accont: _this.account,
        //     Password:_this.pwd,
        // }).then(result => {
        let userInfo = {
            isLogin: true,
            Accont: _this.account,
            Password:_this.pwd,
          }
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        const storedData = JSON.parse(localStorage.getItem('userInfo'));
        try {
            localStorage.setItem('myKey', 'myValue');
            } catch (error) {
            console.error('LocalStorage error:', error);
        }
        this.$store.state.userInfo = userInfo;
        const redirect = this.$route.query.redirect || '/';
        this.$router.push(redirect); 
    // }
    // .catch(error => {
      //     console.error('Failed to login:', error);
      //   });
    }
  }
};
</script>

<style>
.login-div {
    font-family:  'Poppins';
    background:url("@/assets/images/home-bg.jpg") ;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.login-container {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 5%;
    text-align: center;
    min-width:50%;
}

h2 {
    color: #333333;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
}

.buttonlog {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.buttonlog:hover {
    background-color: #0056b3;
}

.bottom-text {
    margin-top: 20px;
}



</style>
