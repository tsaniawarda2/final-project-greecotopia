import React from "react";
import { hutan } from "../data";
import Card from "./Card";

export default function Cards() {
  return (
    <>
      {hutan.map((data) => (
        <Card item={data} key={data.id} />
      ))}
    </>
  );
}
