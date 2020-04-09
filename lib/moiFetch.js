const { http, https } = require("follow-redirects");

module.exports = function moiFetch(url, options = {}, method) {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error("Url is required"));

    const { body, ...restOptions } = options;

    const client = url.startsWith("https") ? https : http;

    const request = client.request(url, { method, ...restOptions }, res => {
      let chunks = "";

      res.setEncoding("utf8");

      res.on("data", chunk => {
        chunks += chunk;
      });

      res.on("end", () => {
        // console.log(res.headers["content-type"]);
        resolve({
          headers: res.headers,
          method,
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          data: res.headers["content-type"].includes("text/")
            ? chunks
            : res.headers["content-type"].includes("application/json")
            ? JSON.parse(chunks)
            : ((resolve.encoding = null), chunks)
        });
      });
    });

    request.on("error", err => {
      reject(err);
    });

    if (body) {
      request.setHeader("Content-Length", body.length);
      request.write(body);
    }

    request.end();
  });
};
