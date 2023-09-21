var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yurimateusfranco@gmail.com',
    pass: 'myoi zxfr yjmg rnvz'
  }
});

var mailOptions = {
  from: 'yurimateusfranco@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'myoi zxfr yjmg rnvz'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});