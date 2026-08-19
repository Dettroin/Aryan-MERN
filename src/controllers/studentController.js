const mongoose = require('mongoose');

const Student = require('../models/Student');

function getValidationMessage(error) {
  if (error.name === 'ValidationError') {
    return Object.values(error.errors)
      .map((validationError) => validationError.message)
      .join(', ');
  }

  if (error.code === 11000) {
    const duplicateField = Object.keys(error.keyPattern || {})[0];
    return `${duplicateField || 'Email or roll number'} already exists`;
  }

  return error.message || 'Server error';
}

function isValidStudentId(id) {
  return mongoose.isValidObjectId(id);
}

async function createStudent(req, res, next) {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: student,
    });
  } catch (error) {
    error.statusCode = error.name === 'ValidationError' || error.code === 11000 ? 400 : 500;
    error.message = getValidationMessage(error);
    next(error);
  }
}

async function getStudents(req, res, next) {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: students,
    });
  } catch (error) {
    next(error);
  }
}

async function getStudentById(req, res, next) {
  try {
    if (!isValidStudentId(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Invalid student ID' });
    }

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: student,
    });
  } catch (error) {
    return next(error);
  }
}

async function updateStudent(req, res, next) {
  try {
    if (!isValidStudentId(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Invalid student ID' });
    }

    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: student,
    });
  } catch (error) {
    error.statusCode = error.name === 'ValidationError' || error.code === 11000 ? 400 : 500;
    error.message = getValidationMessage(error);
    return next(error);
  }
}

async function deleteStudent(req, res, next) {
  try {
    if (!isValidStudentId(req.params.id)) {
      return res.status(400).json({ success: false, message: 'Invalid student ID' });
    }

    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: student,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};