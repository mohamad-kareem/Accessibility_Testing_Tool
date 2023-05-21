const section1 = {
    title:'alternative text',
    description:'Providing descriptive alternative text (alt text) for images enhances accessibility by conveying their content, purpose, and context to users who cannot see them.',
    alt:'person looking toward a contrast web page'
}

const section2 = {
    title:'Semantic Structure',
    description:'The proper use of heading tags (h1, h2 ..) is essential for creating accessible websites. These tags provide a hierarchical structure to the content, helping users navigate and understand the information more easily.',
    alt:'Lady correcting paragrapgh structure'
}

const section3 = {
    title:'Focus and Keyboard Accessibility',
    description:'Ensuring that links and buttons are easily accessible and usable for all users, including those who rely on keyboard navigation or assistive technologies, is crucial for web accessibility.',
    alt:'lady surrounded by social media icons (connections)'
}
const section4 = {
    coding:'Coding',
    target:'Target',
    semantics:'Semantics',
    picture:'Picture',
    test:'Test'
}

const list1 = {
    title: 'Inspecting Website Accessibility for Images',
    items: [
        { label: 'Is the image decorative?' },
        { label: 'Is the image used as a CAPTCHA?' },
        { label: 'Is the image of meaningful text?' },
        { label: 'Does the image convey information?' }  
    ]
}

const list2 = {
    title: 'Accessibility of Links and Buttons',
    items:[
        { label: 'Can the purpose of the link or button be determined by text?' },
        { label: 'Do links and buttons have a visible focus state?' },
        { label: 'All links and buttons can be activated without a mouse, by keyboard alone' },
        { label: 'Are links and buttons correctly marked up with <a>, <button> or <input> tags?' }  
    ]
}
const list3 = {
    title: 'Accessibility of Headings and Structure',
    items:[
        { label: 'Does the heading describe the purpose content?' },
        { label: 'Is the heading marked up as a heading (using H1, H2 etc)?' },
        { label: 'Do the headings describe the structure of the document?' },
        { label: 'Are heading levels used in logical order' }  
    ]
}
export {section1,section2,section3,section4,list1,list2,list3}