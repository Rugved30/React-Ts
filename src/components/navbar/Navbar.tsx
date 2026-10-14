import FirstRow from "./firstRow/FirstRow";
import SecondRow from "./secondRow/SecondRow";
import ThirdRow from "./thirdRow/ThirdRow";



const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </nav>
  );
};

export default Navbar;