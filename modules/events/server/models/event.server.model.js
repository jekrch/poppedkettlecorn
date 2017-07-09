'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Event Schema
 */
var EventSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Event name',
    trim: true
  },
  body: {
    type: String,
    default: '',
    required: 'Please fill Event',
    trim: true
  },
  tags: {
    type: String,
    default: '',
    trim: true
  },
  category: {
    type: String,
    default: '',
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Event', EventSchema);
