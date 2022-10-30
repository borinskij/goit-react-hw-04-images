import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/?',
  params: {
    key: '30088008-597ccc3296e84add455afba6c',
    q: 'dog',
    page: 1,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 5,
  },
});

export const getGalerry = async (q, page) => {
  const { data } = await instance.get('', { params: { q, page } });
  return data;
};
