import React from 'react';

import { 
  Container, 
  Retweeted, 
  RocketseatIcon, 
  Body, 
  Avatar, 
  Content, 
  Header, 
  Dot, 
  Description, 
  ImageContent, 
  Icons, 
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Voce retweetou
      </Retweeted>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de junho</time>
          </Header>

          <Description>
            foguete Nao tem re
          </Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              12
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
