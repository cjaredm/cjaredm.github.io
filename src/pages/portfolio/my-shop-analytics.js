import React from 'react';
import myshop from '../../assets/images/portfolio/myshop/MyShopAnalytics.png';
import screenshots from '../../assets/images/portfolio/myshop/index';
import { PortfolioPage } from '../../components/PortfolioPage';

const MyShopAnalytics = props => (
  <PortfolioPage
    helmetProps={{
      title: 'MyShopAnalytics',
      description: 'Description of building MyShopAnalytics',
    }}
    heroProps={{
      img: myshop,
      title: 'MyShopAnalytics',
      content: `A friend runs a machine shop and wanted something to track his 
      orders, parts and operations run on his machines. I thought, 'I can do 
      that!`,
    }}
    screenshots={screenshots}
    codeLink="https://github.com/cjaredm/InTheatersSoon"
    techs={[
      'nextjs',
      'reactjs',
      'apollo',
      'prisma',
      'graphql',
      'node',
      'netlify',
      'github',
      'styledComponents',
    ]}
    what={
      <>
        <p>
          Has been implemented and making money! Well not making 💰💰💰, but
          offsetting some of my costs now! Yay!
        </p>
        <p>
          Keep in mind I am not a designer, there are several things that could
          use a nice designer's touch, but its all functional and currently
          being used daily.
        </p>
        <p>
          Currently a drag and drop job tracking software for machine shops. It
          takes in orders made up of parts. Each part has a quantity that needs
          to be made and run thru several machines, that process called
          operations. I have a drag areas for each machine a part could be run
          thru and places for pending and finished parts. Employees just log in
          on their phones/computer and drag the part they are working on to the
          machine they are using. They fill out some info and do the same when
          they are done with it. Each operation gets time stamped and connected
          to everything in the database so I can look up analytics for each
          machine, employee, part, order, customer, etc.
        </p>
      </>
    }
  />
);

export default MyShopAnalytics;
