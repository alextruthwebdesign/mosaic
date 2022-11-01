import Link from "next/link";

function FooterMenu() {
  return (
    <div className="py-[80px] px-3 flex sm:block">
      <div className="text-center sm:text-left max-w-[1400px] mx-auto flex flex-col sm:flex-row flex-wrap gap-5 justify-between">
        <div className="flex flex-col gap-y-2 flex-1">
          <Link href="" className="font-bold mb-[8px]">
            About
          </Link>
          <Link href="">About us</Link>
          <Link href="">Meet the Staff</Link>
          <Link href="">Meet our Founders</Link>
          <Link href="">Board of Directors</Link>
          <Link href="">Newsroom</Link>
          <Link href="">Testimonials</Link>
          <Link href="">Blog</Link>
        </div>
        <div className="flex flex-col gap-y-2 flex-1">
          <Link href="" className="font-bold mb-[8px]">
            Education
          </Link>
          <Link href="">Literature</Link>
          <Link href="">Podcast</Link>
          <Link href="">Videos</Link>
          <Link href="">Speaking</Link>
          <Link href="">Education Tool</Link>
        </div>
        <div className="flex flex-col gap-y-2 flex-1">
          <Link href="" className="font-bold mb-[8px]">
            Resources
          </Link>
          <Link href="">Mental Health</Link>
          <Link href="">Addiction</Link>
          <Link href="">Crisis</Link>
          <Link href="">Literature</Link>
          <Link href="">Counselors</Link>
          <Link href="">Eating Disorder</Link>
          <Link href="">Veteran / First Responder</Link>
          <Link href="">Community Services</Link>
        </div>
        <div className="flex flex-col gap-y-2 flex-1">
          <Link href="" className="font-bold mb-[8px]">
            Get Involved
          </Link>
          <Link href="">Fundraising</Link>
          <Link href="">Special Events</Link>
          <Link href="">Admin / Marketing</Link>
          <Link href="">Creative</Link>
          <Link href="">Careers</Link>
          <Link href="">Task Force</Link>
        </div>
      </div>
    </div>
  );
}

export default FooterMenu;
