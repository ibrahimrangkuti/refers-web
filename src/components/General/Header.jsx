import Link from "next/link";

export default function Header() {
  const menus = [
    {
      href: "/",
      text: "Web Developer",
    },
    {
      href: "/android-developer",
      text: "Android Developer",
    },
    {
      href: "/game-developer",
      text: "Game Developer",
    },
  ];

  return (
    <div>
      <div className="flex flex-col space-y-6 px-10 pt-36">
        <h1 className="font-bold text-5xl">Refers.</h1>
        <p className="w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          possimus minus dicta expedita veniam explicabo tempore sunt commodi,
          facilis ducimus quibusdam ullam, qui consequatur dolore maiores!
          Voluptas ut harum quas!
        </p>
      </div>

      <div className="px-10 py-10">
        <div className="flex gap-4 overflow-y-scroll md:overflow-hidden">
          {menus.map((menu, index) => (
            <Link key={index} href={menu.href}>
              <div className="bg-white px-6 py-2 rounded-full">{menu.text}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
