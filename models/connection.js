const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://fernierpaul_db_admin:FJJXw8IXGhznlzSg@cluster0.cpvkv4c.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
