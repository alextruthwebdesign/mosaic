import Image from "next/image";
import Link from "next/link";

const style = "w-[30px] h-[4px] bg-black transition-[transform] duration-700";

function NavLinks({ modifiers, btn, mobile, setNavbarOpen }) {
  return (
    <div className={modifiers}>
      {mobile ? (
        <div
          className="cursor-pointer mobile:hidden z-10 absolute right-7 top-[56px]"
          onClick={() => setNavbarOpen(false)}
        >
          <div
            className={`${style} mb-1 rotate-[-45deg] translate-y-[12px]`}
          ></div>
          <div className={`${style} mb-1 opacity-0`}></div>
          <div className={`${style} rotate-[45deg] translate-y-[-3px]`}></div>
        </div>
      ) : null}
      <Link
        className={`${mobile ? "hover:text-black" : "hover:text-[#3f93a5]"}`}
        href=""
      >
        About
      </Link>
      <Link
        href=""
        className={`${mobile ? "hover:text-black" : "hover:text-[#3f93a5]"}`}
      >
        Education
      </Link>
      <Link
        href=""
        className={`${mobile ? "hover:text-black" : "hover:text-[#3f93a5]"}`}
      >
        Resources
      </Link>
      <Link
        href=""
        className={`${mobile ? "hover:text-black" : "hover:text-[#3f93a5]"}`}
      >
        Hope
      </Link>
      <Link
        href=""
        className={`${mobile ? "hover:text-black" : "hover:text-[#3f93a5]"}`}
      >
        Get involved
      </Link>

      <div className="flex gap-x-3">
        <div className="relative w-[20px] h-[20px]">
          <Image src="/images/Icon.png" alt="phone" fill />
        </div>
        <p>Call us:346-703-0051</p>
      </div>
      <button className={btn}>Donate</button>
    </div>
  );
}

export default NavLinks;
