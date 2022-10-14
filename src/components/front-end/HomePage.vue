<template>
  <div class="hello">
    <NavBar />
    <div class="home">
      <div class="container">
        <div class="hero">
          <h1>Welcome</h1>
          <h3>We hope you are happy with what we offer</h3>
        </div>
        <BtnLink />
      </div>

    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import BtnLink from './btns/BtnLink.vue';
export default {
  name: "HomePage",
  components: { NavBar, BtnLink },

}
</script>
<style>
.home {
  height: 91.5vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../../assets/sr.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  /* position: relative; */
}

.hero {

  position: absolute;
  top: 55%;
  left: 45%;
  transform: translate(-50%, -50%);
  font-family: 'Cairo', sans-serif;
}

.hero h1 {
  font-size: 5rem;
  color: #d5942f;
  text-shadow: 0px 6px #80591b;
}

.hero h3 {
  font-size: 2rem;
  color: #ffffff;

}
</style>

