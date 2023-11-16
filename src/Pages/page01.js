import React from 'react'
import './Content.css'

export default function page01() {
  return (
    <div className='body'>
    <div id='01'>
        <h4>01. What is it?</h4>
      <p>The Plan Testing Method Block covers the activities leading to the creation of the 
        Test Approach and the Test Plan for a specific project or release. The Plan Testing 
        method block is applicable for both Embedded Testing teams as well as Discrete Testing 
        teams. link interno stesso tab link interno nuovo tab link esterno stesso tab link
        esterno nuovo tab</p>
        <p>
         The objectives of this method block are as follows:
        </p>
        <div>
        <ol className='list'>
          <li>Review of high-level testing requirements to define and document the precise scope of testing, along with needed testing types and test phases. </li>
          <li>Deliverable 1 – To develop a comprehensive test approach document, specific to the application or system that is being tested, focused on When, Where and How testing activities will be performed to deliver the scope identified in point number 1</li>
          <li>Deliverable 2 – To develop a test plan that outlines the schedules of in-scope testing activities, plan for procurement/provisioning of pre-requisites required for the testing activities [e.g., test data and test environments], test execution cycles and capacity planning for the testing teams. </li>          
        </ol>
        <p>Below inputs are required for this method block:  </p>
        <ol className='list'>
          <li>The primary input to Plan Testing method block is “Enterprise Testing Strategy” if it is already defined. In case the Enterprise Test Strategy is not defined or available, then the Test Approach will include additional elements of testing process definitions, RACI, Tooling considerations, test data and test environment strategy, as well as test automation strategy.</li>
          <li>The signed-off requirements which are in-scope. </li>
          <li>The signed-off delivery roadmap and release plan [or project plan] </li>          
        </ol>
        </div>
       <p>This method block occurs after the “Enterprise Test Assessment and Test Strategy” method block. </p>   
    </div>
    </div>
  )
}
