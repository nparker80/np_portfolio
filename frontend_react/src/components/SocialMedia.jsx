import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/nparker80" target="_blank">
        <BsGithub /></a>
    </div>

    <div>
      <a href="https://www.linkedin.com/in/najlaparker/" target="_blank">
        <BsLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;