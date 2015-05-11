#pragma strict

var audioClip : AudioClip;

function OnTriggerEnter2D(otherCollider : Collider2D ){
	if (otherCollider.tag == "Bullet"){
        Destroy(otherCollider.gameObject);
        Destroy(gameObject);
        AudioSource.PlayClipAtPoint(audioClip,transform.position);
	}
}
