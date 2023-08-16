'use client'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useState, useEffect } from 'react';


function TwitterTimeLine({ twitterHandle, height, width }) {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [theme, setTheme] = useState(null); 
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);


  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobileScreen(true);
    }
  }, []);

  return (
    <div className=''>
      {theme && mobileScreen ? 
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={twitterHandle}
        options={{ height: height, width: width ? width : '375px'}}
        theme={theme}
      />
      : null }
      {theme && !mobileScreen ? 
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={twitterHandle}
        options={{ height: height, width: width ? width : '600px'}}
        theme={theme}
        />
      : null }
    </div>
  );
}

export default TwitterTimeLine;