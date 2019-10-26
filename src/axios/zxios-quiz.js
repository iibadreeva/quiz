import axios from 'axios'

export default axios.create({
    baseURL: 'https://quiz-1d120.firebaseio.com/'
    // baseURL: 'https://react-quiz-518f6.firebaseio.com/'
})