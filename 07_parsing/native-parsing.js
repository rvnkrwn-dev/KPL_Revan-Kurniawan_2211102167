// Json parsing
const jsonString = '{"name":"Revan","age":21}';
const json = JSON.parse(jsonString);
console.log('JSON:', json);


// Query String Parsing
import querystring from 'querystring';

const parsedQuery = querystring.parse('name=Revan&age=21');
console.log('Query String:', parsedQuery);

// Url Parsing
import { parse } from 'url';

const parsedUrl = parse('http://localhost:3000?search=test', true);
console.log('URL Query:', parsedUrl.query);
