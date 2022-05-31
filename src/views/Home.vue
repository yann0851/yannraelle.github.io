<template>
  <div class="main">
    <div class=" mb-5 container mt-5">
      <div class="row">
        <div class="col"></div>
        <div class="col-10">
          <div class="container">
            <div class="row">
              <div class="col ">
                <img class="img-fluid rounded-circle" src="/public/pp.png">
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
                <img src="http://localhost:8080/cder.jpg"
                      class="d-block w-100" alt="Image slide 1">
                <div class="carousel-caption d-none d-md-block">
                    <h5>CDER</h5>
                    <p>I make my two CESI internship here, see my experience page to know more about it.</p>
                </div>
            </div>
            <div class="carousel-item h-100" data-bs-interval="5000">
                <img src="http://localhost:8080/adm.png"
                      class="d-block w-100" alt="Image slide 2">
                <div class="carousel-caption d-none d-md-block">
                    <h5>ADM Bazancourt</h5>
                    <p>This were I work all summer since I have 18.</p>
                </div>
            </div>
            <div class="carousel-item h-100" data-bs-interval="5000">
                <img src="https://picsum.photos/1920/1080?random=3"
                      class="d-block w-100" alt="Image slide 3">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Slide 3</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        sollicitudin.</p>
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
      test : "Bonjour ! Bienvenue sur mon portfolio, je m'appel Yann, je suis actuellement étudiant en école d'ingénieur au Campus CESI de Reims. Ce site est un peu mon petit coin personnel, il ressence mes expérience, compétence, ainsi qu'une page personnelle pour apprendre à mieux connaitre ma personnelité. Si tu veux en savoir plus sur moi, clique sur mon nom dans la barre de navigation.",
      carroussel : "Tu peux retrouver ici les chose les plus récentes que j'ai fait !"
    }
  }
}
</script>

<style>

nav {

}

</style>
