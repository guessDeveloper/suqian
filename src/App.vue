<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
    
    export default {
        name: 'App',
       
    }

</script>

<style lang="scss">
    @import './assets/sass/reset.scss';
    body,
    html {
        width: 100%;
        height: 100%;
        background-image:url(about:blank);
         background-attachment:fixed;
            font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    }
    

</style>
