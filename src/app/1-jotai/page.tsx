import { Left } from "./(container)/Left";
import { Right } from "./(container)/right/Right";

const Page = () => {
  return (
    <div className="w-screen h-screen flex text-6xl">
      <div className="flex-1">
        <Left />
      </div>
      <div className="flex-1">
        <Right />
      </div>
    </div>
  );
};

export default Page;
