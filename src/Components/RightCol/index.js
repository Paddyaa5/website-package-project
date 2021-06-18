import React from 'react'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'


export default function index() {
    return (
        <div>
             {section === 2 && (
                    
                    <SectionTwo
                        section={section}
                        setSection={setSection}
                        formData={formData}
                        setFormData={setFormData}
                    />
            )}
            {section === 3 && (
                
                    <SectionThree
                        section={section}
                        setSection={setSection}
                        formData={formData}
                        setFormData={setFormData}
                    />
            )}
            {section === 4 && (
                
                    <SectionFour
                        section={section}
                        setSection={setSection}
                        formData={formData}
                        setFormData={setFormData}
                    />
            )}
        </div>
    )
}
