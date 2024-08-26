import React, { BaseSyntheticEvent } from 'react'

import { ReactComponent as LogoIcon } from 'src/assets/logo.svg'
import { ReactComponent as SearchIcon } from 'src/assets/search.svg'

import { IconType } from 'src/types/enums'

const icons = {
  [IconType.logo]: LogoIcon,
  [IconType.search]: SearchIcon,
}

interface IconProps {
  className?: string
  onClick?: (e: BaseSyntheticEvent) => void
  color?: string
  id?: string
}

export function getIcon(type: IconType): React.FC<IconProps> {
  return icons[type] as React.FC<IconProps>
}
