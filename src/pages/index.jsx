export default function Home() {
  return (
    <div className="px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="aspect-[4/3] bg-white rounded-xl object-cover">
          <img
            src="https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="rounded-xl h-full"
          />
        </div>
        <div className="aspect-[4/3] bg-white rounded-xl">
          <img
            src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-xl h-full"
          />
        </div>
        <div className="aspect-[4/3] bg-white rounded-xl">
          <img
            src="https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="rounded-xl h-full"
          />
        </div>
        <div className="aspect-[4/3] bg-white rounded-xl"></div>
        <div className="aspect-[4/3] bg-white rounded-xl"></div>
        <div className="aspect-[4/3] bg-white rounded-xl"></div>
        <div className="aspect-[4/3] bg-white rounded-xl"></div>
        <div className="aspect-[4/3] bg-white rounded-xl"></div>
      </div>
    </div>
  );
}
