import React, { Component } from 'react';

class TeamMember extends Component {
  render() {
    return (
      <div>
        <section className="fdb-block team-2">
          <img src="/assets/image/team/Team1.png" className="d-block w-100" alt="..." />
          <div className="container">
            <div className="row text-center justify-content-center">
              <div className="col-8 pt-4  text-success fw-bolder ">
                <h1 >Our Team</h1>
              </div>
            </div>
            <div className="row-50 pt-3 "  >
              <div className="row text-center justify-content-center">
                <div className="col-sm-3 m-sm-auto ">
                  <img className="img-fluid rounded-circle" src="/assets/image/team/074Rew.jpg" alt="fake news"/>
                  <div className="pt-3 ">
                    <h2>62130500074</h2>
                    <h2>Pawat Munkong</h2>
                    <h3>Roles : Front-end , Back-end</h3>
                  </div>
                </div>
                <div className="col-sm-3 m-sm-auto">
                  <img className="img-fluid rounded-circle" src="/assets/image/team/082Earty.jpg" alt="bubaboo"/>
                  <div className="pt-3 ">
                    <h2>62130500082</h2>
                    <h2>Worawit Makkasan</h2>
                    <h3>Roles : Back-end , Database , DevOps</h3>
                  </div>
                </div>
                <div className="col-sm-3 m-sm-auto">
                  <img className="img-fluid rounded-circle" src="/assets/image/team/090Yok.jpg" alt="suay"/>
                  <div className="pt-3">
                    <h2>62130500090</h2>
                    <h2>Sakulthip Rassameecharoentham</h2>
                    <h3> Roles : Front-end , Database</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TeamMember;
