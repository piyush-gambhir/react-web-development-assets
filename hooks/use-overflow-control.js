import React from "react";

export function useOverflowControl(showMenu) {
  React.useEffect(() => {
    if (document.body) {
      document.body.classList.toggle("overflow-hidden", showMenu);
    }
  }, [showMenu]);
}
