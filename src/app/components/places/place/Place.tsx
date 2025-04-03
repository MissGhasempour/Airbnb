import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import img from "../GrassRoom-02.webp";

export default async function Place() {
  const fetchData = await fetch(
    "http://universities.hipolabs.com/search?name=middle",
    {
      method: "GET",
    }
  );
  const res = await fetchData.json();
  return (
    <div>
      <div>
        <Image src={img} alt="place" width={500} height={100} />
        <div className="flex">
          <div className="rounded-2xl bg-stone-100 p-2 m-2 w-40 text-center">
            Guest favourite
          </div>
          <FaHeart className="text-2xl mx-20 my-3" />
        </div>

        <div className="flex">
          <h1>{res[0].country} </h1>
          <h2 className="mx-15">* 4,97</h2>
        </div>
        <p>Hosted by a business</p>
        <p>27 Apr - 2 May</p>
        <span className="border-b-2">$589 total</span>
      </div>
    </div>
  );
}
