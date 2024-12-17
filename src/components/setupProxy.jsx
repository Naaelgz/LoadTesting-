import React from "react";

// Import `createProxyMiddleware` dari library `http-proxy-middleware`
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
 
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: '',
      changeOrigin: true,
      secure: false,

      router: (req) => {
        const target = req.query.target; // Ambil query parameter `target` dari URL
        if (target) {
          return target; // Jika target tersedia, gunakan sebagai URL tujuan proxy
        }
        // Jika target tidak tersedia
        throw new Error('Target domain is required in query string');
      },

      // Menghapus bagian `/proxy` dari path di URL sebelum meneruskan request ke target
      pathRewrite: {
        '^/proxy': '', // Menghapus `/proxy` di awal path
      },
    })
  );
};

export default setupProxy;
