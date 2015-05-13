#pragma strict

/// 1 - The speed of the ship
var speed : Vector2 = new Vector2(50, 50);

// 2 - Store the movement
private var movement : Vector2 = new Vector2(0, 0); ;

function Update () {
    // 3 - Retrieve axis information
	var inputX : float = Input.GetAxis("Horizontal");
    var inputY : float = Input.GetAxis("Vertical");

    // 4 - Movement per direction
    movement = new Vector2(speed.x * inputX,speed.y * inputY);
    
    var shoot : boolean = Input.GetButtonDown("Fire1");
    
 	if (shoot){
      var weapon : WeaponScript = GetComponent(WeaponScript);
      if (weapon != null)
      {
        weapon.Attack();
        GetComponent.<AudioSource>().Play();
      }
	} 
}
    

function FixedUpdate(){
    // 5 - Move the game object
    GetComponent.<Rigidbody2D>().velocity = movement;
} 