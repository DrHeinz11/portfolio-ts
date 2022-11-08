import { FC } from 'react';
const HamburgerClose: FC = (props) => (

  <svg className="absolute right-6 top-6" {...props} width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 25.6482L25 1.64824" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 2.31371L25 26.3137" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

export default HamburgerClose;
