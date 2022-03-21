import axios from 'axios';

export default async function getQuestions() {
  var response = await axios
    .get('https://questions.techhub.org.in/data.json')
    .then((response) => {
      return response.data;
    })

    .catch((error) => {
      return 'Error';
    });
  return response;
}
