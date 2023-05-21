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
    title: 'Website Accessibility for Images',
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
        { label: 'links and buttons have a visible focus state?' },
        { label: 'links and buttons can be activated by keyboard alone' },
        { label: 'links and buttons correctly marked up with <a>,<button> tags?' }  
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

const card1 = {
  title:"Informative images",
  description:" Images that graphically represent concepts and information, typically pictures, photos, and illustrations. The text alternative should be at least a short description conveying the essential information presented by the image."
}

const card2 = {
    title:"Decorative images",
    description:" Provide a null text alternative (alt=) when the only purpose of an image is to add visual decoration to the page, rather than to convey information that is important to understanding the page."
}

const card3 = {
    title:"Functional images",
    description:"The text alternative of an image used as a link or as a button should describe the functionality of the link or button rather than the visual image. Examples of such images are a printer icon to represent the print function or a button to submit a form"
}

const card4 = {
    title:"Images of text",
    description:" Readable text is sometimes presented within an image. If the image is not a logo, avoid text in images. However, if images of text are used, the text alternative should contain the same words as in the image."
}
const card5 = {
    title:"Complex images ",
    description:" such as graphs and diagrams: To convey data or detailed information, provide a complete text equivalent of the data or information provided in the image as the text alternative."
}
const card6 = {
    title:"Groups of images",
    description:" If multiple images convey a single piece of information, the text alternative for one image should convey the information for the entire group."
}
const card7 = {
    title:"Image maps",
    description:" The text alternative for an image that contains multiple clickable areas should provide an overall context for the set of links. Also, each individually clickable area should have alternative text that describes the purpose or destination of the link."
}

export {section1,section2,section3,section4,list1,list2,list3,card1,card2,card3,card4,card5,card6}