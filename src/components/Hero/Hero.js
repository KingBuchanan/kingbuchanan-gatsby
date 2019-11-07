import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown } from "react-icons/fa/";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  function changeImage() {
    if (
      document.getElementById("Wizard1").src ==
      "https://piskel-imgstore-b.appspot.com/img/7c148d8a-b8c2-11e9-bf50-69f4a3300400.gif"
    ) {
      document.getElementById("Wizard1").src =
        "https://piskel-imgstore-b.appspot.com/img/e83bed28-fa5d-11e9-a25a-c131211bd9ed.gif";
    } else {
      document.getElementById("Wizard1").src =
        "https://piskel-imgstore-b.appspot.com/img/7c148d8a-b8c2-11e9-bf50-69f4a3300400.gif";
    }
  }

  return (
    <React.Fragment>
      <section className="hero">
        <h1>
          Hakeem Buchanan{" "}
          <strong>
            <img
              src="https://piskel-imgstore-b.appspot.com/img/7c148d8a-b8c2-11e9-bf50-69f4a3300400.gif"
              alt="Hakeem the Wizard"
              width={60}
              id="Wizard1"
              onClick={changeImage}
            />
          </strong>{" "}
          Lv.1 Developer
        </h1>
        <button onClick={scrollToContent} aria-label="scroll">
          <FaArrowDown />
        </button>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
