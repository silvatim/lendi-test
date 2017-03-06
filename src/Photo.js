/* eslint-disable */
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-js-pagination';
import PhotoBox from './PhotoBox';
import './Photo.css';
import axios from 'axios';

//Setting pagination constants
const PAGE_RANGE = 5;
const TOTAL_COUNT = 5000;
const PER_PAGE = 30;

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
                photos: [],
                currentPage: 1,
            }
            // setting api address
        this.apiUrl = 'https://jsonplaceholder.typicode.com/photos'
    }

    //Method for getting photos from API
    getPhotos(numPage) {
        //Page query for pagination
        let pageQuery = `?_page=${numPage}`;
        // limiting records to 30 per page otherwise defaults to 10
        let limitQuery = `&_limit=${PER_PAGE}`;

        //Axios for api request
        axios.get(this.apiUrl + pageQuery + limitQuery)
            .then((response) => {
                this.setState({
                    //set state with response result
                    photos: response.data,
                    //set active page number
                    currentPage: numPage
                });
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    updatePage(numPage) {
        this.getPhotos(numPage);
    }

    componentDidMount() {
        this.getPhotos(this.state.activePage);
    }

    render() {
        const photosList = this.state.photos.map((photo) => {
            return (
              <PhotoBox
                 thumbnailUrl = { photo.thumbnailUrl }
                 title = { photo.title }
                 url = { photo.url }
                 key = { photo.id }
                />
            );
        });

        return (
          <div>
            <div className = "Photo-container" >
               {photosList}
            </div>
            <div className = "Footer-nav" >
              <Pagination
                prevPageText = 'prev'
                nextPageText = 'next'
                firstPageText = 'first'
                lastPageText = 'last'
                activePage = { this.state.currentPage }
                itemsCountPerPage = { PER_PAGE }
                totalItemsCount = { TOTAL_COUNT }
                pageRangeDisplayed = { PAGE_RANGE }
                onChange = { this.updatePage.bind(this) }
              />
            </div>
          </div>
        );
    }
}
export default Photo;
