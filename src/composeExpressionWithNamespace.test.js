const composeExpressionWithNamespace = require('./composeExpressionWithNamespace');

describe('composeExpressionWithNamespace', () => {
  const namespace = 'x';

  [
    {
      expression: "//div[@class='course-title']",
      output: "//x:div[@class='course-title']",
    },
    {
      expression: "//a[@href='/aliexpress']",
      output: "//x:a[@href='/aliexpress']",
    },
    {
      expression: "//img[starts-with(@src, 'https://cloud.shopback.com')]",
      output: "//x:img[starts-with(@src, 'https://cloud.shopback.com')]",
    },
    {
      expression: "//div[@class='course-title']/h1",
      output: "//x:div[@class='course-title']/x:h1",
    },
    {
      expression: "//div[@class='syllabus']/*",
      output: "//x:div[@class='syllabus']/x:*",
    },
  ].forEach(({ expression, output }) => {
    it(`should return correctly when expression is "${expression}"`, () =>
      expect(composeExpressionWithNamespace(expression, namespace)).toEqual(output));
  });
});
