import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}