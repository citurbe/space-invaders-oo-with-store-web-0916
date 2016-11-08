class Spaceship{

  constructor(params){
    this.id = params.id
    this.name = params.name
    this.phasers = params.phasers
    this.shields = params.shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = true
    this.phasersCharge = 'uncharged'
    Store.data.spaceships.push(this)
  }

}
