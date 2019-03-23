var express = require("express");
var router = express.Router();
var sgMail = require("@sendgrid/mail");

sgMail.setApiKey('Your api key'
);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/send", (req, res, next) => {

  const msg = {
    to: "bakale.shivaraj@gmail.com",
    from: "shivarajapple@example.com",
    subject: "Take action. CPU Utilization exceeded",
    text: "Hi, Please note that your CPU utilization has gone over 50% for straight 10 seconds. Do take some action"
  };
  sgMail
    .send(msg)
    .then(data => {
      console.log(data);
      res.status(200).json({ message: "Success" });
    })
    .catch(err => {
      res.status(400).json({ message: "Error" });
    });
});
module.exports = router;
