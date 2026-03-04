# 🎮 Mängude Loomise Õppeplaan — Nullist Spetsialistini

## Suur Idee

Luua **terviklik, eestikeelne mängude loomise õppekeskkond**, mis on üles ehitatud GitHub Pages veebilehena.
Iga teema koosneb kahest osast: **juhendatud projekt** (samm-sammult koos juhendiga) ja **iseseisev projekt** (sarnane, aga ise lahendatav).
Õppija liigub loogilises järjekorras **2D → 3D** suunas, omandades teel kõik vajalikud oskused — alates esimesest koodireast kuni AI-toega professionaalse mänguni.

---

## Struktuur ja Filosoofia

```
📁 games/
├── 📁 docs/                  ← GitHub Pages veebileht (juhendid, artiklid)
│   ├── index.html            ← Avaleht / õppekaardi visuaal
│   ├── 📁 moodulid/          ← Iga moodul = üks kaust
│   │   ├── 01-alustamine/
│   │   ├── 02-2d-pohialused/
│   │   ├── ...
│   │   └── 12-ai-integratsioon/
│   └── 📁 assets/            ← Pildid, diagrammid, GIF-id
├── 📁 projektid/             ← Kõik mänguprojektid (kood)
│   ├── 📁 juhendatud/        ← Juhendiga tehtud projektid
│   └── 📁 iseseisev/         ← Iseseisvad harjutusprojektid
├── .gitignore
├── README.md
├── LICENSE
└── idee.md                   ← See fail
```

---

## Moodulid (Loogiline Järjekord)

### 🟢 TASE 1 — Algaja (Nullist alustamine)

#### Moodul 01 · Arenduskeskkonna Seadistamine
- **Juhend:** Paigalda VS Code, Node.js, Git. Loo esimene repo, tee esimene commit.
- **Iseseisev:** Loo uus repo teise projekti jaoks, seadista `.gitignore`, tee `README.md`.
- **Teemad:** Terminal, Git põhikäsud (`init`, `add`, `commit`, `push`), GitHub konto, SSH võtmed.
- **Harjutused:**
  1. Paigalda VS Code ja seadista 5 olulist laiendust (ESLint, Prettier, GitLens, Live Server, Estonian Language Pack)
  2. Loo GitHub konto, genereeri SSH võti, testi ühendust `ssh -T git@github.com`
  3. Loo kaust, initsialiseeri repo, lisa 3 faili, tee 3 eraldi commiti kirjeldavatele sõnumitega
  4. Loo GitHub repo, ühenda remote, pushi kood üles
  5. Muuda faili GitHubis, tõmba muudatus `git pull`-iga alla

#### Moodul 02 · HTML5 Canvas & JavaScript Põhialused
- **Juhend:** Joonista Canvas-ile kujundeid, liiguta objekti klaviatuuriga.
- **Iseseisev:** Loo lihtne "värvimise" rakendus kus hiire klikkidega tekivad kujundid.
- **Teemad:** Canvas API, `requestAnimationFrame`, sündmused (events), põhilised JS struktuurid.
- **Harjutused:**
  1. Joonista Canvas-ile Eesti lipp (kolm ristkülikut õigete värvidega)
  2. Loo animeeritud pall, mis põrkab ekraani servadest tagasi
  3. Lisa klaviatuuriga juhitav ruut — WASD liigutab, ruut ei tohi ekraanilt välja minna
  4. Loo hiire jälgija — ring jälgib kursori positsiooni sujuvalt (lerp)
  5. Kombineeri kõik: liikuv mängija + hiire sihtimispunkt + animeeritud taust

#### Moodul 03 · Esimene 2D Mäng — "Püüa Objekt"
- **Juhend:** Mängija liigub vasakule/paremale, taevast kukuvad objektid, skoor.
- **Iseseisev:** Sama kontseptsioon teise teemaga (nt kosmoses asteroidide vältimine).
- **Teemad:** Game loop, collision detection, skoorisüsteem, game over loogika.
- **Harjutused:**
  1. Ehita game loop `requestAnimationFrame`-iga — kuva FPS loendurit ekraanil
  2. Loo mängija tegelane, mis liigub vasakule/paremale (nooleklahvid)
  3. Lisa kukuvad objektid — iga 2 sekundi tagant tekib uus juhuslikust kohast
  4. Implementeeri AABB collision detection — mängija + objekt kokkupõrge
  5. Lisa skoorisüsteem (püütud objektid), elu süsteem (3 elu), game over ekraan
  6. Lisa raskusastme tõus — mida kauem mängid, seda kiiremini kukuvad
  7. Lisa start-menüü, game over ekraan "Proovi uuesti" nupuga, high score (localStorage)

#### Moodul 03b · Mängu Matemaatika Põhialused
- **Juhend:** Vektorid, trigonomeetria, juhuslikud arvud mängudes.
- **Iseseisev:** Loo partiklisüsteem mis kasutab vektoreid ja trigonomeetriat.
- **Teemad:** 2D vektorid, kaugus, nurk, skalaarkorrutis, lineaarne interpolatsioon (lerp).
- **Harjutused:**
  1. Implementeeri Vector2D klass (add, subtract, normalize, magnitude, dot)
  2. Loo objekt mis liigub hiire suunas kasutades vektoreid
  3. Loo pöörlevad objektid kasutades `sin()` ja `cos()`
  4. Ehita lihtne partiklisüsteem — plahvatus klikiga (100 osakest, igaühel suund + kiirus)
  5. Implementeeri lerp funktsioon ja loo sujuv kaamera jälgimine

---

### 🟡 TASE 2 — Edasijõudnud Algaja

#### Moodul 04 · Git Versioonihaldus Süvitsi
- **Juhend:** Branching, merging, pull requestid, konfliktide lahendamine.
- **Iseseisev:** Loo feature branch oma mängule, tee PR, merge.
- **Teemad:** `branch`, `merge`, `rebase`, GitHub Flow, `.gitignore` strateegiad, tagid ja release'id.
- **Harjutused:**
  1. Loo `feature/new-enemy` branch, lisa kood, merge tagasi `main`-i
  2. Simuleeri konflikti: muuda sama rida kahel branchil, lahenda merge conflict
  3. Kasuta `git rebase` et hoida ajalugu puhtana
  4. Loo oma esimene Pull Request GitHubis, lisa kirjeldus ja screenshot
  5. Lisa tag `v1.0.0` ja loo GitHub Release koos changelog'iga
  6. Seadista branch protection rules `main` branchile

#### Moodul 05 · 2D Mängumootor — Phaser.js Sissejuhatus
- **Juhend:** Loo platformer-mäng Phaser.js-iga (mängija, platvormid, hüppamine, kogutavad asjad).
- **Iseseisev:** Loo top-down dungeon crawler sama mootoriga.
- **Teemad:** Spraidid, animatsioonid, füüsikamootor (Arcade Physics), tilemapid, scene'id.
- **Harjutused:**
  1. Seadista Phaser.js projekt Vite'iga — hello world stseen
  2. Laadi sprait, lisa gravitatsioon, lase tegelasel platvormile kukkuda
  3. Lisa klaviatuuriga juhtimine — kõnd ja hüppamine
  4. Loo tilemap Tiled editoriga, impordi Phaserisse
  5. Lisa kogutavad mündid (overlap detection, skoor)
  6. Lisa vaenlane, kes liigub edasi-tagasi platvormil
  7. Loo 3 erinevat taset (scene'id), lisa tasemete vahel liikumine
  8. Lisa elu, surm, respawn ja võidu tingimus

#### Moodul 06 · Graafika & Heli
- **Juhend:** Loo/kasuta sprite sheet'e, lisa taustamuusika ja heliefektid.
- **Iseseisev:** Disaini oma originaalne tegelane ja animeeri see.
- **Teemad:** Aseprite/Piskel pixel art, sprite sheet'id, helifailid (Howler.js), tilemapid (Tiled editor).
- **Harjutused:**
  1. Loo 16x16 piksel-art tegelane Piskelis (idle, kõnd, hüpe — min 12 kaadrit)
  2. Ekspordi sprite sheet ja laadi Phaserisse, loo animatsioonid
  3. Disaini tileset (murukas, kivi, vesi, puu) ja ehita sellega tase
  4. Lisa taustamuusika Howler.js-iga (loop, volume kontroll)
  5. Lisa heliefektid: hüpe, mündi kogumine, kahju saamine, game over
  6. Loo parallax scrolling taust (3+ kihti erineva kiirusega)

#### Moodul 06b · TypeScript Sissejuhatus Mängude Jaoks
- **Juhend:** Konverteeri olemasolev JS mäng TypeScriptiks.
- **Iseseisev:** Ehita uus väike mäng otse TypeScriptis algusest.
- **Teemad:** Tüübid, interface'id, enum'id, generics, tsconfig, Vite + TS.
- **Harjutused:**
  1. Seadista TypeScript projekt Vite'iga, kirjuta esimene `.ts` fail
  2. Loo `interface Player { x: number; y: number; speed: number; health: number }`
  3. Konverteeri "Püüa Objekt" mäng JavaScriptist TypeScripti
  4. Kasuta `enum GameState { Menu, Playing, Paused, GameOver }`
  5. Loo geneerilised tüübid: `ObjectPool<T>`, `EventEmitter<T>`

---

### 🟠 TASE 3 — Keskmine

#### Moodul 07 · Mängu Arhitektuur & Mustrid
- **Juhend:** Refaktori olemasolev mäng — Entity-Component süsteem, state management.
- **Iseseisev:** Ehita uus mäng kasutades ECS mustrit algusest.
- **Teemad:** Game states (menüü, mäng, paus), Entity-Component-System, Object Pooling, Observer pattern.
- **Harjutused:**
  1. Implementeeri State Machine klass: `StateMachine`, `State`, `Transition`
  2. Ehita menüü → mäng → paus → game over state flow
  3. Loo Entity-Component-System: `Entity`, `Component`, `System` baasklassid
  4. Implementeeri `PositionComponent`, `RenderComponent`, `MovementSystem`
  5. Loo Object Pool: taaskasuta kuule/vaenlasi selle asemel et pidevalt uusi luua
  6. Implementeeri Observer pattern: `EventBus` mängusündmuste jaoks

#### Moodul 07b · Andmestruktuurid & Algoritmid Mängudes
- **Juhend:** Quad-tree, spatial hashing, sorteerimis- ja otsimisalgoritmid.
- **Iseseisev:** Optimeeri oma mängu collision detection kasutades quad-tree-d.
- **Teemad:** Quad-tree, spatial hashing, A* pathfinding, raudpuusüsteemid.
- **Harjutused:**
  1. Implementeeri QuadTree klass ja visualiseeri seda Canvas'il
  2. Loo 1000 objektiga stseen: võrdle brute-force vs QuadTree collision detection
  3. Implementeeri A* pathfinding algoritm grid-põhisel kaardil
  4. Visualiseeri A* otsing samm-sammult (animatsioon)
  5. Ehita navigation mesh lihtsa 2D kaardi jaoks

#### Moodul 08 · CI/CD & Automaatne Deploy
- **Juhend:** Seadista GitHub Actions — automaatne build + deploy GitHub Pages'ile.
- **Iseseisev:** Lisa testid ja linti oma pipeline'i.
- **Teemad:** GitHub Actions, YAML workflow'id, ESLint, automaatne testimine, Lighthouse audit.
- **Harjutused:**
  1. Kirjuta `.github/workflows/deploy.yml` — build ja deploy igal pushil
  2. Lisa ESLint ja Prettier oma projekti, seadista reeglid
  3. Kirjuta esimesed unit testid Jest-iga (testi collision detection funktsiooni)
  4. Lisa testide käivitamine CI pipeline'i — PR ei saa mergeda kui testid failivad
  5. Lisa Lighthouse CI audit — jälgi jõudlust automaatselt
  6. Lisa badge'id README-sse (build status, test coverage)

#### Moodul 08b · Mängu UI/UX Disain
- **Juhend:** Loo professionaalne mängu-sisene UI — HUD, menüüd, dialoogid.
- **Iseseisev:** Disaini ja implementeeri terve UI süsteem oma mängule.
- **Teemad:** HUD disain, menüü-süsteemid, CSS animatsioonid mängudes, juurdepääsetavus.
- **Harjutused:**
  1. Loo HUD: eluribad, skoor, minimap, inventar
  2. Ehita animeeritud peamenüü (start, seaded, credits)
  3. Loo seadete menüü: heli volume, keybinding'ud, ekraani suurus
  4. Implementeeri dialoogisüsteem NPC-de jaoks (tekst ilmub tähthaaval)
  5. Lisa juurdepääsetavus: klaviatuuriga navigeeritavad menüüd, kõrge kontrast

#### Moodul 09 · Multiplayer & Võrgumäng (2D)
- **Juhend:** Lisa oma 2D mängule real-time multiplayer (WebSocket + Node.js server).
- **Iseseisev:** Loo lihtne lobby-süsteem ja chat.
- **Teemad:** WebSocket, Socket.io, client-server arhitektuur, lag compensation, game state sync.
- **Harjutused:**
  1. Seadista Node.js + Express + Socket.io server
  2. Loo lihtne chat-rakendus — sõnumid kõigile ühendatud klientidele
  3. Lisa teise mängija tegelane ekraanile — näed teist mängijat liikumas
  4. Implementeeri server-authoritative movement (server kontrollib positsioone)
  5. Lisa lag compensation: client-side prediction + server reconciliation
  6. Loo lobby süsteem: tubade loomine, liitumine, mängijate nimekiri

#### Moodul 09b · Protseduurne Genereerimine
- **Juhend:** Loo protseduurne dungeon generaator.
- **Iseseisev:** Lisa protseduurne maastiku genereerimine oma mängule.
- **Teemad:** Perlin noise, BSP puud, Wave Function Collapse, seed-põhine genereerimine.
- **Harjutused:**
  1. Implementeeri Perlin noise ja visualiseeri seda (maastiku kõrguskaart)
  2. Loo BSP-põhine dungeon generaator (ruumid + koridorid)
  3. Lisa seemnepõhine genereerimine — sama seed = sama dungeon
  4. Loo lõpmatu runner-tüüpi taseme generaator
  5. Implementeeri Wave Function Collapse lihtne tilemap'i jaoks

---

### 🔴 TASE 4 — Edasijõudnud (3D-le Üleminek)

#### Moodul 10 · 3D Põhialused — Three.js
- **Juhend:** Loo 3D stseen (kuubik, valgus, kaamera), mängija liigutamine 3D ruumis.
- **Iseseisev:** Ehita 3D labürint, kus mängija peab väljapääsu leidma.
- **Teemad:** Three.js, 3D koordinaadid, mesh'id, materjalid, valgustus, kaamera juhtimine.
- **Harjutused:**
  1. Seadista Three.js + Vite projekt, kuva pöörlev kuubik
  2. Lisa erinevaid geomeetriaid (sfäär, silinder, torus) ja materjale (phong, standard, PBR)
  3. Seadista valgustus: ambient, directional, point light, varjud
  4. Implementeeri orbit camera + first-person camera lülitamine
  5. Laadi 3D mudel (glTF) ja kuva see stseenis
  6. Lisa lihtne mängija: kuubik mis liigub WASD-ga 3D maastikul
  7. Implementeeri raycasting — kliki objektil = vali see

#### Moodul 10b · Shaderid & Visuaalefektid
- **Juhend:** Kirjuta oma esimesed GLSL shaderid.
- **Iseseisev:** Loo custom visuaalefekt (vesi, tuli, portaal).
- **Teemad:** Vertex shaderid, fragment shaderid, GLSL, post-processing, bloom, fog.
- **Harjutused:**
  1. Kirjuta esimene custom shader — värvigradient kuubikul
  2. Loo laineline vee shader (vertex displacement + sin)
  3. Lisa post-processing: bloom, vignette, color grading
  4. Loo dissolve efekt (objekt kaob ära sujuvalt)
  5. Implementeeri fog shader — kauge objektid muutuvad uduseks

#### Moodul 11 · 3D Mängumootor — Babylon.js / Three.js Jätkukursus
- **Juhend:** Loo FPS/TPS mäng — maastik, füüsika, vaenlased, laskmine.
- **Iseseisev:** Loo racing game või lennusimulaator.
- **Teemad:** 3D füüsika (Cannon.js/Ammo.js), 3D mudelid (glTF), partikliefektid, skybox, post-processing.
- **Harjutused:**
  1. Seadista Cannon.js füüsika — kuubikud kukuvad ja põrkavad
  2. Loo maastik heightmap'ist + lisas puud ja kivid
  3. Implementeeri FPS kontroller: liikumine, hüppamine, hiire vaatamine
  4. Lisa laskmine: raycasting + particle impact effect
  5. Loo vaenlased AI-ga: liiku mängija poole, väldi takistusi
  6. Lisa inventar: relvade vahetus, kuulide loendamine
  7. Loo skybox ja päeva/öö tsükkel

#### Moodul 11b · 3D Mudelid & Animatsioonid
- **Juhend:** Loo ja impordi 3D mudeleid, lisa skelett-animatsioonid.
- **Iseseisev:** Animeeri tegelane: idle, kõnd, jooks, hüpe, rünnak.
- **Teemad:** Blender põhitõed, glTF eksport, skelett-animatsioon, morph targets, animation blending.
- **Harjutused:**
  1. Loo Blenderis lihtne 3D tegelane (low-poly humanoid)
  2. Lisa skeleton ja rig, loo idle animatsioon
  3. Ekspordi glTF formaadis, laadi Three.js-is
  4. Implementeeri animation state machine: idle ↔ walk ↔ run ↔ jump
  5. Lisa animation blending — sujuv üleminek animatsioonide vahel

---

### 🟣 TASE 5 — Spetsialist (Kõrgtase)

#### Moodul 12 · AI Integratsioon Mängudes
- **Juhend:** Lisa NPC-dele AI käitumine — jälitamine, patrullimine, otsuste tegemine.
- **Iseseisev:** Loo mäng dünaamilise raskusastmega (AI kohandub mängija tasemele).
- **Teemad:** Finite State Machines, Behavior Trees, A* pathfinding, ML-agents (TensorFlow.js), protseduurne genereerimine.
- **Harjutused:**
  1. Implementeeri FSM: NPC vahetab olekuid (idle → patrol → chase → attack → flee)
  2. Visualiseeri FSM olekud ekraanil NPC kohal (debug mode)
  3. Ehita Behavior Tree süsteem: Selector, Sequence, Decorator node'id
  4. Loo tark vaenlane: patrullimarsruut, nägemisraadius, kuulmisraadius, uurimine
  5. Implementeeri flocking (boid) algoritm — 100 vaenlast käituvad nagu parv
  6. Lisa TensorFlow.js: treeni agent ise mängima (reinforcement learning demo)

#### Moodul 13 · AI-toega Arendus (Copilot, ChatGPT, Cursor)
- **Juhend:** Kasuta AI tööriistu mängu arendamisel — koodi genereerimine, debugging, optimeerimine.
- **Iseseisev:** Loo terve mäng AI abilisega ja dokumenteeri protsess.
- **Teemad:** GitHub Copilot, prompt engineering, AI-ga refaktorimine, AI geneeritud graafika (DALL-E, Stable Diffusion).
- **Harjutused:**
  1. Seadista GitHub Copilot VS Code-is, genereeri esimene funktsioon
  2. Kasuta prompt engineering't: kirjuta selge kommentaar → lase AI-l kood genereerida
  3. Debugi mängu AI abiga: "Miks mu mängija läbi seina läheb?" → lahendus
  4. Refaktori terve moodulisüsteem AI soovituste abil
  5. Genereeri mängu spraidid AI-ga (DALL-E / Stable Diffusion → pixel art)
  6. Dokumenteeri kogu protsess: mis töötas, mis ei töötanud, mida AI hästi teeb

#### Moodul 14 · Optimeerimine & Jõudlus
- **Juhend:** Profilee oma mängu, optimeeri rendering, vähenda laadimisaega.
- **Iseseisev:** Optimeeri vanem projekt alla 60fps → stabiilne 60fps.
- **Teemad:** Chrome DevTools, memory leaks, texture atlased, lazy loading, Web Workers, WASM.
- **Harjutused:**
  1. Profilee oma mängu Chrome DevToolsiga — leia bottleneck
  2. Optimeeri rendering: batch draw calls, vähenda DOM manipulatsioone
  3. Leia ja paranda memory leak (heap snapshot enne ja pärast)
  4. Implementeeri texture atlas — üks suur pilt vs 50 väikest
  5. Liiguta füüsika arvutused Web Worker'isse
  6. Kompileeri kriitiline funktsioon WebAssemblysse (Rust/C → WASM)
  7. Lisa asset lazy loading — laadi ainult seda mida parasjagu vaja

#### Moodul 14b · Turvalisus & Anti-Cheat
- **Juhend:** Kaitse oma multiplayer-mängu petturite eest.
- **Iseseisev:** Implementeeri server-side valideerimissüsteem.
- **Teemad:** Server-side authority, input validation, rate limiting, obfuscation.
- **Harjutused:**
  1. Demonstreeri kuidas client-side mängu on lihtne häkkida (muuda muutujaid konsoolis)
  2. Liiguta kriitiline loogika serverisse — skoor, elud, positsioon
  3. Lisa input validation: max kiirus, liikumise sagedus
  4. Implementeeri rate limiting Socket.io sõnumitele
  5. Lisa anti-tamper kontroll: hash-i kliendi koodi

#### Moodul 15 · Publitseerimine & Portfoolio
- **Juhend:** Valmista mäng avaldamiseks — itch.io, GitHub Pages, PWA.
- **Iseseisev:** Loo oma mänguportfoolio veebileht GitHubi kaudu.
- **Teemad:** PWA (Progressive Web App), SEO, Open Graph meta, analytics, mängu monetiseerimine, itch.io deploy.
- **Harjutused:**
  1. Lisa manifest.json ja service worker — muuda mäng PWA-ks (installitav)
  2. Lisa Open Graph metaandmed — ilus preview kui jagad linki
  3. Optimeeri SEO: semantiline HTML, meta description, structured data
  4. Deploy itch.io-sse, seadista leht (kirjeldus, screenshotid, teaser)
  5. Lisa Google Analytics — jälgi mängijate arvu ja käitumist
  6. Loo portfoolio veebileht: kõik mängud, kirjeldused, lingid, kontaktinfo
  7. Kirjuta iga mängu kohta postmortem: mida õppisid, mis läks hästi, mis mitte

---

## Tehnoloogiad (Kogu Teekond)

| Kategooria | Tööriistad |
|---|---|
| **Keel** | JavaScript / TypeScript |
| **2D Mootor** | Phaser.js, raw Canvas API |
| **3D Mootor** | Three.js, Babylon.js |
| **Versioonihaldus** | Git, GitHub, GitHub Flow |
| **CI/CD** | GitHub Actions, GitHub Pages |
| **Graafika** | Aseprite, Piskel, Tiled, Blender (3D) |
| **Heli** | Howler.js, jsfxr, Audacity |
| **AI arenduses** | GitHub Copilot, ChatGPT, TensorFlow.js |
| **AI mängus** | FSM, Behavior Trees, A*, ML-agents |
| **Multiplayer** | Socket.io, WebSocket, Node.js |
| **Testimine** | Jest, Playwright, ESLint |
| **Deploy** | GitHub Pages, itch.io, Vercel |

---

## GitHub Pages Veebilehe Visioon

- **Avaleht:** Visuaalne õppekaart (roadmap) — mängija näeb oma progressi
- **Iga moodul:** Ilusasti vormindatud juhend koos koodi näidetega, piltidega, mängitavate demo'dega
- **Mängitavad demod:** Iga juhendi juures on link töötavale mängule (otse brauseris)
- **Tumeda/heleda režiim:** Arendajasõbralik disain
- **Responsive:** Töötab ka mobiilis (lugemine, mitte mängimine)
- **Otsing:** Kiire otsingufunktsioon kõigist moodulitest
- **Progress tracker:** LocalStorage-põhine edenemise jälgimine

---

## Põhimõtted

1. **Samm-sammult** — Iga juhend eeldab, et lugeja on algaja. Midagi ei jäeta "ilmseks".
2. **Tee-ise-ka** — Iga juhendi kõrval on sarnane iseseisev ülesanne kinnistamiseks.
3. **Git algusest peale** — Iga projekt algab `git init`-iga. Commitid on osa juhendist.
4. **Kaasaegne** — ES2024+, TypeScript, moodsad tööriistad ja praktikad.
5. **AI-sõbralik** — AI pole eraldi teema, vaid läbiv tööriist kogu kursuse vältel.
6. **Mängitav portfoolio** — Lõpptulemus on professionaalne veebileht koos töötavate mängudega.
7. **Eestikeelne** — Kogu sisu on eesti keeles, koodinäited ingliskeelsete muutujanimedega (nagu päriselus).

---

## Järgmine Samm

> Kui see idee on kinnitatud, alustan **Moodul 01** loomisega — arenduskeskkonna seadistamine,
> Git repo loomine ja GitHub Pages esimene deploy.

---

*Loodud: 5. märts 2026*
