import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Profile () {
    return <div className="flex">
        <RxHamburgerMenu className="relative left-175 text-3xl"/>
        <CgProfile className="relative left-180 text-3xl"/>
    </div>
}