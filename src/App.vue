<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px" class="aside"
        ><el-menu
          default-active="2"
          class="el-menu-vertical-demo menu"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Location /></el-icon>
              <span>dashboard</span>
            </template>
            <el-menu-item-group class="menu-item">
              <el-menu-item index="/introduce">系统介绍</el-menu-item>
              <el-menu-item index="/dashboard">仪表盘</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper">轮播图配置</el-menu-item>
              <el-menu-item index="/hot">热销商品配置</el-menu-item>
              <el-menu-item index="/new">新品上线配置</el-menu-item>
              <el-menu-item index="/recommend">为你推荐配置</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><Document /></el-icon>
              <span>模块管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/category">分类管理</el-menu-item>
              <el-menu-item index="/good">商品管理</el-menu-item>
              <el-menu-item index="/guest">会员管理</el-menu-item>
              <el-menu-item index="/order_detail">订单管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon><setting /></el-icon>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">修改密码</el-menu-item>
              <el-menu-item index="4-2">管理员信息</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu></el-aside
      >
      <el-container class="right">
        <el-header><Header /></el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Location,
    Document,
    IconMenu,
    Setting
  }
}
</script>
<style scoped>
.aside {
  overflow: scroll;
  overflow-y: auto;
  position: relative;
}

.menu-item{
  font-size: 5px;
}
.menu {
  height: 100vh;
}

.right{
  overflow: scroll;
  overflow-y: auto;
  position: relative;
}

</style>
