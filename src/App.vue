
<template>
  <div id="app" class="bg">
    <header>
      <kisbar></kisbar>
    </header>



    <img alt="Vue logo" src="./assets/logo.png">



    <textimage id="haut" imgsrc="https://www.semencesdefrance.com/wp-content/uploads/2020/01/placeholder.png" textml="<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</>"></textimage>
    <textimage></textimage>
    <kisvideo videosrc ="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm" textml="<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</>"></kisvideo>

    <kisvideo videosrc ="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm" textml="<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</>"></kisvideo>
    <b-col>
      <b-row> <kisvideo videosrc ="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm" textml="<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</>"></kisvideo> </b-row>
      <b-row> <kisvideo videosrc ="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm" textml="<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</>"></kisvideo></b-row>
    </b-col>
      maching
    <b-col>


    </b-col>
      <b-col>
        bis

      </b-col>

    <router-link to="/part1">About</router-link>
    <kisfooter></kisfooter>
    <div id="bas"></div>

  </div>
</template>

<script>
import Kisbar from "@/components/Kisbar";
import Kisfooter from "@/components/Kisfooter";
import Textimage from "@/components/Textimage";

import Kisvideo from "@/components/kisvideo";


export default {
  name: 'App',

  components: {

    Kisvideo,

    Textimage,
    Kisbar,
    Kisfooter

  }
}
</script>

<style>
.bg {
  /* The image used */
  background-color: white;

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

