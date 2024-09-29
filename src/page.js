import React from 'react';
import PropTypes from 'prop-types';


import renderSection1 from './components/section1';
import renderSection2 from './components/section2';
import renderSection3 from './components/section3';
import renderSection4 from './components/section4';
import renderSection5 from './components/section5';

function MainPage(props) {
  return (
    <main className={`main-page bg-[rgb(6,6,6)] flex flex-col overflow-hidden ${props.className || ''}`}>
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
      {renderSection4(props)}
      {renderSection5(props)}
    </main>
  );
}

MainPage.propTypes = {
  className: PropTypes.string
};

export default MainPage;
