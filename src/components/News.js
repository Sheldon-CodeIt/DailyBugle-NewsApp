import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {
    

    static defaultProps = {
        country: 'us',
        pageSize: 20,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

     capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        console.log("helo thisis a construcor");
        this.state= {
            articles : [],
            page: 1,
            loading: false
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - DailyBugle`
    }

    async updateNews(PageNo){
     this.props.setProgress(0);
     this.setState({loading: true});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
       let data = await fetch(url);
       this.props.setProgress(50);
       let parsedData = await data.json();
       this.setState({
           articles: parsedData.articles,
           totalResults: parsedData.totalResults,
           loading: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount(){
       this.updateNews();
    }
    fetchMoreData = async ()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({page: this.state.page+1});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
            });
            console.log(parsedData);
    }

  render() {

    return (
        <>
       
            <div className="container">
            <h1  className="text-center" style={{marginTop:'90px'}}>Daily Bugle - Top {this.props.category} Headlines</h1>
            </div>
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner/>}       
            >
                <div className="container">
                    <div className="row ">
                        {this.state.articles.map((element)=>{
                            return <div className="col-md-4"  key={element.url} >
                                <Newsitem title = {element.title} description={element.description} imageUrl={element.urlToImage} newsUrl= {element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>
                        })}
                    </div>
                </div>

            </InfiniteScroll>

        </>
    );
  }
}

