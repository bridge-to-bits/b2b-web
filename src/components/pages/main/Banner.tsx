const Banner = () => {
  return (
    <div className="flex items-center justify-center">
      <section
        className="relative flex items-center justify-center w-full aspect-[25/10] bg-cover bg-center ml-[5%] mr-[5%] rounded-md"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Bridge to Bits</h1>
          <p className="mt-10 text-lg">
            Незалежний сайт для музикантів та продюсерів.
          </p>
        </div>
      </section>
    </div>
  )};

export default Banner;