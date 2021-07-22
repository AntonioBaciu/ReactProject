import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        // attach all available data to matching character
        // every character is selected via char_id
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
