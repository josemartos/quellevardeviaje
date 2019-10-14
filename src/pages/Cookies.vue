<template>
  <article class="cookies">
    <div class="page-container">
      <h1>Pol&iacute;tica de cookies</h1>

      <p>Una cookie (galleta o galleta inform&aacute;tica) es una peque&ntilde;a informaci&oacute;n enviada por un sitio web y almacenada en el navegador del usuario, de manera que el sitio web puede consultar la actividad previa del navegador.</p>

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

      <h2>Para desactivar las cookies en...</h2>

      <ul>
        <li>
          <a
            target="_blank"
            href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647"
            title="Desactivar cookies Google Chrome"
          >Chrome</a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://support.apple.com/kb/PH19214?viewlocale=es_ES&locale=es_ES"
            title="Desactivar cookies Safari"
          >Safari</a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
            title="Desactivar cookies Firefox"
          >Firefox</a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://help.opera.com/en/latest/web-preferences/#cookies"
            title="Desactivar cookies Opera"
          >Opera</a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
            title="Desactivar cookies Internet explorer"
          >Internet Explorer</a>
        </li>
      </ul>

      <p>
        <router-link to="/" title="Volver a quellevardeviaje.com">volver</router-link>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Cookies'
};
</script>

<style lang="scss" scoped>
.cookies {
  padding: 24px;
}

p,
ul {
  font-size: calc(16px + 0.25vw);
  margin-bottom: 24px;
}

ul {
  list-style-type: square;
  margin-left: 48px;
}

a {
  color: $c-blue;
  cursor: pointer;
  text-decoration: none;
  outline: none;
}

h1,
h2 {
  font-size: calc(32px + 0.25vw);
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

h2 {
  font-size: calc(24px + 0.25vw);
}

@media screen and (max-width: 575px) {
  .cookies {
    padding: 24px 20px;
  }
}
</style>
