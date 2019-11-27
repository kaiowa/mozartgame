<template>
  <header class="header-section">
    <div class="header-warp">
      <a
        href="/"
        class="site-logo"
      >
        <img
          src="img/logo.png"
          alt=""
          title="Mozart Dice game"
        >
      </a>

      <div class="nav-switch">
        <i class="fa fa-bars" />
      </div>

      <ul class="main-menu">
        <li class="active">
          <a href="home.html">Home</a>
        </li>
        <li><a href="about.html">About the game</a></li>
      </ul>

      <div class="header-social-links">
        <a href=""><i class="fa fa-twitter" /></a>
        <a href=""><i class="fa fa-soundcloud" /></a>
      </div>
    </div>
  </header>
</template>

<script src="./Header.js"></script>
<style lang="scss" scoped>
  @import "./Header.scss";
</style>