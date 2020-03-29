<template>
    <div class="myLogin">
      <!-- 登录表单 -->
      <form style="margin-top:200px;">
        <div class="form-group">
          <label for="user" style="display:inline;">账户：</label>
          <input type="text" class="form-control" id="user" style="display:inline;width:200px;"
                 autocomplete="off" v-model="account" />
          <span class="glyphicon glyphicon-remove" aria-hidden="true" style="color: red"
                 v-if="visibleFlag"> </span>

        </div>
        <div class="form-group">
          <label for="password" style="display:inline;">密码：</label>
          <input type="text" class="form-control" id="password" style="display:inline;width:200px;"
                 autocomplete="off" v-model="accountPassword"/>
        </div>
<!--        <router-link to="/navigation">-->
            <button type="submit" class="btn btn-primary" @click="myLogin">登录</button>
<!--        </router-link>-->
        <router-link to="/register">
            <button type="submit" class="btn btn-primary">注册</button>
        </router-link>
      </form>
    </div>
</template>

<script>
    export default {
        name: "indexMain",
      data(){
          return {
            account:'yang',
            accountPassword:'123456',
            visibleFlag:false,
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
        myLogin(){
          console.log(this.account+"----"+this.accountPassword)
         if(this.account == '' || this.accountPassword == '') {
           console.log(this.account)
           this.show( '请填写用户名/密码')
         }else {
           this.$http.post('http://localhost:8081/getUserByNameAndPsw',
             {
               userName: this.account,
               password:this.accountPassword
             }).then((response) => {
                  console.log(response.body)
              if(response.body.code === 200){
                this.visibleFlag = true
                  console.log("成功登陆")
                this.$router.push('/navigation')
              }else {
                console.log(response.body.msg);
                this.visibleFlag = true
                this.show(response.body.msg)
              }
           })
         }
        }
      }
    }
</script>

<style scoped>
  .myLogin{

  }
</style>
