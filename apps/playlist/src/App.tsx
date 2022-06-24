import React from "react";
import { AppShell } from "ui";

import { PlaylistContent } from "playlist-content";
//@ts-ignore
import MoviesContent from "movies/Movies";

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
