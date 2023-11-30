const AWS = require("aws-sdk");
//const dotenv = require('dotenv');
//dotenv.config();

AWS.config.update({
  region: "us-east-1",
});

const sns = new AWS.SNS();

const publishToSNS = (topicArn, message, callback) => {
  const params = {
    Message: message,
    TopicArn: topicArn,
  };

  sns.publish(params, (err, data) => {
    if (err) {
      console.error("Error publishing message:", err);
      callback(err, null);
    } else {
      console.log("Message published successfully:", data);
      callback(null, data);
    }
  });
};

module.exports = { publishToSNS };
