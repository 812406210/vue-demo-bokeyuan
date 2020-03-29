<template>
  <div>
    <el-table :data="tableData" border style="width: 100%;margin-left: 20%">
        <el-table-column fixed prop="articleTitle" label="标题" width="450">
          <template slot-scope="scope">
<!--            父传值给子 -->
            <router-link :to="{path:'/article',query:{id:scope.row.articleTitle}}">{{scope.row.articleTitle}}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="publishState" label="发布状态" width="120"></el-table-column>
        <el-table-column prop="commentNum" label="评论数" width="120"></el-table-column>
        <el-table-column prop="readNum" label="阅读数" width="120"></el-table-column>
        <el-table-column prop="createTime" label="时间发布" width="300"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="handleEditor(scope.row.articleTitle)">编辑</el-button>
            <el-button type="text" size="small" @click="del(scope.row.articleTitle)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: "management",
      created(){
        this.getAllArticle()
      },
      methods: {

        getMsg(article){
            console.log(article);
        },
        show(msg){
          this.$toast({
            message: msg,
            position: 'center',
            duration: 3000
          })
        },
        handleEditor(articleTitle){
          console.log(articleTitle)
        },

        del(title){
          this.$http.get("http://localhost:8081/delByName",{
            params:{
              articleName:title
            }
          }).then(response =>{
              console.log(response.body)
            if(response.body.code === 200){
              this.show("删除成功！")
              this.getAllArticle()
            }
          })
        },
        handleClick(row) {
          console.log("row内容"+row.articleTitle);
        },
        getAllArticle(){
          this.$http.get("http://localhost:8081/getAllArticle").then(response =>{
            console.log(response.body)
            if(response.body.code === 200) {
              this.tableData = response.body.data
            }else {
              this.show("服务器查询失败！")
            }
          })
        }

      },
      data() {
        return {
          tableData: [],
          msg:'',
        }
      },
    }
</script>

<style scoped>

</style>
