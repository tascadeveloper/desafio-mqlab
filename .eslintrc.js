module.exports = {
  "extends": "airbnb",
  "rules":{
    // allow console and debugger in development
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
  "parser": "babel-eslint",
  "globals": {
    "beforeEach": true,
    "describe": true,
    "expect": true,
    "it": true,
    "xdescribe": true,
    "xit": true,
    "navigator": true,
    "document": true,
    "window": true,
    "React": true,
    "FormData": true,
    "fetch":true,
  }
};
