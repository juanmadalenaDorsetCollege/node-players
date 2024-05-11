
const { MongoClient, ServerApiVersion } = require('mongodb');
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const uri = `mongodb+srv://user:4KwJGRFzhAJDTcza@test-cluster.ifnecvc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//connection pool
const connection = async () => {
  try {
    client.connect().then((client) => {
        console.log("connected");
        client.db("sample_mflix").collection("movies").find({}).limit(2).toArray().then((data) => {
            console.log(data);
        })
    })

  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;