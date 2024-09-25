import { createContext } from "react";
import { ContentItem } from "./contentItemStore";

interface Store {
  contentItemsStore: ContentItem[];
}

export const store: Store = {
  contentItemsStore: [
    {
      id: "1",
      title: "TopDown",
      urlTrailar: "./videos/Codrin Bradea Game Teaser.mp4",
      urlPlay: "https://unknowngames-public.itch.io/hotline-oradea-betia",
      tags: ["Shooter", "Low Poly", "Lvl Base", "Windows", "Indie"],
      relased: true,
    },
    {
      id: "2",
      title: "MoveTheSquare",
      urlTrailar: "./videos/MovetheSquare.mp4",
      urlPlay:
        "https://play.google.com/store/apps/details?id=com.UnknownGames.MoveTheSquare",
      tags: ["Mobile", "Indie", "Arcade", "Android", "IOS"],
      relased: true,
    },
    {
      id: "3",
      title: "Survive",
      urlTrailar: "./videos/Survive.mp4",
      urlPlay: "https://unknowngames-public.itch.io/hotline-oradea-betia",
      tags: ["Shooter", "Low Poly", "Lvl Base", "Windows", "Indie", "RogLike"],
      relased: false,
    },
  ],
};

export const StoreContext = createContext(store);

export function useStore() {
  return store;
}
