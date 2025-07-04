import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GameUtils";

function GameCell({ cellitem, index }) {
  const { updateBoard, game } = useContext(GameContext);
  const cellClickHandler = () => {
    updateBoard(index);
    checkForWinner(game.board);
    // if (result) {
    //   
    // }
  };
  return <CellStyle onClick={cellClickHandler}>{cellitem}</CellStyle>;
}

export default GameCell;
