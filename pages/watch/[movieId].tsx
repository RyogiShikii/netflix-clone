import { useRouter } from "next/router";
import useMovie from "@/hooks/useMovie";

import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);
  console.log('123',data)

  return (
    <div className="bg-black w-screen h-screen">
      <div className="text-white fixed flex flex-row items-center z-10 p-4 gap-8 w-full bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => {
            router.push("/");
          }}
          className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
          size={35}
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light pr-1">Watching:</span>
          {data?.title}
        </p>
      </div>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
