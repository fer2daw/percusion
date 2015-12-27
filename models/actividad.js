var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var tvshowSchema = new Schema({
	nombreActividad:        { type: String },
	fechaActividad: 	{ type: Date },
	descripcionActividad:  	{ type: String },
	tipoActividad:          { type: String, enum :
                                                   ['Solfeo', 'Percusion']
		}
});

module.exports = mongoose.model('TVShow', tvshowSchema);