import { Router } from "components";

import { Store } from "./Store";
import { Theme } from "./Theme";

function App() {
  return (
    <Store>
      <Theme>
        <Router />
      </Theme>
    </Store>
  );
}

export default App;
