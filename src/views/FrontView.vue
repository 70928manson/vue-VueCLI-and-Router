<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <!--使用router情況下盡量避免a連結，以免混淆-->
    <router-link class="navbar-brand" to="/">xxx餐飲店</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">前台購物車</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/products">後台訂單</router-link>
        </li>
      </ul>
    </div>
    <button type="button" class="btn btn-primary">
      結帳
      <span class="badge rounded-pill bg-danger">{{ cartData.carts.length }}</span>
    </button>
  </div>
  </nav>
  <div class="home">
    <h1>這裡是前台頁面</h1>
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/products">前台產品列表</router-link> |
      <router-link to="/cart">前台購物車</router-link> |
      <router-link to="/admin/products">後台購物車列表</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import emitter from '@/libs/emitter';

export default {
  name: 'Home',
  data() {
    return {
      cartData: {
        carts: [],
      },
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
       this.$http.get(url).then((response) => {
         console.log('cart: ', response);
         this.cartData = response.data.data;
      });
    }
  },
  mounted() {
    this.getCart();

    //監聽
    emitter.on('get-cart', () => {
      this.getCart();
    })
  },
};
</script>