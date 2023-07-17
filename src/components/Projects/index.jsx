import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "THE ESTATE",
    src: "slide-3.jpeg",
  },
  {
    title: "OUR COLLECTION",
    src: "wine-cover.jpg",
  },
  {
    title: "BRYANT IMPORTS",
    src: "bryant-imports.jpg",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
            The soil composition, the sun-kissed slopes, and the cooling breezes
            all leave their imprint on our grapes, creating a symphony of
            flavors and textures. sunset
          </p>
        </div>
        <div className={styles.column}>
          <p>
            A wine is the accumulation of incalculable little brushstroke
            nuances. While there are an infinite number of potentialities that
            come out of small choices, it is intention behind them that matters.
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
