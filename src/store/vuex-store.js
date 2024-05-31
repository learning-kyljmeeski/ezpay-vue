import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const state = {
  user: null,
  role: null,
  auth: false,
  profile_photo_url: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
}

const store = createStore({
  plugins: [createPersistedState()],
  state,
  getters: {
    user: (state) => {
      return state.user;
    },
    role: (state) => {
      return state.role;
    },
    auth: (state) => {
      return state.auth;
    },
    profile_photo_url: (state) => {
      return state.profile_photo_url;
    },

  },
  actions: {
    user(context, user) {
      context.commit('user', user)
    },
    role(context, role) {
      context.commit('role', role)
    },
    auth(context, auth) {
      context.commit('auth', auth)
    },
    profile_photo_url(context, profile_photo_url) {
      context.commit('profile_photo_url',profile_photo_url);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user
    },
    role(state, role) {
      state.role = role;
    },
    auth(state, auth) {
      state.auth = auth;
    },
    profile_photo_url(state, profile_photo_url) {
      state.profile_photo_url = profile_photo_url;
    },
  },
})

export default store;
