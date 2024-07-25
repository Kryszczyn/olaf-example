import Logo  from "./../../assets/logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar(){
    return (
        <>
            <Logo />
            <ul className="flex items-center justify-center gap-4">
              <li>
                <FontAwesomeIcon 
                  icon={faLinkedinIn}
                  className="text-gray-200 text-xl" 
                />
              </li>
              <li>
                <FontAwesomeIcon 
                  icon={faGithub}
                  className="text-gray-200 text-xl" 
                />
              </li>
            </ul>
        </>
    )
}