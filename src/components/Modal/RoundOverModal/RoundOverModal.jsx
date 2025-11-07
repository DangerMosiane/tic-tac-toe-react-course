import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../context/GameContext";
import { ModalContext } from "../../../context/ModalContext";

const RoundOverModal = () => {
  const { resetBoard, game } = useContext(GameContext);
  const { resetGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        <Title>
          {game.roundWinner
            ? `${game.roundWinner.name} Wins Round`
            : "Round Drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>Choices Will Be Switched Now</Subtitle>
        <Subtitle>
          {game.player1.name}: {game.player1.score}
        </Subtitle>
        <Subtitle>
          {game.player2.name}: {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </Button>
        <Button color="#8437f9" onClick={() => {resetGame(); handleModal() }}>Restart</Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
