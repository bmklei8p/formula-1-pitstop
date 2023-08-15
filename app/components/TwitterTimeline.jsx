'use client'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useState, useEffect } from 'react';


function TwitterTimeLine({ twitterHandle, height, width }) {
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobileScreen(true);
    }
  }, []);

  console.log(mobileScreen)

  return (
    <div className=''>
      {mobileScreen ? 
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={twitterHandle}
        options={{ height: height, width: width ? width : '375px', theme: 'dark'}}
      />
      : null }
      {!mobileScreen ? 
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={twitterHandle}
        options={{ height: height, width: width ? width : '600px', theme: 'dark'}}
      />
      : null }
    </div>
  );
}

export default TwitterTimeLine;