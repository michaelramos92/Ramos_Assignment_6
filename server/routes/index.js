const peopleRoutes = require('./people');
const path = require('path');

const constructorMethod = app => {
    app.use('/api/people', peopleRoutes);
    app.use('*', (req, res) => {
        res.redirect('/api/people');
    })
};

module.exports = constructorMethod;
