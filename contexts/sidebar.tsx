"use client";

import { createContext, PropsWithChildren, useCallback, useContext } from "react";
import { useCookies } from "next-client-cookies";

const SIDEBAR_COOKIE_NAME = "sidebar";

export enum SidebarStatus {
  Open = "open",
  Closed = "closed",
}

const SidebarContext = createContext(SidebarStatus.Closed);
const SetSidebarContext = createContext<(newStatus: SidebarStatus) => void>(() => {});

export const useSidebarStatus = () => useContext(SidebarContext);
export const useSetSidebarStatus = () => useContext(SetSidebarContext);

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const cookies = useCookies();

  const sidebarStatus = cookies.get(SIDEBAR_COOKIE_NAME) ?? (SidebarStatus.Open as SidebarStatus);
  const setSidebarStatus = useCallback(
    (newStatus: SidebarStatus) => {
      cookies.set(SIDEBAR_COOKIE_NAME, newStatus);
    },
    [cookies]
  );

  return (
    <SidebarContext.Provider value={sidebarStatus}>
      <SetSidebarContext.Provider value={setSidebarStatus}>{children}</SetSidebarContext.Provider>
    </SidebarContext.Provider>
  );
};
