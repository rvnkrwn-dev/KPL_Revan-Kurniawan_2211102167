const acorn = require('acorn');

const code = `
function greet(name) {
  return "Hello, " + name;
}
`;

const ast = acorn.parse(code, { ecmaVersion: 2020 });

console.log(JSON.stringify(ast, null, 2));
