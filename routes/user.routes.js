const authController = require('../controllers/auth')

module.exports = (app)=>{

    app.post("/loginfunction/api/v1/signup", authController.signup);

    app.get("/loginfunction/api/v1/users", authController.findAll);

}