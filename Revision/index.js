const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "Car")));

app.get('/', function(req, res) {
    fs.readdir('./files', function(err, files) {
        res.render('index', { files: files });
    });
});

app.get('/files/:filename', function(req, res) {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, filedata) {
        res.render('show', { filename: req.params.filename, filedata: filedata});
    })
})

app.get('/files/:filename/edit', function(req, res) {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, filedata) {
        res.render('edit', { filename: req.params.filename, filedata: filedata});
    })  
})

app.post('/edit', function(req, res) {

    const oldName = req.body.previous;
    const newName = req.body.new;

    console.log("Old:", oldName);
    console.log("New:", newName);

    fs.rename(`./files/${oldName}`, `./files/${newName}`, function(err) {

        if (err) {
            console.log(err);
            return res.send("Error renaming file");
        }

        res.redirect('/');
    });
});

app.post('/create', function(req, res) {

    const title = req.body.title;
    const description = req.body.description;

    fs.writeFile(
        `./files/${title.split(' ').join('')}.txt`,
        description,
        function(err) {

            if (err) {
                console.log(err);
                return res.status(500).send("Error creating file");
            }

            res.redirect('/');

        }
    );

});

app.listen(3000);