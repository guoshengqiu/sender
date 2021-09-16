<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/index.vue'
</script>

<template>
  <div>
    <h1 class="title">Sender</h1>
    <notifications :duration="300" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: PingFangSC-Regular, PingFang SC;
}
html {
  font-size: 62.5%;
}
.title {
  font-size: 3.2rem;
  padding-bottom: 30px;
}
#app {
  position: relative;
  text-align: center;
  width: 100%;
  padding: 10px;
  max-width: 1440px;
  margin: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
button {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
button:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}
</style>
