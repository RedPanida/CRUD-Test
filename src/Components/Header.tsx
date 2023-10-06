import {FC} from 'react'

import {Typography} from 'antd'

const {Title} = Typography

const Header:(FC) = () => {
  return (
    <header>
      <Title style={{backgroundColor:'#2471A3', color:'white', padding: 20}}>
        Test CRUD Atoll Log </Title>
    </header>
  )
}

export default Header
