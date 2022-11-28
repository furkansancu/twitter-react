import React from 'react'

import FeedPage from '../../templates/FeedPage/FeedPage';
import FeedHeader from '../../molecules/FeedHeader/FeedHeader';
import PostTweet from '../../molecules/PostTweet/PostTweet';

export default function Home(props) {
  const ScrollTop = () => {}

  return (<FeedPage
    user={props.user}
    >
      <FeedHeader
        onClick={ScrollTop}
        leftTitle="Home"
        rightButtons={[{ icon: "Explore", onClick: () => {}, mr: -8 }]}
        />
      <PostTweet user={props.user} />
    </FeedPage>)
}