import Logo from "./components/logo/Logo";
import Profile from "./components/profile/Profile";
import { TbWorld } from "react-icons/tb";
import Menu from "./components/menu/Menu";
import Places from "./components/places/places";
import SearchBar from "./components/searchBar/SearchBar";
export default function Page() {
  const stay = true;

  return (
    <div>
      <div>
        <div className="flex">
          <Logo />
          <SearchBar />
          <div className="relative left-130">Aribnb your home</div>
          <TbWorld className="relative left-140 text-3xl" />
          <Profile />
        </div>
        <div>
          <Menu />
        </div>
        <div className="flex">
          <Places />
          <Places />
          <Places />
        </div>
        <div className="flex">
          <Places />
          <Places />
          <Places />
        </div>
        <div className="flex">
          <Places />
          <Places />
          <Places />
        </div>
        <div className="flex">
          <Places />
          {/* <Places country={res[10].country}/> */}
        </div>
      </div>
    </div>
  );
}
