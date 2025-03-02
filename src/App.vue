<script setup>
  import HeaderWidget from './components/HeaderWidget.vue'
  // import ContactView from './components/Contect.vue'
  import '@fortawesome/fontawesome-free/css/all.min.css';

</script>

<template>
  <div class="page">
    <HeaderWidget v-show="showNav"></HeaderWidget>
    <router-view></router-view>
    <!-- <ContactView></ContactView>  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav:true,
    }
  },
  mounted() {
    // this.$router.isReady().then(() => {
    //   this.showNav = ((this.$router.currentRoute.value.name != "bigscreen"));
    // });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

*{		/* CSS Reset */
	margin : 0;
	padding : 0;
}

/* 设置整个页面占据全部 */
.page {
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  /* background-image: url(./assets/images/background.png);
  background-position: center center;
  background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover; */
/* background-color: black; */
}



</style>