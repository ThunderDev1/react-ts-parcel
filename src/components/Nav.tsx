import * as React from 'react';
import {FunctionComponent, ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Navbar} from 'react-bulma-components';

const Nav: FunctionComponent<{}> = (): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <Navbar active={open} color="primary">
      <Navbar.Brand>
        <Navbar.Burger onClick={(): void => setOpen(!open)} />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          {/* Works fine */}
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
          {/* Property 'to' does not exist on type 'IntrinsicAttributes & NavbarItemProps & RefAttributes<any>'.ts(2322) */}
          <Navbar.Item renderAs={Link} className="navbar-item" to="/">
            Home
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

export default Nav;
