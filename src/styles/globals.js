/* eslint-disable no-unused-expressions */

import { injectGlobal } from 'react-emotion';
import normalize from './normalize';
import styles from './styles';

injectGlobal`
  ${normalize}
  ${styles}
`;
