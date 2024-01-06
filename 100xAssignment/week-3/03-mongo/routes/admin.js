const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

function generateUniqueId(){
    const uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2,5)

    return uniqueId
}
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username : req.body.username,
        password : req.body.password
    });

    res.json({
        msg : " Admin Created Sucessfully"
    });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const id = generateUniqueId();
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const createdBy = req.headers.username;
    
    const newCourse = await Course.create({
        id,
        title,
        description,
        price,
        imageLink,
        createdBy
    })
    
    res.json({
        msg : "Course Created Successfully",
        CourseID : courseID
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    let response = await Course.find({})
    res.json({
        courses : response
    });


    // Can print only book related to that admin
    // let username = req.headers.username;

    // let response = await Course.find({createdBy: username})
    // res.json({
    //     books : response
    // });
});

module.exports = router;