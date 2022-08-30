// https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC4g_Q12d08IgWaaOzfOQNpg&maxResults=20&order=date&key=AIzaSyCajP_L3r6g3qHzBdOGIM4QdYRWAC4440o


// State

export const state = () => ({
      
          videos: [],

});



// mutations

export const mutations = {
    
  SET_VIDEOS(state, videos){
      state.videos = videos
    },

  
};

// actions

export const actions = {

  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('storeDispatchFunc')
  },

     async nuxtServerInit({ commit }) {
        return this.$axios.$get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC4g_Q12d08IgWaaOzfOQNpg&maxResults=20&order=date&key=AIzaSyCajP_L3r6g3qHzBdOGIM4QdYRWAC4440o')
        .then(response => {
         commit('SET_VIDEOS', response.items)
        }) 
  },

}
