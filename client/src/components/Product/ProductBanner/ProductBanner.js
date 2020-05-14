import React from 'react'
import './ProductBanner.css'
import BannerData from './BannerData/BannerData'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Arrow from './Assests/arrows.svg'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const ProductBanner = ({product :{images}}) => {
    return(
        <React.Fragment>

            <div className='ProductBanner'>
                <div className='ProductBanner_WrapperIMG'>
                <CarouselProvider
                    className='carouselProvider'
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={images.length}
                >
                    <Slider>
                        {images.map( (i) => <Slide key={i._id} index={i._id}><img className='ProductBanner_IMG' alt='ProductImage' src={i.src}></img></Slide>)}
                    </Slider>
                    <ButtonBack className="carouselProvider_Button carouselProvider_Button-Prev">
                        <img alt='prevIcon' className="carouselProvider_Button_IMG carouselProvider_Button_IMG-Prev" src={Arrow} />
                    </ButtonBack>

                    <ButtonNext className="carouselProvider_Button carouselProvider_Button-Next">
                        <img alt='nextIcon' className="carouselProvider_Button_IMG carouselProvider_Button_IMG-Next" src={Arrow} />
                    </ButtonNext>
                </CarouselProvider>
                                    </div>

                <BannerData />
            </div>

            <Link to='/cart' className='ProductBannerData_Button ProductBannerData_Button-Mobile'>Add to cart</Link>

        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    product : state.products.product
  });

export default connect(mapStateToProps)(ProductBanner)