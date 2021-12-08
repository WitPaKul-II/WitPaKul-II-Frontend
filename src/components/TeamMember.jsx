import React, { Component } from 'react';

class TeamMember extends Component {
  render() {
    return (
      <div>
        <section className="fdb-block team-2">
          <img src="/assets/image/team/Team1.png" className="d-block w-100" alt="..." />
          <div className="container">
            <div className="row text-center justify-content-center">
              <div className="col-8 pt-4 font-weight-bold h4">
                <h1 >Our Team</h1>
              </div>
            </div>
            <div className="row-50 pt-3 "  >
              <div className="row text-center justify-content-center">
                <div className="col-sm-3 m-sm-auto">
                  <img className="img-fluid rounded-circle" src="/assets/image/team/074Rew.jpg" alt="fake news"/>
                  <div className="pt-3 ">
                    <div className="font-weight-normal h5">62130500074</div>
                    <div className="font-weight-bold h5">Pawat Munkong</div>
                    <div className="font-weight-normal">Frontend, Backend, DevOps</div>
                  </div>
                </div>
                <div className="col-sm-3 m-sm-auto">
                  <img className="img-fluid rounded-circle" src="/assets/image/team/082Earty.jpg" alt="bubaboo"/>
                  <div className="pt-3 ">
                    <div className="font-weight-normal h5">62130500082</div>
                    <div className="font-weight-bold h5">Worawit Makkasan</div>
                    <div className="font-weight-normal">Backend, Database, DevOps</div>
                  </div>
                </div>
                <div className="col-sm-3 m-sm-auto">
                  <img className="img-fluid rounded-circle" src="/assets/image/team/090Yok.jpg" alt="suay"/>
                  <div className="pt-3">
                    <div className="font-weight-normal h5">62130500090</div>
                    <div className="font-weight-bold h5">Sakulthip Rassameecharoentham</div>
                    <div className="font-weight-normal">Frontend, Backend, Database</div>
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
