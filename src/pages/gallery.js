import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import {Link} from 'gatsby'
import gallery1 from '../assets/images/gallery/Client01.png'
import gallery2 from '../assets/images/gallery/Client02.png'
import gallery3 from '../assets/images/gallery/Client03.png'
import gallery4 from '../assets/images/gallery/Client04.png'
import gallery5 from '../assets/images/gallery/Client05.png'
import gallery6 from '../assets/images/gallery/Client06.png'
import gallery7 from '../assets/images/gallery/Client07.png'
import gallery8 from '../assets/images/gallery/Client08.png'
import gallery9 from '../assets/images/gallery/Client09.png'
import Lightbox from 'react-image-lightbox'

const images = [
    (gallery1),
    (gallery2),
    (gallery3),
    (gallery4),
    (gallery5),
    (gallery6),
    (gallery7),
    (gallery8),
    (gallery9),
];

const Gallery = () => {
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Gallery" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Gallery" 
            />

            <div className="gallery-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(0);}
                                    }
                                >
                                    <img src={gallery1} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(1);}
                                    }
                                >
                                    <img src={gallery2} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(2);}
                                    }
                                >
                                    <img src={gallery3} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(3);}
                                    }
                                >
                                    <img src={gallery4} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(4);}
                                    }
                                >
                                    <img src={gallery5} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(5);}
                                    }
                                >
                                    <img src={gallery6} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(6);}
                                    }
                                >
                                    <img src={gallery7} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(7);}
                                    }
                                >
                                    <img src={gallery8} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(8);}
                                    }
                                >
                                    <img src={gallery9} alt="event" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>
            
            <Footer />
        </Layout>
    );
}

export default Gallery