import * as React from "react";
import { DevTool } from "@hookform/devtools";
import { IForm } from "../inteface";

export const Form: React.FC<IForm> = React.memo(
  ({ children, handleSubmit, control, onSubmit }) => {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          {children}
          <button type="submit">Click</button>
        </form>
        <DevTool control={control} />
      </>
    );
  }
);
