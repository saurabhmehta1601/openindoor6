import './style.css'

import maplibregl from 'maplibre-gl'


import indoor_layers from './layers/indoor.json';
import building_layers from './layers/building.json';

import addMapDOM from "./addMapDOM"
import mapstyle from "./mapstyle"
import pinsStyle from "./pinsStyle"
import urlparser from "./urlparser"
import openindoor_machine from "./openindoor_machine"
// import avatar from "./avatar"

// import MapboxInspect from 'mapbox-gl-inspect'
// import 'mapbox-gl-inspect/dist/mapbox-gl-inspect.css'

addMapDOM()

const map = new maplibregl.Map({
    'container': 'map',
    'center': [-1.70188, 48.11915],
    'bearing': 0,
    'pitch': 60,
    'zoom': 17,
    'style': mapstyle(),
    'hash': true
});

pinsStyle(map)



let statemachine = openindoor_machine(map)

let my_geojson = urlparser(map, statemachine);

// avatar(map)

// controls.activateLevelControl()
// controls.deactivateLevelControl()

// map.addControl(new MapboxInspect({
//     popup: new maplibregl.Popup({
//         closeButton: false,
//         closeOnClick: false
//     })
// }));