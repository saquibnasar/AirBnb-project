import React from "react";
import home from "../img/home.png";
export default function Hero() {
  return (
    <>
      <section className="text-center pt-32 mb-49">
        <img src={home} alt="" />
        <div className="text-start pl-36">
          <h1 className="fs-36 fw-600 black pt-32">Online Experiences</h1>
          <p className="fs-16 mw-340px mt-3">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </section>
    </>
  );
}
