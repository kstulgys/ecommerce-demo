module.exports = {
  roots: ['./__tests__'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },

  setupFiles: ['./enzyme'],
}
