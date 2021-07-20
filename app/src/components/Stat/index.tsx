import React from 'react'

import {StatBody} from "./index.styles"

interface Props {
  content: string;
}

const Stat: React.FC<Props> = ({content}) => {
  return (
    <StatBody>
      {content}
    </StatBody>
  )
}

export default Stat
