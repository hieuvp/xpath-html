const composeExpressionWithNamespace = require('./composeExpressionWithNamespace');

describe('composeExpressionWithNamespace', () => {
  const namespace = 'x';

  [
    {
      expression: "//div[@class='syllabus']/*",
      output: "//x:div[@class='syllabus']/*",
    },
  ].forEach(({ expression, output }) => {
    it(`should return correctly when expression is "${expression}"`, () =>
      expect(composeExpressionWithNamespace(expression, namespace)).toEqual(output));
  });
});
