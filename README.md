# Dropzone: Flight &amp; Skydive Simulator

Fly the jump plane over the island, leave it at 13,000 feet, and land the canopy. Browser game, no install, works on desktop and phone.

**Play:** https://roberto-ryan.github.io/dropzone/

## How to play

Two ways in: **Start on jump run** puts you in the air at 13,000 ft with the drop zone ahead, or **Take off from the runway** makes you fly it up yourself.

Jump with **Space** (or the orange button on touch), then pull, then flare. Nothing opens the canopy for you. Land near the drop zone to score, and you get a letter grade.

### Desktop keys

- **W / S** stick forward and back, or track and slow in freefall, or front risers and brakes under canopy
- **A / D** ailerons, turn, steer
- **Q / E** rudder, also steers the nose wheel
- **R / F** throttle, **T / G** elevator trim, **B** wheel brakes
- **Space** jump, then pull, then flare
- **C** camera, **P** pause, **M** mute, **U** toggle units
- **Mouse drag** look around

### Touch

Left thumb stick flies, steers the fall and flares the canopy. Orange button is jump, pull, flare. Drag the right side to look. THR slider is engine power. Landscape gives a wider view.

Options for imperial (ft, kt) or metric (m, km/h) units, and Auto, High or Low detail. Low is the one to pick on an older phone.

## What is in the box

- `index.html`, the shell, HUD and menus
- `game.js`, the whole game including a bundled build of three.js, so nothing loads from a CDN
- `assets/`, terrain height map, tree placements, skydiver rig, sky, cloud and texture tiles

The island is a height map shaped by a river-erosion simulation with baked sun shadows. The turboprop, the ram-air parachute, the airfield and all the sound are generated in code. Physics is a six degree of freedom aircraft model sized like a Cessna 208, with stall, spin, propeller effects and sprung landing gear in a standard atmosphere. Freefall uses body drag and tracking lift, and the canopy flies on a lift and drag polar, so glide, diving turns, flare and stall are not scripted.

## Credits

### Poly Haven (CC0)

- `kloofendal_48d_partly_cloudy_puresky` HDRI sky and all lighting
- `aerial_grass_rock`, `sparse_grass`, `aerial_rocks_02`, `rock_face_03`, `aerial_beach_01`, `dirt_aerial_02`, `snow_02`, `coast_sand_rocks_02`, `rocky_trail`, `asphalt_02`, `tree_small_02`

### Other open assets

- Skydiver body, the "Soldier" sample character from the three.js examples (a Mixamo character), re-posed and fitted with a parachute rig
- Water normal map from the three.js examples. Cloud sprite from pmndrs/assets (CC0)
- Rendering by [three.js](https://threejs.org) (MIT)

## Running locally

The game loads its assets with `fetch`, so it needs a web server. Opening `index.html` straight off disk will not work.

```
python3 -m http.server 8000
```

Then open http://127.0.0.1:8000/
