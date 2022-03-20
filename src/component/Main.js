import React from "react";
import Card from "./Card";
import CardData from "./CardData";
export default function Main() {
  return (
    <>
      <section className="pl-36 overflow-hidden mb-32">
        <div className="d-flex slider">
          {CardData.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </section>
    </>
  );
}
// image={item.coverImg}
// star={item.stats.rating}
// raview={item.stats.raviewCount}
// title={item.title}
// price={item.price}
// openSpots={item.openSpots}
// location={item.location}
