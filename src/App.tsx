import RootApp from "./routes/RootApp";
import store from "./redux";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../src/utils/prototype";

export default function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <div>
        <RootApp />
      </div>
    </Provider>
  );
}
