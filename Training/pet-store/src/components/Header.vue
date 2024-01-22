<template>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>
          <router-link :to="{ name: 'MyMain' }">{{ sitename }}</router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <router-link
          active-class="active"
          tag="button"
          class="btn btn-default btn-lg"
          :to="{ name: 'MyForm' }"
        >
          <span class="glyphicon glyphicon-shopping-cart">
            {{ cartItemCount }}
          </span>
          체크아웃
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      sitename: 'Vue.js 애완용품샵',
    };
  },
  props: ['cartItemCount'],
  methods: {
    // showCheckout() {
    //   this.$router.push({ name: 'Form' });
    // },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  /* color: blue; */
  color: black;
}
</style>
