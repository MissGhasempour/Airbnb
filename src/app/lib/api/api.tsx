"use server";
import Header from "@/app/components/header/Header";
import Place from "@/app/components/places/place/Place";

export default async function Api() {
  const fetchData = await fetch(
    "http://universities.hipolabs.com/search?name=middle",
    {
      method: "GET",
    }
  );
  const res = await fetchData.json();

  return (
    <div>
      <h1>{res[0].country}</h1>
    </div>
  );
}
