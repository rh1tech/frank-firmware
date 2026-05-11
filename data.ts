export type FirmwareCategory = 'console' | 'computer' | 'game' | 'os';

export interface Firmware {
  slug: string;
  name: string;
  category: FirmwareCategory;
  excerptEn: string;
  excerptRu: string;
  summaryEn: string;
  summaryRu: string;
  historyEn?: string;
  historyRu?: string;
  highlightsEn: string[];
  highlightsRu: string[];
  videoOutputs: ('HDMI' | 'VGA' | 'Composite' | 'TFT')[];
  audio: ('PWM' | 'I2S')[];
  psram: 'required' | 'optional' | 'none';
  compatibility: ('M1' | 'M2')[];
  repository?: string;
  releases?: string;
  thumbnail: string;
  screenshots: string[];
}

export const FIRMWARE_ORDER: string[] = [
  // Consoles
  'frank-nes',
  'frank-snes',
  'frank-genesis',
  'frank-msx',
  'frank-c64',
  'frank-apple',
  // PC
  'frank-386',
  // Games
  'frank-idtech1',
  'frank-doom',
  'frank-heretic',
  'frank-wolf3d',
  'frank-duke3d',
  'frank-prince',
  'frank-digger',
  'frank-quest',
  // OS / Utilities
  'frank-os',
  'frank-kickstart',
];

export const FIRMWARE: Record<string, Firmware> = {
  // -----------------------------------------------------------------
  // Consoles
  // -----------------------------------------------------------------
  'frank-nes': {
    slug: 'frank-nes',
    name: 'frank-nes',
    category: 'console',
    excerptEn: 'NES, Famicom, Dendy on FRANK — QuickNES port for RP2350.',
    excerptRu: 'NES, Famicom, Dendy на FRANK — порт QuickNES для RP2350.',
    summaryEn:
      'A QuickNES port for the RP2350. Plays NES / Famicom / Dendy ROMs from an SD card with HDMI, VGA, or composite TV output, and audio over I2S, PWM, or HDMI data-island channels.',
    summaryRu:
      'Порт QuickNES для RP2350. Поддерживает запуск ROM-образов NES, Famicom и Dendy с SD-карты. Реализован вывод изображения по HDMI, VGA или композитному ТВ; вывод звука — I2S, PWM или каналы данных HDMI.',
    historyEn:
      'The Nintendo Entertainment System launched in Japan in 1983 as the Famicom and reached the West two years later. It defined the third console generation, sold roughly 62 million units worldwide, and built the foundation for franchises like Super Mario Bros., The Legend of Zelda and Metroid. In the post-Soviet space the same hardware lived on as the Dendy clone — the first console many households ever owned. The frank-nes firmware brings all three lineages — NES, Famicom and Dendy — to a single Pico-class board.',
    historyRu:
      'Nintendo Entertainment System была выпущена в Японии в 1983 году под названием Famicom; в страны Запада платформа пришла два года спустя. Она определила третье поколение игровых консолей, общий тираж составил около 62 миллионов экземпляров, а её библиотека сформировала такие франшизы, как Super Mario Bros., The Legend of Zelda и Metroid. На постсоветском пространстве аналогичная аппаратура распространялась под маркой Dendy и для многих семей стала первой домашней игровой консолью. Прошивка frank-nes объединяет поддержку всех трёх вариантов — NES, Famicom и Dendy — в одной сборке для платы класса Pico.',
    highlightsEn: [
      'QuickNES core ported to the RP2350.',
      'PSRAM-backed PPU with broad mapper coverage and VRC6/VRC7/FME-7/Namco 163 expansion audio.',
      'HDMI (PIO and HSTX), VGA, and composite TV video outputs.',
      'NES and SNES gamepads direct, USB HID gamepad and PS/2 keyboard.',
      'Six-slot save states with thumbnails, runtime palette tweaks, CRT scanlines.',
    ],
    highlightsRu: [
      'Ядро QuickNES, портированное на RP2350.',
      'PPU с использованием PSRAM; поддержка большого набора мапперов и расширительной звуковой части (VRC6, VRC7, FME-7, Namco 163).',
      'Вывод изображения по HDMI (PIO и HSTX), VGA и композитному ТВ.',
      'Поддержка NES- и SNES-геймпадов напрямую, USB-геймпадов и PS/2-клавиатуры.',
      'Шесть слотов сохранений с миниатюрами, настройка палитры и режим CRT-скан-линий.',
    ],
    videoOutputs: ['HDMI', 'VGA', 'Composite'],
    audio: ['PWM', 'I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-nes',
    releases: 'https://github.com/rh1tech/frank-nes/releases',
    thumbnail: 'images/frank-nes/screen2.png',
    screenshots: [
      'images/frank-nes/screen1.png',
      'images/frank-nes/screen2.png',
      'images/frank-nes/screen3.png',
    ],
  },
  'frank-snes': {
    slug: 'frank-snes',
    name: 'frank-snes',
    category: 'console',
    excerptEn: 'SNES / Super Famicom emulator for RP2350.',
    excerptRu: 'Эмулятор SNES / Super Famicom для RP2350.',
    summaryEn:
      'A SNES / Super Famicom emulator built on Snes9x for FRANK. Native 640×480 HDMI output, I2S audio, and a PSRAM-backed ROM cache.',
    summaryRu:
      'Эмулятор Super Nintendo / Super Famicom на основе Snes9x для FRANK. Реализованы нативный вывод HDMI 640×480, звук по I2S и кэширование ROM в PSRAM.',
    historyEn:
      "Nintendo released the Super Famicom in 1990 in Japan, with the Super NES reaching North America in 1991 and Europe in 1992. It carried the company through the 16-bit war against the Sega Genesis, sold close to 50 million units, and shipped the games most people still cite when they talk about the golden age of console design — Super Mario World, A Link to the Past, Chrono Trigger, Super Metroid, Final Fantasy VI. frank-snes is a Snes9x port to the RP2350, with the cartridge ROM and SRAM mapped through PSRAM.",
    historyRu:
      'Super Famicom была выпущена в Японии в 1990 году; в Северной Америке консоль появилась в 1991 году под названием Super NES, а в Европе — в 1992 году. Платформа стала ключевой для Nintendo в эпоху 16-битных консолей и противостояния с Sega Genesis: общий тираж приблизился к 50 миллионам экземпляров. Именно на ней вышел ряд игр, считающихся образцами жанра, в том числе Super Mario World, A Link to the Past, Chrono Trigger, Super Metroid и Final Fantasy VI. frank-snes — порт Snes9x под RP2350; ROM и SRAM картриджа размещены в PSRAM.',
    highlightsEn: [
      '640×480 HDMI output, doubled from native SNES resolution.',
      'I2S audio (SPC700 + DSP via Snes9x).',
      'NES and SNES gamepads direct, USB HID and XInput controllers, SNES Mouse over PS/2 or USB.',
      'Configurable frameskip, layer toggles, and CRT scanlines.',
      'Six-slot save states; SuperFX, C4, OBC1, S-RTC compiled in.',
    ],
    highlightsRu: [
      'Вывод изображения HDMI 640×480 (удвоенное нативное разрешение SNES).',
      'Звук по I2S (SPC700 и DSP в составе Snes9x).',
      'Поддержка NES- и SNES-геймпадов напрямую, USB HID- и XInput-контроллеров, SNES Mouse через PS/2 или USB.',
      'Настройки frameskip, отключения слоёв и режим CRT-скан-линий.',
      'Шесть слотов сохранений; включены SuperFX, C4, OBC1, S-RTC.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-snes',
    releases: 'https://github.com/rh1tech/frank-snes/releases',
    thumbnail: 'images/frank-snes/screen1.png',
    screenshots: [
      'images/frank-snes/screen1.png',
      'images/frank-snes/screen2.png',
      'images/frank-snes/screen3.png',
      'images/frank-snes/screen4.png',
    ],
  },
  'frank-genesis': {
    slug: 'frank-genesis',
    name: 'frank-genesis',
    category: 'console',
    excerptEn: 'Sega Genesis emulator for FRANK.',
    excerptRu: 'Эмулятор Sega Genesis для FRANK.',
    summaryEn:
      'A Gwenesis-based Sega Genesis emulator for the RP2350. Loads ROMs directly from an SD card; HDMI 320×240 video and I2S audio.',
    summaryRu:
      'Эмулятор Sega Genesis на основе Gwenesis для RP2350. ROM-образы загружаются непосредственно с SD-карты. Реализованы вывод изображения HDMI 320×240 и звук по I2S.',
    historyEn:
      'Sega launched the Mega Drive in Japan in 1988 and as the Genesis in North America in 1989, opening the 16-bit era a year before the Super Famicom arrived. Its Motorola 68000 main CPU plus a Z80 sound co-processor, paired with the YM2612 FM synth, gave the console a sound and visual signature that defined the Sonic the Hedgehog years and the Sega-versus-Nintendo console wars of the early 1990s. frank-genesis brings that signature back on a single Pico-class board.',
    historyRu:
      'Mega Drive была выпущена Sega в Японии в 1988 году; в Северной Америке консоль появилась годом позже под названием Genesis. Платформа открыла 16-битную эру за год до выхода Super Famicom. Сочетание основного процессора Motorola 68000, звукового сопроцессора Z80 и FM-синтезатора YM2612 определило характерное звучание и графический стиль консоли — именно с ней связаны эпоха Sonic the Hedgehog и противостояние Sega и Nintendo в начале 1990-х годов. Прошивка frank-genesis воспроизводит работу этой архитектуры на плате класса Pico.',
    highlightsEn: [
      'Gwenesis VDP, M68K and Z80 cores; YM2612 FM with ASM optimisation and SN76489 PSG.',
      'Native 320×240 HDMI output via PIO.',
      'I2S audio output.',
      'NES and SNES gamepads direct, USB HID host (opt-in build flag).',
      'Save states, configurable frameskip, CRT scanlines.',
    ],
    highlightsRu: [
      'Ядра VDP, M68K и Z80 на основе Gwenesis; FM-синтезатор YM2612 (с ARM-ассемблерной оптимизацией) и звуковой генератор SN76489.',
      'Нативный вывод изображения HDMI 320×240 через PIO.',
      'Вывод звука по I2S.',
      'Поддержка NES- и SNES-геймпадов напрямую; USB HID-хост (включается опционально при сборке).',
      'Сохранение состояния, настраиваемый frameskip и режим CRT-скан-линий.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-genesis',
    releases: 'https://github.com/rh1tech/frank-genesis/releases',
    thumbnail: 'images/frank-genesis/screen1.png',
    screenshots: [
      'images/frank-genesis/screen1.png',
      'images/frank-genesis/screen2.png',
      'images/frank-genesis/screen3.png',
    ],
  },
  'frank-msx': {
    slug: 'frank-msx',
    name: 'frank-msx',
    category: 'console',
    excerptEn: 'MSX / MSX2 / MSX2+ emulator (fMSX core) for FRANK.',
    excerptRu: 'Эмулятор MSX / MSX2 / MSX2+ (ядро fMSX) для FRANK.',
    summaryEn:
      'A port of the fMSX core to FRANK. Supports MSX, MSX2, and MSX2+ titles on RP2350 with PSRAM, with HDMI, VGA (HSTX), or software composite output and switchable I2S, PWM, or HDMI data-island audio.',
    summaryRu:
      'Порт ядра fMSX на FRANK. Поддерживает запуск программ для MSX, MSX2 и MSX2+ на RP2350 с PSRAM. Реализован вывод изображения по HDMI, VGA (через HSTX) или программному композиту; вывод звука — переключаемый I2S, PWM или каналы данных HDMI.',
    historyEn:
      "MSX was an open 8-bit standard introduced by Microsoft Japan and ASCII Corporation in 1983, designed so any manufacturer could ship a compatible machine. The platform thrived through three generations — MSX, MSX2 and MSX2+ — across Japan, Korea, the Netherlands, Brazil and the Soviet bloc, where it became one of the few capitalist computer architectures available behind the Iron Curtain. Konami and Hudson Soft published a parade of classics for it: Metal Gear, Castlevania, Bomberman, Parodius, Snatcher. frank-msx packs all three generations into one firmware via the long-running fMSX core.",
    historyRu:
      'MSX — открытый 8-битный стандарт, представленный компаниями Microsoft Japan и ASCII Corporation в 1983 году. Архитектура позволяла любому производителю выпускать совместимый компьютер. Платформа прошла три поколения — MSX, MSX2 и MSX2+ — и получила распространение в Японии, Корее, Нидерландах, Бразилии и странах соцлагеря, где стала одной из немногих доступных западных архитектур. Для MSX был выпущен ряд классических игр от Konami и Hudson Soft, в том числе Metal Gear, Castlevania, Bomberman, Parodius и Snatcher. Прошивка frank-msx обеспечивает поддержку всех трёх поколений в одной сборке на основе ядра fMSX.',
    highlightsEn: [
      'MSX1, MSX2, and MSX2+ support; up to 512 KB RAM and 512 KB VRAM in PSRAM.',
      'V9938 / V9958 VDP, AY-3-8910 PSG, Konami SCC+, YM2413 OPLL, WD1793 floppy.',
      'HDMI (PIO and HSTX), VGA (HSTX), and software composite PAL/NTSC output.',
      'PS/2 keyboard and mouse, NES/SNES gamepads, optional USB HID stack.',
      'Cassette (.CAS) loading, MegaROM mappers with manual override, six save-state slots per ROM.',
    ],
    highlightsRu: [
      'Поддержка MSX1, MSX2 и MSX2+; до 512 КБ оперативной памяти и 512 КБ VRAM, размещённых в PSRAM.',
      'Эмуляция VDP V9938 и V9958, PSG AY-3-8910, Konami SCC+, OPLL YM2413, контроллера дисковода WD1793.',
      'Вывод изображения по HDMI (PIO и HSTX), VGA (HSTX) и программному композиту PAL/NTSC.',
      'Поддержка PS/2-клавиатуры и мыши, NES- и SNES-геймпадов, опциональный USB HID-стек.',
      'Загрузка кассет (.CAS), MegaROM-мапперы с возможностью ручного выбора, шесть слотов сохранений на каждый ROM.',
    ],
    videoOutputs: ['HDMI', 'VGA', 'Composite'],
    audio: ['PWM', 'I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-msx',
    releases: 'https://github.com/rh1tech/frank-msx/releases',
    thumbnail: 'images/frank-msx/screenshot4.png',
    screenshots: [
      'images/frank-msx/screenshot1.png',
      'images/frank-msx/screenshot2.png',
      'images/frank-msx/screenshot3.png',
      'images/frank-msx/screenshot4.png',
      'images/frank-msx/screenshot5.png',
    ],
  },
  'frank-c64': {
    slug: 'frank-c64',
    name: 'frank-c64',
    category: 'console',
    excerptEn: 'Commodore 64 emulator (Frodo) for FRANK.',
    excerptRu: 'Эмулятор Commodore 64 (Frodo) для FRANK.',
    summaryEn:
      'A Frodo-based Commodore 64 emulator for FRANK. Loads .D64, .T64 and .CRT images from an SD card; HDMI or VGA output, with I2S or PWM audio.',
    summaryRu:
      'Эмулятор Commodore 64 на основе Frodo для FRANK. Поддерживается загрузка образов .D64, .T64 и .CRT с SD-карты. Реализован вывод изображения по HDMI или VGA, звук — I2S или PWM.',
    historyEn:
      "Released in 1982, the Commodore 64 became the best-selling single computer model in history — Guinness lists somewhere between 12.5 and 17 million units. It put real computing inside the home for under $600, ran a software library that arguably invented PC gaming, and produced the SID sound chip whose composers — Rob Hubbard, Martin Galway, Jeroen Tel — are still cited as influences in modern chiptune. frank-c64 keeps that 6510 + SID combination intact on a chip the size of a coin.",
    historyRu:
      'Commodore 64, представленный в 1982 году, считается самой продаваемой моделью персонального компьютера в истории — по данным Guinness, его тираж составил от 12,5 до 17 миллионов экземпляров. Машина стоила менее 600 долларов и сделала персональные вычисления массовыми. Её программная библиотека во многом сформировала современный PC-гейминг, а звуковой чип SID и композиторы, работавшие на нём (Rob Hubbard, Martin Galway, Jeroen Tel), до сих пор остаются ориентирами для современной chiptune-сцены. Прошивка frank-c64 сохраняет работу связки процессора 6510 и звукового чипа SID.',
    highlightsEn: [
      'Frodo Lite by default; cycle-accurate Frodo SC available as a build option.',
      '6510 CPU and SID 6581 / 8580 sound emulation.',
      'HDMI or VGA output, mutually exclusive at build.',
      'I2S or PWM audio, selectable at build.',
      'PS/2 keyboard, USB HID keyboard / gamepad, NES/SNES gamepads.',
      'Cartridge, REU, and disk image support; embedded Basic / Char / Kernal ROMs.',
    ],
    highlightsRu: [
      'По умолчанию используется Frodo Lite; цикл-точный Frodo SC доступен как опция сборки.',
      'Эмуляция процессора 6510 и звуковых чипов SID 6581 и 8580.',
      'Вывод изображения по HDMI или VGA (выбирается при сборке, взаимоисключаемые режимы).',
      'Вывод звука по I2S или PWM (выбирается при сборке).',
      'Поддержка PS/2-клавиатуры, USB HID-клавиатуры и геймпадов, NES- и SNES-геймпадов.',
      'Поддержка картриджей, REU и образов дисков; встроенные ROM Basic, Char и Kernal.',
    ],
    videoOutputs: ['HDMI', 'VGA'],
    audio: ['PWM', 'I2S'],
    psram: 'optional',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-c64',
    releases: 'https://github.com/rh1tech/frank-c64/releases',
    thumbnail: 'images/frank-c64/screen2.png',
    screenshots: [
      'images/frank-c64/screen1.png',
      'images/frank-c64/screen2.png',
    ],
  },
  'frank-apple': {
    slug: 'frank-apple',
    name: 'frank-apple',
    category: 'console',
    excerptEn: 'Apple //e emulator for FRANK.',
    excerptRu: 'Эмулятор Apple //e для FRANK.',
    summaryEn:
      'An Apple //e emulator for FRANK. The classic 65C02 machine with Disk II support, all native video modes, and a choice of I2S or PWM audio.',
    summaryRu:
      'Эмулятор Apple //e для FRANK. Классическая машина на процессоре 65C02 с поддержкой контроллера Disk II, всеми нативными видеорежимами и выбором между I2S- и PWM-звуком.',
    historyEn:
      "Apple introduced the //e in January 1983 as the longest-lived member of the Apple II line, staying in production for an entire decade. With 64 KB of RAM out of the box, expandable up to 1 MB, and built-in support for ProDOS, it became the standard machine in American classrooms through the 1980s — for many people the first computer they ever sat in front of. Educational landmarks like Oregon Trail, Where in the World Is Carmen Sandiego? and the original Karateka all shipped on its 5.25\" floppies.",
    historyRu:
      'Apple //e был представлен в январе 1983 года и стал самой долгоживущей моделью семейства Apple II: производство велось около десяти лет. Базовая конфигурация включала 64 КБ оперативной памяти с возможностью расширения до 1 МБ и встроенную поддержку ProDOS. На протяжении 1980-х годов компьютер широко использовался в учебных заведениях США. На его дискетах формата 5,25 дюйма были изданы такие значимые образовательные и приключенческие программы, как Oregon Trail, Where in the World Is Carmen Sandiego? и оригинальная Karateka.',
    highlightsEn: [
      '65C02 core with all Apple //e video modes (Text, Lo-Res, Hi-Res, Double Hi-Res).',
      'Native 320×240 HDMI or VGA output via PIO.',
      'I2S or PWM audio, selectable at build (PWM is the default).',
      'Disk II floppy support for DSK, NIB, WOZ, and BDSK images, with disk-write-back.',
      'PS/2 keyboard, USB HID keyboard, NES gamepad over USB.',
      'Builds for both RP2040 and RP2350; PSRAM optional.',
    ],
    highlightsRu: [
      'Ядро 65C02 со всеми нативными видеорежимами Apple //e (Text, Lo-Res, Hi-Res, Double Hi-Res).',
      'Нативный вывод изображения 320×240 по HDMI или VGA через PIO.',
      'Вывод звука по I2S или PWM (по умолчанию используется PWM).',
      'Поддержка Disk II с образами DSK, NIB, WOZ и BDSK; запись изменений обратно в образ.',
      'Поддержка PS/2-клавиатуры, USB HID-клавиатуры и NES-геймпада через USB.',
      'Сборка под RP2040 и RP2350; PSRAM не обязателен.',
    ],
    videoOutputs: ['HDMI', 'VGA'],
    audio: ['PWM', 'I2S'],
    psram: 'optional',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-apple',
    releases: 'https://github.com/rh1tech/frank-apple/releases',
    thumbnail: 'images/frank-apple/screen1.png',
    screenshots: [
      'images/frank-apple/screen1.png',
      'images/frank-apple/screen2.png',
      'images/frank-apple/screen3.png',
      'images/frank-apple/screen4.png',
    ],
  },
  // -----------------------------------------------------------------
  // PC
  // -----------------------------------------------------------------
  'frank-386': {
    slug: 'frank-386',
    name: 'frank-386',
    category: 'computer',
    excerptEn: 'IBM PC i386 emulator — runs DOS, Windows 3.x / 95, and Linux.',
    excerptRu: 'Эмулятор IBM PC i386 — DOS, Windows 3.x и 95, а также Linux.',
    summaryEn:
      'A tiny386 port for FRANK. Boots DOS, Windows 3.x, Windows 95, and small Linux builds, with a complete VGA pipeline and a choice of I2S or PWM audio.',
    summaryRu:
      'Порт tiny386 для FRANK. Поддерживается загрузка MS-DOS, Windows 3.x, Windows 95 и небольших сборок Linux. Реализован полноценный VGA-конвейер и эмуляция звуковой карты с выводом по I2S или PWM.',
    historyEn:
      "Intel's 80386, released in October 1985, was the first 32-bit x86 chip and the architecture that anchored the next thirty years of personal computing. The combination of 386 + VGA + Sound Blaster + a fast hard drive defined the early-1990s gaming PC and made games like DOOM, Wing Commander and Civilization possible. Microsoft's transition from MS-DOS through Windows 3.1 to Windows 95 played out on this exact hardware. frank-386 reproduces that whole stack on a Pico-class board, with a FAT-formatted SD card serving as the disk.",
    historyRu:
      'Процессор Intel 80386, выпущенный в октябре 1985 года, стал первым 32-битным процессором архитектуры x86 и определил направление развития персональных компьютеров на последующие тридцать лет. Сочетание 386, видеоадаптера VGA, звуковой карты Sound Blaster и быстрого жёсткого диска сформировало стандартный игровой ПК начала 1990-х годов и обеспечило выпуск таких игр, как DOOM, Wing Commander и Civilization. На этой же аппаратной базе происходил переход Microsoft от MS-DOS к Windows 3.1 и далее к Windows 95. Прошивка frank-386 воспроизводит указанную программно-аппаратную среду на плате класса Pico; в качестве диска используется SD-карта с файловой системой FAT.',
    highlightsEn: [
      'i386 core based on tiny386, with Cortex-M33 ARM-assembly hot paths.',
      'Boots MS-DOS, Windows 3.x, Windows 95 and small Linux builds.',
      'VGA-class video pipeline shared by HDMI and VGA outputs (256-colour modes, text and graphics).',
      'AdLib / OPL2, Sound Blaster 16, PC Speaker, Tandy SN76489, and Disney Sound Source emulation.',
      'PS/2 keyboard and mouse, USB HID, NES/SNES gamepads (with mouse-emulation mode).',
      'PCI bus, IDE, FDD, CMOS/RTC; SD-as-network-drive via mapdrive.com.',
    ],
    highlightsRu: [
      'Ядро i386 на основе tiny386 с горячими участками на ARM-ассемблере для Cortex-M33.',
      'Загрузка MS-DOS, Windows 3.x, Windows 95 и небольших сборок Linux.',
      'Видеоконвейер класса VGA, общий для HDMI и VGA-выводов (256-цветные текстовые и графические режимы).',
      'Эмуляция AdLib / OPL2, Sound Blaster 16, PC Speaker, Tandy SN76489 и Disney Sound Source.',
      'Поддержка PS/2-клавиатуры и мыши, USB HID, NES- и SNES-геймпадов (с режимом эмуляции мыши).',
      'Шина PCI, контроллеры IDE и FDD, CMOS/RTC; сетевой диск из SD-карты через mapdrive.com.',
    ],
    videoOutputs: ['HDMI', 'VGA'],
    audio: ['PWM', 'I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-386',
    releases: 'https://github.com/rh1tech/frank-386/releases',
    thumbnail: 'images/frank-386/screen3.png',
    screenshots: [
      'images/frank-386/screen1.png',
      'images/frank-386/screen2.png',
      'images/frank-386/screen3.png',
      'images/frank-386/screen4.png',
      'images/frank-386/screen5.png',
    ],
  },
  // -----------------------------------------------------------------
  // Game ports
  // -----------------------------------------------------------------
  'frank-idtech1': {
    slug: 'frank-idtech1',
    name: 'frank-idtech1',
    category: 'game',
    excerptEn: 'DOOM, Heretic, Hexen, Strife — idTech1 in one firmware.',
    excerptRu: 'DOOM, Heretic, Hexen и Strife — весь idTech1 в одной прошивке.',
    summaryEn:
      'A combined idTech1 build that runs DOOM, Heretic, Hexen, and Strife from a single firmware image. Engine selected by the WAD on the SD card. HDMI 320×240 video and I2S audio.',
    summaryRu:
      'Объединённая сборка на движке idTech1: одна прошивка обеспечивает запуск DOOM, Heretic, Hexen и Strife. Игра выбирается через WAD-файл на SD-карте. Видео — HDMI 320×240, звук — I2S.',
    historyEn:
      'idTech1 — better known as the "DOOM engine" — appeared in 1993 and became the most influential first-person engine of the 1990s. It powered DOOM, Raven\'s Heretic and Hexen, and Rogue Entertainment\'s Strife, then fueled an enormous mod and source-port community after John Carmack open-sourced the code in 1997. frank-idtech1 keeps that lineage alive: the same engine, the same WAD format, running on a microcontroller.',
    historyRu:
      'Движок idTech1, известный как «движок DOOM», был представлен в 1993 году и стал одним из наиболее значимых FPS-движков 1990-х годов. На нём были выпущены DOOM, Heretic и Hexen студии Raven Software, а также Strife от Rogue Entertainment. После публикации исходного кода Джоном Кармаком в 1997 году вокруг движка сформировалось обширное сообщество модов и source-портов. Прошивка frank-idtech1 сохраняет совместимость с оригинальным движком и форматом WAD.',
    highlightsEn: [
      'Four classic idTech1 engines linked into a single binary via per-engine symbol prefixes.',
      'WAD picker at boot reads the SD card.',
      'HDMI 320×240 video output via PIO.',
      'OPL2 music via EMU8950; I2S audio output.',
      'PS/2 keyboard and mouse, USB HID keyboard and mouse.',
    ],
    highlightsRu: [
      'Четыре движка idTech1, объединённые в одну прошивку с раздельными символьными префиксами.',
      'Выбор WAD-файла при загрузке выполняется с SD-карты.',
      'Вывод изображения HDMI 320×240 через PIO.',
      'Музыка в формате OPL2 (через EMU8950); вывод звука по I2S.',
      'Поддержка PS/2-клавиатуры и мыши, USB HID-клавиатуры и мыши.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-idtech1',
    releases: 'https://github.com/rh1tech/frank-idtech1/releases',
    thumbnail: 'images/frank-idtech1/screen4.png',
    screenshots: [
      'images/frank-idtech1/screen1.png',
      'images/frank-idtech1/screen2.png',
      'images/frank-idtech1/screen3.png',
      'images/frank-idtech1/screen4.png',
      'images/frank-idtech1/screen5.png',
    ],
  },
  'frank-doom': {
    slug: 'frank-doom',
    name: 'frank-doom',
    category: 'game',
    excerptEn: 'Standalone DOOM port for FRANK.',
    excerptRu: 'Отдельная прошивка DOOM для FRANK.',
    summaryEn:
      'A standalone DOOM build for the RP2350, based on doomgeneric and Chocolate Doom. Faster cold boot than the combined idTech1 firmware when only DOOM is required.',
    summaryRu:
      'Отдельная сборка DOOM для RP2350 на основе doomgeneric и Chocolate Doom. Запускается быстрее, чем объединённая сборка idTech1, и предназначена для случаев, когда требуется только DOOM.',
    historyEn:
      'DOOM shipped on December 10, 1993, distributed by id Software as shareware over BBS uploads and FTP mirrors that nearly buckled under the demand. It defined the modern first-person shooter — texture-mapped 3D, a deathmatch mode that sold corporate America on networking, modding via WAD files, and a soundtrack that everyone of a certain age can still hum. After id open-sourced the engine in 1997, DOOM became the lingua franca of "can it run...?" lists.',
    historyRu:
      'DOOM был выпущен компанией id Software 10 декабря 1993 года и распространялся по модели shareware через сети BBS и FTP-зеркала. Игра определила облик современного FPS: текстурированная 3D-графика, режим deathmatch, поддержка пользовательских модификаций через WAD-файлы и характерный саундтрек. После публикации исходного кода движка в 1997 году DOOM был портирован на широкий ряд устройств; прошивка frank-doom продолжает этот ряд.',
    highlightsEn: [
      'doomgeneric + Chocolate Doom engine, smaller image than the combined build.',
      'Native 320×240 HDMI output via PIO.',
      'OPL2 music via EMU8950 with ARM-assembly inner loop.',
      'I2S audio output.',
      'PS/2 keyboard and mouse, USB HID keyboard and mouse, USB hub supported.',
      'Loads any DOOM-engine WAD from SD; saves to /savegame/.',
    ],
    highlightsRu: [
      'Движок на основе doomgeneric и Chocolate Doom; меньший размер прошивки по сравнению с объединённой сборкой.',
      'Нативный вывод HDMI 320×240 через PIO.',
      'Музыка OPL2 через EMU8950 с внутренним циклом на ARM-ассемблере.',
      'Вывод звука по I2S.',
      'Поддержка PS/2-клавиатуры и мыши, USB HID-клавиатуры и мыши, USB-хабов.',
      'Загрузка любых WAD-файлов формата DOOM с SD-карты; сохранения — в каталог /savegame/.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-doom',
    releases: 'https://github.com/rh1tech/frank-doom/releases',
    thumbnail: 'images/frank-doom/screen1.png',
    screenshots: ['images/frank-doom/screen1.png'],
  },
  'frank-heretic': {
    slug: 'frank-heretic',
    name: 'frank-heretic',
    category: 'game',
    excerptEn: 'Standalone Heretic port for FRANK.',
    excerptRu: 'Отдельная прошивка Heretic для FRANK.',
    summaryEn:
      'A standalone Heretic build for FRANK based on Chocolate Heretic and doomgeneric. Smaller image and faster cold boot than the combined idTech1 firmware.',
    summaryRu:
      'Отдельная сборка Heretic для FRANK на основе Chocolate Heretic и doomgeneric. Меньший размер прошивки и более быстрая загрузка по сравнению с объединённой сборкой idTech1.',
    historyEn:
      'Heretic was developed by Raven Software and published by id Software in December 1994, taking the DOOM engine into a fantasy setting. It introduced inventory items and full vertical aiming — small, surgical changes that other idTech1 games (including its own sequel Hexen) would inherit. Critically well-received and commercially solid, Heretic established Raven as id\'s long-running engine partner.',
    historyRu:
      'Heretic был разработан студией Raven Software и издан id Software в декабре 1994 года. Игра использовала движок DOOM, но переносила действие в фэнтезийный сеттинг. В Heretic была впервые реализована система инвентаря и полное вертикальное прицеливание — нововведения, которые позднее были унаследованы другими играми на idTech1, включая сиквел Hexen. Игра получила положительные оценки и устойчивые продажи, что закрепило за Raven Software статус постоянного партнёра id Software по разработке игр на их движках.',
    highlightsEn: [
      'Chocolate Heretic + doomgeneric engine, faster cold boot than the combined image.',
      'Native 320×240 HDMI output via PIO.',
      'OPL2 music via EMU8950 (pure C path).',
      'I2S audio output.',
      'Loads HERETIC.WAD or HERETIC1.WAD (shareware) from SD; saves to heretic/saves/.',
      'PS/2 keyboard and mouse, USB HID keyboard and mouse.',
    ],
    highlightsRu: [
      'Движок Chocolate Heretic + doomgeneric; ускоренная загрузка по сравнению с объединённой сборкой.',
      'Нативный вывод HDMI 320×240 через PIO.',
      'Музыка OPL2 через EMU8950 (чистый C, без ARM-ассемблерных оптимизаций).',
      'Вывод звука по I2S.',
      'Загрузка HERETIC.WAD или HERETIC1.WAD (shareware) с SD-карты; сохранения — в каталог heretic/saves/.',
      'Поддержка PS/2-клавиатуры и мыши, USB HID-клавиатуры и мыши.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-heretic',
    releases: 'https://github.com/rh1tech/frank-heretic/releases',
    thumbnail: 'images/frank-heretic/screen1.png',
    screenshots: ['images/frank-heretic/screen1.png'],
  },
  'frank-wolf3d': {
    slug: 'frank-wolf3d',
    name: 'frank-wolf3d',
    category: 'game',
    excerptEn: 'Wolfenstein 3D port for FRANK.',
    excerptRu: 'Порт Wolfenstein 3D для FRANK.',
    summaryEn:
      'A Wolf4SDL-based Wolfenstein 3D port for the RP2350. Native 320×200 HDMI output, I2S audio with MAME YM3812 OPL emulation, PS/2 and USB input plus a NES gamepad.',
    summaryRu:
      'Порт Wolfenstein 3D на основе Wolf4SDL для RP2350. Нативный вывод HDMI 320×200, звук по I2S с эмуляцией OPL YM3812 от MAME; ввод — PS/2, USB HID и NES-геймпад.',
    historyEn:
      'Released by id Software on May 5, 1992 and distributed by Apogee, Wolfenstein 3D effectively created the modern first-person shooter. Its raycaster engine ran texture-mapped 3D corridors at a smooth frame rate on a 386, the shareware first episode introduced millions of people to the format, and the design template — keys, doors, secret walls, increasingly large levels — defined the genre for the rest of the decade. id open-sourced the engine in 1995, which is why it has been ported to almost every device with a screen.',
    historyRu:
      'Wolfenstein 3D был выпущен компанией id Software 5 мая 1992 года и распространялся издателем Apogee. Игра фактически сформировала жанр современного FPS. Её движок на основе технологии raycasting обеспечивал плавное отображение текстурированных трёхмерных уровней на процессоре 386. Shareware-эпизод позволил миллионам пользователей познакомиться с жанром, а ключевые элементы дизайна — ключи, двери, секретные стены и постепенное усложнение уровней — определили облик FPS на следующее десятилетие. Исходный код движка был опубликован id Software в 1995 году, что обеспечило широкую поддержку Wolfenstein 3D на самых разных платформах.',
    highlightsEn: [
      'Wolf4SDL-based engine; runs full WL6, WL3 and WL1 (shareware) data with auto-detect.',
      'Native 320×200 HDMI output with triple-buffered vsync.',
      'MAME YM3812 OPL music plus PC-speaker and digitised sound.',
      'I2S audio output with PIO + DMA ping-pong.',
      'PS/2 keyboard input, USB HID keyboard, NES gamepad direct.',
    ],
    highlightsRu: [
      'Движок на основе Wolf4SDL; поддержка данных WL6, WL3 и WL1 (shareware) с автоопределением.',
      'Нативный вывод HDMI 320×200 с тройной буферизацией и vsync.',
      'Музыка OPL через эмулятор YM3812 от MAME; PC-спикер и цифровые звуковые эффекты.',
      'Вывод звука по I2S с использованием PIO и DMA ping-pong.',
      'Поддержка PS/2- и USB HID-клавиатуры, NES-геймпада напрямую.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-wolf3d',
    releases: 'https://github.com/rh1tech/frank-wolf3d/releases',
    thumbnail: 'images/frank-wolf3d/screen1.png',
    screenshots: [
      'images/frank-wolf3d/screen1.png',
      'images/frank-wolf3d/screen2.png',
      'images/frank-wolf3d/screen3.png',
    ],
  },
  'frank-duke3d': {
    slug: 'frank-duke3d',
    name: 'frank-duke3d',
    category: 'game',
    excerptEn: 'Duke Nukem 3D port for FRANK.',
    excerptRu: 'Порт Duke Nukem 3D для FRANK.',
    summaryEn:
      'A Duke Nukem 3D port for the RP2350 derived from Chocolate Duke3D and the Duke3D ESP32 port. Native 320×200 HDMI video, OPL2 music via EMU8950, and I2S audio.',
    summaryRu:
      'Порт Duke Nukem 3D на RP2350 на основе Chocolate Duke3D и порта Duke3D для ESP32. Нативный вывод HDMI 320×200, музыка OPL2 через EMU8950, вывод звука по I2S.',
    historyEn:
      "3D Realms shipped Duke Nukem 3D in January 1996 on Ken Silverman's Build engine, leapfrogging DOOM's level geometry with sloped floors, room-over-room sectors, breakable scenery and an interactivity layer no other shooter of the era could match. The character — a one-liner-spouting B-movie commando — became one of the defining mascots of the 1990s PC era, and the LAN deathmatch culture that grew around the game ran in parallel to Quake. Source release came in 2003.",
    historyRu:
      '3D Realms выпустила Duke Nukem 3D в январе 1996 года на движке Build Кена Силвермана. По сравнению с DOOM движок предлагал наклонные полы, секторы «комната над комнатой», разрушаемое окружение и уровень интерактивности, недоступный другим шутерам того времени. Карикатурный главный герой стал одним из узнаваемых образов PC-гейминга 1990-х годов, а LAN-deathmatch вокруг игры существовал параллельно с Quake. Исходный код был опубликован в 2003 году.',
    highlightsEn: [
      'Build engine + 3D Realms game code (Ken Silverman + Apogee audiolib).',
      'Native 320×200 HDMI output via PIO.',
      'OPL2 music via EMU8950; I2S audio output.',
      'PS/2 keyboard input; optional USB HID stack.',
      'Requires DUKE3D.GRP on the SD card.',
    ],
    highlightsRu: [
      'Движок Build и код игры от 3D Realms (Кен Силверман и звуковая библиотека Apogee).',
      'Нативный вывод HDMI 320×200 через PIO.',
      'Музыка OPL2 через EMU8950; вывод звука по I2S.',
      'Поддержка PS/2-клавиатуры; USB HID-стек подключается опционально.',
      'Для запуска требуется DUKE3D.GRP на SD-карте.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-duke3d',
    releases: 'https://github.com/rh1tech/frank-duke3d/releases',
    thumbnail: 'images/frank-duke3d/screen3.png',
    screenshots: [
      'images/frank-duke3d/screen1.png',
      'images/frank-duke3d/screen2.png',
      'images/frank-duke3d/screen3.png',
      'images/frank-duke3d/screen4.png',
    ],
  },
  'frank-prince': {
    slug: 'frank-prince',
    name: 'frank-prince',
    category: 'game',
    excerptEn: 'Prince of Persia — the DOS version, on FRANK.',
    excerptRu: 'Prince of Persia — DOS-версия — на FRANK.',
    summaryEn:
      'A SDLPoP-based port of the DOS Prince of Persia for the RP2350. The original 320×200 framebuffer is letterboxed and scaled to a 640×480 HDMI output, with I2S audio.',
    summaryRu:
      'Порт DOS-версии Prince of Persia для RP2350 на основе SDLPoP. Оригинальный кадровый буфер 320×200 выводится с letterbox-масштабированием на HDMI 640×480; звук — I2S.',
    historyEn:
      "Prince of Persia was created by Jordan Mechner and released for the Apple II in 1989. Its rotoscoped animation, derived from footage of Mechner's brother running and jumping in a parking lot, gave the protagonist movement that no platformer had matched before. The game was eventually ported to roughly two dozen platforms, sold through the 1990s, and seeded a franchise that Ubisoft would later turn into Sands of Time. The original Apple II source code was released in 2012.",
    historyRu:
      'Prince of Persia создал Джордан Мекнер; игра вышла на Apple II в 1989 году. Ротоскопированная анимация, снятая с движений брата Мекнера на парковке, дала персонажу пластику, которой до этого не было ни в одном платформере. Игра была портирована примерно на два десятка платформ, продавалась все девяностые и заложила франшизу, которую Ubisoft позже превратила в Sands of Time. Оригинальные исходники Apple II были опубликованы в 2012 году.',
    highlightsEn: [
      'SDLPoP-based engine (David Nagy); original gameplay and timing preserved.',
      'HDMI 640×480 output via PIO; 320×200 game surface letterboxed and scaled.',
      'I2S audio output.',
      'PS/2 keyboard and USB HID keyboard.',
      'Game data and save files held in PSRAM.',
    ],
    highlightsRu: [
      'Движок на основе SDLPoP (David Nagy); оригинальные механика и тайминги сохранены.',
      'Вывод HDMI 640×480 через PIO; игровая поверхность 320×200 выводится с letterbox-масштабированием.',
      'Вывод звука по I2S.',
      'Поддержка PS/2- и USB HID-клавиатур.',
      'Игровые данные и сохранения размещаются в PSRAM.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-prince',
    releases: 'https://github.com/rh1tech/frank-prince/releases',
    thumbnail: 'images/frank-prince/screen2.png',
    screenshots: [
      'images/frank-prince/screen1.png',
      'images/frank-prince/screen2.png',
      'images/frank-prince/screen3.png',
    ],
  },
  'frank-digger': {
    slug: 'frank-digger',
    name: 'frank-digger',
    category: 'game',
    excerptEn: 'Digger Remastered — runs without PSRAM.',
    excerptRu: 'Digger Remastered — работает без PSRAM.',
    summaryEn:
      "An Andrew Jenner's Digger Remastered port for the RP2350. Faithful CGA-mode rendering at 320×240 HDMI output. The firmware fits entirely in 512 KB of internal SRAM and runs without PSRAM.",
    summaryRu:
      'Порт Digger Remastered Эндрю Дженнера для RP2350. Точная отрисовка в режиме CGA с выводом HDMI 320×240. Прошивка полностью помещается в 512 КБ внутренней SRAM и не требует PSRAM.',
    historyEn:
      "Digger was published by Windmill Software in 1983 for the IBM PC. It was one of the very first games to push the PC's tinny PC speaker and four-color CGA into something the arcade crowd would actually recognise — gold bags, emeralds and underground monsters cribbed straight from Mr. Do! and Dig Dug. Andrew Jenner picked it back up in 1998 with Digger Remastered, an open-source rebuild that fixed timing on modern PCs and added scoreboards, multiplayer and save states.",
    historyRu:
      'Digger был издан Windmill Software в 1983 году для IBM PC. Это одна из первых игр, наглядно использовавших PC-спикер и четырёхцветную графику CGA в аркадном стиле, отсылающем к Mr. Do! и Dig Dug. В 1998 году Эндрю Дженнер выпустил Digger Remastered — открытый ремейк, в котором были исправлены проблемы с таймингами на современных PC и добавлены таблицы рекордов, мультиплеер и сохранения.',
    highlightsEn: [
      'Andrew Jenner\'s Digger Remastered, ported to the RP2350.',
      'Authentic CGA palettes (0/0i/1/1i and 2bpp packed font).',
      'HDMI 320×240 output via PIO; 4-bit packed framebuffer.',
      'I2S audio output.',
      'Runs in 512 KB SRAM without any PSRAM requirement.',
      'PS/2 keyboard and USB HID keyboard, both active simultaneously.',
    ],
    highlightsRu: [
      'Порт Digger Remastered Эндрю Дженнера на RP2350.',
      'Аутентичные палитры CGA (0/0i/1/1i и 2bpp-шрифт).',
      'Вывод HDMI 320×240 через PIO; 4-битный упакованный кадровый буфер.',
      'Вывод звука по I2S.',
      'Работает в 512 КБ SRAM без требования PSRAM.',
      'Одновременная поддержка PS/2- и USB HID-клавиатур.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'none',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-digger',
    releases: 'https://github.com/rh1tech/frank-digger/releases',
    thumbnail: 'images/frank-digger/screenshot1.png',
    screenshots: [
      'images/frank-digger/screenshot1.png',
      'images/frank-digger/screenshot2.png',
    ],
  },
  'frank-quest': {
    slug: 'frank-quest',
    name: 'frank-quest',
    category: 'game',
    excerptEn:
      'ScummVM (Cabal) port — King’s Quest, Monkey Island, Day of the Tentacle, Full Throttle and more.',
    excerptRu:
      'Порт ScummVM (Cabal) — King’s Quest, Monkey Island, Day of the Tentacle, Full Throttle и другие.',
    summaryEn:
      'A ScummVM port (Cabal branch) for FRANK. Plays adventure classics across AGI, SCI, SCUMM v1–v8, GOB and KYRA engines. Runs its entire heap out of PSRAM via a custom dlmalloc.',
    summaryRu:
      'Порт ScummVM (ветка Cabal) для FRANK. Поддерживается запуск классических квестов на движках AGI, SCI, SCUMM v1–v8, GOB и KYRA. Куча программы целиком размещена в PSRAM через собственную реализацию dlmalloc.',
    historyEn:
      "Point-and-click adventures defined PC gaming through the late 1980s and 1990s: Sierra On-Line's AGI and SCI engines powered King's Quest, Space Quest, Police Quest and Leisure Suit Larry; LucasArts' SCUMM ran Maniac Mansion, Monkey Island, Day of the Tentacle and Full Throttle; Coktel Vision shipped Gobliiins on GOB; Westwood put Kyrandia on its KYRA engine. ScummVM, founded in 2001, reverse-engineered all of those interpreters into a single open-source runtime. frank-quest is that runtime, on a microcontroller.",
    historyRu:
      'Point-and-click-квесты определили облик PC-гейминга в конце 1980-х и в 1990-х годах. Движки AGI и SCI компании Sierra On-Line использовались в сериях King\'s Quest, Space Quest, Police Quest и Leisure Suit Larry; SCUMM от LucasArts — в Maniac Mansion, Monkey Island, Day of the Tentacle и Full Throttle; GOB от Coktel Vision — в Gobliiins; KYRA от Westwood — в Kyrandia. Проект ScummVM, начатый в 2001 году, реализовал открытую среду исполнения всех этих интерпретаторов в едином виде. Прошивка frank-quest переносит этот рантайм на микроконтроллер.',
    highlightsEn: [
      'AGI, SCI, SCUMM v1–v8, GOB, KYRA engines compiled in.',
      'Custom dlmalloc redirects newlib heap to PSRAM (8 MB).',
      'HDMI output (320×200 game surface, 320×240 scanout).',
      'I2S audio output.',
      'PS/2 keyboard and mouse, USB HID keyboard and mouse.',
      'Original game data required (bring your own files on the SD card).',
    ],
    highlightsRu: [
      'Включены движки AGI, SCI, SCUMM v1–v8, GOB и KYRA.',
      'Собственная реализация dlmalloc перенаправляет кучу newlib в PSRAM (8 МБ).',
      'Вывод HDMI (игровая поверхность 320×200, развёртка 320×240).',
      'Вывод звука по I2S.',
      'Поддержка PS/2- и USB HID-клавиатур и мышей.',
      'Требуются оригинальные файлы игр на SD-карте.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-quest',
    releases: 'https://github.com/rh1tech/frank-quest/releases',
    thumbnail: 'images/frank-quest/kyra.png',
    screenshots: [
      'images/frank-quest/intro.png',
      'images/frank-quest/larry.png',
      'images/frank-quest/throttle.png',
      'images/frank-quest/throttle2.png',
      'images/frank-quest/gobliins.png',
      'images/frank-quest/kyra.png',
      'images/frank-quest/loader.png',
    ],
  },
  // -----------------------------------------------------------------
  // OS / Utilities
  // -----------------------------------------------------------------
  'frank-os': {
    slug: 'frank-os',
    name: 'frank-os',
    category: 'os',
    excerptEn:
      'Desktop OS for the RP2350 — windowed GUI, file manager, terminal, built-in apps.',
    excerptRu:
      'Десктопная ОС для RP2350 — оконный интерфейс, файловый менеджер, терминал, встроенные приложения.',
    summaryEn:
      'A desktop operating system for the RP2350 microcontroller. Windowed GUI with a mouse, terminal, file manager and apps — all running in 520 KB of SRAM. Window management, menus, dialogs, and preemptive multitasking, Windows 95-style, on a chip the size of a coin.',
    summaryRu:
      'Десктопная операционная система для микроконтроллера RP2350. Оконный интерфейс с мышью, терминал, файловый менеджер и приложения — всё в 520 КБ SRAM. Управление окнами, меню, диалоги и вытесняющая многозадачность в духе Windows 95 — на чипе размером с монету.',
    historyEn:
      "When Windows 95 launched in August 1995, the desktop metaphor — taskbar, start menu, draggable windows, modal dialogs — became the consumer interface for two decades of computing. Doing the same thing on an RP2350 is a different problem: 520 KB of SRAM, a 150 MHz Cortex-M33, no MMU, no swap. frank-os was written from scratch to fit those constraints — preemptive multitasking, a window manager, a file manager and a small app suite — while staying recognisable to anyone who grew up double-clicking on icons.",
    historyRu:
      'Когда в августе 1995 года вышла Windows 95, десктопная метафора — панель задач, меню «Пуск», перетаскиваемые окна, модальные диалоги — стала интерфейсом потребительских компьютеров на двадцать лет вперёд. Сделать то же самое на RP2350 — другая задача: 520 КБ SRAM, 150 МГц Cortex-M33, ни MMU, ни swap-файла. frank-os написана с нуля под эти ограничения — вытесняющая многозадачность, оконный менеджер, файловый менеджер и набор приложений — но при этом остаётся узнаваемой для всех, кто вырос на двойном клике по иконкам.',
    highlightsEn: [
      'Windowed desktop on the RP2350 (M2 only); HSTX HDMI 640×480 4bpp / 320×240 8bpp.',
      'Preemptive multitasking on FreeRTOS; compositor, USB and input run as separate tasks.',
      'File manager, terminal, taskbar, start menu, alt-tab, modal dialogs.',
      'PS/2 keyboard and mouse plus USB HID keyboard and mouse.',
      'I2S audio output.',
      'PSRAM optional — used for ELF apps when present.',
    ],
    highlightsRu: [
      'Оконный рабочий стол на RP2350 (только M2); HSTX HDMI 640×480 4bpp или 320×240 8bpp.',
      'Вытесняющая многозадачность на FreeRTOS; композитор, USB и ввод выполняются в отдельных задачах.',
      'Файловый менеджер, терминал, панель задач, меню «Пуск», alt-tab, модальные диалоги.',
      'Поддержка PS/2-клавиатуры и мыши, а также USB HID-клавиатуры и мыши.',
      'Вывод звука по I2S.',
      'PSRAM не обязателен; при наличии используется для запуска ELF-приложений.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'optional',
    compatibility: ['M2'],
    repository: 'https://github.com/rh1tech/frank-os',
    releases: 'https://github.com/rh1tech/frank-os/releases',
    thumbnail: 'images/frank-os/screenshot1.png',
    screenshots: [
      'images/frank-os/screenshot1.png',
      'images/frank-os/screenshot2.png',
      'images/frank-os/screenshot3.png',
    ],
  },
  'frank-kickstart': {
    slug: 'frank-kickstart',
    name: 'frank-kickstart',
    category: 'os',
    excerptEn: 'UF2 launcher / bootloader with an SD card browser.',
    excerptRu: 'Загрузчик / лаунчер UF2 с обозревателем SD-карты.',
    summaryEn:
      'A graphical launcher that reflashes FRANK with any UF2 firmware from the SD card without holding BOOTSEL or attaching a host computer. Reboot is handed off via a watchdog scratch register and a vector-table swap.',
    summaryRu:
      'Графический лаунчер, перепрошивающий FRANK любой прошивкой в формате UF2 непосредственно с SD-карты — без удержания BOOTSEL и без подключения к компьютеру. Перезагрузка управляется через scratch-регистр watchdog и подмену таблицы векторов.',
    historyEn:
      "The Pico's stock workflow asks you to hold a BOOTSEL button while plugging in USB and drag a UF2 file across to a USB mass-storage device. That is fine on the bench, awkward on a finished product. frank-kickstart borrows the spirit of the Amiga's Kickstart ROM — a tiny on-device bootstrap that hands control to whatever you actually want to run — and turns FRANK into something closer to a console: pick a UF2 from the SD card on screen, reboot into it, repeat.",
    historyRu:
      'Стандартный рабочий процесс Pico — зажать BOOTSEL, вставить USB, перетащить UF2-файл на появившийся USB-диск. На столе это нормально, на готовом устройстве — неудобно. frank-kickstart заимствует идею у Kickstart ROM от Amiga — маленький bootstrap внутри устройства, который передаёт управление тому, что реально нужно запустить, — и превращает FRANK во что-то похожее на консоль: выбираете UF2 на SD прямо на экране, перезагружаетесь в неё и повторяете.',
    highlightsEn: [
      'Reflashes any UF2 from the SD card without BOOTSEL.',
      'On-screen browser with thumbnails and metadata.',
      'HDMI output via libdvi/PicoDVI (800×600 with 400×300 doubled internal mode).',
      'PS/2 keyboard, USB HID keyboard / gamepad, NES/SNES gamepad.',
      'Up to 128 firmware entries with PSRAM, 16 without.',
    ],
    highlightsRu: [
      'Перепрошивка любой UF2 с SD-карты без BOOTSEL.',
      'Экранный браузер с миниатюрами и метаданными.',
      'Вывод изображения по HDMI на основе libdvi/PicoDVI (800×600 с внутренним удвоенным режимом 400×300).',
      'Поддержка PS/2-клавиатуры, USB HID-клавиатуры и геймпадов, NES- и SNES-геймпадов.',
      'До 128 записей прошивок при наличии PSRAM, 16 — без него.',
    ],
    videoOutputs: ['HDMI'],
    audio: [],
    psram: 'optional',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-kickstart',
    releases: 'https://github.com/rh1tech/frank-kickstart/releases',
    thumbnail: 'images/frank-kickstart/screen1.png',
    screenshots: [
      'images/frank-kickstart/screen1.png',
      'images/frank-kickstart/screen2.png',
      'images/frank-kickstart/screen3.png',
    ],
  },
};

export const CATEGORY_LABELS_EN: Record<FirmwareCategory, string> = {
  console: 'Game consoles',
  computer: 'Computers',
  game: 'Game ports',
  os: 'OS & utilities',
};

export const CATEGORY_LABELS_RU: Record<FirmwareCategory, string> = {
  console: 'Игровые приставки',
  computer: 'Компьютеры',
  game: 'Порты игр',
  os: 'ОС и утилиты',
};

export const CATEGORY_ORDER: FirmwareCategory[] = ['console', 'computer', 'game', 'os'];
