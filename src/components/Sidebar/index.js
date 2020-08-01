import React from 'react';
import HelperIcon from '../HelperIcon';
import { Container, MenuIcon, SocialLinks, UsefulLinks } from './styles';

function Sidebar() {
  const SocialIconStyle = {
    width: '25px',
    margin: '5px auto',
    display:'block',
    cursor: 'pointer',
  }
  const UsefulIconStyle = {
    width: '25px',
    margin: '5px auto',
    display:'block',
    cursor: 'pointer',
  }
  return (
    <Container>
      <MenuIcon src={process.env.PUBLIC_URL + 'img/menu.png'} />
      <SocialLinks>
        <HelperIcon
          pathName={process.env.PUBLIC_URL + 'img/fb.png'}
          style={SocialIconStyle}
          alt={'Facebook'}
          title={'Facebook'}
        />
        <HelperIcon
          pathName={process.env.PUBLIC_URL + 'img/ig.png'}
          style={SocialIconStyle}
          alt={'Instagram'}
          title={'instagram'}
        />
        <HelperIcon
          pathName={process.env.PUBLIC_URL + 'img/tw.png'}
          style={SocialIconStyle}
          alt={'Twitter'}
          title={'Twitter'}
        />
      </SocialLinks>
      <UsefulLinks>
        <HelperIcon
          pathName={process.env.PUBLIC_URL + 'img/share.png'}
          style={UsefulIconStyle}
          alt={'Compartilhar'}
          title={'Compartilhar'}
        />
        <HelperIcon
          pathName={process.env.PUBLIC_URL + 'img/info.png'}
          style={UsefulIconStyle}
          alt={'Informações'}
          title={'Informações'}
        />
      </UsefulLinks>
    </Container>
  );
}

export default Sidebar;