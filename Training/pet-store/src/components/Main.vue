<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <main>
      <div v-for="product in sortedProducts" :key="product.id">
        <div class="row">
          <div class="col-md-5 col-md-offset-0">
            <figure>
              <img class="product" v-bind:src="product.image" alt="" />
            </figure>
          </div>
          <div class="col-md-6 col-md-offset-0 description">
            <router-link
              tag="h1"
              :to="{ name: 'Id', params: { id: product.id } }"
            >
              {{ product.title }}
            </router-link>
            <p v-html="product.description"></p>
            <p class="price">{{ product.price | formatPrice }}</p>
            <button
              class="btn btn-primary btn-lg"
              v-on:click="addToCart(product)"
              v-if="canAddToCart(product)"
            >
              장바구니 담기
            </button>
            <button disabled="disabled" class="btn btn-primary btn-lg" v-else>
              장바구니 담기
            </button>
            <transition name="bounce" mode="out-in">
              <span
                class="inventory-message"
                v-if="product.availableInventory - cartCount(product.id) === 0"
                key="0"
              >
                품절!
              </span>
              <span
                class="inventory-message"
                v-else-if="
                  product.availableInventory - cartCount(product.id) < 5
                "
                key="1"
              >
                {{ product.availableInventory - cartCount(product.id) }}
                남았습니다!
              </span>
              <span class="inventory-message" v-else key="1">
                지금 구매하세요!
              </span>
            </transition>
            <div class="rating">
              <span
                :key="n"
                v-bind:class="{ 'rating-active': checkRating(n, product) }"
                v-for="n in 5"
                >☆</span
              >
            </div>
          </div>
        </div>
        <hr />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MyHeader from './Header.vue';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { productsRef } from '@/firebase';

export default {
  name: 'MyMain',
  firebase: {
    docs: productsRef,
  },
  components: {
    MyHeader,
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    ...mapActions(['initStore']),
    checkRating(n, product) {
      return product.rating - n >= 0;
    },
    addToCart(product) {
      this.cart.push(product.id);
    },
    canAddToCart(product) {
      return product.availableInventory > this.cartCount(product.id);
    },
    cartCount(id) {
      let count = 0;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          // eslint-disable-next-line no-plusplus
          count++;
        }
      }
      return count;
    },
  },
  computed: {
    ...mapGetters(['products', 'session']),
    cartItemCount() {
      return this.cart.length || '';
    },
    // eslint-disable-next-line consistent-return,vue/return-in-computed-property
    sortedProducts() {
      if (this.products.length > 0) {
        const productsArray = this.products.slice(0);

        // eslint-disable-next-line no-inner-declarations
        function compare(a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        }

        return productsArray.sort(compare);
      }
    },
  },
  filters: {
    formatPrice(price) {
      if (!parseInt(price, 10)) {
        return '';
      }
      if (price > 99999) {
        const priceString = (price / 100).toFixed(2);
        const priceArray = priceString.split('').reverse();
        let index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ',');
          index += 4;
        }
        return `$${priceArray.reverse().join('')}`;
      }
      return `$${(price / 100).toFixed(2)}`;
    },
  },
  created() {
    // this.$store.dispatch('initStore');
    this.initStore();
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: shake 0.72s cubic-bezier(0.37, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@keyframes shake {
  10%,
  90% {
    color: red;
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    color: red;
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
