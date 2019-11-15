const express = require('express');
const Students = require('./studentsModel');
const router = express.Router();

router.post('/student', (req, res) => { 
    studentData = req.body;
    
    Students.insert(studentData)
    .then(saved => { 
        res.status(201).json(saved)
    })
    .catch(error => { 
        res.status(500).json({
            message: 'Unable to add student to database'
        })
    })
})

router.delete('/student/:id', (req, res) => { 
    const { id } = req.params;

    Students.remove(id)
    
    .then(deleted => { 
        if (deleted) { 
            res.json({ 
                message: 'student information deleted'
            })
        } else { 
            res.status(404).json({ 
                message: 'Could not find student ID'
            })
        }
    })

    .catch(error => { 
        res.status(500).json({ 
            message: 'Failed to delete student'
        })
    })
})

module.exports = router;