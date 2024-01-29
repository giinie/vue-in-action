import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
// import firebase from 'firebase';
import '@/firebase';
import VueRouter from 'vue-router';
import Header from '@/components/Header.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('Header.vue', () => {
  // let actions;
  // let state;
  let store;
  let getters;
  let mutations;
  // let wrapper;

  beforeEach(() => {
    getters = {
      session: () => false,
    };

    mutations = {
      SET_SESSION: () => {},
    };

    /*
        state = {
          session: null,
        };
    */

    /*
        actions = {
          SET_SESSION: jest.fn(),
        };
    */

    store = new Vuex.Store({
      // state,
      // actions,
      getters,
      mutations,
    });

    /*
        wrapper = shallowMount(Header, {
          store,
          localVue,
          propsData: {
            cartItemCount: 0,
          },
        });
    */
  });

  it('displays signIn button when no session', () => {
    const cartItemCount = 5;
    const wrapper = shallowMount(Header, {
      store,
      localVue,
      propsData: {
        cartItemCount,
      },
    });

    expect(wrapper.findAll('button').at(0).text()).toBe('로그인');
  });

  it('displays signOut button when session exists', () => {
    const cartItemCount = 5;
    getters.session = () => true;
    store = new Vuex.Store({
      getters,
      mutations,
    });

    const wrapper = shallowMount(Header, {
      store,
      localVue,
      propsData: {
        cartItemCount,
      },
    });
    expect(wrapper.findAll('button').at(0).text()).toBe('로그아웃');
  });

  /*
    it('signIn method calls firebase auth', () => {
      const cartItemCount = 5;
      const localWrapper = shallowMount(Header, {
        store,
        localVue,
        propsData: {
          cartItemCount,
        },
      });
      const signInWithPopup = jest.fn();
      firebase.auth = jest.fn().mockReturnValue({
        signInWithPopup,
      });
      localWrapper.vm.signIn();
      expect(signInWithPopup).toHaveBeenCalled();
    });
  */

  /*
    it('signOut method calls firebase auth', () => {
      const signOut = jest.fn();
      firebase.auth = jest.fn().mockReturnValue({
        signOut,
      });
      wrapper.vm.signOut();
      expect(signOut).toHaveBeenCalled();
    });
  */

  it('헤더에 올바르게 속성이 전달되었는지 확인', () => {
    const cartItemCount = 5;
    const localWrapper = shallowMount(Header, {
      store,
      localVue,
      propsData: {
        cartItemCount,
      },
    });
    expect(localWrapper.vm.cartItemCount).toBe(cartItemCount);
  });

  it('cartItemCount 텍스트가 제대로 표시되는지 확인', () => {
    const cartItemCount = 5;
    const localWrapper = shallowMount(Header, {
      store,
      localVue,
      propsData: {
        cartItemCount,
      },
    });
    const p = localWrapper.find('.glyphicon-shopping-cart');
    expect(p.text()).toBe(cartItemCount.toString());
  });

  it('navbar 클래스가 첫 번째 div에 추가되는지 확인', () => {
    const cartItemCount = 5;
    const localWrapper = shallowMount(Header, {
      store,
      localVue,
      propsData: {
        cartItemCount,
      },
    });
    const p = localWrapper.findAll('div').at(0);
    expect(p.classes()).toContain('navbar');
  });
});
