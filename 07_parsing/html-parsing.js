import cheerio from 'cheerio';

const html = `
<html>
  <body>
    <h1>Welcome</h1>
    <ul>
      <li>First</li>
      <li>Second</li>
    </ul>
  </body>
</html>
`;

const $ = cheerio.load(html);

console.log('Heading:', $('h1').text());

$('li').each((i, el) => {
  console.log(`List ${i + 1}:`, $(el).text());
});
