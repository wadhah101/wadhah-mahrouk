import * as React from 'react';

interface ITitleProps {}

const HomeTitle: React.FunctionComponent<ITitleProps> = () => (
  <div className="text-center">
    <h1 className="text-6xl tracking-widest text-black uppercase text-opacity-80"> WADHAH MAHROUK </h1>
    <p className="mt-2 text-2xl tracking-widest text-black uppercase text-opacity-40">
      SOFTWARE ENGINEERING STUDENT
    </p>
  </div>
);

export default HomeTitle;
