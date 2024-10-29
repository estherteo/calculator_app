# Simple Calculator Web Application using AWS Services

## Application Overview

This Calculator application allows users to input a base and exponent and calculate the power of a number. For the frontend, HTML, CSS and Javascript are used to build a clean and minimalistic design.

On the backend, AWS services are utilised to perform the calculation and host the website. An API call to the Gateway triggers the AWS Lambda function to perform the calculation logic. The results are stored in Amazon DynamoDB for future reference.

## Usage 
The user inputs the base and power and after clicking on the 'CALCULATE' button the result will be returned in the form of an alert.

## Application Interface
<img width="1395" alt="image" src="https://github.com/user-attachments/assets/16f078be-710d-42b4-9655-dc75e778d766">

## AWS Architecture
![image](https://github.com/user-attachments/assets/4bd4fa37-5e14-461a-b13f-9297c3dd0c63)

## Services used:

- Amplify: Hosts the application
- Amazon API Gateway: Deployed REST API (POST) that triggers the Lambda function, enabling communication between the user and backend.
- AWS Lambda: Executes the function to calculate the power of a number from user input.
- AWS Identity and Access Management (IAM): Grants necessary permissions for the Lambda function to write results to DynamoDB.
- Amazon DynamoDB: Stores calculation results provided by the AWS Lambda function.

