var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var token;
var mySalt;

var decode = function() {
    console.log(jwt.decode(token));
};

var verify = function() {
    //mySalt = 'heehh';

    jwt.verify(token, mySalt, function(err, decoded) {
        if (err) {
            console.log(err);
            return
        }

        console.log(decoded);
    });
};

bcrypt.genSalt(10, function(err, salt) {
    mySalt = salt;
    
    token = jwt.sign({
        type: 'general',
        value: 'mybiggestsecret'
    }, mySalt, { 
        algorithm: 'HS512' ,
        expiresInSeconds: 5
    });

    //console.log(token.length); //228
    //console.log(token);

    //decode();
    verify();
    //setTimeout(verify, 6000);
});
