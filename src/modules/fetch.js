const sendData = async (a, b) => {
  const data = { user: a, score: b };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6e8u7sd3gV3AU9VxJF2f/scores', options);
  const result = await response.json();
  return result;
};

const main = async (a, b) => {
  const result = await sendData(a, b);
  const message = document.querySelector('.post-message');
  message.innerHTML = `${result.result}, please click the refresh button to view the updated list`;
  setTimeout(() => {
    message.innerHTML = '';
  }, 5000);
};
export default main;