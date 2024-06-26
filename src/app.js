import express from "express";
import { port } from "./config/index.js";
// import loader from './loaders/index.js';
import cors from "cors";
const app = express();

console.log("foobar");

app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());

app.post("/result", (req, res) => {
	console.log("post body", req.body);
	// console.log(req);
	console.log("entered post");

	res.send("Hello World");
});
// app.get("/result", (req, res) => {
// 	console.log(req.body);
// 	console.log("entered get")

// 	res.send("Hello World");
// });

// app.get("/timeout", (req, res) => {
// 	console.log(req.body);
// 	console.log(req);
// 	res.send("Hello World");
// });

app.listen(port, (err) => {
	if (err) {
		console.log(err);
		return process.exit(1);
	}
	console.log(`Server is running on ${port}`);
});

export default app;
