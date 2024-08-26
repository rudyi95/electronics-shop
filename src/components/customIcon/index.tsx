import React from "react";

import { IconType } from "src/types/enums";
import { getIcon } from "src/utils/helpers/customIcon";

declare interface IconProps {
  className?: string;
  type: IconType;
  id?: string;
  color?: string;
}

export const CustomIcon: React.FC<IconProps> = ({ className, type, id, color }) => {
  const Icon = getIcon(type);

  return <Icon id={id} className={className} color={color} />;
};
