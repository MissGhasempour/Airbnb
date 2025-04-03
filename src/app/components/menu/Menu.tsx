import { GiWoodCabin } from "react-icons/gi";
import { LuTicketCheck } from "react-icons/lu";
import { FaHotel } from "react-icons/fa6";
import { FaShuttleSpace } from "react-icons/fa6";
export default function Menu() {
  return (
    <div>
      <div className="flex">
        <div className="p-2">
          <GiWoodCabin className="text-3xl m-2"/>
          Cabins
        </div>
        <div className="p-2">
          <LuTicketCheck className="text-3xl m-2"/>
          Icons
        </div>
        <div className="p-2">
          <FaShuttleSpace className="text-3xl m-2"/>
          OMG!
        </div>
        <div className="p-2">
          <FaHotel className="text-3xl m-2"/>
          Amazing views
        </div>
      </div>
    </div>
  );
}
