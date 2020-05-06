const xpath = require('..');

describe('getText', () => {
  const cases = [
    {
      node:
        '<h6 title="Course Introduction" xmlns="http://www.w3.org/1999/xhtml">Course Introduction</h6>',
      output: 'Course Introduction',
    },
    {
      node:
        '<h6 title="QUIZ: Linux Daemon History" xmlns="http://www.w3.org/1999/xhtml"><!---->QUIZ: Linux Daemon History</h6>',
      output: 'QUIZ: Linux Daemon History',
    },
    {
      node:
        '<h6 title="Changing the Default Target of a System" xmlns="http://www.w3.org/1999/xhtml"><strong>Hands-On Lab: </strong>Changing the Default Target of a System</h6>',
      output: 'Changing the Default Target of a System',
    },
  ];

  it('should return correctly', () =>
    cases.forEach(({ node, output }) => {
      const text = xpath.fromNode(node).findElement('//h6').getText();
      expect(text).toEqual(output);
    }));
});
