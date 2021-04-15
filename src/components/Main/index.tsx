import React from 'react';
import ProfilePage from '../ProfileInfo'


import { 
  Container,
  BellIcon, 
  EmailIcon, 
  BottomMenu, 
  HomeIcon, 
  SearchIcon, 
  Header, 
  BackIcon, 
  ProfileInfo 
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Guilherme Henrique</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
