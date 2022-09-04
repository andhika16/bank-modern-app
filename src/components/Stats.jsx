import React from "react";
import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div
          className={`flex-1 flex -justify-start items-center flex-row m-3 `}
          key={stat.id}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
