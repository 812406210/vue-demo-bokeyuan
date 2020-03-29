<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="mySwipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="@/assets/img/logo.png" alt="vue标记"></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/img/dongman2.jpg" alt="vue标记"></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/img/laohu1.jpg" alt="vue标记"></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
  export default {
      name: "indexHeader",
      data(){
          return{
            rangeValue:''
          }
      },
    methods:{
        show(){
          this.$toast('提示信息');
        },

    }
    }
</script>

<style scoped>
  /*h1{*/
  /*  background-color: deepskyblue;*/
  /*  height: 200px;*/
  /*}*/

  .mySwipe{
    height: 320px;
    color: blue;
    font-size: 30px;
    text-align: center;
    background-color: #31b0d5;
  }


</style>
