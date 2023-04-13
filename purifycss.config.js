module.exports = {
    // Paths to all the CSS files in your project
    css: ["./node_modules/bulma/css/bulma.css",
    "./node_modules/slick-carousel/slick/slick.css",
    "./node_modules/slick-carousel/slick/slick-theme.css"],
  
    // Paths to all the HTML files in your project
    content: ["./src/**/*.jsx", "./src/**/*.js"],
  
    // Options to pass to PurifyCSS
    options: {
        whitelist: ['react-modal', 'slick-slider', 'slick-list', 'slick-track', 'slick-slide', 'slick-initialized', 'slick-next', 'slick-prev', 'slick-dots', 'slick-active'],
        whitelistPatterns: [/^slick-/, /.*slick.*/],
        rejected: true,
    }
  }
  