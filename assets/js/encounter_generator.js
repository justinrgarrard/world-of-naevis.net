///////////////////////////////////////////////////////////////////////////////
// Globals ////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Helper Functions ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// HTML Generator Functions ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Main Function //////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
function generateEncounter() {
    // Assemble the components.
    const encounter_writeup = `
      <blockquote>
        <p class="character-header">Swarm Encounter</p>
        <div class="table-wrapper">
            <table>
                <tr>
                    <td>Type</td>
                    <td>Wolves</td>
                </tr>
                <tr>
                    <td>Count</td>
                    <td>1d4 Groups of 3</td>
                </tr>
                <tr>
                    <td>Motivation</td>
                    <td>Food</td>
                </tr>
                <tr>
                    <td>&nbsp</td>
                    <td>&nbsp</td>
                </tr>
                <tr>
                    <td>Statistics</td>
                    <td>hp:1, ac:10, modifiers:0, damage:4</td>
                </tr>
                    <td>Special Traits</td>
                    <td>None</td>
                </tr>
            </table>
        </div>
        <p>Swarms are large groups of weak enemies treated as a single creature.</p>
        <ul>
            <li>Swarms attack once for each creature in the swarm.</li>
            <li>Swarms all target the same creature.</li>
            <li>Swarms share the same initiative.</li>
            <li>Swarms are vulnerable to area of effect magic.</li>
        </ul>
      </blockquote>
      `;
    return encounter_writeup;
  } 

///////////////////////////////////////////////////////////////////////////////
// Execution //////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/**
 * Button handler.
 *
 * @param {Event} event
 */
function handleClick(event) {
    if (event.type === "click") {
      // Generate the HTML.
      const encounter_html = generateEncounter();
  
      // Plug the HTML into the corresponding element.
      const div_receptacle = document.querySelector("#encounter-generated");
      div_receptacle.innerHTML = encounter_html;
    }
  }
  
  /**
   * Configure the button handler.
   */
  function runSetup() {
    // Find the button.
    generator_button = document.querySelector(".btn");
  
    // Hook it up to the corresponding function.
    generator_button.addEventListener("click", handleClick);
  }
  
  // If the document hasn't finished loading, wait before setting up the button.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runSetup);
  }
  
  // Otherwise, go straight to setup.
  else {
    runSetup();
  }