#pragma strict

var speed : Vector2 = new Vector2(2, 2);

var direction : Vector2 = new Vector2(-1, 0);

var isLinkedToCamera : boolean = false;

function Update () {
	var movement = new Vector3(speed.x * direction.x,speed.y * direction.y,0);
	
	movement *= Time.deltaTime;
	
	transform.Translate(movement);

    if (isLinkedToCamera)
    {
      Camera.main.transform.Translate(movement);
    }

}