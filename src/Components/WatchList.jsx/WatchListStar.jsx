import { Star } from "lucide-react";

function WatchListStar({ size, isInList }) {
  return (
    <div>
      <Star
        size={size}
        className={
          isInList
            ? "fill-yellow-400 cursor-pointer"
            : "text-yellow-400 cursor-pointer"
        }
      />
    </div>
  );
}

export default WatchListStar;
