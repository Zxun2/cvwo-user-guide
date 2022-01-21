import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Lightweight and Evolvable",
    Svg: require("../../static/img/undraw_options.svg").default,
    description: (
      <>
        Groups and steps is designed from the ground up to be a progressive web
        application. Offline-first Progressive Web Apps are faster and more
        reliable than traditional web pages, and provide an engaging mobile
        experience.
      </>
    ),
  },
  {
    title: "Built to focus",
    Svg: require("../../static/img/undraw_focus.svg").default,
    description: (
      <>
        Groups and Steps lets you focus on your tasks, by breaking them down
        into Groups and subsequently, into steps. Why? Because divide and
        conquer rules!
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Groups and Steps is built entirely within the React ecosystem. Docker is
        used for development.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
