<template>
  <div id="app">
    <HelloWorld header="1" name="에릭" />
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions,import/no-unresolved
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
