import React from "react";
import { AppShell } from "ui";

import { PlaylistContent } from "playlist-content";
import { MoviesContent } from "movies-content";

function App() {
  return (
    <AppShell
      colorScheme="dark"
      title="Playlist"
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
