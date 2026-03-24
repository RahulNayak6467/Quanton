import { Star } from "lucide-react";

function WatchListStar({ size, isInList, isInWatchList, setIsInWatchList }) {
  return (
    <div onClick={() => setIsInWatchList(!isInWatchList)}>
      <Star
        size={size}
        className={
          isInList || isInWatchList
            ? "fill-yellow-400 cursor-pointer"
            : "text-yellow-400 cursor-pointer"
        }
      />
    </div>
  );
}

export default WatchListStar;
