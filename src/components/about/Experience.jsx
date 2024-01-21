import React from 'react'

const experienceContent = [
    {
        year: '   2023 - Present',
        position: ' Programming Teaching Assistant',
        compnayName: 'UA MIS',
        details: `  Facilitate instruction in C# programming, providing technical evaluations and support to over 100 students each semester`,
        logo: `/assets/img/logos/UA.png`,
    },
    {
        year: '2023 - 2023',
        position: ' Business Systems Analyst',
        compnayName: 'Protective Life',
        details: `Spearheaded system requirement compilation and communication, efficiently facilitating the transition of over 500,000 policies`,
        logo: `/assets/img/logos/PL.png`,
    },
    {
        year: '2020 - 2023',
        position: 'Assistant Area Manager',
        compnayName: 'Dairy Queen',
        details: `Supported General Managers by overseeing operations, facilitating streamlined processes, and achieving performance metrics`,
        logo: `/assets/img/logos/DQ.png`,
    },
]

const Experience = () => {
    return (
        <ul>
            {experienceContent.map((val, i) => (
                <li key={i}>
                    <div className='icon'>
                        <img src={val.logo} alt={`${val.companyName} Logo`} />
                    </div>
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
