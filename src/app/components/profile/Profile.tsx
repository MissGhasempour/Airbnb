import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Profile () {
    return <div className="flex">
        <RxHamburgerMenu className="relative left-145 text-3xl"/>
        <CgProfile className="relative left-150 text-3xl"/>
    </div>
}