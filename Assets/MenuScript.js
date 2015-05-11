#pragma strict

var buttonWidth : int = 84;
var buttonHeight : int = 60;

function OnGUI (){
	if (GUI.Button ( new Rect (
		  Screen.width/2 - (buttonWidth / 2), 
		  (2 * Screen.height / 3) - (buttonHeight / 2),
          buttonWidth,
          buttonHeight), "START")){
	
		Application.LoadLevel("level1");	
	}
}

