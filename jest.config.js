module.exports = {
   testEnvironment: 'jsdom',
   moduleFileExtensions: ['js', 'json', 'vue'],
   transform: {
     '^.+\\.vue$': '@vue/vue3-jest', // Asegúrate de usar '@vue/vue3-jest' para Vue 3
     '^.+\\.js$': 'babel-jest'
   },
   moduleNameMapper: {
     '^@/(.*)$': '<rootDir>/src/$1',
     '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/tests/unit/__mocks__/fileMock.js' // Mapea archivos de imagen a un módulo ficticio
   },
   transformIgnorePatterns: ['/node_modules/'],
 }; 