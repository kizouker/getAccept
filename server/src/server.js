import express from 'express';
import cors from 'cors';


const app = express();
const SERVER_PORT = process.env.port || 4000;
const URL = '/calcscore/post/';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post(URL, (req, res) => {
  console.log('Serving your request...');

  const frames = req.body.frames;
  res.json({ frames, message: 'Frames received successfully' });
  console.log("server-responds:", frames);

});

// Start the server
app.listen(SERVER_PORT, () => {
  console.log('Server is listening on port ' + SERVER_PORT);
});
