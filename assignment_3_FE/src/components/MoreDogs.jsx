import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from 'react-loader-spinner';

class MoreDogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      hasMoreItems: true,
      nextHref: null
    };
  }

  getNextDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        if (response.status !== 200) {
          console.log('Status Code: ' + response.status);
          return;
        }

        response.json().then(resp => {
          let curr_images = this.state.images;
          curr_images.push(resp.message);
          this.setState({ images: curr_images });
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    const loader = (
      <div className='loader' key='loader-key'>
        <Loader type='Oval' color='#41d9f4' height='100' width='100' />
      </div>
    );

    let dogs = [];

    this.state.images.map((url, i) => {
      return dogs.push(
        <div className='dog-image' key={i}>
          <img src={url} alt='Dog' width='600' />
        </div>
      );
    });

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.getNextDog}
        hasMore={this.state.hasMoreItems}
        loader={loader}
        threshold={1}
      >
        <div className='never-ending-dogs'>{dogs}</div>
      </InfiniteScroll>
    );
  }
}

export default MoreDogs;
