<template>
  <header>
    <div class="header_wrapper">
      <h1>Qu&eacute; llevar de viaje</h1>
      <div class="stripe"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
};
</script>

<style lang="scss" scoped>
header {
  background: url('/assets/jpg/cerdito-feliz.jpg') no-repeat center;
  background-size: cover;
  padding: 10vh 0;
  text-align: center;
  position: relative;
}

.header_wrapper {
  height: 50%;
  padding: 0 24px;
  position: relative;
  width: 100%;

  @media screen and (max-width: $phone) {
    padding: 0 20px;
  }
}

h1 {
  color: $c-black;
  font-size: calc(36px + 1.6vw);
  line-height: 1.2em;
  font-weight: 700;
  text-align: center;
  max-width: 340px;
  margin-left: 55vw;
  z-index: 2;
  padding: 16px;

  @media screen and (max-width: $phablet) {
    margin-left: auto;
  }
}

.stripe {
  background-color: $c-white;
  height: 100%;
  width: 100%;
  opacity: 0.15;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 1;
  left: 0;
}
</style>
