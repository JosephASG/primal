const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');

const pool = require('../database');

router.get('/add', isLoggedIn,(req, res) =>{
    res.render('links/add');
});
router.post('/add', isLoggedIn, async (req, res) =>{
    const { tittle, url, description} = req.body;
    const newLink = {
        tittle,
        url,
        description
        //user_id: req.user.id
    };
    await pool.query('INSERT INTO links set ?', [newLink]);
    req.flash('success', 'Comentario agregado con éxito');
    res.redirect('/comments');
})

router.get('/delete/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM links WHERE ID = ?', [id]);
    req.flash('success', 'Comentario removido con éxito')
    res.redirect('/comments');
});

router.get('/', isLoggedIn, async (req, res) =>{
    //const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
    const links = await pool.query('SELECT * FROM links');
    res.render('links/list', { links })
})

router.get('/edit/:id',isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
    res.render('links/edit', {link: links[0]});
});

router.post('/edit/:id',isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { tittle, description, url } = req.body;
    const newLink = {
        tittle,
        description,
        url
    }
    await pool.query('UPDATE links set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Comentario actualizado con éxito')
    res.redirect('/comments');
});

module.exports = router;