const intro = {
    intro1:"Website",
    intro2:"Optimization",
    intro3:"Ensure your website's accessibility with",
    intro4:"our comprehensive testing tool ."
}

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
    home:"Home",
    dashboard:'Dashboard',
    usability:'Usability',
    semantics:'Semantics',
    picture:'Picture',
    test:'Check List'
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

const headerPageInfo = {
    title:"Proper Heading Structure",
    info:"Discover the importance of using proper heading tags,<br>maintaining hierarchy, and providing descriptive headings<br>to improve navigation and accessibility for all users."
}

const tab1 = {
    title:"Use proper heading hierarchy:",
    info1:"Ensure that your headings follow a logical hierarchy and are marked up correctly using the appropriate HTML heading tags (H1, H2, H3, etc.). The heading hierarchy should reflect the structure of the content.",
    info2:"Each page should have a single H1 heading that describes the main purpose or topic of the content on that page. The H1 heading should be unique and provide a clear and concise summary of the page's content."
}
const tab2 = {
    title:"Maintain proper heading levels",
    info1:"Avoid skipping heading levels or using non-sequential headings. For example, if you have an H2 heading, the subsections within it should use H3 headings, not H4 or H5. This ensures a clear and consistent heading structure.",
    info2:"Each heading should provide a concise and accurate summary of the content it introduces. Use meaningful and descriptive headings that give users a clear idea of what to expect in the corresponding section or subsection."
}
const tab3 = {
    title:"Use CSS for visual styling:",
    info1:"While headings should convey structure and hierarchy, their visual presentation can be customized using CSS. Apply appropriate styles to headings to ensure they are visually distinguishable and enhance readability without relying solely on font size or weight.",
    info2:"Use screen readers or other assistive technologies to evaluate how headings are read and understood by users with disabilities. Ensure that the headings are announced correctly and provide meaningful information about the content."
}
const SematicFail = {
    info:"Failing the test indicate that the content is not organized and labeled correctly, making it difficult for assistive technologies to interpret and convey the information effectively. Resolving these semantic failures is crucial to ensure a meaningful and accessible experience for all users."
}
export {section1,section2,section3,section4,list1,list2,list3,card1,card2,card3,card4,card5,card6,headerPageInfo,tab1,tab2,tab3,SematicFail,intro}