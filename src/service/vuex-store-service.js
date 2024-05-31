import store from "@/store/vuex-store";

class VuexStoreService {
  async cleaner() {
    const {dispatch} = store;
    await dispatch('user', null);
    await dispatch('role', null);
    await dispatch('auth', false);
    await dispatch('profile_photo_url', null);
  }

  async setter(user, role, auth, profile_photo_url) {
    const {dispatch} = store;
    await dispatch('user', user);
    await dispatch('role', role);
    await dispatch('auth', auth);
    await dispatch('profile_photo_url', profile_photo_url);
  }

  async setProfilePhotoUrl(profileUr) {
    const {dispatch} = store;
    await dispatch('profile_photo_url', profileUr);
  }
}

export default new VuexStoreService();
