<template>
  <el-card class="account-container">
    <h1>系统简介</h1>
    <div style="line-height: 30px;">
      woodo是一个后台管理系统，基于 Vue 3.0 相关技术栈开发。
    </div>

    <h1>开发及相关参考资源</h1>
    <div>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="hover"> Always </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover"> Hover </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover"> Never </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" @click="openSite"> Vue </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" @click="openSite">Element-Plus</el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" @click="openSite">Vite</el-card>
        </el-col>
      </el-row>
    </div>

    <h1>技术选型</h1>
    <ul style="font-weight: bold;">
      <li>Vue 3.x</li>
      <li>Vite 2.x</li>
      <li>Vue-Router 4.x</li>
      <li>Element-Plus（适配全新 Vue 3.x 的 PC 端组件库）</li>
      <li>Echarts 5.0</li>
      <li>axios</li>
      <li>wangEditor</li>
    </ul>
    <h1>联系作者</h1>
    <ul>
      <li>我的邮箱：geekarea@outlook.com</li>
    </ul>
  </el-card>
</template>

<script>
export default {
  name: 'Introduce',
  setup () {
    const openSite = () => {
      window.open('https://juejin.cn/book/6933939264455442444', 'target')
    }

    return {
      openSite
    }
  }
}
</script>
<style scoped>
.account-container {
  font-size: 15px;
}
.course {
  font-weight: bold;
  display: inline-block;
}
.course li {
  line-height: 36px;
  color: #409eff;
  cursor: pointer;
}
</style>
