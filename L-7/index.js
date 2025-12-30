const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        res.render('index', { files: files });
    });
});

app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', (err, filedata) => {
        res.render('show', { filename: req.params.filename, filedata: filedata });
    });
});

app.get('/edit/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', (err, filedata) => {
        res.render('edit', { filename: req.params.filename, filedata: filedata });
    });
});

app.post('/edit', (req, res) => {
    const oldFile = `./files/${req.body.oldTitle}`;
    const newFile = `./files/${req.body.newTitle.split(' ').join('')}.txt`;
    const newContent = req.body.newDetails;

    fs.rename(oldFile, newFile, (err) => {
        if (err) {
            return res.send("Rename error");
        }
        fs.writeFile(newFile, newContent, (err) => {
            if (err) return res.send("Write error");
            res.redirect('/');
        });
    });
});


app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err) => {
        res.redirect('/');
    });
});


app.post('/delete/:filename', (req, res) => {
    const filePath = `./files/${req.params.filename}`;

    fs.unlink(filePath, (err) => {
        if (err) return res.send("Delete failed");
        res.redirect('/');
    });
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});