import React, { useState } from "react";
import { SeePhotoModal } from "./utils";


export default function Cool() {
  const [visible, setVisible] = useState(false);

  const photoURL = "https://ik.imagekit.io/florinato/florinato/Screenshot_20250413-023234_lgnxEQLK8.png"; // exemple

  return (
    <div>
      <button onClick={() => setVisible(true)}>Voir la photo</button>

      <SeePhotoModal visible={visible} onClose={() => setVisible(false)} url={photoURL} title="Chat mignon 🐱" />
    </div>
  );
}
