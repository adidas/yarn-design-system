if (process.browser) {
  require('expose-loader?Choices!choices.js');
  require('choicesjs-stencil/dist/esm/es5/choicesjsstencil.define').defineCustomElements(window);
}
