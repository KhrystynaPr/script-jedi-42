// www.codewars.com/kata/singleton-pattern/train/javascript

class Singleton {
  constructor() {
    if (!Singleton._instance) {
      Singleton._instance = this;
    }
    return Singleton._instance;
  }
}


// www.codewars.com/kata/588a00ad70720f2cd9000005

class Router {
  constructor() {
    this.map = new Map();
  }
  bind(url, method, action) {
    this.map.set(url + method, action);
  }
  runRequest(url, method) {
    return this.map.has(url + method)
      ? this.map.get(url + method)()
      : "Error 404: Not Found";
  }
}
