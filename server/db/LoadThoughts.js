const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  region: "us-east-2",
});

const dynamodb = new AWS.DynamoDB.DocumentClient({ apiVersion: "2021-10-27" });

//use fs module and assign the object to the allUsers constant
console.log("Importing thoughts into DynamoDB. Please wait.");
const allUsers = JSON.parse(
  fs.readFileSync("./server/seed/users.json", "utf8")
);

//loop over the allUsers array and create the params object with the elements in the array
allUsers.forEach((user) => {

  const params = {
    TableName: "Thought",
    //In the loop, we assigned the values from the array elements in the Item property
    Item: {
      username: user.username,
      createdAt: user.createdAt,
      thought: user.thought,
    },
  };

  //(still in loop) make a call to the database with the service interface object, dynamodb
  dynamodb.put(params, (err, data) => {
    if (err) {
      console.error("Unable to add thought", user.username, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("PutItem succeeded:", user.username);
    }
});

});

