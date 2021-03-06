import React from "react";
import { AppShell } from "ui";

import { MoviesContent } from "movies-content";
import { PlaylistContent } from "playlist-content";

function App() {
  return (
    <AppShell
      colorScheme="light"
      title="Movies"
      routes={[
        {
          path: "/",
          element: MoviesContent,
        },
        {
          path: "/playlist",
          element: PlaylistContent,
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
