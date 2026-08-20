// MongoDB connection settings
// Paste your Atlas connection URI below (replace YOUR_CLUSTER_HOSTNAME).
// Format:
//   mongodb+srv://Linux:Linux0727@<YOUR_CLUSTER_HOSTNAME>.mongodb.net/devopstyper?retryWrites=true&w=majority
module.exports = {
  mongoUri:
    process.env.MONGO_URI ||
    "mongodb+srv://Linux:Linux0727@YOUR_CLUSTER_HOSTNAME.mongodb.net/devopstyper?retryWrites=true&w=majority",
};