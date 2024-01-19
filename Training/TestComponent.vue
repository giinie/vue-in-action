<template>
  <div class="hello">
    <h1>Test Component</h1>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      msg: 'Vue.js 앱에 오신 걸 환영합니다.',
    };
  },
};
</script>

<style scoped></style>
