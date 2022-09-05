<template>
  <div class="video-wrapper">
    <BackButton/>
    <div class="video-container">
      <div class="iframe-wrapper">
        <iframe :src="`https://www.youtube.com/embed/${this.$route.params.video}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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

