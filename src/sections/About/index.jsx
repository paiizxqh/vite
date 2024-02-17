import { data } from '../../contents/about.js';
const About = () => {
    return (
        <div className='space-y-4 px-2 scroll-m-14' id="About-section">
            <div className='text-primaryAccent font-medium'>{data.title}</div>
            <div>{data.description}</div>
        </div>
    )
}
export default About;