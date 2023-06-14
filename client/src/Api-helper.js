const SERVER_PORT = process.env.port || 4000;
const URL = `http://localhost:${SERVER_PORT}/calcscore/post/`;

// const currentSum = 0;
// const totalSum = 0;

const addPosts = async (frames) => {
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      title: 'Bowling calcuatin',
      frames: { frames }
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('client-data:', data);
      // totalSum =response.totalSum;
      // currentSum = response.currentSum;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default addPosts;
