import { IoSearchOutline } from "react-icons/io5";
export default function StaySearch() {
  return (
    <div>
      <div className="flex relative left-50">
        <div className="p-3">Where</div>
        <div className="p-3">Check in </div>
        <div className="p-3">Check out </div>
        <div className="p-3">Who</div>
        <IoSearchOutline className="relative left-10 top-3 text-2xl " />
      </div>
    </div>
  );
}
