import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const theme = {
  // colors
  // sizes
  // shadows
};

const GlobalStyle = createGlobalStyle`
  /* font imports */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    /* Font */
  }
`;

/**
 * page component that renders out children within the `pages` directory
 * @since v1.0.0
 */
const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Meta />
    <main>
      <>{children}</>
    </main>
  </ThemeProvider>
);

Page.propTypes = propTypes;

export default Page;
