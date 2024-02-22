import { Board } from "./components/Board"

export const App = () => {

  return (
    <main className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <Board initialBoard={Array(9).fill(null)} />
    </main>
  )
}
