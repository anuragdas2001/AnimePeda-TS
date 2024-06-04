import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const SplashScreen: React.FC = () => {
  const words1 = `Animepedia`;
  const words2 = `For anime lovers by anime lovers`;
//   const navigate = useNavigate();
//     useEffect(() => {
//       setTimeout(() => {
//         navigate("/signup");
//       }, 3000);
//     }, []);

  return (
    <>
      <div className="bg-black border-2 border-red-600 h-screen">
        <div className="top-0 float-end p-4 w-5/12 h-screen">
          <img src="/DeathNoteSplash.png" alt="" className=" w-full h-full ml-8" />
        </div>
        <div className="flex justify-start m-10 ">
          <TextGenerateEffect
            className="covered-by-your-grace-regular"
            words={words1}
            textcolor={"text-yellow-400"}
            textsize={"text-6xl"}
          />
        </div>
        <div className="flex justify-start mt-40 ml-10 ">
          <TextGenerateEffect
            className="covered-by-your-grace-regular "
            words={words2}
            textcolor={"text-white"}
            textsize={"text-5xl"}
          />
        </div>
        <div className="absolute bottom-0 flex items-center justify-center w-full transform translate-x-0">
          <span>Made with</span>
          <img
            src="https://img.icons8.com/?size=100&id=19411&format=png&color=000000"
            className="h-8 w-8 mx-2"
            alt="love icon"
          />
          <span>by Anurag Das</span>
        </div>
      </div>
    </>
  );
};
