const controller = require("./controller");

module.exports = function(app){
    app.get('/tasks', controller.index)
    app.post('/tasks', controller.create)
    app.get('/tasks/:id', controller.find)
    app.put('/tasks/:id', controller.update)
    app.delete('/tasks/:id', controller.remove)
    
}