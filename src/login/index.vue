<template>
  <div class="login-container">
    <h1>登录</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">账号：</label>
        <input v-model="username" type="text" id="username" placeholder="请输入账号" />
        <span v-if="errors.username" class="error">{{ errors.username }}</span>
      </div>
      <div class="form-group">
        <label for="password">密码：</label>
        <input v-model="password" type="password" id="password" placeholder="请输入密码" />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>
      <div class="form-group">
        <label for="captcha">验证码：</label>
        <input v-model="captcha" type="text" id="captcha" placeholder="请输入验证码" />
        <img class="captcha-image" :src="captchaImage" @click="refreshCaptcha" alt="验证码" />
        <span v-if="errors.captcha" class="error">{{ errors.captcha }}</span>
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const captcha = ref('')
    const captchaImage = ref('/api/captcha') // Replace with your captcha image API endpoint
    const errors = ref({
      username: '',
      password: '',
      captcha: ''
    })

    const validateForm = () => {
      errors.value = {
        username: username.value ? '' : '请输入账号',
        password: password.value ? '' : '请输入密码',
        captcha: captcha.value ? '' : '请输入验证码'
      }

      return !Object.values(errors.value).some(error => error)
    }

    const handleSubmit = () => {
      if (validateForm()) {
        // 模拟登录成功
        console.log('Login successful!')

        // 跳转到后台首页
        router.push('/index')
      } else {
        console.log('Form validation failed.')
      }
    }

    const refreshCaptcha = () => {
      // Replace with logic to refresh captcha image
      captchaImage.value = '/api/captcha'
    }

    return {
      username,
      password,
      captcha,
      captchaImage,
      errors,
      handleSubmit,
      refreshCaptcha
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.captcha-image {
  margin-left: 10px;
  cursor: pointer;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
