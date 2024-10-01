import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#134B70] h-12">
        <header className="container mx-auto flex flex-row items-center justify-between text-[#EEEEEE] h-12 p-2">
          <a
            href="#"
            className="block"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <img src="/favicon.ico" alt="" className="max-w-8 h-8" />
          </a>
          <div className="mx-auto">
            <h1 className="font-bold">Social Media Feed App</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#EEEEEE] hover:bg-[#1c6694]"
            onClick={() => navigate("/profile")}
          >
            <FaUser size={20} />
          </Button>
        </header>
      </div>
    </>
  );
}

export default Header;
