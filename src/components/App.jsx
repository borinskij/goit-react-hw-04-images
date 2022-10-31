import React, { useState, useEffect } from 'react';
import { getGalerry } from './Service/API';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import Loader from './Loader/Loader';
import css from './Searchbar/Searchbar.module.css';

export const App = () => {
  const [name, setName] = useState('');
  const [getPage, setGetPage] = useState(1);
  const [getData, setGetData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  // useEffect(() => (setName(''), setGetPage(1), setGetData([])), []);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoader(!isLoader);
        const fetchRezult = await getGalerry(name, getPage);
        setGetData([...getData, ...fetchRezult.hits]);

        // setIsLoader(!isLoader);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
    setIsLoader(!isLoader);
    // name ? fetch() : alert('Мерші до пошуку');
  }, [name, getPage]);

  // console.log('name :>> ', name);
  // console.log('getData :', getData);

  function hendelNextPage() {
    setGetPage(prevPage => (prevPage += 1));
  }
  function hendelSubmit(name) {
    return setGetData([]), setName(name), setGetPage(1);
  }

  return (
    <div className={css.app}>
      <Searchbar hendelSubmit={hendelSubmit} />
      <Loader isLoader={isLoader} />
      <ImageGallery getData={getData}>
        {getPage >= 1 && getData.length > 1 && (
          <Button hendelNextPage={hendelNextPage} />
        )}
        {/* <Button hendelNextPage={hendelNextPage} /> */}
      </ImageGallery>
    </div>
  );
};

// export class App extends Component {
//   state = {
//     name: '',
//     getPage: 1,
//     getData: [],
//     isLoader: false,
//   };

//   hendelSubmit = name => {
//     this.setState({ name, getPage: 1, getData: [] });
//   };

//   async componentDidUpdate(_, prevState) {
//     if (prevState.getPage !== this.state.getPage && this.state.getPage !== 1) {
//       this.setState({ isLoader: true });

//       const { hits } = await getGalerry(this.state.name, this.state.getPage);
//       this.setState(prevState => ({
//         getData: [...prevState.getData, ...hits],
//       }));
//       this.setState({ isLoader: false });
//     }
//     if (prevState.name !== this.state.name) {
//       this.setState({ isLoader: true });
//       const { hits } = await getGalerry(this.state.name, this.state.getPage);
//       this.setState({ getData: hits });
//       this.setState({ isLoader: false });
//     }
//   }
//   hendelNextPage = () => {
//     this.setState(prevState => ({ getPage: prevState.getPage + 1 }));
//     console.log('getPage :>> ', this.state.getPage);
//   };

//   render() {
//     return (
//       <div className={css.app}>
//         <Searchbar hendelSubmit={this.hendelSubmit} />
//         <Loader isLoader={this.state.isLoader} />
//         <ImageGallery getData={this.state.getData}>
//           {this.state.name && <Button hendelNextPage={this.hendelNextPage} />}
//        </ImageGallery>
//      </div>
//     );
//   }
// }
