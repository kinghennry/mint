import React from "react";
import "./team.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { teams } from "./data";

const Team = () => {
  return (
    <section className="grid">
      <div className="container">
        <Breadcrumb title="Meet The Crew" desc="ALL STARS TEAM" ct />
        <div className="grid__box">
          {teams.map((team) => {
            const { id, name, duty, bg, image } = team;
            return (
              <article key={id} className="ct">
                <div className="team__img" style={{ background: `${bg}` }}>
                  <img src={image} alt={name} />
                </div>
                <h4>{name}</h4>
                <p>{duty}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
