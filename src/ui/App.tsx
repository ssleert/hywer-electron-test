import { ref } from "hywer"
import css from "./App.module.less"

const App = () => {
  const count = ref(0)
  const doubleCount = count.derive(val => val * 2)

  return <>
    🧡 {doubleCount}
    <button class={css.ButtonRed} onClick={() => count.val++}>👍</button>
    <button onClick={() => count.val--}>👎</button>
  </>
}

export default App;
