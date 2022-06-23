import React from "react";
import { AppShell } from "ui";

function App() {
  return (
    <AppShell
      colorScheme="light"
      title="Movies"
      routes={[
        {
          path: "/",
          element: () => <div>Home</div>,
        },
        {
          path: "/playlist",
          element: () => <div>Playlist</div>,
        },
      ]}
      navLinks={[
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Playlist",
          path: "/playlist",
        },
      ]}
    />
  );
}

export default App;
