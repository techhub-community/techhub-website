import axios from 'axios';

export default async function getTechhubStats() {
  var response = await axios
    .get('https://api.github.com/users/techhub-community/repos')
    .then((response) => {
      return response.data;
    })

    .catch((error) => {
      return 'Error';
    });
  return response;
}

export async function getContributors() {
  var response = await axios
    .get(
      'https://api.github.com/repos/techhub-community/techhub-website/contributors'
    )
    .then((response) => {
      return response.data;
    })

    .catch((error) => {
      return 'Error';
    });
  return response;
}
