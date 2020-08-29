import React, { Component } from 'react';
import Cards from '../Cards/Cards.js';
import './Results.scss';
import rating from './thumbs-up-like-svgrepo-com.svg';
import review from './review.svg';
import phone from './telephone.svg';
import PropTypes from 'prop-types';

class Results extends Component {

    render() {
         
                return(
                    <div>
                    <Cards/>
                    
                     
                    {this.props.datas.map((list,i) =>(
                            <div className="flip" key = {i}>
                            <div className="front"  style={{backgroundImage: `url(${list.restaurant.featured_image})`, height:"auto"}}>
                                <h1 className="text-shadow" >{list.restaurant.name}</h1>
                                <p className="cost" > Cost for 2: {list.restaurant.average_cost_for_two}</p>
                                <img className="rating" src ={rating}/><img className="review" src = {review}/>
                                <p className="text" >{list.restaurant.user_rating.aggregate_rating}<span style = {{paddingRight: "70px"}}/>{list.restaurant.user_rating.rating_text}</p>
                                <p className="reviewtext" >{list.restaurant.all_reviews_count}</p>

                            </div>
                            <div className="back" key ={i}>
                                <h6 className="cuisines" >{list.restaurant.cuisines}</h6>
                                <p className="timing" >{list.restaurant.timings}</p>
                                <address className="address" >{list.restaurant.location.address}</address>
                                <img className ="phone" src = {phone}/>
                                <p className="phonenumber" >{list.restaurant.phone_numberes}</p>
                            </div>
                            </div>
                    ))}
                    

                    </div>

                    
            )

    }
}

Results.propTypes = {
    datas:PropTypes.array.isRequired
}

export default Results