"use client";

import { createContext, useContext } from "react";

export type LandingActions = {
  /** Opens mobile drawer and flashes the sidebar on desktop */
  focusSidebar: () => void;
  /** Scrolls to a curriculum section so the left nav scroll-spy updates */
  demoScrollSpy: () => void;
};

const LandingActionsContext = createContext<LandingActions | null>(null);

export function useLandingActions(): LandingActions {
  const ctx = useContext(LandingActionsContext);
  if (!ctx) {
    throw new Error("useLandingActions must be used inside LandingExperience");
  }
  return ctx;
}

export const LandingActionsProvider = LandingActionsContext.Provider;
