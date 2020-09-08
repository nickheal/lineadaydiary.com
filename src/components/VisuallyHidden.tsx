import React, { forwardRef } from "react";

const VisuallyHidden = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(function VisuallyHidden(props, ref) {
  return (
    <span
      ref={ref}
      style={{
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
        wordWrap: "normal",
      }}
      {...props}
    />
  );
});

export default VisuallyHidden;
