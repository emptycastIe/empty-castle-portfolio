import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import  classes from './Skills.module.scss';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div>
        <p className="small__subtitle">Get To Know</p>
        <h1 className="big__title">Skills</h1>
      </div>

      <Swiper
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={classes.skill__card}>
            <h3>Front-End</h3>

            <div className={`${classes.skill__card__content}`}>
              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i className="bi bi-filetype-html"></i>
                  <h4>HTML</h4>
                </div>
              </article>

              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i className="bi bi-filetype-css"></i>
                  <h4>CSS</h4>
                </div>
              </article>

              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i className="bi bi-filetype-js"></i>
                  <h4>JavaScript</h4>
                </div>
              </article>

              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i className="bi bi-filetype-jsx"></i>
                  <h4>React</h4>
                </div>
              </article>

              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i className="bi bi-bootstrap"></i>
                  <h4>Bootstrap</h4>
                </div>
              </article>

              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i className="bi bi-git"></i>
                  <h4>Git</h4>
                </div>
              </article>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={classes.skill__card}>
            <h3>Back-End</h3>

            <div className={`${classes.skill__card__content}`}>
              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i class="bi bi-filetype-sql"></i>
                  <h4>MySQL</h4>
                </div>
              </article>

              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i class="bi bi-filetype-tsx"></i>
                  <h4>TypeScript</h4>
                </div>
              </article>

              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i class="bi bi-database"></i>
                  <h4>MongoDB</h4>
                </div>
              </article>

              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i class="bi bi-filetype-java"></i>
                  <h4>Java</h4>
                </div>
              </article>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={classes.skill__card}>
            <h3>Graphic & UX/UI Design</h3>

            <div className={`${classes.skill__card__content}`}>
              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i class="bi bi-pencil"></i>
                  <h4>Adobe PhotoShop</h4>
                </div>
              </article>

              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i class="bi bi-pen"></i>
                  <h4>Adobe Illustration</h4>
                </div>
              </article>

              <article className={`${classes.skill__card__details}`}>
                <div>
                  <i class="bi bi-vector-pen"></i>
                  <h4>Figma</h4>
                </div>
              </article>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Skills;
