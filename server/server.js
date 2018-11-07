const express = require('express');
const app = express();


app.get('/', (req, res)=>{
  res.status(404).send({
    error: 'Page Not found',
    name:'Tavic-ci + Fossa'
  });
});



app.get('/users', (req, res)=>{
  res.send({
    users: [{name:'William', age:25 }, {name:'Zach', age:25 }, {name:'Caitlin', age:25 }]
  });
});




app.listen(3000);
module.exports.app = app;



console.log(`Server is running.`);
