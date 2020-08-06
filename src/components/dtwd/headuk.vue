<template>
  <div class="Ddiv1">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="@/assets/imgs/0.png"/></van-swipe-item>
      <van-swipe-item><img src="@/assets/imgs/1.png"/></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Ddiv1 {
  width: 100%;
  margin: 0 auto;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 150px;
}
</style>
