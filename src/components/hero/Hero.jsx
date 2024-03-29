import React, { useState } from 'react'
import Modal from 'react-modal'
// import heroImgMobile from '../../../public/assets/img/hero/img-mobile.jpg'
import cancelImg from '../../../public/assets/img/cancel.svg'
import AboutMain from '../about'
import Image from 'next/image'
import Social from '../Social'

const heroContent = {
    heroImage: '/assets/img/hero/dark.jpg',
    heroMobileImage: '/assets/img/hero/img-mobile.jpg',
    heroTitleName: 'Kyle Knudson',
    heroDesignation: 'Software Developer',
    heroDescriptions: `I am currently in the Accelerated Masters Program specializing in Management Information Systems at The University of Alabama.`,
    heroBtn: 'more about me',
}

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
    function toggleModalOne() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className='row home-details-container align-items-center'>
                <div
                    className='col-lg-4 bg position-fixed d-none d-lg-block'
                    style={{ backgroundImage: `url(${heroContent.heroImage})` }}
                ></div>
                <div className='col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start'>
                    <div className='home-content'>
                        <Image
                            src={heroContent.heroMobileImage}
                            className='img-fluid main-img-mobile d-sm-block d-lg-none'
                            alt='hero man'
                            width={300}
                            height={300}
                        />
                        <div id='home-details-wrap'>
                            <h1
                                id='home-name'
                                className='text-uppercase poppins-font'
                            >
                                {"I'm"} {heroContent.heroTitleName}.
                                <span>{heroContent.heroDesignation}</span>
                            </h1>
                            <p className='open-sans-font'>
                                {heroContent.heroDescriptions}
                            </p>
                            <div className='home-bottom-content'>
                                <Social />
                            </div>
                            <a
                                className='button'
                                href={'files/KnudsonKyleResume.pdf'}
                                download
                                target='_blank'
                                rel='noreferrer'
                            >
                                <span className='button-text'>Download CV</span>
                                <span className='button-icon fa fa-download'></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End home-details-container */}

            {/* Start Modal for About More */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel='My dialog'
                className='custom-modal dark hero'
                overlayClassName='custom-overlay dark'
                closeTimeoutMS={500}
            >
                <div>
                    <button className='close-modal' onClick={toggleModalOne}>
                        <Image src={cancelImg} alt='close icon' />
                    </button>
                    {/* End close icon */}

                    <div className='box_inner about'>
                        <div data-aos='fade-up' data-aos-duration='1200'>
                            <div className='title-section text-start text-sm-center'>
                                <h1>
                                    ABOUT <span>ME</span>
                                </h1>
                                {/* <span className='title-bg'>ABOUT ME</span> */}
                            </div>
                            {/* End title */}
                            <AboutMain />
                        </div>
                    </div>
                </div>
                {/* End modal box news */}
            </Modal>
            {/* End  Modal for About More */}
        </>
    )
}

export default Hero
