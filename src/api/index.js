import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': 'ee05bdd908msh1ca4f35f60f9a3ap1b63dajsn2c84a8e18fa1',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

const getPlacesData = async() => {
    try{
        const {data: {data}} = await axios.get(URL, options);
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}