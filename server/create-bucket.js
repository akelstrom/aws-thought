// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const { v4: uuidv4 } = require('uuid');

//set the reigon
AWS.config.update({reigon: 'us-east-2'});

//create s3 service object
const s3 = new AWS.S3({apiVersion: '2021-10-27'});

//create parameters for calling createBucket
var bucketParams = {
    Bucket: "user-images-" + uuidv4()
};

//call s3 to create the bucket
s3.createBucket(bucketParams, (err, data) => {
    if(err) {
        console.log("Error", err);
    } else {
        console.log("Sucess");
    }
});

