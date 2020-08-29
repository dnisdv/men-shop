import React,{useState} from 'react'
import './ProductBanner.css'
import BannerData from './BannerData/BannerData'

import { connect } from 'react-redux'
import Arrow from './Assests/arrows.svg'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types';


const ProductBanner = ({ product: {images}}) => {
    const [currentImage, setcurrentImage] = useState(0)
    const changeHandle = (e) => {
        setcurrentImage(+e.target.dataset.index)
    }

    return(
        <React.Fragment>
            <div className='ProductBanner'>
                <div className='ProductBanner_Images'>
                    <div className='ProductBanner_Images_All'>
                        {images.map( (i, index) => 
                                <img 
                                    key={i._id}
                                    data-index={index}
                                    onClick={changeHandle}
                                    className={`ProductBanner_Images_ALL_IMG`} alt='ProductImage' 
                                    src={`http://localhost:5000/${i.path}`}
                                >
                        </img>)}
                    </div>
                    <div className='ProductBanner_IMG'>
                        <CarouselProvider
                            className='carouselProvider'
                            naturalSlideWidth={100}
                            naturalSlideHeight={125}
                            currentSlide={currentImage}
                            totalSlides={images.length}>
                            <Slider>   
                                {images.map( (i, index) => <Slide 
                                innerClassName="ProductBanner_IMG-Slide"
                                key={i._id} index={index}>
                                <img 
                                data-index={index}
                                className='ProductBanner_IMG' alt='ProductImage' 
                                src={`http://localhost:5000/${i.path}`}
                                >
                                </img></Slide>)}
                            </Slider>
                            <ButtonBack className="carouselProvider_Button carouselProvider_Button-Prev">
                                <img alt='prevIcon' className="carouselProvider_Button_IMG carouselProvider_Button_IMG-Prev" src={Arrow} />
                            </ButtonBack>

                            <ButtonNext className="carouselProvider_Button carouselProvider_Button-Next">
                                <img alt='nextIcon' className="carouselProvider_Button_IMG carouselProvider_Button_IMG-Next" src={Arrow} />
                            </ButtonNext>
                        </CarouselProvider> 
                    </div>
                </div>

                <BannerData />
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    product : state.product.product
  });

ProductBanner.propTypes = {
    images: PropTypes.array
}

export default connect(mapStateToProps)(ProductBanner)