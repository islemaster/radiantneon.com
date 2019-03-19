document.addEventListener('DOMContentLoaded', injectBoilerplate);

function injectBoilerplate() {
  injectHeader();
  injectFooter();
}

function injectHeader() {
  document.body.insertAdjacentHTML('afterbegin', `
    <header>
      <nav class="social-media">
        <a href="https://www.instagram.com/RadiantNeon" title="Radiant Neon on Instagram"><i class="fa fa-instagram fa-fw"></i></a>
        <a href="https://www.facebook.com/RadiantNeon" title="Radiant Neon on Facebook"><i class="fa fa-facebook-official fa-fw"></i></a>
        <a href="mailto:info@radiantneon.com" title="info@radiantneon.com"><i class="fa fa-envelope-o fa-fw"></i></a>
        <a href="https://goo.gl/maps/zLTrSrDHWEz" title="2000 Airport Way S #18, Seattle, WA"><i class="fa fa-map-marker fa-fw"></i></a>
      </nav>
      <a href="./index.html">
        <img id="logo" alt="Radiant Neon" src="Radiant Neon Temporary Logo - Black on Transparent - 1000px.png"/>
      </a>
      <nav class="nav-main">
        <a href="./about.html">About us</a>
        -
        <a href="./artwork.html">Artwork</a>
        -
        <a href="./pricing.html">Studio time</a>
      </nav>
    </header>
  `);
}

function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <nav class="social-media">
        <a href="https://www.instagram.com/RadiantNeon" title="Radiant Neon on Instagram"><i class="fa fa-instagram fa-fw"></i></a>
        <a href="https://www.facebook.com/RadiantNeon" title="Radiant Neon on Facebook"><i class="fa fa-facebook-official fa-fw"></i></a>
        <a href="mailto:info@radiantneon.com" title="info@radiantneon.com"><i class="fa fa-envelope-o fa-fw"></i></a>
        <a href="https://goo.gl/maps/zLTrSrDHWEz" title="2000 Airport Way S #18, Seattle, WA"><i class="fa fa-map-marker fa-fw"></i></a>
      </nav>
    </footer>
  `);
}

