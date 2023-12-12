import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type DiscoverCardProps = {
  img: string;
  title: string;
  description: string;
};

const DiscoverCard: React.FC<DiscoverCardProps> = ({ img, title, description }) => {
  return (
  
    <div className="pt-10">
      <div className=" rounded-lg overflow-hidden lg:mr-7 mr-3 flex flex-col h-full">
        <div className="image-container">
          <Image src={img} alt="side img" className="h-[250px] w-[100%] object-fit rounded" height={250} width={200} />
        </div>

        <div className="flex flex-col h-full flex-grow">
          <div className="flex-grow">
            <h3 className="py-3 text-2xl font-medium">{title}</h3>
            <p className="mb-4 font-light">{description}</p>
          </div>

          <div className="mt-4">
            <button className="px-4 py-1 rounded-full hover:text-white hover:bg-black border border-gray-600">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
