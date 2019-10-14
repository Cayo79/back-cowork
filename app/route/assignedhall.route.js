module.exports = function(app) {
 
    const assigneds = require('../controller/assignedhall.controller.js');
 
    // Create a new Assigned
    app.post('/api/assignedhall', assigneds.create);
 
    // Retrieve all Assigned
    app.get('/api/assignedhall', assigneds.findAll);
 
    // Retrieve a single Assigned by Id
    app.get('/api/assignedhall/:id', assigneds.findById);
 
    // Update a Assigned with Id
    app.put('/api/assignedhall/:id', assigneds.update);
 
    // Delete a Assigned with Id
    app.delete('/api/assignedhall/:id', assigneds.delete);
}