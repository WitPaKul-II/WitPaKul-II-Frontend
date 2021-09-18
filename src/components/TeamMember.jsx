import React, { Component } from 'react';

class TeamMember extends Component {
  render() {
    return (
      <dev>
        <section class="fdb-block team-2">
          <img src="/assets/image/team/Team1.png" class="d-block w-100" alt="..." />
          <div class="container">
            <div class="row text-center justify-content-center">
              <div class="col-8 pt-4  text-success fw-bolder ">
                <h1 >Our Team</h1>
              </div>
            </div>
            <div class="row-50 pt-3 "  >
              <div class="row text-center justify-content-center">
                <div class="col-sm-3 m-sm-auto ">
                  <img class="img-fluid rounded-circle" src="/assets/image/team/074Rew.jpg" />
                  <div class="pt-3 ">
                    <h2>62130500074</h2>
                    <h2>Pawat Munkong</h2>
                    <h3>OK</h3>
                  </div>
                </div>
                <div class="col-sm-3 m-sm-auto">
                  <img class="img-fluid rounded-circle" src="/assets/image/team/082Earty.jpg" />
                  <div class="pt-3 ">
                    <h2>62130500082</h2>
                    <h2>Worawit Makkasan</h2>
                    <h3>OK</h3>
                  </div>
                </div>
                <div class="col-sm-3 m-sm-auto">
                  <img class="img-fluid rounded-circle " src="/assets/image/team/090Yok.jpg" />
                  <div class="pt-3">
                    <h2>62130500090</h2>
                    <h2>Sakulthip Rassameecharoentham</h2>
                    <h3>OK</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </dev>

    );
  }
}

export default TeamMember;