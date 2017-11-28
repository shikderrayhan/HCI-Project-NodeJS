'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  age: {
    type: Number,
    required: 'Kindly enter the age of user'
  },
  sex: {
    type: String,
    required: 'Kindly enter the sex of user'
  },
  profession: {
    type: String,
    required: 'Kindly enter the profession of user'
  },
  macchinLearningKnowledgeLevel: {
    type: String
  },
  highestDegreeAchieved: {
    type: String
  },
  major: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['created', 'ongoing', 'completed']
    }],
    default: ['created']
  }
});

module.exports = mongoose.model('User', UserSchema);