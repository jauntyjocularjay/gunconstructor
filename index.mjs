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

const GUN_PARTS_PATH = 'assets/gun_parts/'
const GUN_PARTS = 'GUN_PARTS'

let config = new Config(new View(800, 600), PHYSICS)
config.scene = {
    preload: preload,
    create: create,
    update: update,
}
let game = new Phaser.Game(config)

function preload ()
{
    this.load.image(GUN_PARTS, GUN_PARTS_PATH + 'gun_parts.png')
    this.load.tilemapTiledJSON('tilemap', GUN_PARTS_PATH + 'gunmap.map.json')
}

function create ()
{
    const map = this.make.tilemap({key: 'tilemap'})
    const tileset = map.addTilesetImage('gun_parts', GUN_PARTS)
    // map.createStaticLayer('Background', tileset)
    // map.createStaticLayer('Ground', tileset)
}

function update ()
{

}
