<template>
  <div class="video-box">
    <NavBar  />
    <div class="card">
        <div v-for="video in videos" :key="video.id" class="movie-card ">
            <nuxt-link :to="'/video/' + video.id.videoId">
                  <img :src="video.snippet.thumbnails.high.url" alt="">
                  <div class="detail">
                    <h3> {{video.snippet.title}} </h3>
                  </div>
            </nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NavBar from '~/components/NavBar.vue';


export default {

    components: { NavBar },

    computed: {
      ...mapState( ['videos',] )
    },

    methods:{
      ...mapActions(['SET_VIDEOS']),
    },
    
}
</script>

<style lang="scss">

</style>