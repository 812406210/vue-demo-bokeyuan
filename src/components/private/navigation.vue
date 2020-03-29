<template>
  <div>
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#TaoistsNavBar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="TaoistsNavBar">
          <ul class="nav navbar-nav">
            <li><router-link to="/childIndex">博客园</router-link></li>
            <li><router-link to="/notbook">新随笔</router-link></li>
            <li><router-link to="/contact">联系</router-link></li>
            <li><router-link to="/describe">订阅</router-link></li>
            <li><router-link to="/management">管理</router-link></li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="input-group">
              <input type="search" name="information" class="form-control" placeholder="输入搜索的内容" />
              <span class="input-group-btn">
                <button class="btn btn-default">
                    <span class="glyphicon glyphicon-search"></span>
                </button>
               </span>
            </div>
          </form>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style scoped>

</style>
