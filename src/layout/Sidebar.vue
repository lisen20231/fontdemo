<template>
  <div class="sidebar">
    <ul>
      <li><router-link to="/index">首页</router-link></li>
      <li><router-link to="/demo">练习</router-link></li>
      <li><router-link to="/demo">用户管理</router-link></li>
      <li><router-link to="/demo">用户管理</router-link></li>
      <li><router-link to="/demo">用户管理</router-link></li>
      <li><router-link to="/demo">用户管理</router-link></li>
      <!-- 其他菜单项 -->
    </ul>
  </div>
</template>

<script>
export default {
  // 可以添加左侧菜单相关的逻辑
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #eee;
  padding: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

router-link {
  color: #333;
  text-decoration: none;
  display: block;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

router-link:hover {
  background-color: #ddd;
}
</style>
