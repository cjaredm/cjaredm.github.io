import React from 'react';
import movieClapper from '../../assets/images/movie-clapper.jpg';
import screenshots from '../../assets/images/portfolio/intheaters/index';
import { PortfolioPage } from '../../components/PortfolioPage';

const InTheatersSoon = props => {
  return (
    <PortfolioPage
      helmetProps={{
        title: 'InTheatersSoon',
        description: 'Description of building InTheatersSoon',
      }}
      heroProps={{
        img: movieClapper,
        title: 'InTheatersSoon',
        content: `This has been my catch all learning app. Whenever I need to 
        test out learning a new library or tech I've tried throwing it in here. 
        Redux, Unstated, React-Native, Firebase... and on and on. I refactor 
        this code and see what happens.`,
      }}
      screenshots={screenshots}
      codeLink="https://github.com/cjaredm/InTheatersSoon"
      techs={['reactjs', 'reactnative', 'github']}
      what={
        <>
          <p>Very simple iPhone app that started as one thing: Show ONLY upcoming movie trailers. It does this with an infinite scroll, requesting the next page of movies as you approach the end of the current list.</p>
          <p>You tap the poster (that shows the name and release date) and it opens up a WebView for a YouTube movie trailer. All the information is retrieved from the free TheMovieDataBase API.</p>
          <p>Later I added in routing and accounts saved in Firebase to keep track of saved movies to be notified when they are released. That's as fancy as I had gotten. </p>
        </>
      }
    />
  );
};

export default InTheatersSoon;
