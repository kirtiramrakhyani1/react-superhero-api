import http from "../http-common";

class SuperheroService {
  getAll() {
    return http.get("/all.json");
  }

  get(id) {
    return http.get(`/id/${id}.json`);
  }

}

export default new SuperheroService();