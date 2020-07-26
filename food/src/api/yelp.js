import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer Jy9r1k20fj2LlVxM5ctWwmDL_NGBXOUKZtnmfQnRNI6U7uoW2pdK87BzDt6mpP15NsXvOM4aDxW1alTXPX5xINmS-INe8YdAyEeBFhsdFSxqWQGj2MOytkLU9z8dX3Yx'
    }
});

