const responseHandler = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

class Api {
  constructor({path, token}) {
      this.path = path;
      this.token = token;
  }
  
  getProductList() {
      return fetch(`${this.path}/posts`, {
          headers: {
              authorization: `Bearer ${this.token}`
          }
      }).then(responseHandler);
  }

  getSingleProduct(id) {
      return fetch(`${this.path}/posts/${id}`, {
          headers: {
              authorization: `Bearer ${this.token}`
          }
      }).then(responseHandler);
  }
}

const config = {
  path: "https://api.react-learning.ru",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU1YTVmNTk0N2M3MjkyZDhjMjA1MTYiLCJpYXQiOjE2NDk3ODAyMjEsImV4cCI6MTY4MTMxNjIyMX0.HbcJBZs-UUQhLHlDL_gPhSwmwif62eBAmk7GPSOummU"
}

const api = new Api(config);

export default api;
