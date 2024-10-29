import json
import math

# import the AWS SDK (for Python the package name is boto3)
import boto3

# import two packages to help us with dates and date formatting
from time import gmtime, strftime

# create a DynamoDB object using the AWS SDK
dynamodb = boto3.resource("dynamodb")
# use the DynamoDB object to select our table
table = dynamodb.Table("calculator_table")
# store the current time in a human readable format in a variable
now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())


def lambda_handler(event, context):

    # extract the two numbers from the Lambda service's event object
    mathResult = math.pow(int(event["base"]), int(event["exponent"]))

    # write result and time to the DynamoDB table using the object instantiated and save response in a variable
    response = table.put_item(Item={"ID": str(mathResult), "LatestGreetingTime": now})

    return {"statusCode": 200, "body": json.dumps("Your result is " + str(mathResult))}
