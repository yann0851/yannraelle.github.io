<template>
  <nav class="navbar navbar-expand-lg" style="background:#000000">
      <div class="container border-bottom">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse opacity-80" id="navbar10">
              <ul class="navbar-nav nav-fill w-100">
                <div  class="nav-item">
                  <router-link style="color:white" class="nav-link" to="/">Home</router-link>
                </div>
                <div  class="nav-item">
                  <router-link style="color:white" class="nav-link" to="/experience">Experience</router-link>
                </div>
                <li class="nav-item" >
                    <h1 style="color: #41B883;">Yann Raelle</h1>
                </li>
                <div  class="nav-item">
                  <router-link style="color:white" class="nav-link" to="/about">About</router-link>
                </div>
                <div  class="nav-item">
                  <router-link style="color:white" class="nav-link" to="/">Contact</router-link>
                </div>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
</style>