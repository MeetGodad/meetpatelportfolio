import WorkItem from "./WorkItem";

export default function Projects() {

        return (
          <section className="work" id="work">
            <div className="row">
              <h2>Projects</h2>
              <div className="work__boxes">
                <WorkItem 
                  title="Tech Textile (Capstone Project)"
                  description="TechTextile is an innovative B2B and B2C e-commerce platform specializing in yarn and fabric products. Our mission is to bridge the gap between Indian textile manufacturers and North American buyers, leveraging the substantial import market and facilitating global trade."
                  techStack={['JavaScript' , 'React', 'Next.js' , 'Node', 'PostgreSql', 'NeonDatabase' , 'Firebase' , 'Figma', 'Git', 'GitHub', 'TailwindCSS']}
                  links={[
                    { text: 'Visit Site', href: 'https://techtextile.vercel.app/', target: '_blank' },
                    { text: 'View Source Code', href: 'https://github.com/MeetGodad/techtextile/blob/master/README.md', target: '_blank' },
                  ]}
                  imageSrc='images/Tech Textile 1.png'
                  imageAlt="Tech Textile Project Image"
                /> 
                <WorkItem 
                  title =".NET Project of Event Application" 
                  description={"Meet_Final_Of_MAUIApp is a MAUI desktop application designed to manage concert events. The application connects to a database to store and retrieve event information, providing a user-friendly graphical user interface (GUI) for interaction. This project integrates various elements from previous assignments to create a cohesive and functional application."}
                  techStack={['C#' , '.NET' , '.NET MAUI GUI' , 'Blazor App' , 'Visual Studio IDE' , 'Git' , 'GitHub'  ]}
                  links={[
                    { text: 'View Source Code', href: 'https://github.com/MeetGodad/Meet_Final_Of_MAUIApp/blob/master/README.md', target: '_blank' },
                  ]}
                  imageSrc='images/NETMAUIAPP.png'
                  />
                <WorkItem
                  title="Healthy Eats"
                  description="A web application designed to create personalized meal plans that cater to your body's needs, not just your cravings."
                  techStack={['JavaScript' , 'React', 'Node', 'Next' , 'FireBase', 'Figma', 'Git', 'GitHub', 'TailwindCSS']}
                  links={[
                    { text: 'Visit Site', href: 'https://healthyeats.vercel.app/', target: '_blank' },
                    { text: 'View Source Code', href: 'https://github.com/MeetGodad/healthyeats/blob/master/README.md', target: '_blank' },
                  ]}
                  imageSrc='images/HealthyEats.jpg'
                  imageAlt="Healthy Eats Project"
                />
                  <WorkItem
                  title="Tactical Tic Tac Toe"
                  description="A Mobile Game Application that allows the user to play Tic Tac Toe with a twist. The game is played on a 3x3 grid, but the player can only win by getting 3 in a row on the 3x3 grid they are playing on."
                  techStack={['React Native' , 'JavaScript', 'React Native Async Storage', 'Figma', 'Git', 'GitHub']}
                  links={[
                    { text: 'View Source Code', href: 'https://github.com/MeetGodad/TacTical-TicTacToe/blob/main/README.md' },
                  ]}
                  imageSrc="images/Gameboard.jpg"
                  imageAlt="Tactical Tic Tac Toe Project Image"
                />
              </div>
            </div>
          </section>
        );
}