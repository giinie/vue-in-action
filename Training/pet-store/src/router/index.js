import Vue from 'vue';
import Router from 'vue-router';
import MyForm from '../components/Form.vue';
import MyMain from '../components/Main.vue';
import MyProduct from '../components/Product.vue';
import EditProduct from '../components/EditProduct.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MyMain',
      component: MyMain,
      props: true,
    },
    {
      path: '/form',
      name: 'MyForm',
      component: MyForm,
      props: true,
    },
    {
      path: '/product/:id',
      name: 'Id',
      component: MyProduct,
      props: true,
      children: [
        {
          path: 'edit',
          name: 'EditProduct',
          component: EditProduct,
          props: true,
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
