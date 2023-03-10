import styled from '@emotion/styled';

export const Sidebar = styled('aside')`
  width: 224px;
  border-right: 1px solid #ede7f3;
  height: 100vh;
  overflow: auto;
  position: fixed;
  position: -webkit-sticky;
  position: -moz-sticky;
  top: 80px;

  background: ${(props) => props.theme.colors.background};

  .rightSideTitle {
    font-size: 10px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    padding: 7px 24px 7px 16px;
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);

    color: ${(props) => props.theme.colors.text};
  }

  .rightSideBarUL {
  }

  .rightSideBarUL li {
    list-style-type: none;
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);
  }

  .rightSideBarUL li a {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    padding: 7px 24px 7px 16px;

    color: ${(props) => props.theme.colors.text};
  }
  @media only screen and (min-width: 1023px) and (max-width: 1199px) {
    width: 182px;
    right: 0px;
  }

  @media only screen and (max-width: 50rem) {
    /* width: 100%; */
    width: 160px;
    right: 0px;

    /* position: sticky; */
    /* position: fixed; */
  }
`;

export const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props}>
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${(props) => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #1ed3c6 !important;
    }

    ${(props) =>
      props.active &&
      `
      color: #1ED3C6;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;
