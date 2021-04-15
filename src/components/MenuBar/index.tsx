import React from 'react';
import Button from'../Button';

import { 
  Container, 
  Topside, 
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Pagina Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificacao</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagem</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>

      </Topside>

      <BotSide>
        <Avatar />

        <ProfileData>
          <strong>
            Guilherme Henrique
          </strong>
          <span>
            @guilherme40901.mp3
          </span>
        </ProfileData>
        
        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
