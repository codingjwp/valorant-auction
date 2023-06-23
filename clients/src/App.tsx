import Routers from "./Routers"
import { io } from 'socket.io-client'

export const socket = io('http://localhost:8000/auction')

const App = () => {
  return <Routers />
}

export default App;
