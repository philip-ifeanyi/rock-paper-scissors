import { createRoot } from 'react-dom/client' 
import App from "./App"

const rootElememt = document.getElementById("root");
const root = createRoot(rootElememt)


root.render(
  <App />
)