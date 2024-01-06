const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    await User.create({
        username,
        password
    })

    res.json({
        msg : "User created successfully"
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        msg : response
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    // IF there is a purchasedBy key in courses database, then we can do below:
    // const courseId = req.params.courseId;
    // try{
    //     const isCourseExist = await Course.exists({_id : courseId});
    //     await Course.findByIdAndUpdate(courseId, { $set : {purchasedBy : req.headers.username}})
    //     res.json({
    //         msg: "Course has been purchased successfully"
    //     });
    // } catch(e){
    //     res.status(404).json({
    //         msg: "Course Not Found"
    //     });
    // }


    //Add purchase in User table:
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username : username
    }, {
        "$push" : {
            purchasedCourses : courseId
        }
    })

    res.json({
        msg: "Purchase Complete"
    });
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    // If there is an purchasedBy key in Courses table, then we'll append it in above POST and print here
    // let username = req.headers.username
    // let response = await Course.find({purchasedBy : username})
    //     res.status(200).json({ response }) 
    // });


    //Find current user in User table, then use perchasedCourse key in User to earch in course table.
    const user = await User.find({
        username : req.headers.username
    });

    const courses = Course.find({
        _id : {
           "$in": user.purchasedCourses
        }
    });

    res.json({
        courses : courses
    });
});
module.exports = router