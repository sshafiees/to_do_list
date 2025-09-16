import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div className="shadow-lg ">
        <div className="container mx-auto p-2 ">
          <div className="flex justify-between ">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={32}
                height={32}
                priority
              />

              <h1 className="text-lg font-semibold mr-4 ">مدیریت وظایف من</h1>
            </div>
            <div className="flex items-center">
              <Image
                src="/man.png"
                alt="logo"
                width={32}
                height={32}
                priority
              />
              <span className="mr-2">خوش اومدین</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
