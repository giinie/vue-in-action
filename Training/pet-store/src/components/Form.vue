<template>
  <div>
    <my-header :cartItemCount="cartItemCount" />
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-info">
          <div class="panel-heading">애완용품샵 체크아웃</div>
          <div class="panel-body">
            <div class="form-group">
              <div class="col-md-12">
                <h4><strong>정보를 입력하세요</strong></h4>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6">
                <strong>이름:</strong>
                <input
                  id="firstName"
                  v-model.trim="order.firstName"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6">
                <strong>성:</strong>
                <input
                  id="lastName"
                  v-model.trim="order.lastName"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>주소:</strong></div>
              <div class="col-md-12">
                <input
                  id="address"
                  v-model.trim="order.address"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>도시:</strong></div>
              <div class="col-md-12">
                <input
                  id="city"
                  v-model.trim="order.city"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-2">
                <strong>State:</strong>
                <select id="state" v-model="order.state" class="form-control">
                  <option disabled value="">State</option>
                  <option
                    v-for="(state, key) in states"
                    v-bind:value="state"
                    :key="key"
                  >
                    {{ key }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 col-md-offset-4">
                <strong>우편번호:</strong>
                <input
                  id="zip"
                  v-model.number="order.zip"
                  class="form-control"
                  type="number"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input
                  type="checkbox"
                  id="gift"
                  value="true"
                  v-bind:true-value="order.sendGift"
                  v-bind:false-value="order.dontSendGift"
                  v-model="order.gift"
                />
                <label for="gift">선물로 보내기?</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input
                  type="radio"
                  id="home"
                  v-bind:value="order.home"
                  v-model="order.method"
                />
                <label for="home">자택</label>
                <input
                  type="radio"
                  id="business"
                  v-bind:value="order.business"
                  v-model="order.method"
                />
                <label for="business">직장</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6">
                <button
                  type="submit"
                  class="btn btn-primary submit"
                  v-on:click="submitForm"
                >
                  주문하기
                </button>
              </div>
            </div>
            <div class="col-md-12 verify">
              <pre>
                      이름: {{ order.firstName }}
                      성: {{ order.lastName }}
                      주소: {{ order.address }}
                      도시: {{ order.city }}
                      우편번호: {{ order.zip }}
                      주: {{ order.state }}
                      배송지: {{ order.method }}
                      선물: {{ order.gift }}
                    </pre
              >
              <div v-if="madeOrder">
                <h4>주문이 완료되었습니다!</h4>
              </div>
            </div>
            <!-- end of col-md-12 verify -->
          </div>
          <!-- end of panel-body -->
        </div>
        <!-- end of panel panel-info -->
      </div>
      <!-- end of col-md-10 col-md-offset-1 -->
    </div>
    <!-- end of row -->
  </div>
  <!-- end of container -->
</template>

<script>
import MyHeader from './Header.vue';

export default {
  name: 'MyForm',
  components: {
    MyHeader,
  },
  props: ['cartItemCount'],
  data() {
    return {
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: '자택',
        business: '직장 주소',
        home: '자택 주소',
        gift: '',
        sendGift: '선물로 보내기',
        dontSendGift: '선물로 보내지 않기',
      },
      states: {
        AL: '알라바마',
        AK: '알래스카',
        AR: '애리조나',
        CA: '캘리포니아',
        NV: '네바다',
      },
      madeOrder: false,
    };
  },
  methods: {
    submitForm() {
      this.madeOrder = true;
    },
  },
};
</script>

<style scoped></style>
