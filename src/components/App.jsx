import Searchbar from './Searchbar'
import ImageGallery from './ImageGallery'
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import fetchPictures from 'services/pixabayAPI';
export class App extends Component  {
  state={
    pictures: '',
    pageNumber: 1,
    gallery: [],
    loading: false,
    showModal: false,
    largePicture: '',
  }


  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.pictures;
    const nextName = this.state.pictures;
    const prevPage = prevState.pageNumber;
    const nextPage = this.state.pageNumber;
    const { pageNumber } = this.state;

    if (nextName !== prevName) {
      this.setState({ loading: true, pageNumber: 1 });
      fetchPictures(nextName, pageNumber)
        .then(res => {
          if (res.length === 0) {
            toast.error('Please enter a valid request');
          }

          this.setState({ gallery: res });
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
    if (prevPage !== nextPage && nextPage !== 1) {
      this.setState({ loading: true });
      fetchPictures(nextName, pageNumber)
        .then(res => {
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...res],
          }));
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }
  
  handlePictureSubmit = pictures => {
    this.setState({ pictures });
    this.setState({ pageNumber: 1, gallery: [] });
  };

  openModal = e => {
    this.setState({ showModal: true });
    this.setState({ largePicture: e.largeImageURL });
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  
  loadMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  
  
  render(){
    const { handlePictureSubmit, openModal, loadMore, closeModal } = this;
    const { loading, gallery, showModal, largePicture } = this.state;
    console.log(gallery)
    return (
    <div>
      <Searchbar onHandlSubmit={handlePictureSubmit}/>
      {gallery.length !== 0 && (
          <ImageGallery gallery={gallery} handleModal={openModal} />
        )}
        {loading && <Loader />}
        {gallery.length !== 0 && gallery.length >= 12 && (
          <Button loadMore={loadMore} />
        )}
        {showModal && (
          <Modal onClose={closeModal} largePicuretoModal={largePicture} />
        )}


      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
    </div>
  );}
  
};
