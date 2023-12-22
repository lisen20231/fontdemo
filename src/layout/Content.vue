<template>
  <div class="content">
    111
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 可以添加右侧内容相关的逻辑
}
</script>

<style scoped>
.content {
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  overflow-y: auto;
}
</style>
