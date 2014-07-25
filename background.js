/**
 * Background JavaScript file for Quora Reader Extension.
 *
 * @author	Dhananjay Nakrani (dhananjaynakrani@gmail.com)
 * @license	GNU GENERAL PUBLIC LICENSE 2.0
 *
 */

/**
 * The function to toggle between reading and normal modes.
 * Basically it hides the left & right columns on the Quora page and
 *   increases the width of the main center column which has the actual content.
 */
function modeToggler() {
	if (document.body.getAttribute("quora_reading_mode") == "1") {
		//unset the flag
		document.body.setAttribute("quora_reading_mode","0");
		//undo all the changes
		document.getElementsByClassName("grid_page_right_col")[0].style.display = "";
		document.getElementsByClassName("grid_page_left_col")[0].style.display = "";
		document.getElementsByClassName("grid_page_center_col")[0].style.width = "";
	} else {
		//set the flag
		document.body.setAttribute("quora_reading_mode","1");
		//do all the changes
		document.getElementsByClassName("grid_page_right_col")[0].style.display = "none";
		document.getElementsByClassName("grid_page_left_col")[0].style.display = "none";
		document.getElementsByClassName("grid_page_center_col")[0].style.width = "100%";
	}
}

// convert the function code to string and strip off unnecessary details to make it a code block
code_string = modeToggler.toString().slice(8+modeToggler.name.length+5).slice(1,-1);

/**
 * Set up EventListener.
 * Whenever one clicks on the Extension Icon, the function will be executed.
 */

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: code_string
  });
});