var mongoose = require('mongoose')
mongoose.connect(process.env.MONGOLAB_URI ||'mongodb://heroku_app30701591:frvr53f8jvjm6j3gsbch4kjhe7@ds035750.mongolab.com:35750/heroku_app30701591', function () {
  console.log('mongodb connected')
})
module.exports = mongoose
