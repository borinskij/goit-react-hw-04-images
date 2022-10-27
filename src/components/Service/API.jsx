import axios from 'axios';
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/?',
  params: {
    key: '30088008-597ccc3296e84add455afba6c',
    q: 'dog',
    page: 1,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getGalerry = async (q, page) => {
  const { data } = await instance.get('', { params: { q, page } });
  return data;
};
// import axios from 'axios';
// // import PropTypes from 'prop-types';
// import { Component } from 'react';

// export class GetGalerry extends Component {
//   // static propTypes = { second: third }
//   state = {
//     q: 'cat',
//     page: 1,
//     data: [],
//   };

//   render() {
//     const instance = axios.create({
//       baseURL: 'https://pixabay.com/api/',
//       params: {
//         key: '30088008-597ccc3296e84add455afba6c',
//         q: this.state.q,
//         page: this.state.page,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         per_page: 12,
//       },
//     });
//     return async function getGalerry() {
//       const { data } = await instance.get('');
//       console.log('data :', data);
//       return this.setState({ data });
//     };
//   }
// }
