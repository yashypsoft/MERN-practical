const CourseModel = require('../models/course.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

class CourseController {
    getAllCourse = async (req, res, next) => {
        let courseList = await CourseModel.find(req.query);
        if (!courseList.length) {
            throw new HttpException(404, 'Course not found');
        }
        res.send(courseList);
    };

    getCourseById = async (req, res, next) => {
        const course = await CourseModel.findOne({ id: req.params.id });
        if (!course) {
            throw new HttpException(404, 'Course not found');
        }
        res.send(course);
    };


    createCourse = async (req, res, next) => {
        this.checkValidation(req);


        const result = await CourseModel.create(req.body);

        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Course was created!');
    };

    updateCourse = async (req, res, next) => {
        this.checkValidation(req);

        const result = await CourseModel.update(restOfUpdates, req.params.id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'Course not found' :
            affectedRows && changedRows ? 'Course updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    deleteCourse = async (req, res, next) => {
        const result = await CourseModel.delete(req.params.id);
        if (!result) {
            throw new HttpException(404, 'Course not found');
        }
        res.send('Course has been deleted');
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}


module.exports = new CourseController;