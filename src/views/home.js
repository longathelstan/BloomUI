import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>bloomUI</title>
        <meta property="og:title" content="Scratchy Nifty Dog" />
      </Helmet>
      <div className="home-awlong">
        <div className="home-container2">
          <span className="home-text1">l.longathelstan.xyz/</span>
          <input
            type="text"
            placeholder="CUSTOM URL"
            className="home-textinput1 input"
          />
        </div>
        <button type="button" className="home-button1 button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="home-icon1"
          >
            <path
              d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span className="home-text2">
            <span>CUSTOMISE LINK</span>
            <br></br>
          </span>
        </button>
        <div className="home-container3">
          <input
            type="text"
            placeholder="PASTE URL, SHORTEN &amp; SHARE"
            className="home-textinput2 input"
          />
          <button type="button" className="home-button2 button">
            <span>
              <span>SHORTEN</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="home-container4">
          <h1 className="home-text8">Awlong-link shortener</h1>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="home-icon3"
          >
            <path
              d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5m6 0H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m-11 4c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5m-6 0H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5S2.67 14 3.5 14m10.5.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5m1.5 4.5H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5S7.67 5 8.5 5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Home
