class LocalstorageService{
  cleaner() {
    localStorage.clear();
  }

  setter(key, value) {
    localStorage.setItem(key, value);
  }
}

export default new LocalstorageService();
