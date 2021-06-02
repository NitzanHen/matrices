import React from "react";
import { BaseComponentProps } from "../../types";

export const Plus: React.VFC<BaseComponentProps> = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24">
    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
);
