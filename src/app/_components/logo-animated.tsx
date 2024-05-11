"use client";

import React from "react";

export default function LogoAnimated({ type }: { type: "navbar" | "hero" }) {
  if (type === "navbar") {
    return (
      <div className="react-logo-container-nav m-auto flex items-center justify-center">
        <span className="react-logo-nav  absolute inline-block flex flex items-center justify-center justify-center before:absolute before:items-center before:justify-center after:absolute after:items-center after:justify-center">
          <span className="nucleo-nav flex items-center justify-center rounded-full"></span>
        </span>
      </div>
    );
  } else {
    return (
      <>
        <div className="react-logo-container m-auto flex items-center justify-center">
          <span className="react-logo  absolute inline-block flex flex items-center justify-center justify-center before:absolute before:items-center before:justify-center after:absolute after:items-center after:justify-center">
            <span className="nucleo flex items-center justify-center rounded-full"></span>
          </span>
        </div>
      </>
    );
  }
}
