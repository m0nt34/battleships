import { create } from "zustand";

export const useShips = create((set) => ({
  ships: [
    {
      ships: [
        {
          id: "4u",
          shipLength: 4,
          horizontal: true,
          inGame: false,
          left: -1,
          top: -1,
        },
      ],
    },
    {
      ships: [
        {
          id: "3u-1",
          shipLength: 3,
          horizontal: true,
          inGame: false,
          left: -1,
          top: -1,
        },
        {
          id: "3u-2",
          shipLength: 3,
          horizontal: true,
          inGame: false,
          left: -1,
          top: -1,
        },
      ],
    },
    {
      ships: [
        {
          id: "2u-1",
          shipLength: 2,
          horizontal: true,
          inGame: false,
          left: -1,
          top: -1,
        },
        {
          id: "2u-2",
          shipLength: 2,
          horizontal: true,
          inGame: false,
          left: -1,
          top: -1,
        },
        {
          id: "2u-3",
          shipLength: 2,
          horizontal: true,
          inGame: false,
          left: -1,
          top: -1,
        },
      ],
    },
    {
      ships: [
        {
          id: "1u-1",
          shipLength: 1,
          horizontal: true,
          inGame: false,
          left: -1,
          top: -1,
        },
        {
          id: "1u-2",
          shipLength: 1,
          horizontal: true,
          inGame: false,
          left: -1,
          top: -1,
        },
        {
          id: "1u-3",
          shipLength: 1,
          horizontal: true,
          inGame: false,
          left: -1,
          top: -1,
        },
        {
          id: "1u-4",
          shipLength: 1,
          horizontal: true,
          inGame: false,
          left: -1,
          top: -1,
        },
      ],
    },
  ],
  setToDefault: () =>
    set({
      ships: [
        {
          ships: [
            {
              id: "4u",
              shipLength: 4,
              horizontal: true,
              inGame: false,
              left: -1,
              top: -1,
            },
          ],
        },
        {
          ships: [
            {
              id: "3u-1",
              shipLength: 3,
              horizontal: true,
              inGame: false,
              left: -1,
              top: -1,
            },
            {
              id: "3u-2",
              shipLength: 3,
              horizontal: true,
              inGame: false,
              left: -1,
              top: -1,
            },
          ],
        },
        {
          ships: [
            {
              id: "2u-1",
              shipLength: 2,
              horizontal: true,
              inGame: false,
              left: -1,
              top: -1,
            },
            {
              id: "2u-2",
              shipLength: 2,
              horizontal: true,
              inGame: false,
              left: -1,
              top: -1,
            },
            {
              id: "2u-3",
              shipLength: 2,
              horizontal: true,
              inGame: false,
              left: -1,
              top: -1,
            },
          ],
        },
        {
          ships: [
            {
              id: "1u-1",
              shipLength: 1,
              horizontal: true,
              inGame: false,
              left: -1,
              top: -1,
            },
            {
              id: "1u-2",
              shipLength: 1,
              horizontal: true,
              inGame: false,
              left: -1,
              top: -1,
            },
            {
              id: "1u-3",
              shipLength: 1,
              horizontal: true,
              inGame: false,
              left: -1,
              top: -1,
            },
            {
              id: "1u-4",
              shipLength: 1,
              horizontal: true,
              inGame: false,
              left: -1,
              top: -1,
            },
          ],
        },
      ],
    }),

  updateNestedShipById: (id, updatedProperties) =>
    set((state) => ({
      ships: state.ships.map((group) => ({
        ...group,
        ships: group.ships.map((ship) =>
          ship.id === id ? { ...ship, ...updatedProperties } : ship
        ),
      })),
    })),
}));
