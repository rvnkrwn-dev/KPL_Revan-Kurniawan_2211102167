const querystring = require('querystring');
const url = require('url');

// JSON parsing
const jsonString = '{"name":"Revan","age":21}';
const json = JSON.parse(jsonString);
console.log('JSON:', json);

// Query string parsing
const parsedQuery = querystring.parse('name=Revan&age=21');
console.log('Query String:', parsedQuery);

// URL parsing
const parsedUrl = url.parse('http://localhost:3000?search=test', true);
console.log('URL Query:', parsedUrl.query);
