<template>
<div class="article">
  <el-container>
    <el-header><strong><h1>主题：{{id}}</h1></strong></el-header>
    <el-main>
     {{content}}
    </el-main>
    <el-main id="comment">
      评论区：
      <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="textarea"></el-input>
      <el-button type="primary" @click="submitComment">提交</el-button>
    </el-main>
  </el-container>
</div>
</template>

<script>
    export default {
        name: "article",
      data(){
          return{
              id:'',
            content:'',
            textarea:'',
          }
      },
      created() {
        this.id = this.$route.query.id;
        this.increaseReadNum();
        this.getArticleByTitle();

      },
      methods:{
        show(msg){
          this.$toast({
            message: msg,
            position: 'center',
            duration: 3000
          })
        },
          //提交评论语
        submitComment(){
          console.log("id--->"+this.id+"---comment--->"+this.textarea);
          this.$http.get("http://localhost:8081/addUserComment?title="+this.id+"&comment="+this.textarea).then(response =>{
            console.log("阅读数自增加1---->"+response.body)
            if(response.body.code ===200){
              console.log(this.id+":评论提交成功")
              this.show("评论提交成功")
            }else {
              this.show("评论提交异常，请重试")
            }
          })
        },
          //阅读数自增1
        increaseReadNum(){
          console.log("id--->"+this.id)
          this.$http.get("http://localhost:8081/updateReadNumByTitle?title="+this.id).then(response =>{
            console.log("阅读数自增加1---->"+response.body)
            if(response.body.code ===200){
              console.log(this.id+":自增成功")
            }
          })
        },
        getArticleByTitle(){
          this.$http.get("http://localhost:8081/getArticleByTitle?title="+this.id).then(response =>{
              console.log(response.body)
            this.content = response.body.data.articleContent
            //增加阅读数
            // this.increaseReadNum()
          })
        }
      }
    }
</script>

<style scoped>
  .el-header{
    background-color:#c8e5bc;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-bottom: 20px;
  }

  #comment {
    background-color: #d9edf7;
    color: #333;
    text-align: center;
    line-height: 200px;
    margin-bottom: 20px;
  }

  .el-main {
    background-color: #d9edf7;
    color: #333;
    text-align: center;
    line-height: 560px;
    margin-bottom: 20px;
  }
  .article{
    margin-left: 20%;
    margin-right: 20%;
  }
</style>
