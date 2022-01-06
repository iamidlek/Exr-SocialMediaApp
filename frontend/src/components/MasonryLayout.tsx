import React from "react";
import Masonry from "react-masonry-css";
import { IPin } from "./Feed";
import Pin from "./Pin";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

interface IProps {
  pins?: IPin[];
}

const MasonryLayout: React.FC<IProps> = ({ pins }) => (
  <Masonry
    className="flex animate-slide-fwd"
    breakpointCols={breakpointColumnsObj}
  >
    {pins?.map((pin) => (
      <Pin
        key={pin._id}
        pin={pin}
        //! className="w-max" pin컴포넌트의 최상위에 주면?
      />
    ))}
  </Masonry>
);

export default MasonryLayout;
