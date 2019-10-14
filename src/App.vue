<template>
  <div class="main">
    <div class="page-content">
      <MainHeader />
      <section>
        <router-view />
      </section>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/Header.vue';
import MainFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  }
};
</script>
