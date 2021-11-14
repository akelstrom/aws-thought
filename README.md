# AWS Thought

### Purpose
Amazon Web Services, is currently the most comprehensive and widely used cloud computing platform, providing on-demand services to a vast array of customers --Including the company I work for. After obtaining my AWS Practitioner Certification and learning about all the services AWS has to offer, I was eager to learn to implement AWS services using the AWS-SDK and CLI. 

I worked with an app that I've already built: the Deep Thoughts application, which allows users to post their thoughts. It was originally built as a MERN application (MongoDB, Express.js, React.js and Express.js). This app will be deployed to the cloud and the back-end API was replaced with cloud resources to handle the storage, database, and computing.

### Description 
AWS Thoughts is a refactored cloud-based version of a Full-Stack Social Media MERN application that I previously built. Users are able to view other users' "thoughts", post their "thoughts", and as the newest feature, upload to post with their "thoughts".

### Built With
* AWS Services
    * IAM (Identity and Access Management) helps ensure secure access to AWS services and resources. The IAM user console enables you to create and manage AWS users and groups as well as allow and deny access to AWS resources.
    * S3 (Simple Storage Service) is an object storage service. S3 allows customers to store and protect any amount of data for various uses, ranging from web and mobile applications to data archives and hybrid cloud storage. For this application, it's used to store and retrieve static assets (images). 
    * DynamoDB is a NoSQL key-value and document database that delivers incredibly fast performance—no matter the size of your data. This fully managed and multi-region database provides built-in security, backup, and in-memory caching for web applications. DynamoDB is replacing MongoDB as the database for this application. 
    * EC2 (Elastic Compute Cloud) is a secure, scalable web service designed to simplify cloud computing. EC2 offers flexibility when you need to obtain and configure capacity for your web applications. EC2 was used to configure a Linux server to host the application.
    * AWS-CLI (AWS Command Line Interface) will helps bring together various AWS services, by controlling them from the command line and using scripts.
* NPM Packages
    * aws-sdk is a AWS software development kit (SDK) for JavaScript. This package allows your Node.js application to interface with AWS.
    * Multer is a Node.js middleware for handling file uploads. In this project, it's used as a container for image files until they’re ready to be uploaded to an S3 bucket.
    * uid (universally unique identifier). This package generates random alphanumeric strings that can serve as unique identifiers. Here I used to generate identifiers for the S3 bucket and for the application’s images to avoid impediemnts. 
* JavaScript
* React.js
* Node.js
* Express.js
* HTML
* CSS

### Installation
Make sure `Node` is installed on your computer (if not install using [homebrew~](https://docs.brew.sh/Installation)
1. Fork the repository
2. Clone the repository locally using `git clone` 
3. Open the project in Visual Studio Code (or IDE of your choice) 
4. Open the terminal to the project's <b>root directory</b>
5. Run `npm install` to install dependencies locally

### Usage
To run the project locally, navigate to the terminal and in the project's root directory run the following command: `npm start`. Once the project is done building/compling , it should load in your default browser at this on port 3000. [http://localhost:3000/](http://localhost:3000/)

### Testing
```` 
Note: Test endpoints (using Insomnia Core or Postman) with port 3001.
````
#### Instructions
1. Navigate to root directory of application in the terminal and run `npm start`
2. Create a new collection (Postman) or enviornment (Insomnia Core) for the aws-thought endpoints
3. Test the following endpoints: Get all thoughts, get thoughts by user, add thought, add image** 

|Request Type|Endpoint URL|
|------------|------------|
|GET all thoughts|localhost:3001/api/users
|GET thought by user|localhost:3001/api/users/{username}|
|POST thought|localhost:3001/api/users|
|POST image|localhost:3001/api/image-upload|


```` 
Note: To test the image upload, change the body type to `Multi-structure form` and then upload the image as the "pair" in the key pair value. 
````

### Author
Made with &hearts; by Alexandra 
If you have questions, or anything feel free to reach out by email at akelstrom@gmail.com. 

