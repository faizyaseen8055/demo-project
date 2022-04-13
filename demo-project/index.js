const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dummy-project</title>
      <link rel="stylesheet" href="style.css">
      <style>
      .container{
        border: 3px solid black;
        border-radius: 22px;
        background-color: rgb(243, 153, 153);
        padding: 12px;
    }
    
    .container h1{
        color: rgb(4, 4, 122);
    }
    
    .container p{
        font-size: 20px;
    }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>This is my heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis modi nisi! Nam sed placeat perspiciatis adipisci eaque sapiente labore rem consectetur in vero ab, soluta voluptatibus minus? Odio a natus reiciendis est asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis modi nisi! Nam sed placeat perspiciatis adipisci eaque sapiente labore rem consectetur in vero ab, soluta voluptatibus minus? Odio a natus reiciendis est asperiores?
  
          </p>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});