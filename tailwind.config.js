module.exports = {
  purge: {
    enabled: true,
    layers: ["components", "utilities"],
    content: ["./src/**/*.tsx", "./public/index.html"],
  },
  theme: {
    extend: {},
  },
};
