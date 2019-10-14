<template>
  <div v-if="showBanner" class="cookies">
    <div class="cookies-inner">
      <div class="cookies-content">
        <p class="cookies-message">
          Este sitio usa cookies de Google Analitycs para medir la actividad en la p&aacute;gina. Puedes leer la
          <a
            target="_blank"
            href="https://policies.google.com/privacy"
            title="Politiva de privacidad de google"
          >pol&iacute;tica de privacidad de google</a> o saber m&aacute;s sobre
          <a
            target="_blank"
            href="https://es.wikipedia.org/wiki/Cookie_(inform%C3%A1tica)"
            title="Info sobre cookies"
          >qu&eacute; son las cookies</a>.
        </p>
      </div>

      <div class="cookies-buttons">
        <button @click="acceptCookies">Vale!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiesPolicy',
  data() {
    return {
      showBanner: false
    };
  },
  mounted() {
    const cookiesAccepted = window.localStorage.getItem('cookies:accepted');

    if (cookiesAccepted === null) {
      this.showBanner = true;
    }
  },
  methods: {
    acceptCookies() {
      window.localStorage.setItem('cookies:accepted', 'true');
      this.showBanner = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.cookies {
  background-color: $c-grey100;
  padding: 16px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.cookies-inner {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: $phone) {
    flex-direction: column;
  }
}

.cookies-content,
.cookies-buttons {
  justify-content: center;

  @media screen and (max-width: $phone) {
    text-align: center;
  }
}

.cookies-buttons {
  padding-left: 16px;

  @media screen and (max-width: $phone) {
    padding-left: 0;
  }
}

.cookies p {
  color: $c-grey400;
  font-size: calc(12px + 0.25vw);
  margin: 0;

  @media screen and (max-width: $phone) {
    margin-bottom: 12px;
  }
}

.cookies button {
  color: $c-white;
  background-color: $c-grey400;
  border-radius: 2px;
  padding: 4px 16px;
  font-size: calc(12px + 0.25vw);
  margin: 0;
  border: 0;

  &:hover {
    background-color: $c-grey300;
  }
}
</style>