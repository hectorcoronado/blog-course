import React from 'react'
import {Link} from 'gatsby'

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">home</Link>
        </nav>  
      </header>
      <main>{children}</main>
      <footer>
        <p>a footer</p>  
      </footer>
    </div>
  )
}

export default Layout