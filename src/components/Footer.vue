<template>
  <footer>
    <div class="page-container">
      <router-link
        to="/politica-cookies"
        title="Ver la política de cookies"
      >pol&iacute;tica de cookies</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
};
</script>

<style lang="scss" scoped>
footer {
  color: $c-grey400;
  font-size: 14px;
  flex-shrink: 0;
  padding: 24px;

  @media screen and (max-width: $phone) {
    padding: 24px 20px;
  }
}
</style>
