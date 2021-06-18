import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'


export default function index() {
    return (
        <div>
            {section === 1 && (
                    
                        <SectionOne
                            section={section}
                            setSection={setSection}
                            formData={formData}
                            setFormData={setFormData}
                        />
                )}
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
                {section === 5 && (
                    
                        <SectionFive
                            section={section}
                            setSection={setSection}
                            formData={formData}
                            setFormData={setFormData}
                        />
                )}
        </div>
    )
}


