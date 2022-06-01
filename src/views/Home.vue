<template>
  <div class="main">
    <div class=" mb-5 container mt-5">
      <div class="row">
        <div class="col"></div>
        <div class="col-10">
          <div class="container">
            <div class="row">
              <div class="col ">
                <img class="img-fluid rounded-circle" src="pp.png">
              </div>
              <div class="col-8">
                <div class="row">
                  <h1 style="color: white;" >Welcome to my portfolio!</h1>
                </div>
                <div>
                  <h3 class="fluid" style="color: white;" :title="{test}">{{ test }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div class="mt-5 container rounded" style="background:#fffff">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h1 style="color: white;" >Last fings</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h3 style="color: white;" >{{carroussel}}</h3>
          </div>
        </div>
      </div>
      <div id="carouselProject1" class="mt-5 carousel slide shadow h-100" data-bs-ride="carousel" data-bs-touch="true">
        <div class="carousel-inner h-100 rounded">
            <div class="carousel-item h-100 active" data-bs-interval="5000">
                <img src="cder.jpg"
                      class="d-block w-100" alt="Image slide 1">
                <div class="carousel-caption d-none d-md-block">
                    <h5>CDER</h5>
                    <p>I make my two CESI internship here, see my experience page to know more about it.</p>
                </div>
            </div>
            <div class="carousel-item h-100" data-bs-interval="5000">
                <img src="adm.png"
                      class="d-block w-100" alt="Image slide 2">
                <div class="carousel-caption d-none d-md-block">
                    <h5>ADM Bazancourt</h5>
                    <p>This were I work all summer since I have 18.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      test : "Good morning ! Welcome to my portfolio, my name is Yann, I am currently an engineering school student at the CESI Campus in Reims. This site is a bit like my little personal corner, it reflects my experience, my skills, as well as a personal page to get to know my personality better. If you want to know more about me, click on about in the navigation bar. (This site is still under development, so it is subject to many changes over time).",
      carroussel : "You can find here last fings that I did !"
    }
  }
}
</script>

<style>


</style>
