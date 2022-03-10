import React from "react";
import { Heading } from "../../shared";

export const Header = ({}) => (
  <div className="header bg-primary-400 h-8">
    <div className="container mx-auto justify-between flex">
      <Heading className="font-bold text-xl text-white">
        Splitwise Clone
      </Heading>
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <button>Dark</button>
        </div>
      </div>
    </div>
  </div>
);
