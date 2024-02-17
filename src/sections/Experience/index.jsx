import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from "../../assets/exp_site.png";
import piclittlelemon from "../../assets/littlelemon.png";
import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "../../components/FormattedDate";
import Picture from "../../components/Picture";
import TitleLink from "../../components/TitleLink";
import Material from "../../components/Material";
import Description from "../../components/Description";
import Tech from "../../components/Tech";
import {data} from "../../contents/experience";
import ContentContainer from "../../components/ContentContainer";

const SECTION_ID = "experience-section";

const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});
    return (
        <ContentContainer 
        title="Experience" 
        data={data} 
        />
    )
}

export default Experience;