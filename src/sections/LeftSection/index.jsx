import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = () => {
  return (
    <div className="px-5">
      <div className='sticky top-14 grid grid-rows-[35%_45%_20%] h-[87vh]'>
          <Header />
          <Navbar />
          <Contact />
        </div>
    </div>
  )
}

export default LeftSection;