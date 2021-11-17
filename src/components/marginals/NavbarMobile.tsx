import React, {useState} from 'react';

// Libraries
import styled from 'styled-components';
import {Link} from 'gatsby';
import {useTransition, animated} from 'react-spring';

// Components
import Container from '../shared/layout/Container';
import {H3, H2, HamburgerMenu, ThemeToggle} from '..';

// Assets
import {Z_INDICES} from '../../theming';
import {LinkObject} from './Navbar';

const OverlayContainer = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: fixed;
  top: 0px;
  left: 0px;

  background: var(--color-background-primary);
  transition: var(--transition);
  z-index: ${Z_INDICES.titlebar};
`;

const OverlayNavContainer = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1.5rem;
`;

const OverlayControlsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  margin-right: 1.5rem;
  margin-bottom: 3rem;
`;

const PrimeContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 80px;

  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${Z_INDICES.titlebar + 1};
`;

const NavContainer = styled(Container)<{showBg: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background: ${({showBg}) =>
    showBg ? 'var(--color-background-primary)' : 'transparent'};
`;

const NavItem = styled(H2)<{isActive: boolean}>`
  width: 100%;
  text-align: right;
  padding: 0px 0.7rem;
  color: ${({isActive}) =>
    isActive ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'};
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

export interface NavbarMobileProps {
  navItems: LinkObject[];
  isBackgroundVisible: boolean;
  activeTab: null | string;
  toggleActiveTab: (id: string) => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  navItems,
  activeTab,
  toggleActiveTab,
  isBackgroundVisible,
}) => {
  const [showMenu, setShowMenuOpen] = useState(false);
  const [showTabs, setShowTabs] = useState<[] | LinkObject[]>([]);

  const overlayTransition = useTransition(showMenu, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {duration: 100},
  });

  const tabsTransition = useTransition(showTabs, {
    from: {marginRight: '-100%'},
    enter: item => next => next({marginRight: '0%', delay: item.delay}),
    leave: {marginRight: '-100%'},
  });

  const hamMenuClick = () => {
    if (!showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    setShowMenuOpen(c => !c);
    setShowTabs(c => (c.length ? [] : navItems));
  };

  return (
    <>
      <PrimeContainer>
        <NavContainer showBg={isBackgroundVisible}>
          <H3>Ritesh Patil</H3>

          <HamburgerMenu onClick={hamMenuClick} open={showMenu} />
        </NavContainer>
      </PrimeContainer>

      {overlayTransition(
        (style, item) =>
          item && (
            <OverlayContainer style={style}>
              <OverlayNavContainer>
                {tabsTransition(
                  (tabStyle, tabItem) =>
                    tabItem && (
                      <animated.div key={tabItem.id} style={tabStyle}>
                        <NavLink
                          to={tabItem.link}
                          onClick={() => toggleActiveTab(tabItem.id)}
                        >
                          <NavItem isActive={activeTab === tabItem.id}>
                            {tabItem.name}
                          </NavItem>
                        </NavLink>
                      </animated.div>
                    ),
                )}
                <OverlayControlsContainer>
                  <ThemeToggle />
                </OverlayControlsContainer>
              </OverlayNavContainer>
            </OverlayContainer>
          ),
      )}
    </>
  );
};

export default NavbarMobile;