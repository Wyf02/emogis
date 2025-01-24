<template>
    <meta name="viewport" content="initial-scale=1,maximum-scale=3,minimum-scale=1" />
  
    <section class="abpage" id="abpage"></section>
  
    <section class="Details" id="Details">
        <h2>{{content.title[Language]}}</h2>
        <br/>
        <p>{{ content.details[Language] }}</p>
    </section>
  
      
  </template>
  
  <script>
  // import "@/assets/css/style.css";
  export default {
    watch:{
      '$store.state.Language':{
        handler(newVal){
          console.log("new:",newVal);
          this.Language=newVal;
        },
        deep: true
      }
    },
    data() {
      let self = this;
      return {
        Language:this.$store.state.Language,
        content:{
          title:["11111","About"],
          details:["111","As great power competition becomes increasingly intense, the international landscape has turned more complex and volatile than ever for non-governmental actors. Policy Nexus aims to promote constructive, mutually beneficial interactions among businesses, organizations and individual decision-makers, to seek the path of survival and development, and to benefit the people of all countries.\n\n\nDuring this process, Policy Nexus aims to foster friendly, mutual trust and multilateral understanding and to provide practical solutions to individuals and businesses who found themselves caught in dilemma given the changing political landscape"]

        }
  
  
       
      };
    },
   
  };
  </script>
  
  <style>
.abpage {
  height: 75vh;
  width: 100%;
  position: relative;
  background: url("@/assets/images/first/home.png");
  background-position: center 65%;
  background-size: cover;
}
.Details{
  min-height: 100vh;
  margin-left:5%;
  margin-right:5%;
}
.Details p{
  text-align: left;
  white-space:pre-line;
}

section {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 0;
}


.Details h2 {
  font-size: 3rem;
}

section > p {
  text-align: center;
}

  </style>
  