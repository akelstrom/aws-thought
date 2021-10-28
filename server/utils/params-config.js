const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
    const imageParams = {
      Bucket: 'user-images-6e4c9375-a384-4f54-a7b3-8cbf93a3afdf',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer
    };
    return imageParams;
  };

  module.exports = params;
