import { Board } from "./components/Board"

export const App = () => {

  return (
    <main>
      <Board initialBoard={Array(9).fill(null)} />
    </main>
  )
}
