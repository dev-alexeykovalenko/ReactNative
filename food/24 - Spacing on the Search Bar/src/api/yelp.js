import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer HmLDFGasXT5Eok9DiWj0eKtbwMco9_r0MGz1ojRnlz6_b2IMz3aGAay7JnFj92IIo6J4c1-NB1tZ4s-3uvEADXT5IJkJs1xFiXXAPaET6yTFBsn5vW0aNNgUoqjoX3Yx'
    }
});