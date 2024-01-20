import React from 'react'

const personalInfoContent = [
    { meta: 'first name', metaInfo: 'Kyle', hasColor: '' },
    { meta: 'last name', metaInfo: 'Knudson', hasColor: '' },
    // { meta: 'Age', metaInfo: '22 Years', hasColor: '' },
    { meta: 'Email', metaInfo: 'kyleknudson898@gmail.com', hasColor: '' },
    // { meta: 'Freelance', metaInfo: 'Available', hasColor: 'green' },
    // { meta: 'Address', metaInfo: 'Tunis', hasColor: '' },
    // { meta: 'phone', metaInfo: '+21621184010', hasColor: '' },
    // { meta: 'Email', metaInfo: 'you@mail.com', hasColor: '' },
    // { meta: 'Skype', metaInfo: ' steve.milner', hasColor: '' },
    // { meta: 'langages', metaInfo: 'French, English', hasColor: '' },
]

const PersonalInfo = () => {
    return (
        <ul className='about-list list-unstyled open-sans-font'>
            {personalInfoContent.map((val, i) => (
                <li key={i}>
                    <span className='title'>{val.meta}: </span>
                    <span
                        className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
                    >
                        {val.metaInfo}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default PersonalInfo
