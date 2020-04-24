const moiFetch = require("./moiFetch");
module.exports = {
  GET: async (url, options) => {
    const res = await moiFetch(url, options, "GET")
    return res;
  },
  PATCH: async (url, options) => {
    const res = await moiFetch(url, options, "PATCH");
    return res;
  },
  POST: async (url, options) => {
    const res = await moiFetch(url, options, "POST");
    return res;
  },
  PUT: async (url, options) => {
    const res = await moiFetch(url, options, "PUT");
    return res;
  },
  DELETE: async (url, options) => {
    const res = await moiFetch(url, options, "DELETE");
    return res;
  },
};
