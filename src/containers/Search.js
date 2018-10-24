import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchArticles, fetchRandomArticle} from '../actions/articles_actions';
import '../style/search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numArticles: 5
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getRandomArticle = this.getRandomArticle.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.fetchArticles(event.target.title.value, this.state.numArticles);
    }
    handleChange(event) {
        this.setState({
            numArticles: event.target.value
        });
    }
    handleClick(url, event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(url, '_blank');
    }
    getRandomArticle() {
        this.props.fetchRandomArticle();
    }

    render() {
        const articles = this.props.articles;
        let heading;
        let list;
        let isData = false;
        let table = null
        if(articles && articles.length) {
            isData = true;
            heading = <thead><tr><th>title</th><th>snippet</th></tr></thead>    
            list = articles.map(el => {
                return (
                    <tr key={el[2]}>
                        <td>{el[0]}</td>
                        <td onClick={this.handleClick.bind(this,el[2])}>{el[1]}</td>
                    </tr>
                );
            });
        }
        if(isData) {
            table = <div className="articles">
                    <table>
                        {heading}
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                    </div>
        }
        return(
            <div className="search">
                <div className="search-bar">
                    <p>Look up Articles on Wikipedia</p>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Enter a title to search" name="title"/>
                        <button>search title</button>
                    </form>
                </div>
                <div className="random">
                <button onClick={this.getRandomArticle}>Look Up a random article</button>
                </div>
                <div className="range-bar">
                    <input type="range" min="5" max="30" step="5" value={this.state.numArticles} onChange={this.handleChange}/>
                    <span>Number of articles: {this.state.numArticles}</span>
                </div>       
                {table}
            </div>
        );
    } 
}

const mapStateToProps = ({articles}) => {
    console.log(articles);
    return{
        articles
    };
}
export default connect(mapStateToProps, {fetchArticles, fetchRandomArticle})(Search);