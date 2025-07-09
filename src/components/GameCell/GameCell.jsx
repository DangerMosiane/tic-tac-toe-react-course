import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/x-symbol-svgrepo-com.svg";
import { ReactComponent as IconO } from "../../assets/circle-outline-svgrepo-com.svg";
import { ModalContext } from "../../context/ModalContext";

function GameCell({ cellitem, index }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board)
    if (result) {
      roundComplete(result)
      handleModal(<RoundOverModal />)
    }
  };

  if (cellitem === "X") {
    return (
      <CellStyle>
        <IconX className="icons" />
      </CellStyle>
    );
  } else if (cellitem === "O") {
    return (
      <CellStyle>
        <IconO className="icons" />
      </CellStyle>
    );
  }
  return <CellStyle onClick={cellClickHandler}></CellStyle>;
}

export default GameCell;
