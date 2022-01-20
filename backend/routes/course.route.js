const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const { createCourseSchema, updateCourseSchema } = require('../middleware/validators/courseValidator.middleware');

router.get('/', awaitHandlerFactory(courseController.getAllCourse)); // localhost:3000/api/v1/course
router.get('/id/:id', auth(), awaitHandlerFactory(courseController.getCourseById)); // localhost:3000/api/v1/course/id/1
router.post('/',auth(), createCourseSchema, awaitHandlerFactory(courseController.createCourse)); // localhost:3000/api/v1/course
router.patch('/id/:id', auth(), updateCourseSchema, awaitHandlerFactory(courseController.updateCourse)); // localhost:3000/api/v1/course/id/1 
router.delete('/id/:id', auth(), awaitHandlerFactory(courseController.deleteCourse)); // localhost:3000/api/v1/course/id/1

module.exports = router;