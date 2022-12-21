import * as React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql, Link } from 'gatsby';
import GitHubButton from 'react-github-btn';
// import Link from './link';
import Loadable from 'react-loadable';

import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import { DarkModeSwitch } from './DarkModeSwitch';
import Sidebar from './sidebar';
import { Button, Divider } from 'antd';
import SidebarLayout from './sidebar';
import Tree from './sidebar/tree.js';

// import SidebarLayout from './sidebar';
const help = require('./images/help.svg');
const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${(props) => (props.isDarkThemeActive ? '#001932' : undefined)};

  @media (max-width: 767px) {
    display: block;
  }
`;
const SideBarWidth = styled('div')`
  width: 100% !important;
  height: 80px !important;
  /* display: flex;
  align-items: center; */
`;
const WrapLinkApi = styled('li')`
  @media (max-width: 767px) {
    display: none;
  }
`;
const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      const logoImg = require('./images/logo.svg');

      const twitter = require('./images/twitter.svg');

      const discordBrandsBlock = require('./images/discord-brands-block.svg');

      const twitterBrandsBlock = require('./images/twitter-brands-block.svg');

      return (
        <div className={'navBarWrapper'}>
          <nav className={'navBarDefault'}>
            <div className={'navBarHeader'}>
              <Link to="http://localhost:8000/" className={'navBarBrand'}>
                <img
                  className={'img-responsive displayInline'}
                  src="https://www.docs.computervision.com.vn/static/logo-cvs-8d7e167d315ede0146bebe3e494a5898.svg"
                  alt={'logo'}
                />
              </Link>
            </div>

            <div id="navbar" className={'topnav'}>
              <div className={'visibleMobile'}>
                <Sidebar location={location} />
                <hr />
              </div>
              <ul
                className={'navBarUL navBarNav navBarULRight'}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  height: '80px',
                  margin: '0px',
                }}
              >
                <WrapLinkApi>
                  <Link to="/api-v1">Api v1</Link>
                  <Link to="/api-v2">Api v2</Link>
                </WrapLinkApi>
                <li>
                  <Button type="danger" style={{ marginRight: '15px' }} className={'btnVi'}>
                    Vi
                  </Button>
                  <Button style={{ marginRight: '15px' }} className={'btnEn'}>
                    En
                  </Button>

                  {/* <DarkModeSwitch
                    isDarkThemeActive={isDarkThemeActive}
                    toggleActiveTheme={toggleActiveTheme}
                  /> */}
                </li>
              </ul>
            </div>
          </nav>
          <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
            <div className={'navBarDefault removePadd'}>
              <span
                onClick={myFunction}
                className={'navBarToggle'}
                onKeyDown={myFunction}
                role="button"
                tabIndex={0}
              >
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
              <div style={{ marginLeft: '15px' }}>
                <Link to="http://localhost:8000/" className={'navBarBrand'}>
                  <img
                    src="https://www.docs.computervision.com.vn/static/logo-cvs-8d7e167d315ede0146bebe3e494a5898.svg"
                    alt={'logo'}
                  />
                </Link>
              </div>
            </div>
          </StyledBgDiv>
        </div>
      );
    }}
  />
);

export default Header;
