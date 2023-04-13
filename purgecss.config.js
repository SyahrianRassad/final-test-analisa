module.exports = {
  content: ["./src/**/*.jsx", "./src/**/*.js"],
  css: [
    "./node_modules/bulma/css/bulma.css",
    "./node_modules/slick-carousel/slick/slick.css",
    "./node_modules/slick-carousel/slick/slick-theme.css"
    ],
  safelist: [
    'slick-slider',
    'slick-list',
    'slick-track',
    'slick-slide',
    'slick-initialized',
    'slick-next',
    'slick-prev',
    'slick-dots',
    'slick-active'
  ],
  options: {
    minify: true,
    info: true,
    whitelist: ['react-modal', 'slick-slider', 'slick-list', 'slick-track', 'slick-slide', 'slick-initialized', 'slick-next', 'slick-prev', 'slick-dots', 'slick-active'],
    whitelistPatterns: [/^slick-/, /.*slick.*/],
    rejected: true,
  }
};

{/* <link rel="stylesheet" href="dist/bundle.css"></link> */}