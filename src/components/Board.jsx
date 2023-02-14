import React, { useState } from "react";
import { boardDefault } from "../logic/Words";
import Square from "./Square";

function Board() {
  return (
    <div className="dark:bg-gray-900 px-10 py-5 rounded-md">
      <div className="flex">
        <Square letterPos={0} attemptVal={0} />
        <Square letterPos={1} attemptVal={0} />
        <Square letterPos={2} attemptVal={0} />
        <Square letterPos={3} attemptVal={0} />
        <Square letterPos={4} attemptVal={0} />
      </div>
      <div className="flex">
        <Square letterPos={0} attemptVal={1} />
        <Square letterPos={1} attemptVal={1} />
        <Square letterPos={2} attemptVal={1} />
        <Square letterPos={3} attemptVal={1} />
        <Square letterPos={4} attemptVal={1} />
      </div>
      <div className="flex">
        <Square letterPos={0} attemptVal={2} />
        <Square letterPos={1} attemptVal={2} />
        <Square letterPos={2} attemptVal={2} />
        <Square letterPos={3} attemptVal={2} />
        <Square letterPos={4} attemptVal={2} />
      </div>
      <div className="flex">
        <Square letterPos={0} attemptVal={3} />
        <Square letterPos={1} attemptVal={3} />
        <Square letterPos={2} attemptVal={3} />
        <Square letterPos={3} attemptVal={3} />
        <Square letterPos={4} attemptVal={3} />
      </div>
      <div className="flex">
        <Square letterPos={0} attemptVal={4} />
        <Square letterPos={1} attemptVal={4} />
        <Square letterPos={2} attemptVal={4} />
        <Square letterPos={3} attemptVal={4} />
        <Square letterPos={4} attemptVal={4} />
      </div>
      <div className="flex">
        <Square letterPos={0} attemptVal={5} />
        <Square letterPos={1} attemptVal={5} />
        <Square letterPos={2} attemptVal={5} />
        <Square letterPos={3} attemptVal={5} />
        <Square letterPos={4} attemptVal={5} />
      </div>
    </div>
  );
}

export default Board;
