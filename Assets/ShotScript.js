#pragma strict

  /// Damage inflicted
var damage : int = 1;

  /// Projectile damage player or enemies?
var isEnemyShot : boolean = false;

function Start () {
    // 2 - Limited time to live to avoid any leak
    Destroy(gameObject, 20); // 20sec
}

function Update () {

}
