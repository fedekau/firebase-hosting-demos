const express = require('express');
const FastBoot = require('fastboot');

const fastboot = new FastBoot({ distPath: './dist' });

let app = express();
app.use('/assets', express.static('./dist/assets'))

app.get('/', function(req, res) {
  fastboot.visit('/', { request: req, response: res })
      .then(function(result) {
         success(result, res);
      }, function(e) {
         failure(e, res);
      });
});

function success(result, res) {
   result.html()
      .then(html => {
         let headers = result.headers;
         let statusMessage = result.error ? 'NOT OK ' : 'OK ';

         for (var pair of headers.entries()) {
            res.set(pair[0], pair[1]);
         }

         if (result.error) {
            next(result.error);
         }
         console.log(result.statusCode);
         console.log(html);
         res.status(result.statusCode);
         res.send(html);
      });
}

function failure(e, res) {
   console.log('lol fail!');
   console.error(e);
   res.status(500).send('lol error!');
}

app.listen(3000, () => console.log('listening on 3000'));
