import * as React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import config from '../../config.js';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};

  .sideBarUL li a {
    color: ${({ theme }) => theme.colors.text};
  }

  .sideBarUL .item > a:hover {
    background-color: #1ed3c6;
    color: #fff !important;

    /* background: #F8F8F8 */
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  margin: 80px 88px 0px 88px;
  padding-top: 3rem;
  background: ${({ theme }) => theme.colors.background};
  table {
    width: 100%;
    border-spacing: 0;
    display: block;
    border-collapse: collapse;
    overflow: auto;
  }
  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (min-width: 1023px) and (max-width: 1199px) {
    padding-left: 0;

    padding-top: 3rem;
    margin: 80px 88px 0px 88px;
    display: block;
    width: 500px;
  }
  @media only screen and (max-width: 739px) {
    margin: 0px;
  }
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    margin: 0px 10px;
    table {
      width: 100%;
      border-spacing: 0;
      display: block;
      border-collapse: collapse;
      overflow: auto;
    }

    /* 
    table {
      box-sizing: border-box;
      border-spacing: 0px;
      display: block;
      width: 100%;
      overflow: auto;
    } */
  }
`;

const MaxWidth = styled('div')`
  @media only screen and (max-width: 50rem) {
    display: block;
    width: 350px;
    margin: 80px 0px 0px 20px;
    position: relative;
  }
`;

const RightSideBarWidth = styled('div')`
  width: 224px;
`;

const LeftSideBarWidth = styled('div')`
  /* width: 224px; */
`;

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <LeftSideBarWidth className={'hiddenMobile'}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        {config.sidebar.title ? (
          <div
            className={'sidebarTitle sideBarShow'}
            dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
          />
        ) : null}
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className={'hiddenMobile'}>
          <RightSidebar location={location} />
        </RightSideBarWidth>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
