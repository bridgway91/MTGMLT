// game object: includes overarching info like options, and a list of the players
const game = {
    players: [],
    startingLife: 40,
    poison: false,
    commanderDamage: false,
    ascension: false,
    monarch: false,
    dayNight: false,
    initiative: false,
    energy: false
}
// player class: default settings for each new player
class Player {
    constructor(name) {
        this.name = name
        this.life = game.startingLife
        this.icon = 0 // array index for icons
        // optional trackers
        this.energy = 0
        this.poison = 0
        this.cd = []
        this.monarch = false
        this.initiative = false
        this.ascended = false
    }
    editName() {

    }
    changeValue(stat, n) {

    }
}


/*
    - side images of jace + liliana
        - need specified heights of header + border + rest
        - above might need changes once below is worked out in cases it extends too far
        - do i want images to scroll? or be fixed?
    - ignore existing html content
        - get working :
            - add/remove players
            - reset game
            - options
            - (honestly just comment out existing html and dont bother with extra options tracks, just focus on icon/name/life combo)
*/