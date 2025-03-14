module.exports = {
  getToken: (name) => {
    const token = localStorage.getItem(name);
    return token;
  },
  setToken: (name, value) => {
    localStorage.setItem(name, value);
  },
  clearToken: (name) => {
    localStorage.clear(name);
  },
};
