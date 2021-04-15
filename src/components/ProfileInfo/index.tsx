import React from 'react';

import { Container, Banner, Followage,CakeIcon, LocationIcon, EditButton, ProfileData, Avatar } from './styles';
import Feed from '../Feed'

const ProfileInfo: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton >Editar perfil</EditButton> 

          <h1>Guilherme Henrique</h1>
          <h2>@guilherme49801.mp3</h2>

          <p>
            Developer at <a href="#">teste</a>
          </p>
          <ul>
            <li>
              <LocationIcon />
              Formosa, Goias
            </li>
            <li>
              <CakeIcon />
              Nascido em 10/05/2002
            </li>
          </ul>
          <Followage>
            <span>
              seguido <strong>94</strong>
            </span>
            <span>
              <strong>672 </strong> seguidores
            </span>
          </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfileInfo;
