<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <h2 style="color: white;">About me</h2>
      </div>
      <div class="row">
        <div class="col">
          <div class="row">
            <h5 class="mt-3" style="color: white;">Hello, my name is Yann Raelle, I am 21 years old and I am currently in my 3rd year of study at the Campus CESI engineering school in Reims. I really liked computers
              Since I was little, but at the time I preferred to tinker, touch a little bit of everything, it's only been a short time since I've been interested in development and computer engineering. This is
              why I have learned a lot since my arrival at CESI, both on the technical side and on the human side. Indeed the fact of rubbing shoulders with the world on a day-to-day basis, as well as my various internships,
              I was able to develop an ease in reaching out to others and exchanging with them. Today my professional goal is materializing, I am beginning to find my real orientation in the world of
              IT, what really interests me is project management, because I like this management side, much more than the technical side.
            </h5>
          </div>
          <div class="mt-4 row border-top">
            <h3 class="mt-5" style="color:white;">
              Here my CV
            </h3>
          </div>
          <div class="row">
            <div class="col"></div>
            <div class="col-6">
              <button type="button" class="btn-lg" style="background: #41B883;">
                <a href="CVYannA3English.pdf" target="_blank" style="color: black;"  class="font-weight-bold">Click here to view the PDF file 📄</a>
              </button>
            </div>
            <div class="col"></div>
            
          </div>
        </div>
        <div class="col-5">
          <img class="img-fluid" src="pp.png">
        </div>
      </div>
    </div>
    <div class="container border-top mt-5">
        <div class="row mt-5">
            <div class="col-1"></div>
            <div class="col">
                <h2 style="color: #41B883;" >Experience</h2>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row mt-2">
            <div class="col-1"></div>
            <div class="col">
                <h4 style="color: white;" >You can find here my two internships carried out within the CESI as well as details on my summer job</h4>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div class="card text-center" style="width: 75%; background: #3d3d3d;">
                    <img src="cder.jpg" style="padding: 10px;" class="card-img-top d-block w-100 rounded" alt="Image slide 1">
                    <div class="card-body">
                        <h2 class="card-title" style="color: white;">CDER</h2>
                        <p style="color: white;">
                            I had the chance to do my two CESI internships at the CDER in Chalons en Champagne. My first internship took place during my second year at CESI, I had the
                            chance to meet a great team of engineers there.
                        </p>
                        <router-link class="btn" style="background: #41B883; color: white;" to="/cder">More Information</router-link>
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card text-center" style="width: 75%; background: #3d3d3d;">
                    <img src="adm.png" style="padding: 10px;" class="card-img-top d-block w-100 rounded" alt="Image slide 1">
                    <div class="card-body">
                        <h2 class="card-title" style="color: white;">ADM Bazancourt</h2>
                        <p class="card-text" style="color: white;">
                            I have been doing my summer jobs at adm for 3 now. These allowed me to gain self-confidence and to increase my skills enormously. Click for more information.
                        </p>
                        <router-link class="btn" style="background: #41B883; color: white;" to="/adm">More Information</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>