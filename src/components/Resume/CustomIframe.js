import React, { useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const CustomIframe = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <Iframe {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </Iframe>
  );
};

const Iframe = styled.iframe`
  width: auto;
  height: 75%;
  background-color: white;
`;

export default CustomIframe;
