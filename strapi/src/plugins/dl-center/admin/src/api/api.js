/* eslint-disable class-methods-use-this */
class HttpClient {
  get(url, method = 'GET', body = undefined) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  delete(url) {
    return this.get(url, 'DELETE');
  }

  post(url, data) {
    return this.get(url, 'POST', data);
  }

  deleteAllInstructions() {
    return this.delete('http://localhost:1337/dl-center/deleteAll');
  }

  createInstructions(data) {
    return this.post('http://localhost:1337/dl-center/instructions', data);
  }
}

export default new HttpClient();
