import { memo } from "react";
import "./BodyContent.scss" ;
import body1 from "../../assets/body1.jpg" ;
import body2 from "../../assets/body2.jpg" ;
import body3 from "../../assets/body3.jpg" ;
import body4 from "../../assets/body4.jpg" ;
import trip1 from "../../assets/trip1.jpeg" ;
import trip2 from "../../assets/trip2.jpeg" ;
import trip3 from "../../assets/trip3.jpeg" ;
import map from "../../assets/Map-Marker-300x300.png" ;
import global from "../../assets/global.png" ;
import airBalloon from "../../assets/Hot-Air-Balloon-300x300.png" ;
import article1 from "../../assets/artical1.jpg" ;
import article2 from "../../assets/artical2.jpeg" ;
import article3 from "../../assets/artical3.jpg" ;
import bridge from "../../assets/bridge.jpg" ;
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

function BodyContent() {
    return <div className="bodyWrapper">
        <div className="popularDestination">
            <h1>Popular Destination</h1>
            <p className="header">World's best tourist destinations</p>
            <div className="imgWrapper">
                <div className="img">
                    <img src={body1} alt="" />
                    <h2>Tokyo</h2>
                </div>
                <div className="img">
                    <img src={body2} alt="" />
                    <h2>Seoul</h2>
                </div>
                <div className="img">
                    <img src={body3} alt="" />
                    <h2>Paris</h2>
                </div>
                <div className="img">
                    <img src={body4} alt="" />
                    <h2>London</h2>
                </div>
            </div>
        </div>
        <div className="bestValueTrips">
            <h1>Best Value Trips</h1>
            <p className="header">Best offers trips from us</p>
            <div className="tripWrapper">
                <div className="trip">
                    <div className="imgWrapper">
                        <img src={trip1} alt="" />
                        <span className="trip_price">$5,000</span>
                    </div>
                    <div className="trip_detail">
                        <h3>French Autumn</h3>
                        <h6>City Tours, Urban</h6>
                        <div className="trip_detail_rate">
                            <div className="trip_detail_rate_starComment">
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarBorderIcon /></span>
                                <span>4 reviews</span>
                            </div>
                            <div className="trip_detail_rate_countdown">
                                <span className="icon"><AccessTimeOutlinedIcon /></span>
                                <span>5 days</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trip">
                    <div className="imgWrapper">
                        <img src={trip2} alt="" />
                        <span className="trip_price">$6,000</span>
                    </div>
                    <div className="trip_detail">
                        <h3>Grand Switzerland</h3>
                        <h6>Shopping, Mountain, Snow & Ice</h6>
                        <div className="trip_detail_rate">
                        <div className="trip_detail_rate_starComment">
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarBorderIcon /></span>
                                <span>4 reviews</span>
                            </div>
                            <div className="trip_detail_rate_countdown">
                                <span className="icon"><AccessTimeOutlinedIcon /></span>
                                <span>6 days</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trip">
                    <div className="imgWrapper">
                        <img src={trip3} alt="" />
                        <div className="trip_price">
                            <span className="crosslineText">$3,000</span>
                            <span>$2,500</span>
                        </div>
                    </div>
                    <div className="trip_detail">
                        <h3>Discover Japan</h3>
                        <h6>City Tours, Iconic</h6>
                        <div className="trip_detail_rate">
                            <div className="trip_detail_rate_starComment">
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarIcon/></span>
                                <span className="icon"><StarBorderIcon /></span>
                                <span>4 reviews</span>
                            </div>
                            <div className="trip_detail_rate_countdown">
                                <span className="icon"><AccessTimeOutlinedIcon /></span>
                                <span>5 days</span>
                            </div>
                        </div>
                    </div>
                    <span className="sale"><p>Sale</p></span>
                </div>
            </div>
        </div>
        <div className="reasonToChoose">
            <h1>Why Choose Us</h1>
            <p className="header">Here are reasons you should plan trip with us</p>
            <div className="iconWrapper">
                <div className="icon">
                    <img src={map} alt="" />
                    <h2>Handpicked Hotels</h2>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                </div>
                <div className="icon">
                    <img src={global} alt="" />
                    <h2>World Class Service</h2>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                </div>
                <div className="icon">
                    <img src={airBalloon} alt="" />
                    <h2>Best Price Guarantee</h2>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                </div>
            </div>
        </div>
        <div className="imageCrossLine">
            <img src={bridge} alt="" />
        </div>
        <div className="article">
            <h1>Articles & Tips</h1>
            <p className="header">Explore some of the best tips from around the world</p>
            <div className="tripWrapper">
                <div className="trip">
                    <div className="imgWrapper">
                        <img src={article1} alt="" />
                    </div>
                    <div className="trip_detail">
                        <h4>DECEMBER 10,2016</h4>
                        <h3>Memorial Day to Someone Told Me to Travel</h3>
                        <h5 className="detailArtical">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</h5>
                        <div className="readnmore">
                            <span>Read More</span>
                            <span><KeyboardArrowRightOutlinedIcon /></span>
                        </div>
                    </div>
                </div>
                <div className="trip">
                    <div className="imgWrapper">
                        <img src={article2} alt="" />
                    </div>
                    <div className="trip_detail">
                        <h4>DECEMBER 10,2016</h4>
                        <h3>7 Tips For Nomads On A Budget Trips</h3>
                        <h5 className="detailArtical">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</h5>
                        <div className="readnmore">
                            <span>Read More</span>
                            <span><KeyboardArrowRightOutlinedIcon /></span>
                        </div>
                    </div>
                </div>
                <div className="trip">
                    <div className="imgWrapper">
                        <img src={article3} alt="" />
                    </div>
                    <div className="trip_detail">
                        <h4>DECEMBER 10,2016</h4>
                        <h3>Taking A Travel Blog Victory Lap</h3>
                        <h5 className="detailArtical">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</h5>
                        <div className="readnmore">
                            <span>Read More</span>
                            <span><KeyboardArrowRightOutlinedIcon /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default memo(BodyContent) ;