<template>
  <div id="notbook">

    <div>
      <el-form ref="form" :model="form" label-width="80px" style="margin-right: 20%; margin-left: 10%">
        <el-form-item label="主题名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="主题类型">
          <el-select v-model="form.region" placeholder="请选择类型">
            <el-option label="Java" value="java"></el-option>
            <el-option label="C++" value="C++"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="随笔时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 30%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 30%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="随笔内容">
          <el-input type="textarea" v-model="form.desc" :rows="28"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

    export default {
        name: "notbook",
      data () {
        return {
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          }
        }
      },
      methods:{
        show(msg){
          this.$toast({
            message: msg,
            position: 'center',
            duration: 3000
          })
        },
          onSubmit() {
            console.log(this.form)
            this.$http.post("http://localhost:8081/insertArticle",{
            userName:this.userName,
            articleTitle:this.form.name,
            articleType:this.form.region,
            createTime:this.form.date1,
            articleContent:this.form.desc,
              publishState:"已发布",

            }).then(response=>{
                console.log(response.body)
              if(response.body.code ===  200){
                  this.show("创建成功");
              }
            })
        },
      }
    }
</script>

<style scoped>
  #notbook{

 }
</style>
