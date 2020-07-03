import React from "react";
import moment from "moment";

import {
  MainContainer,
  NewsElement,
  InfoContainer,
  ControlsContainer,
  HideButton,
  MoreButton,
  StyledLink,
} from "./styles";
import { IStory } from "../";
import arrowIcon from "common/assets/header/arrow.gif";

interface IProps {
  changedStories: IStory[];
  changedPage: number;
  setChangedPage: (page: number) => void;
}

const NewsList = ({ changedStories, changedPage, setChangedPage }: IProps) => {
  return (
    <MainContainer>
      {changedStories.map((elem, key) => {
        const { by, descendants, id, score, title, url, time } = elem;

        return (
          <NewsElement key={id}>
            <InfoContainer>
              <p>{key + 1 + changedPage * 30}.</p>
              <img src={arrowIcon} alt={"arrow"} />
              <a href={url} target={"blanc"}>
                {title}
              </a>
            </InfoContainer>
            <ControlsContainer>
              <p>
                {score} points by {by} {moment.unix(time).fromNow()}
              </p>
              <HideButton>hide</HideButton>
              <StyledLink to={`/`}>{descendants} comments</StyledLink>
            </ControlsContainer>
          </NewsElement>
        );
      })}
      <MoreButton onClick={() => setChangedPage(changedPage + 1)}>
        More
      </MoreButton>
    </MainContainer>
  );
};

export default NewsList;
