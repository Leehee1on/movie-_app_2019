import React from 'react';
import axios from 'axios';
import Movie from './Movie';
// import PropTypes from "prop-types";

class App extends React.Component{
  // state = {
  //   count: 0
  // };
 
  // onAdd = () =>{
  //   this.setState(current =>({count: current.count +1}));
  // };
  // onMinus = () => {
  //   this.setState(current =>({count: current.count -1}));
  // };
  // componentDidMount(){
  //   console.log("get ready?");
  // };
  // componentDidUpdate(){
  //   console.log("update!");
  // };
  // componentWillUnmount(){
  //   console.log("bye");
  // };
  // render(){
  //   console.log("gee");
  //   return <div>
  //     {/* <h1>The number is {this.state.count}</h1>
  //     <button onClick={this.onAdd}>Add</button>
  //     <button onClick={this.onMinus}>Minus</button> */}
  //   </div>
  // }
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies, isLoading:false });
  }
  componentDidMount(){
    this.getMovies();
  }
  
  
  // 2가지 방법
  // async componentDidMount(){
  //   const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  //   console.log(movies);
  // };
  render(){
    const { isLoading, movies } = this.state;
    return <div>
      
      {this.state.isLoading ? "Loading..." : movies.map(movie => {
        return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
      })}
    </div>
  }
}

export default App;
