import Image from "next/image";
import signupLeft from "../../../public/assets/signupLeft.png";
import signupRight from "../../../public/assets/signupRight.png";

type LoginCardProps = {
  title: string;
  content: string;
  img: string;
}
type image = {
  img: string;
}

const SignupCard = ({ title, content, img }: LoginCardProps) => {
  return (
    <div className="flex flex-col items-center p-2 border-2 rounded-md cursor-pointer sm:p-5 border-black-300 hover:border-black">
      {/* <SignupCardImage img={img} /> */}
      <h3 className="text-xl font-semibold title ">{title}</h3>
      <p className="content text-slate-500">{content}</p>
    </div>
  );
};

const SignupCardImage = ({ img }: image) => (
  <div className="h-28 sm:h-32 aspect-w-16 aspect-h-9">
    TODO: MAKE IT CORRECT FOR IMAGE PURPOSE
    {/* <Image 
      src={signupLeft}
      src="../../../public/assets/signup-left.png"
      width={500}
      height={500}
      alt=""
      className="object-cover object-center w-full h-full"
     />*/}
  </div>
);

export default SignupCard;
