const name = 'John';
const age = 30;
const job = 'Web developer';
const city = 'Silvis';

function hello(){
  return 'hello';
}

//without template strings (ES5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '<li></ul>';

//with template strings (ES6) or template literals
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30': 'Under 30'}
  </ul>
`;

document.body.innterHTML = html;