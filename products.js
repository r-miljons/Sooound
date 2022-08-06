// ------------- Synthesizers --------------------------------

export const synthesizers = [
	{
		id: "synth1",
		name: "Roland System-8",
		price: "€ 1.499,00",
		about1:
			"The SYSTEM-8 draws on our deep history of synthesizer research and development, with circuit-accurate models of classic Roland oscillators, filters, and effects. It includes legendary third-party oscillator types as well, plus the famous JUPITER and JUNO filter designs for super-authentic vintage sounds.",
		about2:
			"For synthesizer power users, combining the Roland SYSTEM-8 software synthesizer with its hardware sibling is a potent pairing. Sound designers will love the ability to play and shape sounds with a velocity-sensitive keyboard and dedicated controls. Live performers will appreciate transferring patches to hardware and taking the stage computer-free.",
		features: [
			"ACB technology and 49 buttons in normal size",
			"Internal tone generation provides classic analogue sounds and dynamically modern sounds",
			"Control up to three PLUG-OUT synthesisers",
			"Detailed low-pass, high-pass and side-band filters with high-resolution settings",
			"Comprehensive real-time control via dedicated rotary and sliding controllers as well as push buttons",
			"Polyphony step sequencer with the well-known TR-REC control, arpeggiator, vocoder and polyphony chord memory functions",
		],
		thumbnail: "../assets/system-8.png",
		gallery: [
			{
				img: "./assets/system8/front.jpg",
				width: "1680",
				height: "688",
			},
			{
				img: "./assets/system8/back.jpg",
				width: "1680",
				height: "1050",
			},
			{
				img: "./assets/system8/profile.jpg",
				width: "1200",
				height: "1200",
			},
		],
		recommended: [
			{
				name: "Arturia MicroBrute",
				thumbnail: "./assets/arturia/thumbnail.png",
				price: "€ 499,00",
				href: "./arturia.html",
			},
			{
				name: "Korg Minilogue",
				thumbnail: "./assets/korg/thumbnail.png",
				price: "€ 439,00",
				href: "./korg.html",
			},
			{
				name: "Yamaha MONTAGE6",
				thumbnail: "./assets/montage/thumbnail.png",
				price: "€ 2.949,00",
				href: "./montage.html",
			},
		],
	},
	{
		id: "synth2",
		name: "Yamaha MONTAGE6",
		price: "€ 2.949,00",
		about1:
			"Yamaha's flagship Montage 6 synthesizer streamlines your workflow and rockets your sound creation and modulation capabilities up to a whole new level.",
		about2:
			"Built on the legacy of Yamaha's groundbreaking DX and Motif series keyboards, the Montage is driven by its programmable Motion Control matrix, which gives you fluid, interactive command over two powerful synthesis engines. Your fingers will fly on the Montage 6's superb aftertouch-enabled, 61-note FSX semi-weighted keybed, as you modulate multiple parameters in real time with the aptly named Super Knob. Whether you're a songwriter, gigging keyboardist, sound designer, or EDM producer, the Yamaha Montage will inspire you and elevate your creative game.",
		features: [
			"Aftertouch-enabled, 61-note FSX semi-weighted keybed",
			"Stereo 128-note polyphony, for full stereo sound without note stealing",
			"Motion Control matrix gives you fluid command over two powerful synthesis engines: AWM2, FM-X",
			"Super Knob lets you modulate multiple parameters in real time",
			"Envelope Follower lets you use any audio as a modulator for any synth parameter",
			"Motion Sequences — tempo-synched control sequences you can assign to any parameter",
		],
		thumbnail: "../synths/assets/montage/thumbnail.png",
		gallery: [
			{
				img: "./assets/montage/front.jpg",
				width: "1280",
				height: "804",
			},
			{
				img: "./assets/montage/back.jpg",
				width: "1000",
				height: "1000",
			},
			{
				img: "./assets/montage/profile.jpg",
				width: "600",
				height: "600",
			},
		],
		recommended: [
			{
				name: "Arturia MicroBrute",
				thumbnail: "./assets/arturia/thumbnail.png",
				price: "€ 499,00",
				href: "./arturia.html",
			},
			{
				name: "Korg Minilogue",
				thumbnail: "./assets/korg/thumbnail.png",
				price: "€ 439,00",
				href: "./korg.html",
			},
			{
				name: "Roland System-8",
				thumbnail: "../assets/system-8.png",
				price: "€ 1.499,00",
				href: "./system8.html",
			},
		],
	},
	{
		id: "synth3",
		name: "Korg Minilogue",
		price: "€ 439,00",
		about1:
			"Minilogue's newly developed analog synthesizer circuit delivers polyphony and full programmability at a great price - exactly what today's musician needs.",
		about2:
			"With the minilogue, you can get your hands on the powerful sound that's only possible with real analog, and find inspiration with features including a polyphonic step and motion sequencer, on board tape-style delay, multiple sound shaping and filter options, and an oscilloscope display. All of these seamlessly integrated features make minilogue as fun and easy to use as it is powerful. It's the next-generation analog synthesizer for musicians of all types.",
		features: [
			"Fully programmable",
			"Automatable and polyphonic 16 step sequencer with motion sequencer",
			"41 Control elements for direct access to the permanently assigned parameters",
			"Display of the generated waveform through oscilloscope function in the OLED display",
			"4-Voice polyphonic",
			"37 Velocity sensitive slim keys",
		],
		thumbnail: "../synths/assets/korg/thumbnail.png",
		gallery: [
			{
				img: "./assets/korg/front.jpg",
				width: "1600",
				height: "970",
			},
			{
				img: "./assets/korg/back.jpg",
				width: "1200",
				height: "288",
			},
			{
				img: "./assets/korg/profile.jpg",
				width: "1600",
				height: "1068",
			},
		],
		recommended: [
			{
				name: "Arturia MicroBrute",
				thumbnail: "./assets/arturia/thumbnail.png",
				price: "€ 499,00",
				href: "./arturia.html",
			},
			{
				name: "Yamaha MONTAGE6",
				thumbnail: "./assets/montage/thumbnail.png",
				price: "€ 2.949,00",
				href: "./montage.html",
			},
			{
				name: "Roland System-8",
				thumbnail: "../assets/system-8.png",
				price: "€ 1.499,00",
				href: "./system8.html",
			},
		],
	},
	{
		id: "synth4",
		name: "Arturia MicroBrute",
		price: "€ 499,00",
		about1:
			"The MicroBrute was designed to be small but still retain an amazing sound quality. With a 100% pure analog voice path and advanced interconnectability via MIDI, USB, CV/ GATE, this machine is a true powerhouse synthesizer that takes your sound to a new level.",
		about2:
			"The MicroBrute features a single VCO with three waveforms you can mix at will, three waveshapers, an overtone generator, a classic Steiner-Parker filter, and Arturia's infamous Brute Factor. You also get a step sequencer and a Mod Matrix that gives you tons of modulation options and connectivity with other synths. This is real-deal, hands-on, semi-modular mono synth mojo at an unbeatable price! With all this going for it, the Arturia MicroBrute makes an ideal first synth.",
		features: [
			"100% Analog Audio Signal Path",
			"Steiner-Parker Multimode Filter (LP, BP, HP)",
			"Voltage Controlled Oscillator with new Overtone Sub-Osc, Oscillator Mixer (Sub, Sawtooth, Square, Triangle)",
			"Ultrasaw generating shimmering sawtooth waveforms",
			"MIDI Inwith 5-Pin DIN connector, USB MIDI In/Out, 1/4-Inch Audio Output and 1/8-Inch Headphone Output",
			"24 Velocity sensitive slim keys",
		],
		thumbnail: "../synths/assets/arturia/thumbnail.png",
		gallery: [
			{
				img: "./assets/arturia/front.jpg",
				width: "1031",
				height: "776",
			},
			{
				img: "./assets/arturia/back.jpg",
				width: "1024",
				height: "1024",
			},
			{
				img: "./assets/arturia/profile.jpg",
				width: "3000",
				height: "2000",
			},
		],
		recommended: [
			{
				name: "Korg Minilogue",
				thumbnail: "./assets/korg/thumbnail.png",
				price: "€ 439,00",
				href: "./korg.html",
			},
			{
				name: "Yamaha MONTAGE6",
				thumbnail: "./assets/montage/thumbnail.png",
				price: "€ 2.949,00",
				href: "./montage.html",
			},
			{
				name: "Roland System-8",
				thumbnail: "../assets/system-8.png",
				price: "€ 1.499,00",
				href: "./system8.html",
			},
		],
	},
];

// ------------- Amplifiers ------------------------------

export const amplifiers = [
	{
		id: "amp1",
		name: "Vox AC4",
		price: "€ 440,00",
		about1:
			"Famous for its ability to achieve classic VOX tone at low volume levels, the AC4 is one of the most popular amps in VOX's lineup.",
		about2:
			"An ideal choice for the home or the studio, the AC4 Custom serves up an array of authentic VOX tone through a Celestion 12” speaker and can even be paired with external speaker cabinet for more tonal diversity. This iconic low-wattage amp was first introduced by VOX in 1961 and is still the choice of many modern guitarists who are drawn to its mesmerizing tone and classic aesthetic.",
		features: [
			"Speaker: 1 x 12″ Celestion VX12 Custom",
			"Output Power: 4 Watts RMS 16 Ohms",
			"1 x Normal Input Jack",
			"1 x External Speaker Jack",
			"Volume, Gain, Bass, Treble",
			"2 x 12AX7 (preamp) 1 x EL84 (power amp)",
		],
		thumbnail: "../amps/assets/vox/thumbnail.png",
		gallery: [
			{
				img: "./assets/vox/front.jpg",
				width: "2600",
				height: "2929",
			},
			{
				img: "./assets/vox/top.jpg",
				width: "3072",
				height: "1599",
			},
			{
				img: "./assets/vox/back.jpg",
				width: "2562",
				height: "2895",
			},
		],
		recommended: [
			{
				name: "Blackstar ID:CORE V3",
				thumbnail: "./assets/blackstar/thumbnail.png",
				price: "€ 219,00",
				href: "./blackstar.html",
			},
			{
				name: "Marshall SC20C",
				thumbnail: "./assets/marshall/thumbnail.png",
				price: "€ 819,00",
				href: "./marshall.html",
			},
			{
				name: "Fender '65 Deluxe",
				thumbnail: "./assets/fender/thumbnail.png",
				price: "€ 1.850,00",
				href: "./fender65.html",
			},
		],
	},
	{
		id: "amp2",
		name: "Marshall SC20C",
		price: "€ 819,00",
		about1:
			"Don't be fooled by its simplicity, the SC20C delivers an abundance of tone. The single channel takes your tone from warm cleans to gritty overdrive with its high and low sensitivity inputs.",
		about2:
			"If it's gain you're after, then crank up the preamp volume control and go from clean to crunch on the low sensitivity input, or gritty breakup to barky overdrive using the high sensitivity input. The Studio Classic wouldn't be complete without a master volume control, the feature that helped to make the original JCM800 amplifiers so famous. There's also an effects loop for adding more variety, just as there is on the 2203.",
		features: [
			"Output wattage: 20W (with power reduction option to 5W)",
			"Speaker model: Celestion VT-Junior (16Ω, 50W)",
			"Outputs: 5 x 1/4” jack sockets, selectable 16Ω / 8Ω / 4Ω load",
			"Inputs: 2 x 1/4” jack instrument inputs (high/low sensitivity)",
			"Controls: Presence, bass, middle, treble, master volume, preamp volume",
			"Detachable power cable included",
		],
		thumbnail: "../amps/assets/marshall/thumbnail.png",
		gallery: [
			{
				img: "./assets/marshall/front.jpg",
				width: "600",
				height: "600",
			},
			{
				img: "./assets/marshall/angle.jpg",
				width: "600",
				height: "600",
			},
			{
				img: "./assets/marshall/back.jpg",
				width: "600",
				height: "600",
			},
		],
		recommended: [
			{
				name: "Blackstar ID:CORE V3",
				thumbnail: "./assets/blackstar/thumbnail.png",
				price: "€ 219,00",
				href: "./blackstar.html",
			},
			{
				name: "Vox AC4",
				thumbnail: "./assets/vox/thumbnail.png",
				price: "€ 440,00",
				href: "./vox.html",
			},
			{
				name: "Fender '65 Deluxe",
				thumbnail: "./assets/fender/thumbnail.png",
				price: "€ 1.850,00",
				href: "./fender65.html",
			},
		],
	},
	{
		id: "amp3",
		name: "Fender '65 Deluxe",
		price: "€ 1.850,00",
		about1:
			"The Fender '65 Deluxe Reverb is an authentic reissue of the coveted vintage combo from 1965, whose distinctive Fender chime is considered the benchmark for studio and live sounds across country, blues and rock.",
		about2:
			"With 22 watts of power from two 6V6 tubes, the handy guitar amplifier provides sufficient volume reserves for club gigs and allows you to enjoy the coveted power amp compression without deafening levels. In addition to the normal channel with 2-band tone stack for adjusting the sound, the Fender '65 Deluxe Reverb offers the vibrato channel, which provides particularly versatile tones with tube-driven reverb and vibrato effects.",
		features: [
			"22 watts of power",
			"Tube combo for electric guitar from the Fender American Vintage series, made in the USA.",
			"One 12' Jensen C12K speaker with ceramic magnet",
			"Preamp with four 12AX7 tubes and two 12AT7 tubes",
			"Normal channel and vibrato channel with tube-driven reverb and tremolo effects",
			"Vibrato channel with controls for volume, treble, bass, reverb, speed and intensity",
		],
		thumbnail: "../amps/assets/fender/thumbnail.png",
		gallery: [
			{
				img: "./assets/fender/front.jpg",
				width: "800",
				height: "648",
			},
			{
				img: "./assets/fender/angle.jpg",
				width: "600",
				height: "600",
			},
			{
				img: "./assets/fender/back.jpg",
				width: "1024",
				height: "1024",
			},
		],
		recommended: [
			{
				name: "Blackstar ID:CORE V3",
				thumbnail: "./assets/blackstar/thumbnail.png",
				price: "€ 219,00",
				href: "./blackstar.html",
			},
			{
				name: "Vox AC4",
				thumbnail: "./assets/vox/thumbnail.png",
				price: "€ 440,00",
				href: "./vox.html",
			},
			{
				name: "Marshall SC20C",
				thumbnail: "./assets/marshall/thumbnail.png",
				price: "€ 819,00",
				href: "./marshall.html",
			},
		],
	},
	{
		id: "amp4",
		name: "Blackstar ID:CORE V3",
		price: "€ 219,00",
		about1:
			"A sleeker editor, a powerful new cab simulator, and even more-immersive stereo effects make the third generation of Blackstar's ID:Core 40 combo the ultimate practice amp and an essential single-handed session tool.",
		about2:
			"Choose from six inspiring amp voices that run the gamut from classic cleans to scorching leads. Dial in the perfect blend of American and British character with Blackstar's patented ISF control. Add gloss and dimension to your playing with built-in modulation, delay, and reverb effects as Blackstar's Super Wide Stereo technology envelops you in immersive sound. There's even an onboard TRRS Line In/Streaming jack so that you can film guitar covers and capture performances directly onto your phone using sounds from the amp. Blackstar's ID:Core line of modeling amps have persisted as best sellers among beginning guitarists and light-traveling session artists.",
		features: [
			"40-watt (2 x 20-watt) modeling guitar combo amplifier",
			"6 inspiring amp voices run the gamut from classic clean to saturated overdrive",
			"USB 2.0 functionality for recording directly from your amp to your computer",
			"Super Wide Stereo technology envelops you in immersive sound",
			"Jam along to your favorite tunes or capture covers via the TRRS Line In/Streaming input",
			"12 built-in effects add gloss and dimension to your playing",
		],
		thumbnail: "../amps/assets/blackstar/thumbnail.png",
		gallery: [
			{
				img: "./assets/blackstar/front.jpg",
				width: "1200",
				height: "630",
			},
			{
				img: "./assets/blackstar/angle.jpg",
				width: "1792",
				height: "1666",
			},
			{
				img: "./assets/blackstar/top.jpg",
				width: "1895",
				height: "1059",
			},
		],
		recommended: [
			{
				name: "Fender '65 Deluxe",
				thumbnail: "./assets/fender/thumbnail.png",
				price: "€ 1.850,00",
				href: "./fender65.html",
			},
			{
				name: "Vox AC4",
				thumbnail: "./assets/vox/thumbnail.png",
				price: "€ 440,00",
				href: "./vox.html",
			},
			{
				name: "Marshall SC20C",
				thumbnail: "./assets/marshall/thumbnail.png",
				price: "€ 819,00",
				href: "./marshall.html",
			},
		],
	},
];

// ------------- Guitars ------------------------------

export const guitars = [
	{
		id: "guitar1",
		name: "Fender Am Pro II",
		price: "€ 2.099,00",
		about1:
        	"The American Professional II Stratocaster draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today's working player.",
		about2:
			"Our popular Deep “C” neck now sports smooth rolled fingerboard edges, a “Super-Natural” satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. New V-Mod II Stratocaster single-coil pickups are more articulate than ever while retaining bell-like chime and warmth. An upgraded 2-point tremolo with a cold-rolled steel block increases sustain, clarity and high-end sparkle.",
		features: [
			"Three V-Mod II single-coil Stratocaster pickups",
			"Upgraded 2-Point Tremolo with Cold-Rolled Steel Block",
			"Deep 'C'-shaped neck profile with rolled fingerboard edges",
			"Bone nut; 22 narrow-tall frets for easy bending",
			"Treble bleed circuit maintains highs when reducing volume",
			"Includes Deluxe Molded hardshell case",
		],
		thumbnail: "../guitars/assets/ampro2.png",
		gallery: [
			{
				img: "./assets/ampro2/front.jpg",
				width: "2400",
				height: "773",
			},
			{
				img: "./assets/ampro2/back.jpg",
				width: "2400",
				height: "775",
			},
			{
				img: "./assets/ampro2/profile.jpg",
				width: "2243",
				height: "2400",
			},
		],
		recommended: [
			{
				name: "Gibson ES-339",
				thumbnail: "./assets/es-339.png",
				price: "€ 3.399,00",
				href: "./gibson_es_339.html",
			},
			{
				name: "Ibanez RG420HPFM",
				thumbnail: "./assets/Ibanez-RG420HPFM.png",
				price: "€ 799,00",
				href: "./ibanez_rg.html",
			},
			{
				name: "Fender Am Pro II P Bass",
				thumbnail: "./assets/fender-bass.png",
				price: "€ 2.029,00",
				href: "./fender_am_pro_ii_bass.html",
			},
		],
	},
	{
		id: "guitar2",
		name: "Fender Am Pro II P Bass",
		price: "€ 2.029,00",
		about1:
        	"The American Professional II Precision Bass® draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today's working player.",
		about2:
			"The '63 P Bass profile neck now sports smooth rolled fingerboard edges, a “Super-Natural” satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. The new V-Mod II Precision Bass split-coil pickup is more articulate than ever while delivering the punch and growl the P Bass® is known for. The American Pro II Precision Bass delivers instant familiarity and sonic versatility you'll feel and hear right away, with broad ranging improvements that add up to nothing less than a new standard for professional instruments.",
		features: [
			"Single V-Mod II split-coil Precision Bass pickup",
			"'63 P Bass neck profile",
			"Bone nut; 20 narrow-tall frets for familiar playing feel",
			"HiMass™ Vintage bridge for increased sustain",
			"Tapered-shaft tuning machines; Posiflex graphite rods for neck reinforcement",
			"Includes Deluxe Molded hardshell case",
		],
		thumbnail: "../guitars/assets/fender-bass.png",
		gallery: [
			{
				img: "./assets/ampro2bass/front.png",
				width: "747",
				height: "2480",
			},
			{
				img: "./assets/ampro2bass/back.png",
				width: "745",
				height: "2480",
			},
			{
				img: "./assets/ampro2bass/profile.png",
				width: "1983",
				height: "2480",
			},
		],
		recommended: [
			{
				name: "Gibson ES-339",
				thumbnail: "./assets/es-339.png",
				price: "€ 3.399,00",
				href: "./gibson_es_339.html",
			},
			{
				name: "Ibanez RG420HPFM",
				thumbnail: "./assets/Ibanez-RG420HPFM.png",
				price: "€ 799,00",
				href: "./ibanez_rg.html",
			},
			{
				name: "Fender Am Pro II",
				thumbnail: "./assets/ampro2.png",
				price: "€ 2.099,00",
				href: "./fender_pro_ii.html",
			},
		],
	},
	{
	id: "guitar3",
	name: "Gibson ES-339",
	price: "€ 3.399,00",
	about1:
		"The Gibson ES-339 is a modern classic designed for those seeking the tone and look of an ES-335, but desire a slightly smaller, lighter instrument.",
	about2:
		"The pearloid dot inlay rosewood fingerboard on a hand-rolled Rounded \"C\" mahogany neck remind players where it all started. The 57 / 57 Classic + humbuckers paired with our hand-wired tone circuit showcases the versatile Gibson ES tone that players have craved for over 60 years. Tuning stability and precise intonation are provided by the Grover Rotomatic tuners with Kidney buttons paired with light-weight Aluminum ABR-1 bridge and Stop bar tailpiece.",
	features: [
		"22 x Medium Jumbo Frets",
		"Mahogany Neck",
		"Body Material - Top and back: 3-ply Maple/Poplar/Maple. Bracing: Spruce Centerblock: Maple",
		"Double cut, semi-hollow body",
		"Pickup - Neck: 57 Classic Bridge: 57 Classic",
		"2 Volumes, 2 Tones & Toggle Switch",
	],
	thumbnail: "../guitars/assets/es-339.png",
	gallery: [
		{
			img: "../guitars/assets/es339/front.png",
			width: "1600",
			height: "1600",
		},
		{
			img: "./assets/es339/back.png",
			width: "1600",
			height: "1600",
		},
		{
			img: "./assets/es339/profile.png",
			width: "1600",
			height: "1600",
		},
	],
	recommended: [
		{
			name: "Fender Am Pro II P Bass",
			thumbnail: "./assets/fender-bass.png",
			price: "€ 2.029,00",
			href: "./fender_am_pro_ii_bass.html",
		},
		{
			name: "Ibanez RG420HPFM",
			thumbnail: "./assets/Ibanez-RG420HPFM.png",
			price: "€ 799,00",
			href: "./ibanez_rg.html",
		},
		{
			name: "Fender Am Pro II",
			thumbnail: "./assets/ampro2.png",
			price: "€ 2.099,00",
			href: "./fender_pro_ii.html",
		},
	],
},
{
	id: "guitar4",
	name: "Ibanez RG420HPFM",
	price: "€ 799,00",
	about1:
		"The Ibanez RG420HPFM RG electric guitar delivers high-end performance and road warrior dependability. With selected woods, electronics and hardware, every detail is deeply considered and designed.",
	about2:
		"This Ibanez features a stunning flamed maple body top with a nyatoh body and back. The Wizard III roasted maple neck has been heat-treated to increase the wood's stability and durability for a well-balanced note attack with rich sustain. A jatoba fretboard and jumbo frets offer effortless fingering; luminescent side dots help guide your hands on dark stages.",
	features: [
		"Body Type: Double Cutaway",
		"Fret size: Jumbo",
		"Bridge and Neck: DiMarzio Humbucker",
		"3-Way Pickup switch and Coil-tap",
		"Bridge type: Tremolo/Vibrato",
		"DiMarzio® The Tone Zone® (H) bridge pickup Passive/Alnico",
	],
	thumbnail: "../guitars/assets/Ibanez-RG420HPFM.png",
	gallery: [
		{
			img: "./assets/ibanezRG/front.jpg",
			width: "2000",
			height: "2000",
		},
		{
			img: "./assets/ibanezRG/back.png",
			width: "2000",
			height: "2000",
		},
		{
			img: "./assets/ibanezRG/profile.png",
			width: "2000",
			height: "2000",
		},
	],
	recommended: [
		{
			name: "Fender Am Pro II P Bass",
			thumbnail: "./assets/fender-bass.png",
			price: "€ 2.029,00",
			href: "./fender_am_pro_ii_bass.html",
		},
		{
			name: "Gibson ES-339",
			thumbnail: "./assets/es-339.png",
			price: "€ 3.399,00",
			href: "./gibson_es_339.html",
		},
		{
			name: "Fender Am Pro II",
			thumbnail: "./assets/ampro2.png",
			price: "€ 2.099,00",
			href: "./fender_pro_ii.html",
		},
	],
},
];