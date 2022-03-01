import * as React from 'react';
import { Link } from 'react-router-dom';
import '../style/About.css';

export const About: React.StatelessComponent = (): JSX.Element => (
  <div>
    <Link to="/">
      <h3 className="home-1">Eiipo</h3>
      <h3 className="home-2">Search</h3>
    </Link>
    <div className="center">
      <h4>About</h4>
      <h4><a href="">Eiipo Search Engine</a></h4>
      <p>
        Eiipo Search is a visual metasearch engine built using React, Redux and Express. It scrapes results from Major search Engines and obtains their meta-data
        using the <a href="">node x-ray</a> library. It also has a text-outline feature (powered by <a href="">node-unfluff</a>) that allows you to read the contents of a web page in clean, formatted text without leaving the Eiipo Search site.
      </p>
      
    </div>
  </div>
);
