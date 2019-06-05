import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import level2 from "../images/301-challenge2@1x.png";

class CarouselLevel2 extends React.Component{
  render(){
    const {
      level_2,
    } = this.props.game;

    return(
      <div className="carousel-card__level">
        <h2 className="carousel-card__level--title">Level 2</h2>
          <div>{ReactHtmlParser(level_2)}</div>
        <img className="carousel-card__level--image" src={level2} alt="level 2"/>
      </div>
    )
  }
}

CarouselLevel2.propTypes = {
  game: PropTypes.object,
};

export default CarouselLevel2;