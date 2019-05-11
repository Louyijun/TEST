<template>
  <div class="layout-default">
    <el-container>
      <el-header height=''><myheader/></el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
      <el-footer height=''>
          <myfooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myheader from'@/components/header/index.vue'
import myfooter from'@/components/footer/index.vue'
export default {
    components:{
        myheader,
        myfooter
    }
};
</script>

<style lang='scss'>
    @import'@/assets/css/public/layout.scss';
</style>
