const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIAQDR62YUDBT5EF7ND",
  secretAccessKey: "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",
});

module.exports = (topicArn, message, callback) => {
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
