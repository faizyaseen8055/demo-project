const express = require("express");
const path = require("path");
const app = express()
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
mongoose.connect('mongodb://localhost:27017/contactDance');
}
const port = 8000;
const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    Email: String,
    gender: String,
    phone: String
  });

  const contact = mongoose.model('contact', contactSchema);

//  EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static file
app.use(express. urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')// set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// ENDPOINT
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
});

app.post('/contact', (req, res)=>{
        var myData = new contact(req.body);
        myData.save().then(()=>{
        res.send("This item has been saved to the database")
        }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    });

    // res.status(200).render('contact.pug');
});

// START THE SERVER 
app.listen(port, ()=>{
    console.log(`The application started succesfully on port ${port}`);
})