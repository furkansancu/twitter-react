import React from 'react'

import FeedPage from '../../templates/FeedPage/FeedPage';
import VerifiedCheck from '../../atoms/VerifiedCheck/VerifiedCheck';

export default function Home(props) {
  return (<FeedPage
    user={props.user}
    >
      home
    </FeedPage>)
}