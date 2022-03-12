/** @format */

import React, { version } from "react";
import Vergtable from "./Vergtable";
import "./vegtable.css";

function VergtableList(props) {
  let vegtableList = [
    {
      name: "apple",
      imageSrc:
        "https://s3-us-west-2.amazonaws.com/melingoimages/Images/4315.jpg",
      vitamins: "9.67 mg",
    },
    {
      name: "banana",
      imageSrc:
        "https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&crop=0px%2C74px%2C1024px%2C536px&resize=1200%2C628&strip",
      vitamins: "8.7 mg",
    },
    {
      name: "grapes",
      imageSrc:
        "https://i5.walmartimages.com/asr/f7d4ea27-1479-4ca8-b526-c16766ab8741_2.1067c57d4630bbc11557ab28a24f02cd.jpeg",
      vitamins: "4 mg",
    },
    {
      name: "onion",
      imageSrc:
        "https://imagevars.gulfnews.com/2019/09/20/190920-onion-_16d4fa56edd_large.jpg",
      vitamins: "7.4 mg",
    },
  ];
  return (
    <div className="vegContainer">
      {vegtableList.map((veg) => {
        return (
          <div className="items">
            <Vergtable
              name={veg.name}
              image={veg.imageSrc}
              vitamins={veg.vitamins}
            ></Vergtable>
          </div>
        );
      })}
    </div>
  );
}

export default VergtableList;
