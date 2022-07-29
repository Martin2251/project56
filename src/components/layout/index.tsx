import React, { Children } from 'react'
import { FC } from 'react'
import NavBar from '../NavBar';
import {LayoutWrapper} from "./layout.style"

interface Props {
    children?: React.ReactNode;
}

const Layout: React.FC<Props>  = ({children}) => {
  return (
    <div>
    <LayoutWrapper>
        <NavBar  />
    <main>{children}</main>

    </LayoutWrapper>

    </div>
  )
}

export default Layout