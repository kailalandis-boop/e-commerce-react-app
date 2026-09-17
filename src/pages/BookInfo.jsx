import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';

const BookInfo = ({ books }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);
console.log(book)

    return (
        <div className="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">Cracking the Coding Interview</h2>
                                <Rating rating="4.5" />
                                <div className="book__selected--price"></div>
                                <Price originalPrice={50} salePrice={20} />
                            </div>
                            <div className="book__summary">
                                <div className="book__summary--title">
                                    Summary
                                </div>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Molestiae eius provident enim, sed, fugit id non amet 
                                    sit iste in dolores reiciendis repellat illum quisquam, 
                                    quo velit ipsam quam nam.
                                </p>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Molestiae eius provident enim, sed, fugit id non amet 
                                    sit iste in dolores reiciendis repellat illum quisquam, 
                                    quo velit ipsam quam nam.
                                </p>
                            </div>
                            <button className="btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;