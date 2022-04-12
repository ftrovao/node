const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url=== '/') {
    res.end('home page');
  }
//   else if(req.url === '/about'){
//       res.end('about page')
  //} 
  else{
    res.end(`<h1>Oops!</h1>
    <p>we can't seem to find the page</p>
    <a href="/"> back home</a>`);

  }
  
});

server.listen(5000);

const _ = require('lodash');
const items = [ 1,[2, [3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);