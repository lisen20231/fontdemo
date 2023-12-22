<template>
  <div class="dashboard">
    <Header />
    <div class="main-container">
      <Sidebar />
      <Content />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Content from './Content.vue'

export default {
  components: {
    Header,
    Sidebar,
    Content
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
}
</style>
