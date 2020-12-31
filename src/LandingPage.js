import React from 'react';
import {Container, Header,Main} from './styleLandingPage';
import logo from './assets/team.jpg';

function LandingPage() {
  return (
   <Container>
     <Header>
       <h1>DevChallege</h1>
       <ul>
         <li>
           <a>Home</a>
         </li>
         <li>
           <a>Features</a>
         </li>
         <li>
           <a>Contact</a>
         </li>
       </ul>
     </Header>

     <Main>
      <div>
        <h1>Create amazing grapics</h1>
        <h2>Colaborate and create beautiful
          graphics with your team
        </h2>
        <button>Start now</button>
      </div>
       <img width={600} height={400} src={logo}/>
     </Main>
   </Container>
  );
}

export default LandingPage;
