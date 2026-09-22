import logo from "@/assets/logo.png";
import { format } from "date-fns";
import Image from "next/image";
const Header = () => {
  return (
    <div className="text-center mb-8 mt-8 space-y-2">
      <Image
        className="mx-auto"
        src={logo}
        width={400}
        height={200}
        alt="logo"
      ></Image>
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMM dd, yyy")}</p>
    </div>
  );
};

export default Header;
