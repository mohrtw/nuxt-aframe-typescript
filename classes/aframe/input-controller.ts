import THREE from 'three'
import AFrame from 'aframe'
import Hand from '~/enums/player/hand'

export default class InputController {

    hand: Hand = Hand.Right
    teleporting : boolean = false
    teleportThreshold : number = 0.4
    intersected : any = null
    cursor: AFrame.Entity

    constructor(hand: Hand) {
        document.addEventListener( "controllerconnected", this.controllerConnectedListener )
        this.cursor = document.querySelector("#rightHandCursor") as AFrame.Entity
        this.hand = hand
    }

    destroy(){

    document.body.removeEventListener(
        "controllerconnected",
        this.controllerConnectedListener
      )
    }

    controllerConnectedListener(evt: any) {
        this.fixCursorPosition(evt.detail.name)
      }
  
  // To do -- make SetTransform function to simplify switch statement
      fixCursorPosition(controllerName : any) {

        switch (controllerName) {

          case "oculus-touch-controls":
                this.cursor.object3D.rotation.set( THREE.MathUtils.degToRad(-45), THREE.MathUtils.degToRad(2.5), 0)
                this.cursor.object3D.position.set(0, -0.01, 0)
            break
          case "windows-motion-controls":
            this.cursor.object3D.rotation.set( THREE.MathUtils.degToRad(-45), THREE.MathUtils.degToRad(2.5), 0 )
            this.cursor.object3D.position.set(0, 0, -0.03)
            break
          default:
            this.cursor.object3D.rotation.set( THREE.MathUtils.degToRad(-45), THREE.MathUtils.degToRad(2.5), 0 )
            this.cursor.object3D.position.set(0, -0.01, 0)
            break
        }
      }

      setTransform(object : AFrame.Entity){
        
      }

    setupControls() {
        document.addEventListener( "thumbstickmoved", this.thumbstickmovedListener )
        document.addEventListener("raycaster-intersected", this.intersectedListener )
        document.addEventListener( "raycaster-intersected-cleared", this.intersectedClearListener )
        document.addEventListener("triggerup", this.triggerUpListener)
      }
  
  //Same
      tearDownControls() {
        document.removeEventListener( "thumbstickmoved", this.thumbstickmovedListener)
        document.removeEventListener( "raycaster-intersected", this.intersectedListener)
        document.removeEventListener( "raycaster-intersected-cleared", this.intersectedClearListener )
        document.removeEventListener("triggerup", this.triggerUpListener)
      }
  
  //Same, move this into the objecton
      thumbstickmovedListener(evt : any) {
        if (this.teleporting && evt.detail.y >= -this.teleportThreshold) {
            this.teleport()
            this.teleporting = false
          }
         else if (evt.detail.y <= -this.teleportThreshold){
            this.teleport()
            this.teleporting = true
        }
      }
      
      teleport(){
        console.log("Teleporting")
      }
  
      intersectedListener(evt : any) {
        this.intersected = evt.target
      }
  
      intersectedClearListener(evt : any) {
        this.intersected = null
      }
  
      triggerUpListener(evt : any) {
        if (!this.intersected) return
          //TODO: This is commented out because raycasting API seems to have changed in newer threejs
          // const intersection = rightHandCursor.components.raycaster.getIntersection( this.intersected )
          // let eventDetail = () => {
          // this.intersected,
          // intersection
          // }
          // (this.intersected as AFRAME.Entity).emit("click", eventDetail)
      }
  
     
}