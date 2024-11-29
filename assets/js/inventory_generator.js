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
    <div class="table-wrapper">
        <table>
            <tr>
                <td><b>Worn Items</b></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>Wand</td>
                <td>1 lb.</td>
                <td>10 gp</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>Robes</td>
                <td>4 lb.</td>
                <td>1 gp</td>
            </tr>



            <tr>
                <td><b>Pouch</b></td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>Scroll of Sleep</td>
                <td>1 lb.</td>
                <td>25 gp</td>
            </tr>



            <tr>
                <td><b>Backpack</b></td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>Rations (3)</td>
                <td>3 lb.</td>
                <td>6 gp</td>
            </tr>
        </table>
        </div>
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
      const div_receptacle = document.querySelector("#inventory-generated");
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