import { LeftSide } from "./(components)/LeftSide";
import { RightSide } from "./(components)/RightSide";

const Page = () => {
  return (
    <div className="flex flex-row p-8 text-3xl text-center">
      <div className="flex-1">
        <LeftSide />
      </div>
      <div className="flex-1">
        <RightSide />
      </div>
    </div>
  );
};

export default Page;
