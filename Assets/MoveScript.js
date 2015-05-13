#pragma strict

var speed : Vector2 = new Vector2(10, 10);

var direction : Vector2 = new Vector2(-1, 0);

private var movement : Vector2 = new Vector2(0, 0); ;

function Update () {
	movement = new Vector2(speed.x * direction.x,speed.y * direction.y);
}

function FixedUpdate(){
    GetComponent.<Rigidbody2D>().velocity = movement;
} 