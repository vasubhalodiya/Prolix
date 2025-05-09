
import { Provider } from "react-redux";
import { setupStore } from "./store";

const store = setupStore();

export const Providers = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}