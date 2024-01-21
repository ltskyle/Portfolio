import React, { useEffect, useRef } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Hero from '../components/hero/Hero'
import AboutMain from '../components/about'
import Wrapper from '../layout/wrapper'
import SEO from '../components/Seo'
import Portfolio from '../components/portfolio/Portfolio'
import Address from '../components/Address'
import Social from '../components/Social'
import SwitchDark from '../components/switch/SwitchDark'

const menuItem = [
    { icon: 'fa-home', menuName: 'Home' },
    { icon: 'fa-user', menuName: 'About' },
    { icon: 'fa-briefcase', menuName: 'Portfolio' },
]

const HomeDark = () => {
    const topRef = useRef(null)

    useEffect(() => {
        document.querySelector('body').classList.remove('rtl')
    }, [])

    function handleScrollTop() {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <Wrapper>
            <SEO pageTitle={'Home Dark'} />

            <div className='yellow' ref={ref}>
                <SwitchDark />
                {/* End Switcher */}
                <Tabs>
                    <div className='header'>
                        <TabList className=' icon-menu  revealator-slideup revealator-once revealator-delay1'>
                            {menuItem.map((item, i) => (
                                <Tab className='icon-box' key={i}>
                                    <i className={`fa ${item.icon}`}></i>
                                    <h2>{item.menuName}</h2>
                                </Tab>
                            ))}
                        </TabList>
                    </div>
                    {/* End Menu Content */}

                    <div className='tab-panel_list'>
                        {/* Hero Content Starts */}
                        <TabPanel className='home '>
                            <div
                                className='container-fluid main-container container-home p-0 g-0'
                                data-aos='fade-up'
                                data-aos-duration='1200'
                            >
                                <div className='color-block d-none d-lg-block'></div>
                                <Hero />
                            </div>
                        </TabPanel>
                        {/* Hero Content Ends */}

                        {/* About Content Starts */}
                        <TabPanel className='about'>
                            <div data-aos='fade-up' data-aos-duration='1200'>
                                <div className='title-section text-start text-sm-center'>
                                    <h1>
                                        ABOUT <span>ME</span>
                                    </h1>
                                    <span className='title-bg'>ABOUT ME</span>
                                </div>
                                {/* End title */}
                                <AboutMain />
                            </div>
                        </TabPanel>
                        {/* About Content Ends */}

                        {/* Portfolio Content Starts */}
                        <TabPanel className='portfolio professional'>
                            <div
                                className='title-section text-start text-sm-center'
                                data-aos='fade-up'
                                data-aos-duration='1200'
                            >
                                <h1>
                                    my <span>portfolio</span>
                                </h1>
                                <span className='title-bg'>MY PORTFOLIO</span>
                            </div>
                            {/* End title */}
                            <Portfolio />
                        </TabPanel>
                        {/* Portfolio Content Ends */}
                    </div>
                </Tabs>
            </div>
        </Wrapper>
    )
}

export default HomeDark
