import React from 'react'
import Image from 'next/image'

const educationContent = [
    {
        year: 'CURRENT',
        degree: 'MASTERS DEGREE',
        institute: 'THE UNIVERSITY OF ALABAMA',
        details: `  Specializing in Management Information Systems with a concentration in Solutions Delivery`,
        logo: '/assets/img/logos/ua.jpg',
    },
    {
        year: 'CURRENT',
        degree: 'BACHELORS DEGREE',
        institute: 'THE UNIVERSITY OF ALABAMA',
        details: `Majoring in Management Information Systems in the Accelerated Masters Program`,
        logo: '/assets/img/logos/ua.jpg',
    },
    {
        year: '2019',
        degree: 'DIPLOMA ',
        institute: 'LONG COUNTY HIGH SCHOOL',
        details: `Graduated with honors and was a member of Beta Club`,
        logo: '/assets/img/logos/longcounty.jpg',
    },
]

const Education = () => {
    return (
        <ul>
            {educationContent.map((val, i) => (
                <li key={i}>
                    <Image
                        className='icon'
                        src={val.logo}
                        alt={`${val.institute} Logo`}
                        // width={300}
                        // height={300}
                    />
                    <span className='time open-sans-font text-uppercase'>
                        {val.year}
                    </span>
                    <h5 className='poppins-font text-uppercase'>
                        {val.degree}
                        <span className='place open-sans-font'>
                            {val.institute}
                        </span>
                    </h5>
                    <p className='open-sans-font'>{val.details}</p>
                </li>
            ))}
        </ul>
    )
}

export default Education
