import axios from 'axios';

const getGoats = () => new Promise((resolve, reject) => {
  axios.get('https://fir-cows-958ae.firebaseio.com/react-goats.json').then((response) => {
    const goatsData = response.data;
    const goats = [];
    if (goatsData) {
      Object.keys(goatsData).forEach((goatId) => {
        goats.push(goatsData[goatId]);
      });
    }
    resolve(goats);
  })
    .catch((error) => reject(error));
});

export default { getGoats };
