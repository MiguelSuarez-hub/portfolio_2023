import Image from "next/image";

const TechCard = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  return (
      <div
        className="overflow-hidden dark:border-zinc-600 rounded-lg border border-slate-100 bg-white shadow-lg dark:bg-gray-500 dark:shadow-gray-700 shadow-teal-300 h-20 w-20 sm:w-32 sm:h-32 lg:w-28 lg:h-28 mx-auto relative hover:scale-110 hover:rotate-[360deg] transition ease-in-out"
      >
        <div className=" h-16 w-16 sm:w-28 sm:h-28 lg:w-24 lg:h-24 mx-auto mt-0 relative ">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="w-full h-full"
            className=" w-full h-full my-0 object-contain"
          />
        </div>
        <p className="my-0 mx-auto p-0 text-sm text-center relative bottom-2 z-10">
          {title}
        </p>
      </div>
  );
};

export default TechCard;
