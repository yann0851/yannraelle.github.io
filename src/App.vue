<template style="background:#000000;">

  <NavBar/>
  <router-view />
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'


export default {
  components: {
    NavBar
  }
}
</script>

