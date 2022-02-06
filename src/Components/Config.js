import { ModelTraining } from '@mui/icons-material';
import postsData from '../App'
const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

var subscriptionKey = "0c7707f6b6a045869e042d9dbf6167fd";
var endpoint = "https://api.cognitive.microsofttranslator.com";


// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "centralindia";
var data; 
// postsData.map()
export default async function request(content2){ 
    await axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    params: {
        'api-version': '3.0',
        'from': 'en',
        'to': 'hi',
    },
    data: [{
        'text': `${content2}`
    }],
    responseType: 'json'
}).then(function (response) {
    // console.log(JSON.stringify(response.data[0].translations[0].text));
    data = JSON.stringify(response.data[0].translations[0].text); 
})
return data;
}
// module.exports = request
// request("hello");
// [{ "translations": [{ "text": "हैलो वर्ल्ड", "to": "hi" }] }]