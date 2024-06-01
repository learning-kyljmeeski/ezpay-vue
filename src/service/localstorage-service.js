class LocalstorageService{
  cleaner() {
    localStorage.clear();
  }

  setter(key, value) {
    localStorage.setItem(key, value);
  }

  getter(key) {
    return localStorage.getItem(key);
  }
}

export default new LocalstorageService();
