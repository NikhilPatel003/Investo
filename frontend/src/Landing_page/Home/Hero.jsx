import React from "react";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <img src="/media/Images/homeHero.png" alt="chart" className="col-10 m-auto" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
      </div>
      <div className="text-center">
        <Button variant="contained" className="">
          Sign up for free
        </Button>
      </div>
    </div>
  );
};

export default Hero;
