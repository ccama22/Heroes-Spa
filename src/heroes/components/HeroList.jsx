import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  // memorizar el resultado de esta funcion cosa que no seria necesaria ya que este valor de publisher no cambia
  // ,para memorisar este valor si fuera
  // muy grande para no tener que
  // reprocesarlo cada ves que hay un cambio en este componente
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
