let lastUpdate = "3/12/2025 (v7.0.0)"
let cdnUrl = "https://celebrated-stardust-91ad96.netlify.app"
//CHANGE IMAGES ON HOME PAGE TOO
const data = [
    {
        name: "OvO",
        id: "OvO",
        genre: "Arcade",
        description: "OvO is a super fun game!",
        link: "https://mocvg.github.io/projects/ovo/game.html",
        img: `https://mocvg.github.io/projects/ovos/ovo.png`,
        file_based: true,
        publisher: "Dedra Games",
        controls: [
            "Figure it out",
        ],
    },
    {
        name: "Monkey Mart",
        id: "MonkeyMart",
        genre: "Arcade",
        description: "Doesn't work? go to https://samotten.me/sdadasdadwmonkey-mart/ to play!!",
        link: "https://samotten.me/sdadasdadwmonkey-mart/",
        img: `https://mocvg.github.io/projects/ovos/ovo.png`,
        file_based: true,
        publisher: "MonkeyMart",
        controls: [
            "Figure it out",
        ],
    },
    {
        name: "OvO - Modded",
        id: "OvOModded",
        genre: "Arcade",
        description: "OvO-- with a twist!",
        link: "https://arjun99ab.github.io/ovo/1.4.1/",
        img: `https://mocvg.github.io/projects/ovos/ovo.png`,
        file_based: true,
        publisher: "Dedra Games",
        controls: [
            "Press ~ for hacks",
        ],
    },
    {
        name: "OvO2",
        id: "OvO2",
        genre: "Arcade",
        description: "OvO2 is a super fun game!",
        link: "https://mocvg.github.io/projects/ovo-2/game.html",
        img: `https://mocvg.github.io/projects/ovo2/ovo.png`,
        file_based: false,
        publisher: "Dedra Games",
        controls: [
            "Figure it out",
        ],
    },
    {
        name: "Basketball Stars",
        id: "BBStars",
        genre: "Basketball Game",
        description: "A fun game called Basketball Stars!",
        link: "https://ubg98.github.io/BasketballStars/",
        img: `${cdnUrl}/High Compressed/highcompress_1v1-lol.png`,
        file_based: false,
        publisher: "BBStars",
        controls: [
            "Figure it Out",
        ],
    },
    {
        name: "2 Player Games",
        id: "2_player_games",
        genre: "2 Player",
        description: "2 Player Games is a 2 player shooter game that you and your friend can play. You earn coins from playing which can then be used to buy other charaters with different guns and rarities.",
        link: `${cdnUrl}/Game Files/2 Player Games/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_2_player_games.png`,
        file_based: true,
        publisher: "Scratch - Llxma909",
        controls: [
            "Player 1: WAD - Movement, S - Shoot",
            "Player 2: Up/Left/Right Arrow - Movement, Down Arrow - Shoot",
            "R - Menu"
        ]
    },
    {
        name: "Snow Rider 3D",
        id: "snowrider3d",
        genre: "Arcade",
        description: "Snow Rider 3D is fun.",
        link: `http://samotten.me/dsfsgrgedg/`,
        img: `${cdnUrl}/High Compressed/highcompress_2_player_games.png`,
        file_based: true,
        publisher: "Sam",
        controls: [
            "Player 1: WAD - Movement, S - Shoot",
            "Player 2: Up/Left/Right Arrow - Movement, Down Arrow - Shoot",
            "R - Menu"
        ]
    },
    {
        name: "99 Balls",
        id: "99balls",
        genre: "Arcade",
        description: "In this game, you're trying to destroy all the balls before they reach the bottom. It may sound simple but it gets harder and harder as you reach higher levels.",
        link: "https://files.acticdn.com/278374/22226/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_99_balls.png`,
        file_based: false,
        publisher: "GameSnacks",
        controls: [
            "Slide Left Click - Aim",
        ],
        devices: "Computer, Mobile (Best in Windowed Fullscreen)"
    },
    {
        name: "2048",
        id: "2048",
        genre: "Puzzle",
        description: "In this game, you're trying to slide the number tiles on the grid to combine them to create a tile with the number 2048. Can you go beyond 2048?",
        link: "Game Files/2048/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_2048.png`,
        file_based: true,
        publisher: "Solebon LLC",
        controls: [
            "Arrow Keys/WASD - Move tiles",
        ],
        devices: "Computer, Mobile"
    },
    // {
    //     name: "Adventure Capitalist",
    //     id: "adventure_capitalist",
    //     genre: "Incremental",
    //     description: "Adventure Capitalist is a game where you can form your own multi-national conglomerate to create a world-wide, monopolistic economy.",
    //     link: "https://than1089.github.io/adventure-capitalist/",
    //     // link: "Game Files/Adventure Capitalist/public/index.html",
    //     img: `${cdnUrl}/High Compressed/highcompress_adventure_capitalist.png`,
    //     file_based: false,
    //     publisher: "Hyper Hippo Productions",
    //     controls: [
    //         "Right Click - Buy Items",
    //     ]
    // },
    {
        name: "Age of War",
        id: "age_of_war",
        genre: "Defense / Strategy",
        description: "Take control of 16 different units and 15 different turrets to defend your base and destroy your enemy. In this game, you start at the caveman age, then evolve! There are a total of 5 ages, each with its own unique units and turrets.",
        link: "Game Files/Age of War/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_age_of_war.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Airman Challenge",
        id: "airman_challenge",
        genre: "Adventure",
        description: "See if you can complete the type of missions Airmen carry out everyday with this interactive game that puts you in the muddle of action around the world.",
        link: "https://www.airforce.com/airmanchallenge/",
        img: `${cdnUrl}/High Compressed/highcompress_airman_challenge.png`,
        file_based: false,
        publisher: "U.S. Air Force",
        controls: [
            "idk the controls to this game",
        ],
        broken: true,
        note: "Game is blocked"
    },
    {
        name: "Among Us",
        id: "among_us",
        genre: "Mystery",
        description: "sus",
        link: "Game Files/Among Us/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_among_us.png`,
        file_based: true,
        publisher: "kevin.games",
        controls: [
            "WASD/Arrow Keys - Movement",
            "Q - Kill",
            "E - Vent",
            "F - Sabotage",
        ]
    },
    {
        name: "Appel",
        id: "appel",
        genre: "Platformer",
        description: "It's your job to help Appel navigate through each level, avoiding danger, and collecting as many golden apples as you can before finally facing Micro Manager and restoring peace to the world.",
        link: `${cdnUrl}/Game Files/Appel/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_appel.png`,
        file_based: true,
        publisher: "Scratch - griffpatch",
        controls: [
            "Arrow Keys/WASD/Spacebar - Movement",
        ]
    },
    {
        name: "Asteroids",
        id: "asteroids",
        genre: "Arcade / Shooter",
        description: "In this game you control a single spaceship in an asteroid field which is periodically traversed by flying saucers. The object of the game is to shoot and destroy the asteroids and saucers without getting hit by them.",
        link: "Game Files/Asteroids/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_asteroids.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Arrow Keys - Movement",
            "Space - Shoot",
        ]
    },
    {
        name: "Bacon May Die",
        id: "bacon_may_die",
        genre: "Action",
        description: "In this game you are a pig fighting your way through hordes of bacon-hungry enemies.",
        link: "https://tybsi.com/games/bacon-may-die/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_bacon_may_die.png`,
        file_based: false,
        publisher: "tybsi.com",
        controls: [
            "Arrow Keys - Movement",
            "Left/Right Arrow Keys - Attack",
            "Hold Left/Right Arrow Key - Long Range Attack",
        ],
        broken: true,
        note: "Game is blocked"
    },
    {
        name: "Ball Blast",
        id: "ball_blast",
        genre: "Arcade",
        description: "In this game you must destroy all the balls without one hitting you. You can then upgrade and unlock new guns with coins that you get.",
        link: `${cdnUrl}/Game Files/Ball Blast/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_ball_blast.png`,
        file_based: true,
        publisher: "Scratch - AnimationsScratch",
        controls: [
            "Hold Right Click - Swipe & Shoot",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Basketball Stars",
        id: "basketball_stars",
        genre: "2 Player / Sports",
        description: "In this game you can play solo or with a friend as a varity of legendary basketball players.",
        link: `${cdnUrl}/Game Files/Basketball Stars/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_basketball_stars.png`,
        file_based: true,
        publisher: "Madpuffers",
        controls: [
            "Player 1: WASD - Movement, A (Jump) - Shoot",
            "V - Special Item, B - Steal",
            "Player 2: Arrow Keys - Movement, Up Arrow (Jump) - Shoot",
            "K - Special Item, L - Steal",
        ]
    },
    {
        name: "BasketBros.io",
        id: "basketbros-io",
        genre: "2 Player / Sports",
        description: "BasketBros.io is a charming basketball game with a cool retro look that can be played with friends or against CPUs.",
        link: "https://basketball.services/",
        img: `${cdnUrl}/High Compressed/highcompress_basketbros-io.png`,
        file_based: false,
        publisher: "Blue Wizard Digital",
        controls: [
            "Unknown",
        ],
        broken: true,
        note: "Game is blocked"
    },
    {
        name: "Binding of Isaac",
        id: "binding_of_isaac",
        genre: "Rouge-like",
        description: "The Binding of Isaac is a randomly generated action RPG shooter with heavy Rouge-like elements.",
        link: "https://advanced-channeler.02.gz-associates.com/?s=%3furl%3D%252Fflash%252Fbinding-of-isaac.swf&t=tam-flash-ruffle",
        img: `${cdnUrl}/High Compressed/highcompress_binding_of_isaac.png`,
        file_based: false,
        publisher: "Headup Games",
        controls: [
            "WASD - Movement",
            "Arrow Keys/Mouse - Shoot",
            "Space - Use Current Item",
            "Q - Use Single Item",
            "Shift/E - Place Bomb",
            "R - Restart",
            "Left CTRL - Drop Equiped Trinket"
        ]
    },
    {
        name: "Bloons TD 2",
        id: "bloons_td_2",
        genre: "Tower Defense",
        description: "Strategically place your defenses, upgrade your units, and stop all balloons from passing through.",
        link: "Game Files/Bloons TD 2/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_bloons_td_2.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ]
    },
    {
        name: "Bloxorz",
        id: "bloxorz",
        genre: "Puzzle",
        description: "Bloxorz is a puzzle game that tests your logic and patience. The goal of the game is to put the bloxorz to the destination by rolling it.",
        link: `${cdnUrl}/Game Files/Bloxorz/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_bloxorz.png`,
        file_based: true,
        publisher: "addictinggames.com",
        controls: [
            "Arrow Keys - Movement",
        ]
    },
    {
        name: "Bounce Back",
        id: "bounce_back",
        genre: "Adventure / Rouge-like",
        description: "Bounce Back is a charming and addictive little Zelda inspired rogue-like adventure game where you use boomerangs to battle your way through 10 challenging procedurally generated levels.",
        link: "Game Files/Bounce Back/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_bounce_back.png`,
        file_based: true,
        publisher: "JS13kGames",
        controls: [
            "WASD - Movement",
            "Mouse - Aim",
            "Click - Throw",
            "Space - Dash",
        ]
    },
    {
        name: "Bowmasters",
        id: "bowmasters",
        genre: "Archery",
        description: "Bowmasters is one of the top archery arcade games in the world. Play multiplayer or solo with bowmen.",
        link: "https://html5.iclouds.io/archery-master/?ref",
        img: `${cdnUrl}/High Compressed/highcompress_bowmasters.png`,
        file_based: false,
        publisher: "iclouds.io",
        controls: [
            "Hold Right Click - Aim & Control Power",
            "Release Right Click - Shoot",
        ]
    },
    {
        name: "BoxBob",
        id: "boxbob",
        genre: "Puzzle",
        description: "This is a challenging puzzle game with 16 levels where you play as Bob moving boxes to the correct spot.",
        link: "https://games.engineering.com/boxbob/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_boxbob.png`,
        file_based: false,
        publisher: "engineering.com",
        controls: [
            "WASD/Arrow Keys - Movement",
            "U - Undo",
            "R - Restart",
        ],
        broken: true,
        note: "Game is blocked"
    },
    {
        name: "BreakLock",
        id: "breaklock",
        genre: "Puzzle",
        description: "A hybrid of Mastermind and the Android pattern lock. A game you gonna love to hate. Link the dots to try to find the pattern, you will get clues to help you solve it.",
        link: "Game Files/BreakLock/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_breaklock.png`,
        file_based: true,
        publisher: "engineering.com",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Burrito Bison",
        id: "burrito_bison",
        genre: "Adventure",
        description: "In this game you must launch Burrito Bison as far as you can, bouncing, flying, and soaring through the skies to fend off the invasion of gummies.",
        link: "https://tybsi.com/games/burrito-bison-launcha-libre/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_burrito_bison.png`,
        file_based: false,
        publisher: "tynsi.com",
        controls: [
            "Hold Right Click - Aim & Power",
            "Release Right Click - Release"
        ],
        broken: true,
        note: "Game is blocked"
    },
    {
        name: "Cannon Basketball 4",
        id: "cannon_basketball_4",
        genre: "Sports",
        description: "Cannon Basketball 4 is a sports game where you launch basketballs as you try to solve puzzles, collect stars, and make baskets.",
        link: "Game Files/Cannon Basketball 4/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_cannon_basketball_4.png`,
        file_based: true,
        publisher: "Armor Games",
        controls: [
            "Drag Mouse - Aim & Power",
            "Right Click - Shoot"
        ]
    },
    {
        name: "Cell Machine",
        id: "cell_machine",
        genre: "Puzzle",
        description: "Arrange cells. Build machines. Destroy enemies. Each cell on its own has a simple function, like moving or spawning other cells. But when combined, more interesting behavior emerges…",
        link: "Game Files/Cell Machine/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_cell_machine.png`,
        file_based: true,
        publisher: "samhogan.itch.io",
        controls: [
            "",
        ]
    },
    {
        name: "Chess",
        id: "chess",
        genre: "Classic",
        description: "Chess is one of the oldest and most popular board games. It is played by two opponents, this game also includes an AI, where the objective of the game is to capture the opponent's king.",
        link: "Game Files/Chess/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_chess.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "1st Right Click - Select Piece",
            "2nd Right Click - Move Piece"
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Chrome Dinosaur",
        id: "chrome_dinosaur",
        genre: "Classic",
        description: "In this game you need to guide a pixelated Tyrannosaurus rex across a side-scrolling landscape, avoiding obstacles to achieve a higher score.",
        link: "Game Files/Chrome Dinosaur/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_chrome_dinosaur.png`,
        file_based: true,
        publisher: "Google",
        controls: [
            "Spacebar/Up Arrow - Jump",
            "Down Arrow - Duck"
        ]
    },
    {
        name: "Connect 4",
        id: "connect_4",
        genre: "Classic",
        description: "Connect 4 is a tic-tac-toe-like two-player game in which players alternately place pieces on a board to acheive 4 in-a-row.",
        link: "Game Files/Connect 4/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_connect_4.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Right Click - Place Piece in Row",
            "Right Click - Play Again"
        ],
        broken: true,
        note: "Game style broke (Blocked cross-origin response [link] with MIME type text/html."
    },
    {
        name: "Cookie Clicker",
        id: "cookie_clicker",
        genre: "Incremental",
        description: "Cookie Clicker is an incremental web-broswer game where the goal is to produce as many cookies as you can by clicking on the big cookie and buying items.",
        link: "Game Files/Cookie Clicker/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_cookie_clicker.png`,
        file_based: true,
        publisher: "Orteil",
        controls: [
            "Right Click - Click Cookie/Buy Items",
            "Hold CTRL - Show Bulk of 10",
            "Hold Shift - Show Bulk of 100",
        ]
    },
    {
        name: "CraftMine",
        id: "craftmine",
        genre: "Adventure / Survival",
        description: "CraftMine is a cool 2D Minecraft game, this game is all about surviving for as long as you can with surronding materials.",
        link: "Game Files/CraftMine/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_craftmine.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "WAD - Movement",
            "Right Click - Interact",
        ]
    },
    {
        name: "Crossy Road",
        id: "crossy_road",
        genre: "Arcade",
        description: "The objective of this game is to move a charater through an endless path of static and moving obstacles as far as possible without dying.",
        link: "Game Files/Crossy Road/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_crossy_road.png`,
        file_based: false,
        publisher: "Poki",
        controls: [
            "WASD/Arrow Keys/Right Click - Movement",
        ]
    },
    {
        name: "Cubefield",
        id: "cubefield",
        genre: "Endless",
        description: "Cubefield is a simple but addictive game where there are only two controls. You must guide your ship through an endless field of ominous looking colored cubes without hitting them.",
        link: "Game Files/Cubefield/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_cubefield.png`,
        file_based: true,
        publisher: "flecko.net",
        controls: [
            "Arrow Keys - Movement",
            "P - Pause"
        ]
    },
    {
        name: "Cube Surfer",
        id: "cube_surfer",
        genre: "Arcade",
        description: "You need to try to stack as many cubes to make a tower run and surf on the road to reach the finish line.",
        link: "https://html5.iclouds.io/box-surfing-v1/",
        img: `${cdnUrl}/High Compressed/highcompress_cube_surfer.png`,
        file_based: false,
        publisher: "iclouds.io",
        controls: [
            "Hover Mouse - Slide Left/Right (might need to click first)",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Cut the Rope",
        id: "cut_the_rope",
        genre: "Puzzle",
        description: "In this game you must feed a creature named Om Nom with candy by cutting ropes in a certain manner, while using other tools such as bubbles and air cushions to avoid hazards and collect stars.",
        link: "Game Files/Cut the Rope/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_cut_the_rope.png`,
        file_based: true,
        publisher: "ZeptoLab",
        controls: [
            "Click & Drag - Cut Rope",
            "Click Bubble - Pop It"
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "CTR Holiday",
        id: "ctr_holiday",
        genre: "Arcade",
        description: "In this game you must feed a creature named Om Nom with candy by cutting ropes in a certain manner, while using other tools such as bubbles and air cushions to avoid hazards and collect stars.",
        link: "Game Files/CTR Holiday/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_ctr_holiday.png`,
        file_based: true,
        publisher: "Zeptolab",
        controls: [
            "Click & Drag - Cut Rope",
            "Click Bubble - Pop It"
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "CTR Time Travel",
        id: "ctr_time_travel",
        genre: "Arcade",
        description: "In this game you must feed a creature named Om Nom with candy by cutting ropes in a certain manner, while using other tools such as bubbles and air cushions to avoid hazards and collect stars.",
        link: "Game Files/CTR Time Travel/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_ctr_time_travel.png`,
        file_based: true,
        publisher: "ZeptoLab",
        controls: [
            "Click & Drag - Cut Rope",
            "Click Bubble - Pop It"
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Deal or no Deal",
        id: "deal_or_no_deal",
        genre: "Strategy",
        description: "Throughout the game, the player is offered an amount of money or prizes to quit, being asked the titular question, \"Deal or no deal?\" If the contestant rejects every deal and eliminates all the other cases or boxes, the player keeps the money that was in the original case or box.",
        link: "Game Files/Deal or no Deal/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_deal_or_no_deal.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Death Chase 3",
        id: "death_chase_3",
        genre: "Driving / Racing",
        description: "Death Chase 3 is a platform type car racing game. Race on mountain roads; A road full of tricky passages, cliffs, underground tunnels, bridges and traps.",
        link: "https://b0bz-d34thch4z3.netlify.app/",
        img: `${cdnUrl}/High Compressed/highcompress_death_chase_3.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Arrow Keys - Movement",
            "X - Missile",
            "N - Nitro",
            "Space - Jump",
        ],
        broken: true,
        note: "Game removed (Site Not Found)"
    },
    {
        name: "Death Run 3D",
        id: "death_run_3d",
        genre: "Endless",
        description: "Death Run 3D is an extremely fast game for true skillers only. If you love hardcore games, this game is the right for you. You fly inside a tube with various blocks and almost each of them is movable. Your task is avoid them. Gaps between blocks are very short so swift responses are the only way to success.",
        link: "Game Files/Death Run 3D/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_death_run_3d.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Defend the Tank",
        id: "defend_the_tank",
        genre: "Arcade / Strategy",
        description: "Drag and drop soldiers to place them at strategic positions on the tank. Keep the tank alive at all costs. Rotate your soldiers to inflict maximum damage on the enemy. Heal your tanks with mechanic soldiers. Collect coins to upgrade your tank after each battle.",
        link: "Game Files/Defend the Tank/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_defend_the_tank.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ]
    },
    {
        name: "Diep 2.io",
        id: "diep_2-io",
        genre: "Arcade",
        description: "The more points you have the better. It's the main thing to pay attention in Diep 2.io 2. You can exchange XP points for upgrading your charater's skills. However that won't help you in case you meet week, but experienced player. And YES this game contains ads, thats because this is the original game, all revenue is going to the developers.",
        link: "https://diepio-2.com/",
        img: `${cdnUrl}/High Compressed/highcompress_diep_2-io.png`,
        file_based: false,
        publisher: "diep.io-2",
        controls: [
            "Unknown",
        ],
        broken: true,
        note: "Game is blocked"
    },
    {
        name: "Doodle Jump",
        id: "doodle_jump",
        genre: "Platformer",
        description: "The aim of the game is to guide a four-legged creature called the Doodler up an unending series of platformers without falling.",
        link: "Game Files/Doodle Jump/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_doodle_jump.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Arrow Keys - Movement",
        ]
    },
    {
        name: "Dragon Ball Z",
        id: "dragon_ball_z",
        genre: "Adventure",
        description: "The epic episodic adventure of Goku and the Z Warriors as they defend the Earth and the Universe from super-powered fighters and monsters.",
        link: "GBA-Emulator/launcher.html#dbz_supersonic",
        img: `${cdnUrl}/High Compressed/highcompress_dragon_ball_z.png`,
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Draw The Hill",
        id: "draw_the_hill",
        genre: "Arcade / Endless",
        description: "In this cool driving game, use your skills to draw a path for the car to drive through the level. Make sure you draw a steady path or else you'll end the level.",
        link: "Game Files/Draw The Hill/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_draw_the_hill.png`,
        file_based: true,
        publisher: "Math Playground",
        controls: [
            "Drag Right Click - Draw",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Dreader",
        id: "dreader",
        genre: "Horror",
        description: "Dreader is a short mouse maze game with horror elements. Warning: This game contains flashing lights and stripes and may be unsuitable for people with photosensitive epilepsy.",
        link: "https://b0bzgx3mzz-dr3ad3r.netlify.app/",
        img: `${cdnUrl}/High Compressed/highcompress_dreader.png`,
        file_based: false,
        publisher: "donitz.itch.io",
        controls: [
            "Move Mouse - Go through maze",
        ]
    },
    {
        name: "Drift Hunters",
        id: "drift_hunters",
        genre: "Drifting",
        description: "Drift Hunters is an awesome 3D car driving game in which you score points by drifting various cars. These points earn you money, that you can spend to upgrade your current car or buy a new one.",
        link: `${cdnUrl}/Game Files/Drift Hunters/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_drift_hunters.png`,
        file_based: true,
        publisher: "drift-hunters.co",
        controls: [
            "Unknown",
        ]
    },

    {
        name: "Duck Life 2",
        id: "duck_life_2",
        genre: "Adventure",
        description: "Duck Life is a game series where you train your duck for races and/or battles.",
        link: "Game Files/Duck Life 2/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_duck_life_2.png`,
        file_based: true,
        publisher: "Poki",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Duck Life 3",
        id: "duck_life_3",
        genre: "Adventure",
        description: "Duck Life is a game series where you train your duck for races and/or battles.",
        link: "Game Files/Duck Life 3/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_duck_life_3.png`,
        file_based: true,
        publisher: "Kongregate",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Duck Life 4",
        id: "duck_life_4",
        genre: "Adventure",
        description: "Duck Life is a game series where you train your duck for races and/or battles.",
        link: "Game Files/Duck Life 4/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_duck_life_4.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        broken: true,
        note: "Error while loading game (An error occurred running the Unity content on this page)"
    },
    {
        name: "Edge Not Found",
        id: "edge_not_found",
        genre: "Puzzle",
        description: "Edge Not Found is a Sokoban-style puzzle game set on an infinitely repeating grid. There are 20+ puzzles and they get can pretty tricky.",
        link: "Game Files/Edge Not Found",
        img: `${cdnUrl}/High Compressed/highcompress_edge_not_found.png`,
        file_based: true,
        publisher: "js13kgames.com",
        controls: [
            "WASD/Arrow Keys - Movement",
            "Space/Enter - Select",
            "Z/Backspace - Undo",
            "R - Restart",
            "Esc - Toggle Menu"
        ]
    },
    {
        name: "Elastic Man",
        id: "elastic_man",
        genre: "Arcade",
        description: "Elastic Man is an entertaining arcade game in which you can be free to play with an elastic face. Drag and pinch his face to relax and reduce stress.",
        link: "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_elastic_man.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Evil Glitch",
        id: "evil_glitch",
        genre: "Shooter",
        description: "You must fight to survive as long you can while evading enemies and destroying their bases to stop the corruption.",
        link: "Game Files/Evil Glitch/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_evil_glitch.png`,
        file_based: true,
        publisher: "JS13kGames",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "EXO",
        id: "exo",
        genre: "Tower Defense",
        description: "A space based tower defence game! Build satellites and stations around planets orbiting a distant star. Survive waves of enemies.",
        link: "Game Files/EXO/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_exo.png`,
        file_based: true,
        publisher: "ai-doge.itch.io",
        controls: [
            "",
        ]
    },
    {
        name: "Factory Balls Forever",
        id: "factory_balls_forever",
        genre: "Puzzle",
        description: "Factory Balls Forever is a puzzle game where you have to color the balls correctly! Use different tools to cover up the ball before start painting over it. Use the tools in the right order to create the right pattern for the puzzle. The game has a ton of levels, getting more and more difficult as you go along. Can you finish all puzzles in Factory Balls Forever?",
        link: "Game Files/Factory Balls Forever/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_factory_balls_forever.png`,
        file_based: true,
        publisher: "engineering.com",
        controls: [
            "",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Fireboy & Watergirl",
        id: "fireboy_and_watergirl",
        genre: "2 Player / Puzzle",
        description: "Help Fireboy and Watergirl find the exit through the Forest Temple. Fireboy must avoid the water and Watergirl must avoid the fire, and be careful, the green mud kills them both!",
        link: "https://advanced-channeler.02.gz-associates.com/?t=tam-fireboy-and-watergirl-4-crystal-temple",
        img: `${cdnUrl}/High Compressed/highcompress_fireboy_and_watergirl.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        broken: true,
        note: "Game is blocked"
    },
    // {
    //     name: "Fishington.io",
    //     id: "fishington-io",
    //     genre: "Arcade",
    //     description: "Fishington.io is a multiplayer fishing game featuring characters from the game Betrayal.io. Cast your line and catch fish to sell on the market!",
    //     link: "https://fishington.io",
    //     img: `${cdnUrl}/High Compressed/highcompress_fishington-io.png`,
    //     file_based: false,
    //     publisher: "End Game Interactive, Inc.",
    //     controls: [
    //         "Unknown",
    //     ]
    // },
    {
        name: "Flappy Bird",
        id: "flappy_bird",
        genre: "Arcade",
        description: "You must navigate Faby, the bird, through pairs of pipes that have equally sized gaps placed at random heights.",
        link: "Game Files/Flappy Bird/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_flappy_bird.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "FNAF Final Purgatory",
        id: "five_nights_at_freddys",
        genre: "Horror",
        description: "In this game, you get a job as a night guard at Freddy Fazbir's pizzeria. A few hours of work will replenish your budget decently. It can't help but please, but a little worm of doubt still began to gnaw at you and your suspicions began to creep in. And then midnight came. At exactly twelve o'clock the worst nightmare of your life will begin!",
        link: "https://redlionsq.com/uploads/5/5/6/7/5567194/custom_themes/602302113323144959/fnaf-final-purgatory.html",
        img: `${cdnUrl}/High Compressed/highcompress_five_nights_at_freddys.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Friday Night Funkin'",
        id: "friday_night_funkin",
        genre: "Rhythm",
        description: "Friday Night Funkin' is a rhythm game where you must control a character called Boyfriend, who must defeat a series of opponents in order to continue dating his significant other, Girlfriend.",
        link: "Game Files/Friday Night Funkin/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_friday_night_funkin.png`,
        file_based: true,
        publisher: "The Funkin' Crew Inc.",
        controls: [
            "Arrow Keys - Play Notes",
        ],
    },
    {
        name: "Geometry Dash",
        id: "geometry_dash",
        genre: "Arcade",
        description: "In this game you must control the movement of an icon and navigate along music-based levels, while avoiding obstacles such as spikes that instantly destroy the icon on impact.",
        link: `${cdnUrl}/Game Files/GeometryDash/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_geometry_dash.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Getaway Shootout",
        id: "getaway_shootout",
        genre: "2 Player / Shooter",
        description: "Getaway Shootout is a chaotic race to reach the getaway objective in each map. Race against the computer or grab a friend to prove who is best. Collect power-ups and weapons along the way, and navigate through tough maps.",
        link: `${cdnUrl}/Game Files/Getaway Shootout/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_getaway_shootout.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Getting Over It",
        id: "getting_over_it",
        genre: "Adventure",
        description: "Getting Over It is a climbing game. You move the hammer with the mouse, and that's all there is. With practice, you'll be able to jump, swing, climb and fly.",
        link: "https://html5.iclouds.io/climb-over-it/",
        img: `${cdnUrl}/High Compressed/highcompress_getting_over_it.png`,
        file_based: false,
        publisher: "iclouds.io",
        controls: [
            "Drag & Left Click - Swing Hammer",
        ]
    },
    {
        name: "Google Snake",
        id: "google_snake",
        genre: "Arcade / Classic",
        description: "Snake is a game genre in which the player controls a developing line that eventually becomes its own principal barrier. The player controls a dot, square, or object on the playing board. It creates a trail behind it as it goes ahead, mimicking a snake. How to Play: Move around with the arrow keys and eat the dots.",
        link: "Game Files/Google Snake/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_google_snake.png`,
        file_based: true,
        publisher: "Google",
        controls: [
            "",
        ]
    },
    {
        name: "Gun Mayhem 2",
        id: "gun_mayhem_2",
        genre: "Action / Shooter",
        description: "The aim of each round is simple - you must knock your enemies off of the stage and prevent them from jumping back on. You can push your enemies by shooting them. You can avoid being thrown off the stage yourself by using a series of jumps and double jumps. The gameplay is fast-paced and fun and you must have quick reactions to win!",
        link: "Game Files/Gun Mayhem 2/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_gun_mayhem_2.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Gun Mayhem Redux",
        id: "gun_mayhem_redux",
        genre: "Action / Shooter",
        description: "Gun Mayhem Redux is a third-person shooter game. The goal of the game is either to capture a flag for a certain duration or kill your opponents. To play the game you move a character up and down, back and forth while shooting at the enemy. The game provides you with eight campaign levels and a tutorial.",
        link: "Game Files/Gun Mayhem Redux/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_gun_mayhem_redux.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    // {
    //     name: "Hakai",
    //     id: "hakai",
    //     genre: "?",
    //     description: "?",
    //     link: "https://freezydev.itch.io/hakai",
    //     img: `${cdnUrl}/High Compressed/highcompress_.png`,
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "Unknown",
    //     ]
    // },
    {
        name: "Hextris",
        id: "hextris",
        genre: "Strategy",
        description: "The goal of the game is to stop blocks from leaving the inside of the outer gray hexagon.",
        link: "Game Files/Hextris/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_hextris.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Left/Right Arrow Key - Rotate",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Horde Killer",
        id: "horde_killer",
        genre: "Shooter",
        description: "You vs 100 is a chaotic survival game where you face a vast horde of zombies determined to kill. Shoot them, blow them to pieces - do whatever it takes to avoid being mauled. Buy a range of new weapons and outfits for an explosively stylish apocalypse scenario.",
        link: "https://heartfelt-salmiakki-9e8ee9.netlify.app/",
        img: `${cdnUrl}/High Compressed/highcompress_horde_killer.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Idle Breakout",
        id: "idle_breakout",
        genre: "Idle",
        description: "Click on a brick to break it and score points. Use points to purchase new balls with different abilities and upgrade them. Balls will automatically bounce and break bricks to score more points.",
        link: "Game Files/Idle Breakout/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_idle_breakout.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Incredibox",
        id: "incredibox",
        genre: "Rhythm",
        description: "Incredibox is a music app that lets you create your own music with the help of a merry crew of beatboxers.Choose your musical style among 8 impressive atmospheres and start to lay down, record and share your mix.",
        link: "Game Files/Incredibox/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_incredibox.png`,
        file_based: false,
        publisher: "incredibox.com",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile",
        broken: true,
        note: "Unable to load versions (Audio bug, cannot decode asset)"
    },
    {
        name: "Indestructo Tank",
        id: "indestructotank",
        genre: "Arcade",
        description: "You are the weapon. Bombs don't hurt, they just shoot you into the air so you can use your tank to ram and destroy. How many combos can you get?",
        link: "Game Files/Indestructo Tank/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_indestructo_tank.png`,
        file_based: true,
        publisher: "Armor Games",
        controls: [
            "Left/Right Arrow - Movement",
        ]
    },
    {
        name: "Jetboy",
        id: "jetboy",
        genre: "Platformer",
        description: "Jet Boy is a fun to play endless platform game. You need to avoid the mines and the holes in the ground and collect the fruit and the coins so you can buy Shields, the shields protect you for 10 seconds so you wont't get hurt… Buy Shields with In-App Purchase, Remove Admob Ads with In-App Purchase Controls",
        link: "https://b0bz-j3tb0y.netlify.app/",
        img: `${cdnUrl}/High Compressed/highcompress_jetboy.png`,
        file_based: false,
        publisher: "Bob's Shack",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Just One Boss",
        id: "just_one_boss",
        genre: "Arcade",
        description: "Just one boss is a fun and challenging arcade game in which you have one aim – to defeat the boss! As the title suggests, you have only one boss to defeat, but this boss is difficult and cunning! You control a cute little blue slime ball and you must move around the playing field avoiding the boss's attacks.",
        link: `${cdnUrl}/Game Files/Just One Boss/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_just_one_boss.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ]
    },
    {
        name: "Knots",
        id: "knots",
        genre: "Puzzle",
        description: "The goal is to untangle the ropes with a limited number of moves. Sounds easy, but one mistake can mess up the whole knot.",
        link: "https://html5.iclouds.io/knots-master/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_knots.png`,
        file_based: false,
        publisher: "iclouds.io",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Little Alchemy",
        id: "little_alchemy",
        genre: "Misc",
        description: "In this game, you start with 4 basic elements and mix them to start creating more things. It's all about mixing elements to create intresting, fun and surprising items.",
        link: "https://littlealchemy2.com/",
        img: `${cdnUrl}/High Compressed/highcompress_little_alchemy.png`,
        file_based: false,
        publisher: "littlealchemy2.com",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Madalin Stunt Cars 2",
        id: "madalin_stunt_cars_2",
        genre: "Driving",
        description: "Drive a powerful racing car and be ready for furious races with worthy opponents! The gameplay is full of simulation, allowing players to control the car, drift and feel the speed on open roads. You can drift around the city or death corners, explore the landscapes, and visit many other interesting places. Pick one of the intriguing supercars and begin performing impossible stunts through loops and obstacles! Challenge your friends in multiplayer mode! ",
        link: "Game Files/Madalin Stunt Cars 2/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_madalin_stunt_cars_2.png`,
        file_based: true,
        publisher: "madalinstuntcars2.io",
        controls: [
            "",
        ],
        broken: true,
        note: "Game takes forever to load"
    },
    {
        name: "Madalin Stunt Cars 3",
        id: "madalin_stunt_cars_3",
        genre: "Driving",
        description: "Madalin Stunt Cars 3 is a wonderful multiplayer free racing game similar to previous editions 1 and 2. It's a multiplayer car racing game that you can play with premium vehicles in different race tracks. In the Madalin Stunt Cars 3 game, car races are waiting for you in gigantic action-packed parks.",
        link: "Game Files/Madalin Stunt Cars 3/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_madalin_stunt_cars_3.png`,
        file_based: true,
        publisher: "topspeed.com",
        controls: [
            "",
        ],
        devices: "Computer (Preferably Fast)"
    },
    {
        name: "Mad Burger 3",
        id: "mad_burger_3",
        genre: "Launcher / Managing",
        description: "Mad Burger 3 is a launcher game where you have to cook your and launch it as far as you can. Get good recipes, buy ingredients, and upgrade your skill.",
        link: "https://dddavit.github.io/madburger/",
        img: `${cdnUrl}/High Compressed/highcompress_mad_burger_3.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Mage Clash.io",
        id: "mage_clash-io",
        genre: "Arcade",
        description: "Mageclash.io is a multiplayer fantasy game where you battle monsters and other players in order to become the most powerful player on the server. And YES this game contains ads, thats because this is the original game, all revenue is going to the developers.",
        link: "https://www.mageclash.io/",
        img: `${cdnUrl}/High Compressed/highcompress_mage_clash-io.png`,
        file_based: false,
        publisher: "mageclash.io",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Mario Kart",
        id: "mario_kart",
        genre: "Adventure / Driving",
        description: "Players compete in go-kart races while using various power up items.",
        link: "./GBA-Emulator/launcher.html#mariokart",
        img: `${cdnUrl}/High Compressed/highcompress_mario_kart.png`,
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Matrix Rampage",
        id: "matrix_rampage",
        genre: "Action",
        description: "Matrix Rampage is an action fighting game where you must kill as many as possible enemies and get the highest score.",
        link: "Game Files/Matrix Rampage/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_matrix_rampage.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ]
    },
    {
        name: "Minecraft",
        id: "minecraft",
        genre: "Adventure / Survival",
        description: "Minecraft 1.5.2 by Eaglercraft. Minecraft is a 3D sandbox game allowing the player to focus on exploring, features, plants, mobs and items. Mining, building, crafting, you probably get it.",
        link: `${cdnUrl}/Game Files//EasyEagler-main/lastUpdate.html`,
        img: `${cdnUrl}/High Compressed/highcompress_minecraft.png`,
        file_based: true,
        publisher: "Eaglercraft",
        controls: [
            "WASD - Movement",
            "Space - Jump",
            "Left Click - Break Block",
            "Right Click - Place Block",
            "*Many more not listed here",
            "*Controls are customizable in-game"
        ],
        devices: "Computer (Preferably Fast)"
    },
    {
        name: "Minesweeper",
        id: "minesweeper",
        genre: "Classic / Puzzle",
        description: "Minesweeper is a single-player logic-based computer game played on rectangular board whose object is to locate a predetermined number of randomly-placed mines in the shortest possible time by clicking on safe squares while avoiding the squares with mines.",
        link: "https://www-ig-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/playminesweepergame/minesweeper.xml",
        img: `${cdnUrl}/High Compressed/highcompress_minesweeper.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Mini Putt",
        id: "mini_putt",
        genre: "Classic / Sports",
        description: "Mini Putt is everyone’s favorite crazy golf game from the Flash era. Tackle various mini-golf courses and check out your final score at the end. Compare the final results with your friends to decide who is the Mini Putt champion.",
        link: "Game Files/Mini Putt/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_mini_putt.png`,
        file_based: true,
        publisher: "CrazyGames",
        controls: [
            "",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Missile Game 3D",
        id: "missiles",
        genre: "Arcade",
        description: "Missile Game 3D is an arcade game to fly through a large tunnel and avoid crashing to complete the level.",
        link: "Game Files/Missiles/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_missiles.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ],
        devices: "Computer, Mobile (Best in Windowed Fullscreen)"
    },
    {
        name: "Moto X3M",
        id: "moto_x3m",
        genre: "Driving",
        description: "The goal of this game is to race your motorbike through levels with massive, moving obstacles that you have to jump over or avoid. You can flip in the air to decrease your final time and earn a perfect score.",
        link: "Game Files/Moto X3M/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_moto_x3m.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Moto X3M Pool Party",
        id: "moto_x3m_pool_party",
        genre: "Driving",
        description: "The goal of this game is to race your motorbike through levels with massive, moving obstacles that you have to jump over or avoid. You can flip in the air to decrease your final time and earn a perfect score.",
        link: "Game Files/Moto X3M Pool Party/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_moto_x3m_pool_party.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Moto X3M Spooky",
        id: "moto_x3m_spooky",
        genre: "Driving",
        description: "The goal of this game is to race your motorbike through levels with massive, moving obstacles that you have to jump over or avoid. You can flip in the air to decrease your final time and earn a perfect score.",
        link: "Game Files/Moto X3M Spooky/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_moto_x3m_spooky.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Moto X3M Winter",
        id: "moto_x3m_winter",
        genre: "Driving",
        description: "The goal of this game is to race your motorbike through levels with massive, moving obstacles that you have to jump over or avoid. You can flip in the air to decrease your final time and earn a perfect score.",
        link: "Game Files/Moto X3M Winter/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_moto_x3m_winter.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "My Friend Pedro",
        id: "my_friend_pedro",
        genre: "Shooter",
        description: "My Friend Pedro is a violent ballet about friendship, imagination, and one man's struggle to obliterate anyone in his path at the behest of a sentient banana.",
        link: "https://advanced-channeler.02.gz-associates.com/?t=tam-flash-ruffle&s=%3Furl%3D%252Fflash-armorgames%252Fmy-friend-pedro-1598012ef.swf",
        img: `${cdnUrl}/High Compressed/highcompress_my_friend_pedro.png`,
        file_based: false,
        publisher: "Armor Games",
        controls: [
            "Unknown",
        ]
    },
    // {
    //     name: "My Friend Pedro Arena",
    //     id: "my_friend_pedro_arena",
    //     genre: "Shooter",
    //     description: "",
    //     link: "https://rudolph-the-red-nosed-reindeer.ga/tam-flash-ruffle/?url=%2Fflash-armorgames%2Fmy-friend-pedro-aren-16138b620.swf",
    //     img: `${cdnUrl}/High Compressed/highcompress_my_friend_pedro_arena.png`,
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "",
    //     ]
    // },
    {
        name: "Osu! Mania",
        id: "osu",
        genre: "Rhythm",
        description: "osu! is a rhythm game with modes that offer a varity of \"beatmaps\" which are played to songs of different lengths. This mode includes falling and rising musical notes vertically as it is one of the four game modes.",
        link: `${cdnUrl}/Game Files/Osu/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_osu.png`,
        file_based: true,
        publisher: "OliBomby",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile (Preferably Fast)",
        new: true
    },
    {
        name: "Pac-Man",
        id: "pac-man",
        genre: "Action / Maze",
        description: "You must control Pac-Man through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding four colored ghosts.",
        link: "Game Files/Pac-Man/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_pac-man.png`,
        file_based: true,
        publisher: "TomMalbran",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Papa's Pizzaria",
        id: "papas_pizzaria",
        genre: "Management",
        description: "Papa's Pizzeria gently introduces you to the art of customer service and making steamy delicious pizzas fresh from the oven. Take your first orders and start by adding the requested toppings. Then, move your pizza to the oven and cook it for the specified time.",
        link: "Game Files/Papa's Pizzaria/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_papas_pizzaria.png`,
        file_based: false,
        publisher: "Bob's Shack",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Papa's Scooperia",
        id: "papas_scooperia",
        genre: "Management",
        description: "Stay in this town and open up an ice-cream shop! Bake cookies, sell ice-cream and make money! The game offers an option of saving your game if need be, so that you can continue after you return to the game. Start playing and start cashing in!",
        link: "https://vnqpi4csdtso3eagjo7nnc69ejilnlvh-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%252Fpapa-s-scooperia.xml&container=enterprise&view=default&lang=en&country=ALL&sanitize=0&v=21a6c241a3303c26&libs=core&mid=218&parent=https://sites.google.com/site/unblockedgameswtf/papa-s-scooperia#st=e%3DAIHE3cCxvtz7hq9Gryodd6Nt45yhjSnaXIpJpaolmsUgcqwoTiOTG01gbSe1qJqw6YvklEsB1soh3WC4SZnzMpgOJ53SQroIepWugRHjoU8Hj4fQys50OHyPHmb%252FsjOricwxZUGwlwn4%26c%3Denterprise&rpctoken=-5455470944845841767",
        img: `${cdnUrl}/High Compressed/highcompress_papas_scooperia.png`,
        file_based: false,
        publisher: "",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Paper Minecraft",
        id: "paper_minecraft",
        genre: "Adventure / Survival",
        description: "Paper Minecraft is a 2D version of the legendary building game Minecraft. Before starting a game you can choose a variety of different character skins and game modes. You must surivive for as long as possible before dying.",
        link: "Game Files/Paper Minecraft/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_paper_minecraft.png`,
        file_based: true,
        publisher: "Scratch - griffpatch",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Paper.io 2",
        id: "paper-io_2",
        genre: "Action / Multiplayer",
        description: "Paper.io 2 is a snake style mobile game where users compete with other players worldwide. In the game you control blocks on a large map and the main objective is to conquer the most territory by enclosing it within the trail you leave behind.",
        link: "Game Files/Paper.io 2/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_paper-io_2.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Papery Planes",
        id: "papery_planes",
        genre: "Arcade",
        description: "Papery Planes is a skill game where you have to fly your paper plane as far as possible. You are floating over a river with different rock formations that you have to dodge. The weather conditions will be changing from day to night and from summer to winter to make your flight as hard as possible. Collect enough coins to buy different types of Papery Planes and make sure to collect them all!",
        link: "Game Files/Papery Planes/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_papery_planes.png`,
        file_based: true,
        publisher: "Poki",
        controls: [
            "Left/Right Arrow Keys - Fly Direction",
        ]
    },
    {
        name: "Pocket League 3D",
        id: "pocket_league_3d",
        genre: "Arcade / Sports",
        description: "Pocket League 3D is a fan football game played with cars that you can play with either 1 or 2 players.",
        link: "https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/805200638580542612/pocket-league.html",
        img: `${cdnUrl}/High Compressed/highcompress_pocket_league_3d.png`,
        file_based: false,
        publisher: "twoplayergames.org",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokémon Emerald",
        id: "pokemon_emerald",
        genre: "Adventure",
        description: "Emerald does more with double battles, as gym leaders can be re-challenged after the story to participate in double battles. You can also encounter more double battles by having at least two conscious Pokemon on their team and being seen by two other trainers simultaneously.",
        link: "./GBA-Emulator/launcher.html#pokemonemerald",
        img: `${cdnUrl}/High Compressed/highcompress_pokemon_emerald.png`,
        file_based: false,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokémon Fire Red",
        id: "pokemon_fire_red",
        genre: "Adventure",
        description: "Pokémon FireRed and LeafGreen are the upgraded versions of the original Pokémon Red and Blue games, with more fun and more adventure. There are about 20 exclusive Pokémon in each version with different abilities.",
        link: "./GBA-Emulator/launcher.html#pokemonred",
        img: `${cdnUrl}/High Compressed/highcompress_pokemon_fire_red.png`,
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokémon Leaf Green",
        id: "pokemon_leaf_green",
        genre: "Adventure",
        description: "Pokémon FireRed and LeafGreen are the upgraded versions of the original Pokémon Red and Blue games, with more fun and more adventure. There are about 20 exclusive Pokémon in each version with different abilities.",
        link: "./GBA-Emulator/launcher.html#pokemongreen",
        img: `${cdnUrl}/High Compressed/highcompress_pokemon_leaf_green.png`,
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokémon Myst. Dungeon",
        id: "pokemon_mystery_dungeon_red",
        genre: "Adventure",
        description: "Gameplay is based on a classic roguelike game, with the player navigating the randomly generated dungeon with their Pokémon team.",
        link: "./GBA-Emulator/launcher.html#mysteryred",
        img: `${cdnUrl}/High Compressed/highcompress_pokemon_mystery_dungeon_red.png`,
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokémon Ruby",
        id: "pokemon_ruby",
        genre: "Adventure",
        description: "Pokémon Ruby Version and Pokémon Sapphire Version take great leaps in gameplay, particularly during combat. For the first time in a Pokémon game, Trainers can send two Pokémon into battle at the same time.",
        link: "./GBA-Emulator/launcher.html#pokemonruby",
        img: `${cdnUrl}/High Compressed/highcompress_pokemon_ruby.png`,
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Pokemon Sapphire",
        id: "pokemon_sapphire",
        genre: "Adventure",
        description: "Pokémon Ruby Version and Pokémon Sapphire Version take great leaps in gameplay, particularly during combat. For the first time in a Pokémon game, Trainers can send two Pokémon into battle at the same time.",
        link: "./GBA-Emulator/index.html#pokemonsapphire",
        img: `${cdnUrl}/High Compressed/highcompress_pokemon_sapphire.png`,
        file_based: true,
        publisher: "Nintendo",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "PolyBranch",
        id: "polybranch",
        genre: "Minimalist",
        description: "PolyBranch is a minimalist 3D game. Dodging branches may seem easy at first, but how long can you hold up as you approach terminal velocity?",
        link: "Game Files/PolyBranch/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_polybranch.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ]
    },
    {
        name: "Portal Flash",
        id: "portal_flash",
        genre: "Action / Puzzle",
        description: "The Flash Version includes over 40 challenging, portals thinking levels, which features almost every feature the real game does, in 2d - energy balls, cubes, turrets and even the famous crusher from the trailer.",
        link: "Game Files/Portal Flash/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_portal_flash.png`,
        file_based: true,
        publisher: "Armor Games",
        controls: [
            "",
        ],
        devices: "Computer, Mobile"
    },
    // {
    //     name: "Powerline.io",
    //     id: "powerline-io",
    //     genre: "Arcade / Multiplayer",
    //     description: "The game involves players taking on the role of a powerline, similar to a snake from Slither.io, another popular io game. The player must kill other players by causing them to collide with their powerline, and eat their food to grow.",
    //     link: "https://powerline.io/",
    //     img: `${cdnUrl}/High Compressed/highcompress_powerline-io.png`,
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "Unknown",
    //     ],
    //     broken: true,
    // },
    {
        name: "Push Your Luck",
        id: "push_your_luck",
        genre: "Luck",
        description: "In this game, you must spin the wheel and then guess whether the next number will be higher or lower. If you get it correct you get points that can be banked to be added to your score or risk it for more.",
        link: "Game Files/Push Your Luck/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_push_your_luck.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Push the Square",
        id: "push_the_square",
        genre: "Incremental",
        description: "Push the square is a short idle game.",
        link: "Game Files/Push the Square/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_push_the_square.png`,
        file_based: true,
        publisher: "asdehielo.itch.io/push-the-square",
        controls: [
            "",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Radius Raid",
        id: "radius_raid",
        genre: "Shooter",
        description: "Radius Raid is a space themed shoot 'em up where you must blast away unrelenting enemies before they destroy you.",
        link: "Game Files/Radius Raid/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_radius_raid.png`,
        file_based: true,
        publisher: "JS13kGames",
        controls: [
            "Unknown",
        ]
    },
    // {
    //     name: "Raze 1",
    //     id: "raze_1",
    //     genre: "Shooter",
    //     description: "",
    //     link: "https://cdn.icestonesoft.com/online_games/raze/",
    //     img: `${cdnUrl}/High Compressed/highcompress_raze_1.png`,
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "",
    //     ]
    // },
    {
        name: "Retro Bowl",
        id: "retro_bowl",
        genre: "Sports",
        description: "Retro Bowl is the perfect game for the armchair quarterback to finally prove a point. Presented in a glorious retro style, the game has simple roster management, including press duties and the handling of fragile egos, while on the field you get to call the shots. Can you pass the grade and take your team all the way to the ultimate prize?",
        link: "Game Files/Retro Bowl/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_retro_bowl.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Retrohaunt",
        id: "retrohaunt",
        genre: "Mystery",
        description: "Someone or something is stealing our time. Today was yesterday and tomorrow is nowhere to be seen. Detective Clay is on the case!",
        link: "Game Files/Retrohaunt/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_retrohaunt.png`,
        file_based: true,
        publisher: "JS13kGames",
        controls: [
            "Arrow Keys - Movement",
        ]
    },
    {
        name: "RoadBlocks",
        id: "roadblocks",
        genre: "Puzzle",
        description: "RoadBlocks is a puzzle game where you must complete the road with the pieces the game gives you.",
        link: "Game Files/RoadBlocks/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_roadblocks.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Rooftop Snipers",
        id: "rooftop_snipers",
        genre: "2 Player / Shooter",
        description: "Rooftop Snipers is a chaotic two-button two-player sniper game. Find a friend to play with, or practice by playing against the computer in this rage-inducing action game that is similar in style and gameplay to smash hits such as Soccer Physics and Wrestle Jump.",
        link: `${cdnUrl}/Game Files/Rooftop Snipers/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_rooftop_snipers.png`,
        file_based: true,
        publisher: "Michael Eichler",
        controls: [
            "Player 1: W - Jump, E - Shoot",
            "Player 2: I - Jump, O - Shoot"
        ]
    },
    {
        name: "Run 3",
        id: "run_3",
        genre: "Runner",
        description: "Run 3 is an endless runner game where you need to navigate your little alien through space.",
        link: "https://b0bzshxck27.netlify.app/",
        img: `${cdnUrl}/High Compressed/highcompress_run_3.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Scrap Metal 3",
        id: "scrap_metal_3",
        genre: "Adventure / Driving",
        description: "This game is an amazing 3D car driving game in which you enjoy freedom to explore a huge map with many different terrains. This third Scrap Metal game brings you even more freedom, and 4 new cars. Explore the mountains, overcome different kinds of obstacles, and enjoy the high speeds!",
        link: `${cdnUrl}/Game Files/Scrap Metal 3/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_scrap_metal_3.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ],
        devices: "Computer (Preferably Fast)"
    },
    {
        name: "Shell Shockers",
        id: "shell_shockers",
        genre: "FPS / Shooter",
        description: "Shell Shockers is an online, first-person shooter game where you control Eggs that move around one of nine Maps, with the objective being to go up the leaderboard killing each other.",
        link: "https://tam-shellshockers.arfotoarte.com/",
        img: `${cdnUrl}/High Compressed/highcompress_shell_shockers.png`,
        file_based: false,
        publisher: "Blue Wizard Digital",
        controls: [
            "Unknown",
        ],
        broken: true,
        note: "Game is blocked"
    },
    {
        name: "Slope 1",
        id: "slope_1",
        genre: "Arcade / Speed Run",
        description: "Roll down the slope for as long as possible without falling off the edge or hitting any obstacles along the way. Get ready for serious speed boost as you fall downhill the never-ending surface.",
        link: `${cdnUrl}/Game Files/Slope 1/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_slope_1.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Slow Roads",
        id: "slow_roads",
        genre: "Driving / Endless",
        description: "Enjoy this slow relaxing endless driving game with minimalist visuals.",
        link: "https://slowroads.io/",
        img: `${cdnUrl}/High Compressed/highcompress_slow_roads.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "",
        ],
        broken: true,
        note: "Game is blocked"
    },
    {
        name: "Smash Karts",
        id: "smash_karts",
        genre: "Arcade",
        description: "Smash Karts is a free io Multiplayer Kart Battle Arena game. Drive fast. Fire rockets. Make big explosions.",
        link: "Game Files/Smash Karts/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_smash_karts.png`,
        file_based: true,
        publisher: "SmashKarts.io",
        controls: [
            "WASD/Arrow Keys - Movement",
            "Space - Fire Weapons"
        ]
    },
    {
        name: "Snow Battle.io",
        id: "snow_battle-io",
        genre: "Action / Multiplayer",
        description: "Snowball.io is a fun multiplayer arena IO game where you throw snowballs at other players. In this epic snow battle, you accumulate snow and take down other players while avoiding the disappearing ice platforms.",
        link: "Game Files/Snowbattle",
        img: `${cdnUrl}/High Compressed/highcompress_snow_battle-io.png`,
        file_based: true,
        publisher: "Y8",
        controls: [
            "",
        ]
    },
    {
        name: "Soldier Legend",
        id: "soldier_legend",
        genre: "Action / Shooting",
        description: "The legendary soldier is incredible. In the game, the city has been attacked by aliens. They are trying to destroy the city. Now, pick up weapon and fight against them! Grab coins after you eliminated an alien to buy advanced weapons, towers and power-ups. You might want to invest in robo-factories and mana that supports you.",
        link: "Game Files/Soldier Legend/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_soldier_legend.png`,
        file_based: true,
        publisher: "Poki",
        controls: [
            "WASD - Movement",
            "R - Reload",
            "1/3 - Special Attacks",
            "Mouse Click - Shoot",
        ]
    },
    {
        name: "Solitaire",
        id: "solitaire",
        genre: "Classic",
        description: "The first objective is to release and play into position certain cards to build up each foundation, in sequence and in suit, from the ace through the king. The ultimate objective is to build the whole pack onto the foundations, and if that can be done, the Solitaire game is won.",
        link: "Game Files/Solitaire/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_solitaire.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Sort the Court",
        id: "sort_the_court",
        genre: "Simulation",
        description: "Sort the Court is a game where you are a king and the goal is to raise your population, happiness, and gold. You do this by answering Yes or No to people that come up to you with offers.",
        link: "Game Files/Sort the Court/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_sort_the_court.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Space Company",
        id: "space_company",
        genre: "Incremental",
        description: "Space Company is a science-fiction incremental game where you start from humble beginnings on Earth, working your way up to travelling between star systems and building Dyson Spheres and pretty much colonising the entire galaxy(ies?) And more!",
        link: "Game Files/Space Company/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_space_company.png`,
        file_based: true,
        publisher: "Sparticle999",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Space Paper.io",
        id: "space_paper-io",
        genre: "Arcade",
        description: "Space Paper.io is a game where you fly around the map and claim you territory. And YES this game contains ads, thats because this is the original game, all revenue is going to the developers.",
        link: "https://spacepaper.io/",
        img: `${cdnUrl}/High Compressed/highcompress_space_paper-io.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile",
        broken: true,
        note: "Game is blocked"
    },
    {
        name: "Stack",
        id: "stack",
        genre: "Stacking",
        description: "You have to stack tiles on top of each other and create a tower from the tiles as high as possible before. The game trims the size of the blocks when they are not perfectly stacked on top of each other.",
        link: "Game Files/Stack/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_stack.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Starve.io",
        id: "starve-io",
        genre: "Multiplayer / Survival",
        description: "Starve.io is a browser-based online multiplayer survival game. In this game, you must control a human-like avatar, aiming to survive and get stronger equipment. And YES this game contains ads, thats because this is the original game, all revenue is going to the developers.",
        link: "https://starve.io.theadvancedmethod.abl.cl/",
        img: `${cdnUrl}/High Compressed/highcompress_starve-io.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Stickman Hook",
        id: "stickman_hook",
        genre: "Arcade",
        description: "Avoid every obstacle that stands in your way. Can you execute all these acrobatic tricks in a row like a boss? In this game, embody the spider stickman. Finish all the levels with the same agility as a spider.",
        link: "Game Files/Stickman Hook/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_stickman_hook.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Subway Surfers",
        id: "subwaysurfers",
        genre: "Endless / Runner",
        description: "It's you're goal to run a away from a cop chasing you while you complete missions, etc. How far can you go before getting caught?",
        link: "Game Files/Subway Surfers/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_subway_surfers.png`,
        file_based: true,
        publisher: "projectcranberry.xyz (nanoGames)",
        controls: [
            "Arrow Keys/WASD - Movement",
            "Spacebar - Hoverboard"
        ]
    },
    {
        name: "Super Buddy Kick",
        id: "super_buddy_kick",
        genre: "Action",
        description: "Super Buddy Kick is a brutal game in which you mutilate the ragdoll in many ways. Hit the buddy with hammers and blades, shoot him with pistols and rifles, let him explode with grenades and even drop flames on him!",
        link: "https://advanced-channeler.02.gz-associates.com/?t=tam-super-buddy-kick-online",
        img: `${cdnUrl}/High Compressed/highcompress_super_buddy_kick.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Super Mario Bros",
        id: "super_mario_bros",
        genre: "Arcade / Platformer",
        description: "Mario must race through the Mushroom Kingdom and save Princess Toadstool from Bowser. Mario jumps, runs, and walks across each level. The worlds are full of enemies and platforms, and open holes.",
        link: "Game Files/Super Mario Bros/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_super_mario_bros.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "TankTrouble",
        id: "tank_trouble",
        genre: "Maze / Shooter",
        description: "Drive through a maze to find your enemies, and shoot from a save point before they aim their cannon at you.",
        link: "https://bmarinacampground.net/uploads/5/5/6/7/5567194/custom_themes/851609344627074058/files/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_tank_trouble.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Player 1: Arrow Keys - Movement, Space - Shoot",
            "Player 2: WASD - Movement, Q - Shoot",
            "Player 3: Move Mouse - Movement, Left Click - Shoot",
        ],
        broken: true,
        note: "Game won't load (The request has been blocked; the content must be served over HTTPS)"
    },
    // {
    //     name: "TankTrouble 2",
    //     id: "tank_trouble",
    //     genre: "?",
    //     description: "",
    //     link: "Game Files/Tank Trouble 2/index.html",
    //     img: `${cdnUrl}/High Compressed/highcompress_tank_trouble.png`,
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "",
    //     ]
    // },
    {
        name: "Tanuki Sunset",
        id: "tanuki_sunset",
        genre: "Drifting",
        description: "Master the longboard as you drift through stunning mountain ranges, swerve through bustling city streets, and along the sandy beaches of Sunset Island.",
        link: `${cdnUrl}/Game Files/Tanuki Sunset/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_tanuki_sunset.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Temple Run 2",
        id: "temple_run_2",
        genre: "Arcade",
        description: "Temple Run 2 is an endless running video game. The goal of the game is simple, run the longest you can dodging obstacles and jumping without messing up.",
        link: "Game Files/Temple Run 2/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_temple_run_2.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Tetris",
        id: "tetris",
        genre: "Puzzle",
        description: "Tetris is a tile-matching puzzle game with a simple goal of destroying line of blocks before it reaches the top.",
        link: "Game Files/Tetris/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_tetris.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "The Impossible Quiz 2",
        id: "the_impossible_quiz_2",
        genre: "Puzzle",
        description: "The Impossible Quiz is an online trivia quiz that features only very hard questions. Many of the questions have double meanings, tricks and puns and requires you to think outside the box. Out of the four answers, only one answer is right. There are in total 110 questions.",
        link: "https://advanced-channeler.02.gz-associates.com/?s=%3Furl%3D%252Fflash%252Fimpossiblequiz2.swf&t=tam-flash-ruffle",
        img: `${cdnUrl}/High Compressed/highcompress_the_impossible_quiz_2.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "There is no Game",
        id: "there_is_no_game",
        genre: "Adventure / Casual",
        description: "This game is a comedy adventure that will take you on a journey you never asked to go on, through silly and unexpected video game universes. Will you be able to play along with the \"Game\" to find your way home? We sincerely think NOT.",
        link: "Game Files/There is no Game/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_there_is_no_game.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ]
    },
    {
        name: "Time Shooter 2",
        id: "time_shooter_2",
        genre: "FPS",
        description: "This is a first person shooter game where time sands still until you move. Plan your shots and moves carefully as you must dodge enemy fire in epic slo-mo combat.",
        link: "https://ldaiodgdl1b4supcg3mhrvjqsf9a60v3-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/x001n5b6/ts2.xml&container=enterprise&view=default&lang=en&country=ALL&sanitize=0&v=e3b97d41d9b668d3&libs=core&mid=113&parent=https://sites.google.com/site/unblockedgameswtf/time-shooter-2#st=e%3DAIHE3cAneeedHBGirlp53gyNdeuN1scZziBGoatQMYmGLaH57IlgJFEspsSZ4zgwTbYkmrtTtO1AKsipyi1n%252FPcHBSnSj0eGa3vvp3oz0kDqfwWk%252FVtD3BA%253D%26c%3Denterprise&rpctoken=-6926225573722568764",
        img: `${cdnUrl}/High Compressed/highcompress_time_shooter_2.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Time Shooter 3",
        id: "time_shooter_3",
        genre: "FPS",
        description: "This is a first person shooter game where time sands still until you move. Plan your shots and moves carefully as you must dodge enemy fire in epic slo-mo combat.",
        link: "https://samotten.me/ts3/",
        img: `${cdnUrl}/High Compressed/highcompress_time_shooter_3.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Townscaper",
        id: "townscaper",
        genre: "Building",
        description: "This game is all about designing, pick colors from the pat let te, plop down colored blocks of house on the irregular grid and watch the game turn it into cute little houses.",
        link: `${cdnUrl}/Game Files/Townscaper/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_townscaper.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ]
    },
    {
        name: "Tube Jumpers",
        id: "tube_jumpers",
        genre: "2 Player / Action",
        description: "The objective of this game is to be the last one to stay on the tube, but watch out for miscellaneous objects while watching your back from other players.",
        link: "Game Files/Tube Jumpers",
        img: `${cdnUrl}/High Compressed/highcompress_tube_jumpers.png`,
        file_based: true,
        publisher: "Michael Eichler",
        controls: [
            "Player 1: W - Movement",
            "Player 2: I - Movement",
            "Player 3: Z - Movement",
            "Player 4: M - Movement",
        ]
    },
    {
        name: "Tunnel Rush",
        id: "tunnel_rush",
        genre: "Runner",
        description: "Tunnel Rush is an adrenaline-inducing running game in which you traverse through tunnels and caves at speed shilst dodging obstacles along thw way.",
        link: `${cdnUrl}/Game Files/Tunnel Rush/index.html`,
        img: `${cdnUrl}/High Compressed/highcompress_tunnel_rush.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Arrow Keys - Movement",
        ]
    },
    {
        name: "Turbo Moto Racer",
        id: "turbo_moto_racer",
        genre: "Driving",
        description: "Turbo Moto Racer 3D is a racing game set in a city. Demonstrate your motorcycle riding talents in congested areas. Pass difficult levels to unlock new motorcycles. Feel the rush of excitement coursing through your veins.",
        link: "https://advanced-channeler.02.gz-associates.com/?t=tam-turbo-moto-racer",
        img: `${cdnUrl}/High Compressed/highcompress_turbo_moto_racer.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        broken: true,
        note: "The game cannot load (Can not send data)"
    },
    {
        name: "UNO",
        id: "uno",
        genre: "Classic / Multiplayer",
        description: "UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand.",
        link: "https://uno-online-multiplayer.herokuapp.com",
        img: `${cdnUrl}/High Compressed/highcompress_uno.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "Unknown",
        ],
        broken: true,
        note: "No longer works (Application error)"
    },
    {
        name: "Vex 3",
        id: "vex_3",
        genre: "Platformer",
        description: "This is a game where you must parkour a stickman through acts, jumping and sliding through deadly devices and traps, to get to the final state where you will complete the Vexation.",
        link: "Game Files/Vex 3/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_vex_3.png`,
        file_based: true,
        publisher: "KiZi",
        controls: [
            "Arrow Keys/WASD - Movement",
            "Down Arrow/S - Enter Act",
        ]
    },
    {
        name: "Vex 4",
        id: "vex_4",
        genre: "Platformer",
        description: "This is a game where you must parkour a stickman through acts, jumping and sliding through deadly devices and traps, to get to the final state where you will complete the Vexation.",
        link: "Game Files/Vex 4/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_vex_4.png`,
        file_based: true,
        publisher: "KiZi",
        controls: [
            "Arrow Keys/WASD - Movement",
            "Down Arrow/S - Enter Act",
        ]
    },
    {
        name: "Vex 5",
        id: "vex_5",
        genre: "Platformer",
        description: "This is a game where you must parkour a stickman through acts, jumping and sliding through deadly devices and traps, to get to the final state where you will complete the Vexation.",
        link: "Game Files/Vex 5/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_vex_5.png`,
        file_based: true,
        publisher: "KiZi",
        controls: [
            "Arrow Keys/WASD - Movement",
            "Down Arrow/S - Enter Act",
        ]
    },
    {
        name: "Vex 6",
        id: "vex_6",
        genre: "Platformer",
        description: "This is a game where you must parkour a stickman through acts, jumping and sliding through deadly devices and traps, to get to the final state where you will complete the Vexation.",
        link: "Game Files/Vex 6/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_vex_6.png`,
        file_based: true,
        publisher: "KiZi",
        controls: [
            "Arrow Keys/WASD - Movement",
            "Down Arrow/S - Enter Act",
        ]
    },
    {
        name: "Weaver Unlimited",
        id: "weaver_unlimited",
        genre: "Puzzle",
        description: "It's a bit like Wordle, but this game has you figuring out how to ladder from one word to another. You have six chances to guess the path between two words in Weaver.",
        link: "https://weaverwordle.com/weaver-unlimited/",
        img: `${cdnUrl}/High Compressed/highcompress_weaver_unlimited.png`,
        file_based: false,
        publisher: "Unknown",
        controls: [
            "None",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Wordle Unlimited",
        id: "wordle_unlimited",
        genre: "Puzzle",
        description: "This is a popular word guessing game where you must correctly select a random five-letter word. You only get six tries to guess the word, but the game will give you hints along the way.",
        link: "Game Files/Wordle Unlimited/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_wordle_unlimited.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "None",
        ],
        devices: "Computer, Mobile"
    },
    {
        name: "Worlds Hardest Game",
        id: "worlds_hardest_game",
        genre: "Puzzle",
        description: "This game is a very difficult game as it requires you to go through very difficult level that seem very unpossible.",
        link: "Game Files/Worlds Hardest Game/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_worlds_hardest_game.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "Arrow Keys - Movement",
        ],
    },
    {
        name: "You Are Bezos",
        id: "you_are_bezos",
        genre: "Simulator",
        description: "A simple text-based adventure exploring the age-old question: What would you do if you had more money than any single human being should ever have? Be sure to expand the side column using the arrow in the upper left to view your current funds.",
        link: "Game Files/You Are Bezos/index.html",
        img: `${cdnUrl}/High Compressed/highcompress_you_are_bezos.png`,
        file_based: true,
        publisher: "Unknown",
        controls: [
            "",
        ],
        devices: "Computer, Mobile"
    },
    // {
    //     name: "Zombs Royale",
    //     id: "zombs_royale",
    //     genre: "Shooter",
    //     description: "",
    //     link: "https://rudolph-the-red-nosed-reindeer.ga/tmm-zombsroyale",
    //     img: `${cdnUrl}/High Compressed/highcompress_zombs_royale.png`,
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "",
    //     ]
    // },
    // {
    //     name: "",
    //     id: "",
    //     genre: "",
    //     description: "",
    //     link: "",
    //     img: `${cdnUrl}/High Compressed/highcompress_.png`,
    //     file_based: false,
    //     publisher: "Unknown",
    //     controls: [
    //         "",
    //     ]
    // },
]

document.getElementById("gamecount").innerText = `Game count: ${data.length}\nUpdated: ${lastUpdate}`

// var container = document.getElementsByClassName(`container`)
// var img = document.getElementsByClassName(`game_img`)
// var title = document.getElementsByClassName(`game_title`)
// var genre = document.getElementsByClassName(`game_genre`)
// var click = document.getElementsByClassName(`game_click`)
loadGames()
function loadGames(){
    var count = 0
    var containers = []
    var favorities = []

    data.forEach(game => {
        var div = document.createElement("div");
        div.className = "container"
        div.id = "container"
        div.onclick = function(){ viewGame(game.id) }

        var game_click = document.createElement("a")
        game_click.className = "game_click"
        game_click.id = game.id
        game_click.herf = game.id

        if(localStorage.getItem("favorites") && localStorage.getItem("favorites").includes(game.id)){
            div.style.backgroundColor = localStorage.getItem("themeHex") || "#695CFE"
            div.style.color = "#fff"
            div.style.boxShadow = `0 2px 10px ${localStorage.getItem("themeHex") || "#695CFE"}`
        }

        if(game.broken === true){
          var broken_icon = document.createElement("i")
          broken_icon.className = "bx bx-error icon"
          broken_icon.id = "broken_icon"
          if(localStorage.getItem("gameIcon") === "false") broken_icon.id = "broken_icon1"
          game_click.appendChild(broken_icon)
        } else {
          var fav_icon = document.createElement("i")
          fav_icon.className = "bx bx-star icon"
          fav_icon.id = "fav_icon"
          if(localStorage.getItem("mode") === "Light" && localStorage.getItem("gameIcon") !== "false"){
              fav_icon.style.color = "#ccc"
          }
          if(localStorage.getItem("gameIcon") === "false") fav_icon.style.fontSize = "20px";
          if(localStorage.getItem("favorites") && localStorage.getItem("favorites").includes(game.id)){
              fav_icon.onclick = function(){ unfavorite(game.id) }
              fav_icon.className = "bx bxs-star icon"
          } else {
              fav_icon.onclick = function(){ favorite(game.id) }
          }
          game_click.appendChild(fav_icon)
        }

        if(localStorage.getItem("gameIcon") !== "false"){
            var game_img = document.createElement("img")
            game_img.className = "game_img"
            game_img.id = "img"
            game_img.src = game.img
            game_click.appendChild(game_img)
        }

        if(localStorage.getItem("gameIcon") !== "false"){
            var shadow = document.createElement("div")
            shadow.className = "shadow"
            shadow.id = "shadow"
            game_click.appendChild(shadow)
        }

        var game_title = document.createElement("div")
        game_title.className = "game_title"
        game_title.id = "title"
        game_title.innerText = game.name
        if(localStorage.getItem("mode") === "Light" && localStorage.getItem("gameIcon") !== "false"){
            game_title.style.color = "#fff"
            document.getElementById("rgs_title").style.color = "#fff"
        }
        game_click.appendChild(game_title)

        var game_genre = document.createElement("div")
        game_genre.className = "game_genre"
        game_genre.id = "genre"
        game_genre.innerText = game.genre
        if(localStorage.getItem("mode") === "Light" && localStorage.getItem("gameIcon") !== "false"){
            game_genre.style.color = "#ccc"
            document.getElementById("rgs_genre").style.color = "#ccc"
        }
        game_click.appendChild(game_genre)

        div.appendChild(game_click)

        if(localStorage.getItem("gameIcon") === "false"){
            div.style.padding = "8px";
            div.style.height = "55px";
            div.style.shadowBox = "none";
            // div.style.marginTop = "7px";
            div.classList.add("container2");
            div.style.backgroundColor = "var(--sidebar-color)";
            game_title.style.transform = "translate(0, -2px)"
            game_genre.style.transform = "translate(0, 25px)"
            game_genre.style.opacity = 1

            var randomGameSelector = document.getElementById("randomSelector")
            randomGameSelector.style.padding = "8px";
            randomGameSelector.style.height = "55px";
            randomGameSelector.style.shadowBox = "none";
            randomGameSelector.style.backgroundColor = "var(--sidebar-color)";
            document.getElementById("rgs_img").style.display = "none"
            document.getElementById("rgs_shadow").style.display = "none"
            document.getElementById("rgs_title").style.transform = "translate(0, -2px)"
            document.getElementById("rgs_genre").style.transform = "translate(0, 25px)"
            document.getElementById("rgs_genre").style.opacity = 1
        }

        if(localStorage.getItem("favorites") && localStorage.getItem("favorites").includes(game.id)){
            favorities.push(div)
        } else {
            containers.push(div)
        }

        count++
    })

    if(favorities.length !== 0){
        favorities[0].style.marginLeft = "0"
    } else {
        containers[0].style.marginLeft = "0"
    }

    favorities.forEach(favorite => {
        // referenceNode = document.getElementById("gameViewFullscreen")
        // referenceNode.parentNode.insertBefore(favorite, referenceNode.nextSibling)
        document.getElementById("gamebar").appendChild(favorite)
    })

    containers.forEach(container => {
        // referenceNode = document.getElementById("gameViewFullscreen")
        // referenceNode.parentNode.insertBefore(container, referenceNode.nextSibling)
        document.getElementById("gamebar").appendChild(container)
    })

    resizeWidth();
}

function removeGames(){
    var containers = document.getElementsByClassName("container")
    const length = containers.length
    for(let i = 0; i < length; i++){
        containers[Math.abs(-data.length + i) - 1].remove()
    }
}

let selectOptions = []
for(let i = 0; i < data.length; i++){
    if(data[i].genre.includes(" / ")){
        for(let o = 0; o < data[i].genre.split(" / ").length; o++){
            selectOptions.push(data[i].genre.split(" / ")[o])
        }
    } else {
        selectOptions.push(data[i].genre)
    }
}
let selectOptionsList = []
selectOptions.forEach((o) => {
    if(!selectOptionsList.includes(o)){
        selectOptionsList.push(o)
    }
})
selectOptionsList.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})
for(let i = 0; i < selectOptionsList.length; i++){
    var x = document.getElementById("filterSelect");
    var option = document.createElement("option")
    option.text = selectOptionsList[i];
    x.add(option);
}
var select = document.getElementById("filterSelect")
select.onchange = async (event) => {
    var currentContainers = document.getElementsByClassName("container")
    var inputText = event.target.value;

    console.log(currentContainers)

    if(inputText === "Filter - None"){
        for(let i = 0; i < currentContainers.length; i++){ currentContainers[i].style.display = "inline-table"}
        return;
    }

    for(let i = 0; i < currentContainers.length; i++){ currentContainers[i].style.display = "none"}

    for(let i = 0; i < selectOptionsList.length; i++){
        if(inputText === selectOptionsList[i]){
            for(let o = 0; o < currentContainers.length; o++){
                if(data[o].genre.includes(" / ")){
                    for(let u = 0; u < currentContainers[o].getElementsByClassName("game_genre")[0].textContent.split(" / ").length; u++){
                        if(currentContainers[o].getElementsByClassName("game_genre")[0].textContent.split(" / ")[u] === inputText) currentContainers[o].style.display = "inline-table"
                    }
                } else {
                    if(currentContainers[o].getElementsByClassName("game_genre")[0].textContent === inputText) currentContainers[o].style.display = "inline-table"
                }
            }
            break;
        }
    }
}

var clickedStar = false
function favorite(id){
    if(document.getElementById("gameView") !== "block") clickedStar = true
    for(let i = 0; i < data.length; i++){
        if(data[i].id === id){
            var favorites = localStorage.getItem("favorites")
            if(favorites && favorites.includes(data[i].id)) return;

            var favoritesList = favorites + `, ${data[i].id}`
            if(favorites === null) favoritesList = `${data[i].id}`
            localStorage.setItem("favorites", favoritesList)

            document.getElementById("favoriteOption").onclick = function(){ unfavorite(data[i].id) }
            document.getElementById("favStarOption").className = "bx bxs-star icon"
            document.getElementById("favoriteTextOption").innerText = "Unfavorite"

            document.getElementById("favoriteOption2").onclick = function(){ unfavorite(data[i].id) }
            document.getElementById("favStarOption2").className = "bx bxs-star icon"
            document.getElementById("favoriteTextOption2").innerText = "Unfavorite"

            removeGames();
            loadGames();
            createAlertBox({ color: "green", text: "Favorited Game"})
            return;
        }
    }
}

function unfavorite(id){
  if(document.getElementById("gameView") !== "block") clickedStar = true
  for(let i = 0; i < data.length; i++){
      if(data[i].id === id){
          var favorites = localStorage.getItem("favorites")
          if(favorites && !favorites.includes(data[i].id)) return;

          if(favorites.includes(`, ${data[i].id}`)){
              localStorage.setItem("favorites", favorites.replace(`, ${data[i].id}`, ""))
          } else {
              localStorage.setItem("favorites", favorites.replace(`${data[i].id}`, ""))
          }

          document.getElementById("favoriteOption").onclick = function(){ favorite(data[i].id) }
          document.getElementById("favStarOption").className = "bx bx-star icon"
          document.getElementById("favoriteTextOption").innerText = "Favorite"

          document.getElementById("favoriteOption2").onclick = function(){ favorite(data[i].id) }
          document.getElementById("favStarOption2").className = "bx bx-star icon"
          document.getElementById("favoriteTextOption2").innerText = "Favorite"

          removeGames();
          loadGames();
          createAlertBox({ color: "red", text: "Unfavorited Game"})
          return;
      }
  }
}

var currentGame = null
function viewGame(gameID){
    if(clickedStar === true) return clickedStar = false
    for(let i = 0; i < data.length; i++){
        if(data[i].id === gameID){
            if(localStorage.getItem("instantGame") === "true") return playGame(data[i].id)

            let fullscreen = document.getElementById("gameViewFullscreen")
            let title = document.getElementById("gameViewTitle")
            let img = document.getElementById("gameViewImg")
            let desc = document.getElementById("gameViewDescription")
            let genre = document.getElementById("gameViewGenre")
            let publisher = document.getElementById("gameViewPublisher")
            let devices = document.getElementById("gameViewDevices") || null
            let playBtn = document.getElementById("playButton")

            fullscreen.style.display = "block"
            title.innerText = data[i].name
            img.src = data[i].img
            desc.innerText = data[i].description
            genre.innerText = data[i].genre
            publisher.innerText = data[i].publisher
            playBtn.onclick = function(){ playGame(data[i].id) }
            document.body.style.overflow = "hidden"
            if(data[i].devices){ devices.innerText = data[i].devices } else { devices.innerText = "Computer" };
            currentGame = data[i].id

            if(localStorage.getItem("favorites") && localStorage.getItem("favorites").includes(data[i].id)){
                document.getElementById("favoriteOption2").onclick = function(){ unfavorite(data[i].id) }
                document.getElementById("favStarOption2").className = "bx bxs-star icon"
                document.getElementById("favoriteTextOption2").innerText = "Unfavorite"
            } else {
                document.getElementById("favoriteOption2").onclick = function(){ favorite(data[i].id) }
                document.getElementById("favStarOption2").className = "bx bx-star icon"
                document.getElementById("favoriteTextOption2").innerText = "Favorite"
            }

            if(document.getElementById("splashOptions").style.display = "block") document.getElementById("splashOptions").style.display = "none"
        }
    }
}

let clickcount = 0
let clickedView = false
function clicked(){
    clickedView = true
}

document.addEventListener("click", () => {
    if(document.getElementById("gameViewFullscreen").style.display === "block"){
        if(clickedView === true){
            clickedView = false
        } else {
            if(clickcount === 0) return clickcount = 1
            clickedView = false
            clickcount = 0
            document.getElementById("gameViewFullscreen").style.display = "none"
            document.body.style.overflow = "visible"
        }
    }
})

document.addEventListener("keydown", (event) => {
    if(document.getElementById("gameViewFullscreen").style.display === "block" && event.key === "Enter"){
        playGame(currentGame);
    }
    if(document.getElementById("gameViewFullscreen").style.display === "block" && event.key === "Escape"){
        if(clickedView === true){
            clickedView = false
        } else {
            clickedView = false
            clickcount = 0
            document.getElementById("gameViewFullscreen").style.display = "none"
            document.body.style.overflow = "visible"
        }
    }
})

function search(){
    let input = document.getElementById("searchbar").value
    input = input.toLowerCase()
    var currentContainers = document.getElementsByClassName("container")

    for(i = 0; i < currentContainers.length; i++){
        if(!currentContainers[i].getElementsByClassName("game_title")[0].textContent.toLowerCase().includes(input)){
            currentContainers[i].style.display = "none";
        } else {
            currentContainers[i].style.display = "inline-table"
        }
    }
}

function playGame(gameID){
    for(let i = 0; i < data.length; i++){
        if(data[i].id === gameID){
            document.getElementById("gameViewFullscreen").style.display = "none"

            document.getElementById("gamepage").style.display = "block"
            document.getElementById("mainpage").style.display = "none"
            document.getElementById("gamePageTitle").innerText = data[i].name
            document.getElementById("gamePageDesc").innerText = data[i].description
            document.getElementById("gameIframe").src = data[i].link
            document.getElementById("controls").style.transform = `translateY(${-70 + (data[i].controls.length * -25)}px)`
            document.getElementById("controlsText").innerText = data[i].controls.join("\n")
            if(localStorage.getItem("favorites") && localStorage.getItem("favorites").includes(data[i].id)){
                document.getElementById("favoriteOption").onclick = function(){ unfavorite(data[i].id) }
                document.getElementById("favStarOption").className = "bx bxs-star icon"
                document.getElementById("favoriteTextOption").innerText = "Unfavorite"
            } else {
                document.getElementById("favoriteOption").onclick = function(){ favorite(data[i].id) }
                document.getElementById("favStarOption").className = "bx bx-star icon"
                document.getElementById("favoriteTextOption").innerText = "Favorite"
            }

            if(document.getElementById("gameOptions").style.display = "block") document.getElementById("gameOptions").style.display = "none"

            let newHeight = `${document.querySelector("iframe").getBoundingClientRect().width / 1.778}px`
            document.getElementById("gameIframe").style.height = newHeight
            document.getElementById("iframeFocus").style.height = newHeight

            if(data[i].broken){
                document.getElementById("importantMessage").style.display = "block"
                document.getElementById("messageBannerText").innerHTML = `This game may not be working as expected. <a class="errormessage">Error: ${data[i].note}</a>`
            }

            if(localStorage.getItem("nav") === "Sidebar" && body.querySelector('nav').classList.value === "sidebar") body.querySelector('nav').classList.toggle("close")
            // document.getElementById("gameIframe").focus();
            window.scrollTo(0, 0)
            document.body.style.overflow = "visible"
            trackGameData(data[i].id, null)
            window.location.hash = `#${data[i].id}`
        }
    }
}

// let iFrameFocused = false
// function checkFocus(){
//     if(document.getElementById("gamepage").style.display === "block"){
//         if(document.activeElement === document.getElementById("gameIframe")){
//             document.body.style.overflow = "hidden"
//             document.getElementById("gameIframe").style.opacity = 1
//             intervalManager(false);
//         } else {
//             document.body.style.overflow = "visible"
//             document.getElementById("gameIframe").style.opacity = 0.5
//             intervalManager(true);
//         }
//     }
// }

// function intervalManager(flag){
//     if(flag === true){
//         let interval = setInterval(() => { checkFocus() }, 100)
//     } else {
//         clearInterval(interval);
//     }
// }
// document.body.onfocus = function(){ checkFocus() }

function checkFocus(){
    if(document.getElementById("gamepage").style.display === "block"){
        if(document.activeElement === document.getElementById("gameIframe")){
            // document.body.style.overflow = "hidden"
            document.getElementById("iframeFocus").style.display = "none"
        } else {
            // document.body.style.overflow = "visible"
            document.getElementById("iframeFocus").style.display = "block"
        }
    }
}

function focusGame(){
    document.getElementById("gameIframe").focus();
    checkFocus();
}

document.body.onclick = function(){ checkFocus() }
const listener = window.addEventListener("blur", () => {
    if(document.activeElement === document.querySelector("iframe")){
        console.log("clicked iframe")
        checkFocus()
    }
    window.removeEventListener("blur", listener)
})
// window.addEventListener('keydown', (e) => {
//     console.log(e)
//     e.preventDefault();
// })

// window.dispatchEvent(new KeyboardEvent('keydown', {
//     'key': 'b'
// }));

function controls(){
    if(document.getElementById("controls").style.display !== "block"){
        document.getElementById("controls").style.display = "block"
    } else {
        document.getElementById("controls").style.display = "none"
    }
}

var oldUrl = window.location.herf;
window.addEventListener("hashchange", function(){
    checkHash();
})

function checkHash(){
    var newHash = window.location.hash
    if(newHash === "#" || newHash === ""){
        gamepage();
    } else {
        data.forEach(game => { 
            if(game.id === newHash.slice(1)) return playGame(newHash.slice(1));
        })
    }
}
