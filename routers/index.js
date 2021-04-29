module.exports = (app) => {
    app.use('/admin', require('./admin'))
    app.use('/api', require('./api'))
    //404
    app.use((req, res) => {
        res.status(404).render('404');
    })
}
