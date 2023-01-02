import { useCallback, useEffect, useState } from "react";
import {
  Container,
  Content,
  Game,
  GameButton,
  GameMenu,
} from "../styles/index-styles";

type Players = "O" | "X";

type Marks = {
  [key: string]: Players;
};

export default function Index() {
  const [turn, setTurn] = useState<Players>("O");
  const [winner, setWinner] = useState<Players | null>(null);
  const [draw, setDraw] = useState<boolean | null>(null);
  const [marks, setMarks] = useState<Marks>({});

  function handlePlay(index: number) {
    if (marks[index] || winner) {
      return;
    }

    setMarks({ ...marks, [index]: turn });
    setTurn((prev) => (prev === "O" ? "X" : "O"));
  }

  const handleWinner = useCallback(() => {
    const victoryLines = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonais
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of victoryLines) {
      const [a, b, c] = line;

      if (marks[a] && marks[a] === marks[b] && marks[a] === marks[c]) {
        return marks[a];
      }
    }
  }, [marks]);

  function handleReset() {
    setMarks({});
    setWinner(null);
    setDraw(null);
  }

  useEffect(() => {
    const winner = handleWinner();

    if (winner) {
      setWinner(winner);
    } else if (Object.keys(marks).length === 9) {
      setDraw(true);
    }
  }, [handleWinner, marks]);

  return (
    <Container>
      <Content>
        <GameMenu>
          {winner && <h1>{winner} ganhou!</h1>}
          {draw && <h1>Deu velha!</h1>}
          {!winner && !draw ? (
            <h1>É a vez de {turn}</h1>
          ) : (
            <button onClick={() => handleReset()}>Jogar novamente</button>
          )}
        </GameMenu>
        <Game>
          {new Array(9).fill(true).map((_, i) => (
            <GameButton key={i} onClick={() => handlePlay(i)}>
              {marks[i]}
            </GameButton>
          ))}
        </Game>
      </Content>
    </Container>
  );
}
