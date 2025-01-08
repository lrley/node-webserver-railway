require ('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port= process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'))


app.get('/', (req, res) => {
    //res.send('Inicio')
    res.render('home', {

        nombre: 'Luis Ley Viteri',
        titulo: 'Curso de Node',
    })
    //res.sendFile(__dirname + '/public/index.html');
  })

  app.get('/generic',  (req, res) => {
    //res.sendFile(__dirname + '/public/generic.html');
        res.render('generic',{
            nombre: 'Luis Ley Viteri',
            titulo: 'Curso de Node',
        })

    })

    app.get('/elements',  (req, res) => {
        //res.sendFile(__dirname + '/public/elements.html');
        res.render('elements',{
            nombre: 'Luis Ley Viteri',
            titulo: 'Curso de Node',
        })

        })

         
  app.get('*', (req, res) =>{
    // res.send('404  |  page not found');
   //  res.sendFile(__dirname + '/public/404.html');
   res.render('404',{

   })
 })

/*app.get('/', (req, res) => {
    //res.send('Inicio')
    res.sendFile(__dirname + '/public/index.html');
  })*/

  /*app.get('/index',  (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    })
  
    app.get('/generic',  (req, res) => {
        res.sendFile(__dirname + '/public/generic.html');
        })

         
    app.get('/elements',  (req, res) => {
        res.sendFile(__dirname + '/public/elements.html');
        })
*/
        
 

  app.listen(port , () => {
    console.log(`App Listening at http://localhost:${port}`);
});

