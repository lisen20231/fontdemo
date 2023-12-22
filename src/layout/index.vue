<!-- layout/index.vue -->
<template>
  <div class="dashboard">
    <Header />
    <div class="main-container">
      <Sidebar />
      <div class="content">
        <router-view />
      </div>
      <!-- 右侧内容通过路由动态插入 -->
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.main-container {
  display: flex;
  flex: 1;
  overflow: auto; /* 添加溢出自动，以便在内容过多时出现滚动条 */
}
.content {
  padding: 10px;
  flex: 1;
}
</style>
