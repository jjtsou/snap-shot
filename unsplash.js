import { createApi } from 'unsplash-js';

const credentials = Object.freeze({
  ACCESS_KEY: 'HHiFGtDY-CakalG_qfYJoPciH0YWRbYKUP42zuWmH4Y',
  SECRET_KEY: 'G8GfOiyMu5PbbP8RmSpNDyRo1SI54bdCYZtc2CYnds0',
});

const api = createApi({
  accessKey: credentials.ACCESS_KEY,
});

export const getPhotos = ({ query, page = 1, perPage = 9 }) =>
  api.search
    .getPhotos({
      query,
      page,
      perPage,
    })
    // eslint-disable-next-line consistent-return
    .then((result) => {
      if (result.errors) {
        console.log('error occurred: ', result.errors[0]);
      } else {
        const { results } = result.response;
        return results;
      }
    });
