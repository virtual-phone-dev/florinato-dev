import { BrowserRouter, Route, Routes } from "react-router-dom";
import VirtualPhone from "./VirtualPhone/VirtualPhone";
//import Control from "./Control/Control";
//import Cool from "./cool";

import "./utils.css";
import "./darkmode.css";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<VirtualPhone />} />
          <Route path="/" element={<VirtualPhone />} />
          <Route path="/oui" element={<VirtualPhone />} />
		  <Route path="/profile" element={<VirtualPhone />} />
		  {/* <Route path="/profile/:id" element={<VirtualPhone />} /> */}
          {/* <Route path="/control" element={<Control />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
