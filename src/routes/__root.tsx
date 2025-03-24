import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ReactLenis } from "lenis/react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <ReactLenis root>
        <Outlet />
      </ReactLenis>
    </React.Fragment>
  );
}
