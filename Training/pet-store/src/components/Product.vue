<template>
  <div>
    <my-header></my-header>
    <h1>id {{ $route.params.id }} 입니다</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img class="product" v-bind:src="product.image" alt="" />
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-0 description">
        <h1>{{ product.title }}</h1>
        <p v-html="product.description"></p>
        <p class="price">
          {{ product.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import MyHeader from './Header.vue';

export default {
  name: 'MyProduct',
  components: { MyHeader },
  data() {
    return {
      product: {},
    };
  },
  created() {
    axios.get('/products.json').then(response => {
      // eslint-disable-next-line prefer-destructuring
      this.product = response.data.products.filter(
        data => data.id === this.$route.params.id,
      )[0];
      // this.product.image = `/${this.product.image}`;
    });
  },
};
</script>

<style scoped></style>
