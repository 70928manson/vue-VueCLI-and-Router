<template>
  <div class="about">
    <h1>This is 單一產品頁面</h1>
    {{ product.title }}
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    //物件解構賦值 原: const id = product.id;  const description = production.description ---> const { id, description } = product
    //變數需與product的資料相符

    //用$route取得id
    //$router 方法
    //$route 本身是物件 用來取值
    const { id } = this.$route.params;  //取得網址參數(params)裡面的id
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
    this.$http
      .get(url)
      .then(() => {
        this.product = res.data.product;
      })
      .catch((err) => {
        alert(err.data.message);
      });
  },
};
</script>