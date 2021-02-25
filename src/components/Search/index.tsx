import React from 'react'

import {InputBox} from "./index.styles"

interface Props{
  watermark?: string
}

const Search: React.FC<Props> = ({watermark}) => {
  return (
    <InputBox placeholder={watermark}>
      
    </InputBox>
  )
}

export default Search
