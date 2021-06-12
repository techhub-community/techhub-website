import axios from 'axios';

export default async function getDiscordStats() {
  var response = await axios
    .get('https://discordapp.com/api/guilds/814219041614594078/widget.json')
    .then((response) => {
      return response.data;
    })
    
    .catch(error => {

        return "Error"
    });
  return response;
}



