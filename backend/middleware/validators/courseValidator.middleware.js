const { body } = require('express-validator');

exports.createCourseSchema = [
    body('title')
        .exists()
        .withMessage('title is required')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long'),
    body('language')
        .exists()
        .withMessage('Language is required'),
    body('subject')
        .exists()
        .withMessage('Subject is required'),
    body('chapter')
        .exists()
        .withMessage('Chapter is required'),
    body('topic')
        .exists()
        .withMessage('Topic is required'),
    body('link')
        .exists()
        .withMessage('link is required')
        .isURL()
        .withMessage('Must be a valid link')

];

exports.updateCourseSchema = [
    body('title')
        .optional()
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long'),
    body('link')
        .optional()
        .isURL()
        .withMessage('Must be a valid link')
];