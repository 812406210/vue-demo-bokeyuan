<template>
  <div class="modal-body" style="margin: 0 auto">
      <div v-if="imgSrc">
        <img :src="imgSrc" style="width: 980px;height: 380px;">
      </div>
    <div>
      <div>
        语言选择:
      <select v-model="language" @change="selectFn($event)">
        <option value ="ch" class="active" selected >中文</option>
        <option value ="eng">英文</option>
      </select>
      </div>
      <div>
      <input type="file" id="people-export" ref="inputer" style="margin-left: 45%;margin-top: 1%"
             @change="fileUpload($event)"  accept="image/jpg, image/jpeg, image/png"/>
      </div>
    </div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 10, maxRows: 60 }"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
  </div>

</template>
<script>
  const STORAGE_KEY = 'list-vuejs'//定义常量保存键值
  export default {
    name: "snippingPic",
    data() {
      return {
        picture:{},
        imgSrc:'',
        textarea:'',
        language:'',
      };
    },
    methods:{
      selectFn(e) {
        console.log(e.target.value) // 选择项的value
        this.language = e.target.value;
        this.$http.get("http://localhost:8081/getLanguage?language="+this.language).then(response =>{
              if(response.body.code === 200){
                  console.log(response.body.data)
              }
        })
      },
      //获取浏览器缓存数据
      fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)|| '[]');
      },
      //将数据保存到浏览器中
      save(items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
      },
      getName(){
        this.imgSrc = this.fetch();
      },
      fileUpload(event){
        let files =  event.target.files[0];
        //转码base64
        let reader = new FileReader();
        let imgFile;
        reader.readAsDataURL(files);
        reader.onload =  e => {
          imgFile = e.target.result;
          let arr = imgFile.split(",");
          //这里的 picPath 'data:image/png;base64,'+ base64为编码字符串拼接形成图片的
          this.imgSrc='data:image/png;base64,'+arr[1]
          this.save(this.imgSrc)
        }
        this.fileUploadExtend(event)
      },
      fileUploadExtend(event){
        console.log("上传的开始")
        this.picture = event.target.files[0]; //获取数据
        var formData = new FormData();
        console.log("上传的内容："+this.picture)
        formData.append("file", this.picture);
        this.$http.post("http://localhost:8081/getCharacterFromPic/", formData,{
          headers: { "Content-Type": "multipart/form-data" }
        }).then(result=>{
          console.log(result.body)
          if(result.body.code === 200){
            console.log("地址为："+result.body.data)
            this.textarea = result.body.data;
            //this.imgSrc = this.picture
          }else{
            console.log("上传失败")
          }
        })
      },
    }
  }
</script>
<style>

</style>
