import React, { useEffect, useState, useMemo, Fragment } from "react";
import { useHistory } from "react-router-dom";
import qs from "qs";

import { getIdsOfTopStories, getStoryById } from "api/news";
import { useAsyncMemo } from "common/customHooks/useAsyncMemo";
import NewsList from "./newsList";

export interface IStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

const NewsPage = () => {
  const [changedPage, setChangedPage] = useState(0);
  const history = useHistory();
  const [changedStories, setChangedStories] = useState<IStory[]>([]);
  const [storyIds] = useAsyncMemo<string[]>(
    async () => getIdsOfTopStories(),
    [changedPage],
    []
  );

  useEffect(() => {
    const { location } = history;
    const { search } = location;
    const searchData = search.slice(1);
    const { p } = qs.parse(searchData);

    if (p) {
      setChangedPage(+p);
    }
  }, [history]);

  useEffect(() => {
    const stringifyFilters = qs.stringify({
      p: changedPage,
    });
    history.push({
      pathname: "/news",
      search: `${stringifyFilters}`,
    });
  }, [changedPage, history]);

  const changedIdsOfPage = useMemo(() => {
    const { data } = storyIds;
    const firstElementIndex = changedPage * 30;
    const lastElementIndex = (changedPage + 1) * 30;
    const changedIds = data.slice(firstElementIndex, lastElementIndex);

    return changedIds;
  }, [changedPage, storyIds]);

  const getStoriesHandler = async () => {
    const getStoriesPromises = changedIdsOfPage.map((elem) =>
      getStoryById(elem)
    );
    const changedStoriesData = await Promise.all(getStoriesPromises);
    setChangedStories(changedStoriesData);
  };

  useEffect(() => {
    getStoriesHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changedIdsOfPage]);

  return (
    <Fragment>
      <NewsList
        changedStories={changedStories}
        changedPage={changedPage}
        setChangedPage={setChangedPage}
      />
    </Fragment>
  );
};

export default NewsPage;
