import React from 'react';
import styled from 'styled-components';


const UnstyledContact = ({ className }) => (
    <div className={className}>
        <div className="header">🤙🏼 Drop me a line</div>
        <div className="body">
            You can reach me at <a target="_blank" rel="noreferrer" href="mailto: salinawu1029@gmail.com">salinawu1029@gmail.com</a>
        </div>
    </div>
);

const Contact = styled(UnstyledContact)`
`;

export default Contact;
  