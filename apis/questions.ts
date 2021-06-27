import axios from 'axios';

export default async function getQuestions() {
  var response = await axios
    .get('https://questions.tech-hub.org/data.json')
    .then((response) => {
      return response.data;
    })

    .catch((error) => {
      return 'Error';
    });
  return response;
}
