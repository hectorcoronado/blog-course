/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'

const bodyStyles = {
  mx: `2rem`,
  padding: `1rem`
}

const headerStyles = {
  paddingLeft: `10px`,
}

const mainStyles = {
  maxWidth: `container`,
  padding: `1rem`,
  mx: `auto`,
}

const footerStyles = {
  background: `lightgrey`,
}

const Layout = ({children}) => {
  return (
    <div sx={bodyStyles}>
      <header sx={headerStyles}>
        <nav>
          <Link to="/">home</Link>
        </nav>  
      </header>
      <main sx={mainStyles}>
        {children}
      </main>
      <footer sx={footerStyles}>
        <p>a footer</p>  
      </footer>
    </div>
  )
}

export default Layout