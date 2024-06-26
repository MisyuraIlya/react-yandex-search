import React from 'react';
import * as Loader from "react-loader-spinner";

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader.TailSpin type="Puff" color="#00BFFF" height={550} width={80} />
  </div>
);