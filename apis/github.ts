import axios from 'axios';

export default async function getTechhubStats() {
  var response = await axios
    .get('https://api.github.com/users/techhub-community/repos')
    .then((response) => {
      return response.data;
    })
    
    .catch(error => {

        return "Error"
    });
  return response;
}



