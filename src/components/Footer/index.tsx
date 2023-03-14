import { memo } from 'react';

import './styles.css';

function Footer() {
  // eslint-disable-next-line no-undef
  const appVersion = process.env.REACT_APP_VERSION;

  return (
    <footer className='footer'>
      <p>Jotai powered state management examples</p>
      <span>{appVersion}</span>
    </footer>
  );
}

export default memo(Footer);
