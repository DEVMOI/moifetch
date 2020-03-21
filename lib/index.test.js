const moiFetch = require("./index");

describe("moifetch Tests", () => {
  describe("GET Requests", () => {
    test("should be a 200 Status Code", () => {
      moiFetch
        .GET("https://httpbin.org/get")
        .then(res => {
          expect(res.statusCode).toBe(200);
        })
        .catch(error => {
          console.debug(error);
        });
    });
    test("Method == GET", () => {
      moiFetch
        .GET("https://httpbin.org/get")
        .then(res => {
          expect(res.method).toBe("GET");
        })
        .catch(error => {
          console.debug(error);
        });
    });
    test("IF Request a HTML Page Return HTMl or Text", () => {
      moiFetch
        .GET("https://github.com/axios/axios/blob/master/ECOSYSTEM.md")
        .then(res => {
          expect(typeof res.data).toBe("string");
        })
        .catch(error => {
          console.debug(error);
        });
    });
    test("IF Request is an OBJECT, return an Object", () => {
      moiFetch
        .GET("https://api.open5e.com/spells/")
        .then(res => {
          expect(typeof res.data).toBe("object");
        })
        .catch(error => {
          console.debug(error);
        });
    });
    // test("should receive an Image", () => {
    //   moiFetch
    //     .GET("https://httpbin.org/image/png", { accept: "image/png" })
    //     .then(res => {
    //       expect(typeof res.data).toBe("object");
    //     })
    //     .catch(error => {
    //       console.debug(error);
    //     });
    // });
  });

  describe("PATCH Requests", () => {
    test("should make a post request", () => {
      moiFetch
        .PATCH("https://httpbin.org/patch")
        .then(res => {
          expect(res.statusCode).toBe(200);
        })
        .catch(error => {
          console.debug(error);
        });
    });
    test("Method == PATCH", () => {
      moiFetch
        .PATCH("https://httpbin.org/patch")
        .then(res => {
          expect(res.method).toBe("PATCH");
        })
        .catch(error => {
          console.debug(error);
        });
    });
  });

  describe("POST Requests", () => {
    test("should make a post request", () => {
      moiFetch
        .POST("https://httpbin.org/post")
        .then(res => {
          expect(res.statusCode).toBe(200);
        })
        .catch(error => {
          console.debug(error);
        });
    });
    test("Method == POST", () => {
      moiFetch
        .POST("https://httpbin.org/post")
        .then(res => {
          expect(res.method).toBe("POST");
        })
        .catch(error => {
          console.debug(error);
        });
    });
  });

  describe("PUT Request", () => {
    test("should make a put request", () => {
      moiFetch
        .PUT("https://httpbin.org/put")
        .then(res => {
          expect(res.statusCode).toBe(200);
        })
        .catch(error => {
          console.debug(error);
        });
    });
    test("Method == PUT", () => {
      moiFetch
        .PUT("https://httpbin.org/put")
        .then(res => {
          expect(res.method).toBe("PUT");
        })
        .catch(error => {
          console.debug(error);
        });
    });
  });

  describe("DELETE Request", () => {
    test("should make a delete request", () => {
      moiFetch
        .DELETE("https://httpbin.org/delete")
        .then(res => {
          expect(res.statusCode).toBe(200);
        })
        .catch(error => {
          console.debug(error);
        });
    });
    test("Method == DELETE", () => {
      moiFetch
        .DELETE("https://httpbin.org/delete")
        .then(res => {
          expect(res.method).toBe("DELETE");
        })
        .catch(error => {
          console.debug(error);
        });
    });
  });
});
