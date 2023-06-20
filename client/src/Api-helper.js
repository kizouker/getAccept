const SERVER_PORT = process.env.port || 4000;
const URL = `http://localhost:${SERVER_PORT}/calcscore/post/`;

const calcOnServer = async (frames) => {
  console.log('frames: ', frames);
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        title: 'Bowling calculator',
        frames: { frames }
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

    const data = await response.json();
    console.log('client-data:', data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default calcOnServer;
