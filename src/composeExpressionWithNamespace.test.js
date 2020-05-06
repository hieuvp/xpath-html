const composeExpressionWithNamespace = require('./composeExpressionWithNamespace');

describe('composeExpressionWithNamespace', () => {
  const namespace = 'x';

  [
    {
      expression: "//div[@class='syllabus']/*",
      output: "//x:div[@class='syllabus']/*",
    },
    {
      expression: "//div[@class='course-title']",
      output: "//x:div[@class='course-title']",
    },
    {
      expression: "//div[@class='course-title']/h1",
      output: "//x:div[@class='course-title']/x:h1",
    },
  ].forEach(({ expression, output }) => {
    it(`should return correctly when expression is "${expression}"`, () =>
      expect(composeExpressionWithNamespace(expression, namespace)).toEqual(output));
  });
});
