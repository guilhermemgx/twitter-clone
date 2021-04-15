import React from 'react';
import StickyBox from 'react-sticky-box'

import FollowSuggestion from '../FollowSuggestion'

import News from '../News'

import List from '../List'

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body

} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
      <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez voce curta"
            elements={[
              <FollowSuggestion 
              name="Juaum Moscatelli"
              nickname="@jaummoscatelli"
              />,
              <FollowSuggestion 
                name="Gabriel Queiroz"
                nickname="@didelgamer"
                />,
                <FollowSuggestion 
                name="Nader Sirio"
                nickname="@jaummoscatelli"
                />
              ]}
              />
          <List
            title="Talvez voce curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
            />
          <List
            title="Talvez voce curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
            />
          <List
            title="Talvez voce curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
            />
          <List
            title="Talvez voce curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
            />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
