//import AnnuityCalculator from './AnnuityCalculator';
////import logo from './logo.svg';
//import './App.css';

////function App() {
////  return (
////    <div className="App">
////      <AnnuityCalculator />
////      <video width="320" height="240" controls>
////        <source src="https://res.cloudinary.com/dvse2x2pd/video/upload/v1692377518/SalmaCelloShort_zskw3k.mov" type="video/mp4" />
////        Your browser does not support the video tag.
////      </video>
////    </div>
////  );
////}


//function App() {
//  return (
//    <div className="App">
//      <div className="annuity-calculator">
//        <AnnuityCalculator />
//      </div>
//      <video width="320" height="240" controls>
//      <source src="https://res.cloudinary.com/dvse2x2pd/video/upload/v1692377518/SalmaCelloShort_zskw3k.mov" type="video/mp4" />
//        Your browser does not support the video tag.
//      </video>
//    </div>
//  );
//}


//export default App;


//import React from 'react';
//import AnnuityCalculator from './AnnuityCalculator';
//import './App.css';

//function App() {
//  return (
//    <div className="app-container">
//      <div className="title">THE VALUE OF ANNUITIES IN FINANCIAL PLANNING</div>
//      <div className="subtitle">Learning the basics</div>

//      <div className="quadrant top-left">
//        {/* Your top-left content (text box) will go here */}
//      </div>
//      <div className="quadrant top-right">
//        <AnnuityCalculator />
//      </div>
//      <div className="quadrant bottom-left">
//        {/* Your bottom-left content (text box) will go here */}
//      </div>
//      <div className="quadrant bottom-right">
//        <video width="320" height="240" controls>
//          <source src="https://res.cloudinary.com/dvse2x2pd/video/upload/v1692377518/SalmaCelloShort_zskw3k.mov" type="video/mp4" />
//          Your browser does not support the video tag.
//        </video>
//      </div>
//    </div>
//  );
//}

//export default App;



//import React from 'react';
//import AnnuityCalculator from './AnnuityCalculator';
//import './App.css';

//// Define the text variables
//const topLeftText = "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.";
//const bottomLeftText = "However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.";

//function App() {
//  return (
//    <div className="app-container">
//      <div className="title">THE VALUE OF ANNUITIES IN FINANCIAL PLANNING</div>
//      <div className="subtitle">Learning the basics</div>

//      <div className="quadrant top-left">
//        {topLeftText}
//      </div>
//      <div className="quadrant top-right">
//        <AnnuityCalculator />
//      </div>
//      <div className="quadrant bottom-left">
//        {bottomLeftText}
//      </div>
//      <div className="quadrant bottom-right">
//        <video width="320" height="240" controls>
//          <source src="https://res.cloudinary.com/dvse2x2pd/video/upload/v1692377518/SalmaCelloShort_zskw3k.mov" type="video/mp4" />
//          Your browser does not support the video tag.
//        </video>
//      </div>
//    </div>
//  );
//}

//export default App;

//////////////////////////////////////////////////////////////////////////////////////////

//import React from 'react';
//import AnnuityCalculator from './AnnuityCalculator';
//import './App.css';

//// Define the text variables
//const topLeftText = "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.";
//const bottomLeftText = "However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.";

//function App() {
//  return (
//    <div className="app-container">
//      {/* Move the title and subtitle to the top */}
//      <div className="title">THE VALUE OF ANNUITIES IN FINANCIAL PLANNING</div>
//      <div className="subtitle">Learning the basics</div>

//      <div className="quadrant top-left">
//        {topLeftText}
//      </div>
//      <div className="quadrant top-right">
//        <AnnuityCalculator />
//      </div>
//      <div className="quadrant bottom-left">
//        {bottomLeftText}
//      </div>
//      <div className="quadrant bottom-right">
//        <video width="320" height="240" controls>
//          <source src="https://res.cloudinary.com/dvse2x2pd/video/upload/v1692377518/SalmaCelloShort_zskw3k.mov" type="video/mp4" />
//          Your browser does not support the video tag.
//        </video>
//      </div>
//    </div>
//  );
//}

//export default App;






///////////////////////////////////////////////////////////////////

import Logo from './Logo'; // Import the Logo component
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AnnuityCalculator from './AnnuityCalculator';
import './App.css';
// Define the text variables
//const topLeftText = "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.";
//const bottomLeftText = "However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/proposal">Proposal</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/proposal" element={<ProposalPage />} />
        </Routes>
      </div>
    </Router>
  );
}
function MainPage() {
  return (
    
    <div className="app-container">
      <div className="header">
        <Logo />
      </div>
      <div className="main-content">
        <div className="title">THE VALUE OF ANNUITIES IN FINANCIAL PLANNING</div>
        <div className="subtitle">Learning the basics</div>

        <div className="quadrant top-left">
          <h3>What is an annuity?</h3>
          <p>An annuity is a financial product that provides a series of payments made at equal intervals. There are many types of annuities, but all share this basic characteristic. Typically, annuities are used as a way to secure a steady cash flow for an individual during their retirement years. They can be purchased with a lump sum or with a series of payments over time and can provide fixed or variable returns based on the terms of the contract.</p>
        </div>
        <div className="quadrant top-right">
          <AnnuityCalculator />
        </div>
        <div className="quadrant bottom-left">
          <h3>Who might want to purchase an annuity?</h3>
          <p>Annuities are often sought by individuals who want to ensure a stable income stream in their retirement years, especially if they're concerned about outliving their savings. They can be beneficial for those who don't have employer-sponsored retirement plans or want an additional safety net beyond other retirement savings. Additionally, individuals who have received a large sum of money, such as from an inheritance or lottery win, might purchase an annuity to help manage and distribute their wealth over time.</p>
        </div>
        <div className="quadrant bottom-right">
          <video width="320" height="240" controls>
            <source src="https://res.cloudinary.com/dvse2x2pd/video/upload/v1692377518/SalmaCelloShort_zskw3k.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="navigate">
        <Link to="/proposal">View Proposal</Link>
      </div>
    </div>
  );
}

function ProposalPage() {
  return (
    <div className="app-content proposal-content">
      {/*<Logo />*/}
      <div className="proposal-text">
      <Logo />

        <h1>Proposal to Integrate Generative AI for Enhanced IT Efficiency</h1>

        <h2>Introduction</h2>
        <p>
          The insurance industry is undergoing a digital transformation, with IT playing a pivotal role in modernizing operations, enhancing customer experiences, and driving innovation.
          Generative AI, especially models like LLMs, offer a paradigm shift in how IT operations can be executed, making processes more efficient and opening up new avenues for productivity and innovation.
          Chart 1 to the right shows McKinsey's analysis of the potential impact of Generative AI on a range of Corporate functions.  Corporate IT (software engineering and product development) shows highest potential for value creation from leveraging Generative AI.
          Customer operations, also heavily dependent on IT, shows the second highest potential for value creation.
          McKinsey has estimated that across industries, the productivity of software engineering for Corporate IT purposes could be improved by roughly 30%, and software engineering for product development by roughly 35%. This compares to an approximate 37% opportunity in customer operations (again, with a heavy IT component) and a 5 to 10% opporunity in Sales and Marketing.
          For this reason, and based on our own work and success with Generative AI to date, we believve that starting in IT makes the most sense as companies continue their jouney to full Digitial Transformation thourgh Artficial intelligence.


        </p>

        <h2>The Opportunity</h2>
        <p>
          Traditional IT processes often involve manual coding, lengthy code reviews, and a significant amount of time spent on documentation and troubleshooting.
          Generative AI offers the ability to automate many of these tasks, reduce human error, and significantly speed up development and deployment cycles.
          According to a McKinsey study, generative AI could boost the productivity of software engineering by 20 to 45 percent. This is because generative AI can automate many of the repetitive and time-consuming tasks that software engineers currently do.
          One study found that software developers using Microsoft's GitHub Copilot completed tasks 56 percent faster than those not using the tool. Another study by McKinsey found that software engineering teams who were trained to use generative AI tools rapidly reduced the time needed to generate and refactor code.
          In addition, Generative AI has the potential to deliver value across an entire organization by revolutionizing internal knowledge management systems. 
          Generative AI can help employees retrieve stored knowledge more easily and efficiently. Generative AI can understand natural language queries, so employees can ask questions in the same way they would ask a human. 
        </p>
        <h2>Benefits of Generative AI in IT</h2>
          <p>
          There are several potential specific applications of Generative AI in IT, including:
        </p>
          <ul>
            <li><span className="concept-title">Rapid Prototyping:</span> With the assistance of AI, developers can quickly scaffold out applications, reducing the time from concept to prototype. Example: Our recent experience in building a React app in just a few hours showcases this potential.</li>
            <li><span className="concept-title">Automated Code Reviews:</span> AI can be trained to review code against best practices, identify potential bugs, security vulnerabilities, and even suggest optimizations.</li>
            <li><span className="concept-title">Natural Language Queries:</span> Empower non-technical staff to interact with databases and systems using plain English, reducing the dependency on IT for data queries.</li>
            <li><span className="concept-title">Documentation Automation:</span> Generate comprehensive documentation for code, systems, and processes, ensuring consistency and reducing manual effort.</li>
            <li><span className="concept-title">Predictive Maintenance:</span> AI can analyze system logs and metrics to predict potential failures or performance issues, allowing for proactive maintenance.</li>
            <li><span className="concept-title">Training and Onboarding:</span> New IT personnel can be onboarded faster with AI-driven training modules, interactive Q&A sessions, and instant feedback on their code.</li>
            <li><span className="concept-title">Personalized Websites for Financial Reps:</span> Create a template system where financial representatives can have personalized, dynamically customizable websites. This not only enhances their personal brand but also provides a platform for better customer interaction. Generative AI can assist in auto-generating content, FAQs, and even chatbots for these websites based on the representative's specialization and customer demographics.</li>
          </ul>

        <h2> </h2>
        <h2> </h2>
        <h2>Case Study: Rapid Application Development</h2>
        <p>
          We recently embarked on a journey to build a React application, with no prior experience in the framework.
          This proposal page and the accompanying Web App were built using React, with the assistance of Generative AI. The builder had absolutely no prior experience building we bistes or using React.
          (That said, over the past several months we have used Generative AI as a co pilot to build Predictive Models from scratch using the powerful Transformer architecturet underlying today's LLMs and other deep learning techniques and built pipelines to run these workloads on the distrubted compute capabilites of cloud -based GPUs to very beneficial effect).
          With the assistance of Generative AI, we were able to conceptualize, develop, and deploy the application in a matter of hours.
          This speed and efficiency are transformative, reducing development cycles from weeks to days or even hours.
        </p>

        <h2>Suggested Project Execution Approach</h2>
        <ol>
            <li><span className="concept-title">Problem Identification:</span> Determine the primary challenge or problem we aim to address. For the pilot program, we propose updating and optimizing the company's main website to make it more modern, dynamic, attractive, and interactive, aligning with current digital trends and user expectations.</li>
            <li><span className="concept-title">Code Location:</span> Locate the existing code responsible for the identified function. Ensure that the codebase is in a popular language such as React, Python, Java, or C sharp, which LLMs like GPT-4 or Claude 2 are familiar with. Our best results so far have been with Python and React, but other languages can be tested as needed.</li>
            <li><span className="concept-title">LLM Integration:</span> Create a local instance of a sophisticated LLM with a large context window. Claude 2, with its current 100k context window, might be a suitable choice. However, with the regular release of new models, including open-sourced ones, we anticipate integrating a powerful open-sourced model in the future to reduce costs and ensure maximum flexibility.</li>
            <li><span className="concept-title">Contextual Integration:</span> Insert the current code into the LLM as context, allowing the model to understand the existing structure and logic.</li>
            <li><span className="concept-title">Prompt Creation:</span> Develop specific prompts requesting incremental changes in the desired direction. This is where a lot of iterative learning and experimentation will be required. Prompt engineering is a skill to be learned.</li>
            <li><span className="concept-title">Code Integration:</span> Receive the modified or new code from the LLM and integrate it into the existing codebase.</li>
            <li><span className="concept-title">Testing and Iteration:</span> Run and test the updated code. Engage in a conversational iteration with the LLM to address any issues and make necessary refinements.</li>
            <li><span className="concept-title">Continuous Improvement:</span> After the successful implementation of the initial challenge, identify the next feature or project to be incorporated.</li>
            <li><span className="concept-title">Training and Knowledge Transfer:</span> Conduct workshops and training sessions for all IT personnel, equipping them with the knowledge to leverage AI tools. Ensure a seamless transition by integrating AI-driven tools into the existing IT workflow..</li>
            <li><span className="concept-title">Feedback Mechanism:</span>Establish channels for continuous feedback from the IT team, allowing for iterative improvements to the AI tools and processes.</li>
            <li><span className="concept-title">Scaling and Expansion:</span> Following the success of the pilot, expand the integration of AI tools across the IT department. Explore potential applications in other departments, such as sales, marketing, and customer support.</li>
            <li><span className="concept-title">Repetition for Continuous Enhancement:</span> As additional opportunities for new projects or further optimizations are identified, return to the initial steps and repeat the process, ensuring ongoing improvement and adaptation.</li>    
        </ol>

        <h2>Conclusion</h2>
        <p>
          The integration of Generative AI into the IT processes of the insurance industry is not just an efficiency play; it's a strategic move to stay ahead in a competitive market.
          By reducing development cycles, enhancing code quality, and opening up new avenues for innovation, the company can position itself as a leader in the digital transformation journey.
        </p>
      </div>
      
      <div className="proposal-charts">
        <h3>HIGHEST VALUE BUSINESS FUNCTIONS FOR USING GEN AI</h3> {/* This is the title */}
        <div className="image-container">
          <img src="McK chart 1.svg" alt="McKinsey Chart" />
        </div>
        <h3>HIGHEST VALUE CAPABILITIES FOR USING GEN AI</h3> {/* This is the title */}
        <div className="image-container">
          <img src="McKinsey Chart 2.svg" alt="McKinsey Chart" />
        </div>
        {/*<h3>Chart 3</h3> 
        <div className="image-container">
          <img src="McKinsey Chart 3.svg" alt="McKinsey Chart" />
        </div>*/}
        <h3>EMPLOYEES OF ALL EDUCATION LEVELS WILL BE HEAVILY IMPACTED</h3> {/* This is the title */}
        <div className="image-container">
          <img src="McKinsey Chart 4.svg" alt="McKinsey Chart" />
        </div>
      </div>
    </div>
    
  );
}


export default App;

