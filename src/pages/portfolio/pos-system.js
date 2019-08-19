import React from 'react';
import { PortfolioPage } from '../../components/PortfolioPage';
import POSImg from '../../assets/images/POSsystem.png';

const POSSystem = props => (
  <PortfolioPage
    helmetProps={{
      title: 'POS System',
      description: 'Description of building POS System',
    }}
    heroProps={{
      img: POSImg,
      title: 'POS System',
      content: `Clothing resellers have had a hard time getting point of sale
      systems to work with their particular business model. They don't only
      sell clothing, they also buy it from their customers, and from other
      wholesalers. Consignment POS systems have traditionally been used but
      almost all stores misuse them or hack them into a mangled mess. This
      will solve all reseller POS problems. You're welcome!`,
    }}
    screenshots={[POSImg]}
    techs={[
      'reactjs',
      'reactnative',
      'apollo',
      'prisma',
      'graphql',
      'node',
      'github',
      'styledComponents',
    ]}
    what={
      <>
        <p>
          Resellers buy and sell with their customers and currently there is no
          efficient method that works with the business model. Some consignment
          POS systems work but only so much. They all fall short and are out of
          date.
        </p>
        <p>
          How do I know this? My neighbor owns over 9 clothing resell
          franchises. He has looked for years, tried multiple demos and
          currently prefers an <strong>OLD</strong> software that is quickly
          becoming obsolete and crashes their local databases so bad some days
          they just have to reset it and loose that days data... 😬
        </p>
        <p>
          After some meetings to collect the exact usage of their current
          software, a wish-list of bug fixes and new features I decided to build
          it. I reached out to a friend to join me since it is going to be quick
          the extensive project. We've built prototypes in InVision and had
          these MVP ideas approved. We currently are in development of the
          buying process flow and have it 90% working (excluding actual customer
          and clothing data)!
        </p>
        <p>
          Next steps are to resolve our Buying flow and integrate this with
          their current peripherals, like receipt printer, cash drawer, label
          maker, scan gun, etc. After that we may be able to integrate into
          their store's local database and begin integrating it into everyday
          use while we develop the selling process. Wish us luck!
        </p>
      </>
    }
  />
);

export default POSSystem;
