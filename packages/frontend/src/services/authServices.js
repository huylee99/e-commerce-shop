class auth {
  setToken = token => {
    localStorage.setItem('accessToken', token);
  };

  removeToken = () => {
    localStorage.removeItem('accessToken');
  };

  getToken = () => {
    return localStorage.getItem('accessToken');
  };
  logOut = () => {
    this.removeToken();
    window.location.href = '/';
  };
}

const authService = new auth();

export default authService;
