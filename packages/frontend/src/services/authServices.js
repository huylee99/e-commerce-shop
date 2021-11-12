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
}

const authService = new auth();

export default authService;
