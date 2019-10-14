module.exports = function(app) {
 
    const halls = require('../controller/conferencehall.controller.js');
 
    // Init data
    app.get('/api/hall/init', halls.init);

    // Create a new Hall
    app.post('/api/hall', halls.create);
 
    // Retrieve all Halls
    app.get('/api/hall', halls.findAll);
 
    // Retrieve a single Hall by Id
    app.get('/api/hall/:id', halls.findById);
 
    // Update a Hall with Id
    app.put('/api/hall/:id', halls.update);
 
    // Delete a Hall with Id
    app.delete('/api/hall/:id', halls.delete);
}