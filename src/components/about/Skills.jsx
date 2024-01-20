import React from 'react'

const skillsContent = [
    { skillClass: 'p95', skillPercent: '95', skillName: 'C#' },
    { skillClass: 'p90', skillPercent: '90', skillName: 'ASP.NET MVC' },
    { skillClass: 'p90', skillPercent: '90', skillName: 'JAVASCRIPT' },
    { skillClass: 'p85', skillPercent: '85', skillName: 'HTML/CSS' },
    { skillClass: 'p80', skillPercent: '80', skillName: 'REACT' },
    { skillClass: 'p80', skillPercent: '80', skillName: 'SQL' },
    { skillClass: 'p70', skillPercent: '75', skillName: 'PYTHON' },
    { skillClass: 'p45', skillPercent: '70', skillName: 'PHOTOSHOP' },
]

const Skills = () => {
    return (
        <>
            {skillsContent.map((val, i) => (
                <div className='col-6 col-md-3 mb-3 mb-sm-5' key={i}>
                    <div className={`c100 ${val.skillClass}`}>
                        <span>{val.skillPercent}%</span>
                        <div className='slice'>
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                    <h6 className='text-uppercase open-sans-font text-center mt-2 mt-sm-4'>
                        {val.skillName}
                    </h6>
                </div>
            ))}
        </>
    )
}

export default Skills
