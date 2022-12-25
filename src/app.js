require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
	console.log(`Running on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
	res.status(200).json('Hello World!');
});