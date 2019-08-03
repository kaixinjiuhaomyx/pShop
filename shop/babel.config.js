module.exports = {
  presets: [
    '@vue/app'
  ]
}

// vant按需引入
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};