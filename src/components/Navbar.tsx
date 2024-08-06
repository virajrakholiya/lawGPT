'use client'
import { UserButton } from "@clerk/nextjs";
function Navbar() {
  return (
    <div>
      <div className="bg-black flex justify-between p-2 px-4 items-center">
        <h1 className="text-2xl   text-yellow-400 font-medium font-serif ">
          LawGPT
        </h1>
        <UserButton appearance={{
            elements:{
                avatarBox: {
                    height: "2.5rem",
                    width: "2.5rem",
                  },
            }
        }} />
      </div>
    </div>
  );
}

export default Navbar;
