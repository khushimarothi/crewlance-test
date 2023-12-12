import DiscoverCard from './DiscoverCard'
import Slider, { Settings, CustomArrowProps } from "react-slick";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

type NextArrowProps = CustomArrowProps & {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const NextArrow: React.FC<NextArrowProps> = ({ onClick }) => {
  return (
    <div className="absolute right-0 -top-[20px]" onClick={onClick}>
      <div className="flex flex-row place-items-center cursor-pointer h-[50px] w-[50px]">
        <FaArrowRight />
      </div>
    </div>
  );
};

type PrevArrowProps = CustomArrowProps & {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const PrevArrow: React.FC<PrevArrowProps> = ({ onClick }) => {
  return (
    <div className="absolute right-[80px] -top-[20px]" onClick={onClick}>
      <div className="flex flex-row place-items-center cursor-pointer h-[50px] w-[50px]">
        <FaArrowLeft />
      </div>
    </div>
  );
};

type SliderCardProps = {
  data: { img: string; title: string; description: string}[];
};

const SliderCard: React.FC<SliderCardProps> = ({ data }) => {

  const settings:Settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ],


  };

  return (
    <div className=" relative pt-5 ">
      <Slider {...settings}>
        {data.map((el, index) => <DiscoverCard key={index} img={`/assets${el.img}`} title={el.title} description={el.description} />)}

      </Slider>

    </div>
  );
};

export default SliderCard;