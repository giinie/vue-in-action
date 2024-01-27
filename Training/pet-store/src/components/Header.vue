<template>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>
          <router-link :to="{ name: 'MyMain' }">{{ sitename }}</router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <div v-if="!mySession">
          <button type="button" class="btn btn-default btn-lg" @click="signIn">
            <span class="glyphicon glyphicon-user"></span> 로그인
          </button>
        </div>
        <div v-else>
          <button type="button" class="btn btn-default btn-lg" @click="signOut">
            <img class="photo" :src="mySession.photoURL" alt="" /> 로그아웃
          </button>
        </div>
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
import firebase from 'firebase'; // eslint-disable-line

export default {
  name: 'MyHeader',
  data() {
    return {
      sitename: 'Vue.js 애완용품샵',
    };
  },
  props: ['cartItemCount'],
  computed: {
    mySession() {
      return this.$store.getters.session;
    },
  },
  methods: {
    // showCheckout() {
    //   this.$router.push({ name: 'Form' });
    // },
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          window.console.log(result);
          window.console.log('로그인 성공');
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          window.console.log('로그아웃 성공');
        })
        .catch(err => {
          window.console.log(err);
        });
    },
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('SET_SESSION', user);
      } else {
        this.$store.commit('SET_SESSION', false);
      }
    });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.photo {
  width: 25px;
  height: 25px;
}

.router-link-exact-active {
  /* color: blue; */
  color: black;
}
</style>
