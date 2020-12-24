import React from 'react';
import styled from 'styled-components';


const UnstyledContact = ({ className }) => (
    <div className={className}>
        <div className="header">🤙🏼 Drop me a line</div>
        <div className="description">
            Reach out to me at <a target="_blank" href="mailto: salinawu1029@gmail.com">salinawu1029@gmail.com</a>
        </div>
    </div>
);

const Contact = styled(UnstyledContact)`
    .header {
        font-size: 32px;
    }

    .description {
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 16px;
    }
`;

export default Contact;
  