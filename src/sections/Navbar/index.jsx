import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className='flex flex-col gap-3 font-semibold'>
        <div>
        <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faArrowRight} />
        About
        </div>
    <div>Experience</div>
    <div>Project</div>
    <div>Artticle</div>
  </div>
  )
}

export default Navbar;