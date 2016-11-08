class CrewMember {

   constructor(params) {
    this.id = params.id
    this.position = params.position
    this.currentShip = 'Looking for a Rig'
    Store.data.crewMembers.push(this)
  }

  engageWarpDrive() {
    if(this.spaceshipId === undefined){
      return 'had no effect'
    } else if(this.position === 'Pilot'){
      this.currentShip.warpDrive = 'engaged!'
    }
  }

  setsInvisibility() {
    if(this.spaceshipId === undefined){
      return 'had no effect'
    } else if(this.position === 'Defender'){
      this.currentShip.cloaked = true
    }
  }

  chargePhasers() {
    if(this.spaceshipId === undefined){
      return 'had no effect'
    } else if(this.position ==='Gunner'){
      this.currentShip.phasersCharge = 'charged!'

    }
  }

  assignShip(ship) {
    this.spaceshipId = ship.id
    this.currentShip = ship
    ship.docked = false
  }

}
