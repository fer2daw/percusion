//File: routes/actividad.js
module.exports = function(app) {

  var ActividadJS = require('../models/actividad.js');

  //GET - Return all Actividades in the DB
  findAllActividades = function(req, res) {
  	ActividadJS.find(function(err, actividades) {
  		if(!err) {
        console.log('GET /actividades');
  			res.send(actividades);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return an Actividad with specified ID
  findById = function(req, res) {
  	ActividadJS.findById(req.params.id, function(err, actividad) {
  		if(!err) {
        console.log('GET /actividad/' + req.params.id);
  			res.send(actividad);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new Actividad in the DB
  addActividad = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var actividad = new ActividadJS({
  		nombreActividad:    req.body.nombreActividad,
  		fechaActividad: 	  req.body.fechaActividad,
  		descripcionActividad:   req.body.descripcionActividad,
  		tipoActividad:    req.body.tipoActividad
  	});

  	actividad.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(actividad);
  };

  //PUT - Update a register already exists
  updateActividad = function(req, res) {
  	ActividadJS.findById(req.params.id, function(err, actividad) {
  		actividad.nombreActividad   = req.body.petId;
  		actividad.fechaActividad    = req.body.fechaActividad;
  		actividad.descripcionActividad  = req.body.descripcionActividad;
  		actividad.tipoActividad   = req.body.tipoActividad;

  		actividad.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(actividad);
  		});
  	});
  }

  //DELETE - Delete an Actividad with specified ID
  deleteActividad = function(req, res) {
  	ActividadJS.findById(req.params.id, function(err, actividad) {
  		actividad.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/actividades', findAllActividades);
  app.get('/actividad/:id', findById);
  app.post('/actividad', addActividad);
  app.put('/actividad/:id', updateActividad);
  app.delete('/actividad/:id', deleteActividad);

}