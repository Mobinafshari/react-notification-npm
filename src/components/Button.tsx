import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode
}
function Button({children} : Props) {
  return (
    <button>{children}</button>
  )
}

export default Button