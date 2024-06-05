import {
    EasyAccessor,
    Enum,
    Config,
    View,
    Player,
    Position,
    Score,
    Spread,
    Typeface,
    Frame,
    SquareFrame,
    Img as PhaserImg,
    SpriteSheet,
} from './phaserhelpers/index.mjs'
import {
    PHYSICS
} from './phaserhelpers/Top-Down/index.mjs'
import {
    // Constants
    display,
    flex,
    event,
    unit,
    tag,

    // Base Classes
    OptionSelection,
    StyleSheet,
    Listener,
    ListenerOnLoad,
    // FlexBoxClass,

    // Classables
    // // Containers
    Img,
    Div,
    DivBtn,
    FlexBox,
    Figure,
    Form,
    Label,
    // // Input
    Button,
    Input,
    TextArea,
    Select,
    Option,
    // // Format elements
    Br,
    //  // External Resource Links
    Link,
    Style,

    // Text Elements
    // // Headers
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    // // Body Text
    P,
    PSpan,
    Figcaption,
    A,
    Strong,
    Abbr,
    Blockquote,
    Sub,
    Sup,
    Span,
    Text,
    Code,
    Pre,

    // Functions
    getStylesheetByFileName,
    addAdoptedStyleSheet,

    // JSONCSS
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError
} from './vjsc/vanilla.mjs'

const assets = {
    png: {
        gunParts: 'assets/gun_parts/gun_parts.png',
        button1: 'assets/holo_ui/button1/button1.png',
        panel: 'assets/holo_ui/cardx1/panel.png',
        cardx1: 'assets/holo_ui/cardx1/cardx1.png',
        cardx2: 'assets/holo_ui/cardx2/cardx2.png',
        cardx3: 'assets/holo_ui/cardx3/cardx3.png',
        iconCyan: 'assets/holo_ui/Icons/iconsx32.png',
        iconBlack: 'assets/holo_ui/Icons/iconsx32black.png',
        iconGray: 'assets/holo_ui/Icons/iconsx32gray.png',
        iconWhite: 'assets/holo_ui/Icons/iconsx32white.png',
    },
    tilemap: 'assets/gun_constructor.map.json'
}



let config = new Config(new View(800, 600), PHYSICS)
config.scene = {
    preload: preload,
    create: create,
    update: update,
}
let game = new Phaser.Game(config)

function preload ()
{
    for(const [key, value] of Object.entries(assets.png)){
        console.log(`this.load.image('${key}', '${value}')`)
        this.load.image(key, value)
    }
    this.load.tilemapTiledJSON('gun_constructor', assets.tilemap)
    
}

function create ()
{
    // const backgroundImage = map.createStaticLayer('Background', tileset)
    const map = this.make.tilemap({key: 'map'})
    const tileset = map.addTilesetImage('gun_parts', 'gunParts')
}

function update ()
{

}
