import { Component } from "react"
import { toast } from 'react-toastify';
import styles from '../Searchbar/styles.module.css'
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


class Searchbar extends Component{

    state={
        searchValue:''
    }
    handleChange=e=>{
        this.setState({searchValue:e.currentTarget.value.toLowerCase()})
    }
    handleSubmit = event => {
        event.preventDefault();
        const { searchValue } = this.state;
    
        if (searchValue.trim() === '') {
          toast.error('Please enter a search request');
          return;
        }
    
        this.props.onHandlSubmit(searchValue);
        this.setState({ searchValue: '' });
      };

render(){
return(
<header className={styles.searchbar}>
  <form className={styles.form} onSubmit={this.handleSubmit}>
    <button className={styles.button} type="submit">
      <span className={styles.buttonLabel} >Search</span>
    </button>

    <input
       className={styles.input}
      value={this.state.searchValue}
      onChange={this.handleChange}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>)}}
Searchbar.propTypes = {
  onHandlSubmit: PropTypes.func,
};

export default Searchbar