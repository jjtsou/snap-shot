import { createApi } from 'unsplash-js';

const credentials = Object.freeze({
  ACCESS_KEY: 'HHiFGtDY-CakalG_qfYJoPciH0YWRbYKUP42zuWmH4Y',
  SECRET_KEY: 'G8GfOiyMu5PbbP8RmSpNDyRo1SI54bdCYZtc2CYnds0',
});

const api = createApi({
  accessKey: credentials.ACCESS_KEY,
});

export const getPhotos = ({ query, page = 1, perPage = 10 }) =>
  api.search
    .getPhotos({
      query,
      page,
      perPage,
    })
    .then((result) => {
      if (result.errors) {
        console.log('error occurred: ', result.errors[0]);
      } else {
        const { results } = result.response;
        console.log(results);
        return results;
      }
    });
