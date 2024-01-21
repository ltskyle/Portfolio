import React from 'react'
import Image from 'next/image'

const experienceContent = [
    {
        year: '   2023 - Present',
        position: ' Programming Teaching Assistant',
        companyName: 'UA MIS',
        details: `  Facilitate instruction in C# programming, providing technical evaluations and support to over 100 students each semester`,
        logo: '/assets/img/logos/ua.png',
    },
    {
        year: '2023 - 2023',
        position: ' Business Systems Analyst',
        companyName: 'Protective Life',
        details: `Spearheaded system requirement compilation and communication, efficiently facilitating the transition of over 500,000 policies`,
        logo: '/assets/img/logos/pl.png',
    },
    {
        year: '2020 - 2023',
        position: 'Assistant Area Manager',
        companyName: 'Dairy Queen',
        details: `Supported General Managers by overseeing operations, facilitating streamlined processes, and achieving performance metrics`,
        logo: '/assets/img/logos/dq.png',
    },
]

const Experience = () => {
    return (
        <ul>
            {experienceContent.map((val, i) => (
                <li key={i}>
                    <Image
                        className='icon'
                        src={val.logo}
                        alt={`${val.companyName} Logo`}
                        width={300}
                        height={300}
                    />
                    <span className='time open-sans-font text-uppercase'>
                        {val.year}
                    </span>
                    <h5 className='poppins-font text-uppercase'>
                        {val.position}
                        <span className='place open-sans-font'>
                            {val.compnayName}
                        </span>
                    </h5>
                    <p className='open-sans-font'>{val.details}</p>
                </li>
            ))}
        </ul>
    )
}

export default Experience
