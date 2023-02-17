module.exports = function ovverride(config, env) {
  config.module.rules.push({
    test: /.(png|jpe?g|gif|webp|avif)$/i,
    use: [{ loader: 'file-loader' }],
  });
  config.output.globalObject = 'this';
  return config;
};
