export type FirmwareCategory = 'console' | 'computer' | 'game' | 'os';

export interface Firmware {
  slug: string;
  name: string;
  category: FirmwareCategory;
  excerptEn: string;
  excerptRu: string;
  excerptUk?: string;
  excerptBe?: string;
  excerptDe?: string;
  summaryEn: string;
  summaryRu: string;
  summaryUk?: string;
  summaryBe?: string;
  summaryDe?: string;
  historyEn?: string;
  historyRu?: string;
  historyUk?: string;
  historyBe?: string;
  historyDe?: string;
  highlightsEn: string[];
  highlightsRu: string[];
  highlightsUk?: string[];
  highlightsBe?: string[];
  highlightsDe?: string[];
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
  'frank-fodder',
  // OS / Utilities
  'frank-os',
  'frank-video',
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
    excerptUk: 'NES, Famicom, Dendy на FRANK — порт QuickNES для RP2350.',
    excerptBe: 'NES, Famicom, Dendy на FRANK — порт QuickNES для RP2350.',
    excerptDe: 'NES, Famicom, Dendy auf FRANK — QuickNES-Port für RP2350.',
    summaryEn:
      'A QuickNES port for the RP2350. Plays NES / Famicom / Dendy ROMs from an SD card with HDMI, VGA, or composite TV output, and audio over I2S, PWM, or HDMI data-island channels.',
    summaryRu:
      'Порт QuickNES для RP2350. Поддерживает запуск ROM-образов NES, Famicom и Dendy с SD-карты. Реализован вывод изображения по HDMI, VGA или композитному ТВ; вывод звука — I2S, PWM или каналы данных HDMI.',
    summaryUk:
      'Порт QuickNES для RP2350. Підтримує запуск ROM-образів NES, Famicom та Dendy з SD-карти. Реалізовано виведення зображення HDMI, VGA або композитним ТВ; виведення звуку — I2S, PWM або каналами даних HDMI.',
    summaryBe:
      'Порт QuickNES для RP2350. Падтрымлівае запуск ROM-вобразаў NES, Famicom і Dendy з SD-карты. Рэалізаваны вывад выявы па HDMI, VGA або кампазітным ТБ; вывад гуку — I2S, PWM або каналы дадзеных HDMI.',
    summaryDe:
      'Ein QuickNES-Port für den RP2350. Spielt NES-, Famicom- und Dendy-ROMs von der SD-Karte ab und liefert Bild über HDMI, VGA oder Composite-TV sowie Audio über I2S, PWM oder die HDMI-Data-Island-Kanäle.',
    historyEn:
      'The Nintendo Entertainment System launched in Japan in 1983 as the Famicom and reached the West two years later. It defined the third console generation, sold roughly 62 million units worldwide, and built the foundation for franchises like Super Mario Bros., The Legend of Zelda and Metroid. In the post-Soviet space the same hardware lived on as the Dendy clone — the first console many households ever owned. The frank-nes firmware brings all three lineages — NES, Famicom and Dendy — to a single Pico-class board.',
    historyRu:
      'Nintendo Entertainment System была выпущена в Японии в 1983 году под названием Famicom; в страны Запада платформа пришла два года спустя. Она определила третье поколение игровых консолей, общий тираж составил около 62 миллионов экземпляров, а её библиотека сформировала такие франшизы, как Super Mario Bros., The Legend of Zelda и Metroid. На постсоветском пространстве аналогичная аппаратура распространялась под маркой Dendy и для многих семей стала первой домашней игровой консолью. Прошивка frank-nes объединяет поддержку всех трёх вариантов — NES, Famicom и Dendy — в одной сборке для платы класса Pico.',
    historyUk:
      'Nintendo Entertainment System була випущена в Японії 1983 року під назвою Famicom; у країни Заходу платформа прийшла двома роками пізніше. Вона визначила третє покоління ігрових консолей, загальний наклад склав близько 62 мільйонів екземплярів, а її бібліотека сформувала такі франшизи, як Super Mario Bros., The Legend of Zelda та Metroid. На пострадянському просторі аналогічна апаратура поширювалася під маркою Dendy і для багатьох родин стала першою домашньою ігровою консоллю. Прошивка frank-nes об’єднує підтримку всіх трьох варіантів — NES, Famicom та Dendy — в одній збірці для плати класу Pico.',
    historyBe:
      'Nintendo Entertainment System была выпушчана ў Японіі ў 1983 годзе пад назвай Famicom; у краіны Захаду платформа прыйшла двума гадамі пазней. Яна вызначыла трэцяе пакаленне ігравых кансоляў, агульны наклад склаў каля 62 мільёнаў экзэмпляраў, а яе бібліятэка сфармавала такія франшызы, як Super Mario Bros., The Legend of Zelda і Metroid. На постсавецкай прасторы аналагічная апаратура распаўсюджвалася пад маркай Dendy і для многіх сем’яў стала першай хатняй ігравой кансоллю. Прашыўка frank-nes аб’ядноўвае падтрымку ўсіх трох варыянтаў — NES, Famicom і Dendy — у адной зборцы для платы класа Pico.',
    historyDe:
      'Das Nintendo Entertainment System erschien 1983 in Japan unter dem Namen Famicom und kam zwei Jahre später in den Westen. Es prägte die dritte Konsolengeneration, verkaufte sich weltweit rund 62 Millionen Mal und legte das Fundament für Reihen wie Super Mario Bros., The Legend of Zelda und Metroid. Im postsowjetischen Raum lebte dieselbe Hardware als Dendy-Klon weiter — für viele Haushalte die erste eigene Konsole. Die frank-nes-Firmware bringt alle drei Linien — NES, Famicom und Dendy — auf eine einzige Platine der Pico-Klasse.',
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
    highlightsUk: [
      'Ядро QuickNES, портоване на RP2350.',
      'PPU з використанням PSRAM; підтримка великого набору мапперів та розширювальної звукової частини (VRC6, VRC7, FME-7, Namco 163).',
      'Виведення зображення HDMI (PIO та HSTX), VGA та композитним ТВ.',
      'Підтримка NES- та SNES-геймпадів напряму, USB-геймпадів і PS/2-клавіатури.',
      'Шість слотів збережень з мініатюрами, налаштування палітри та режим CRT-скан-ліній.',
    ],
    highlightsBe: [
      'Ядро QuickNES, портаванае на RP2350.',
      'PPU з выкарыстаннем PSRAM; падтрымка вялікага набору мапераў і пашыральнай гукавой часткі (VRC6, VRC7, FME-7, Namco 163).',
      'Вывад выявы па HDMI (PIO і HSTX), VGA і кампазітным ТБ.',
      'Падтрымка NES- і SNES-геймпадаў напрамую, USB-геймпадаў і PS/2-клавіятуры.',
      'Шэсць слотаў захаванняў з мініяцюрамі, налада палітры і рэжым CRT-скан-ліній.',
    ],
    highlightsDe: [
      'QuickNES-Kern auf den RP2350 portiert.',
      'PPU mit PSRAM; breite Mapper-Abdeckung und Erweiterungs-Audio (VRC6, VRC7, FME-7, Namco 163).',
      'Bildausgabe über HDMI (PIO und HSTX), VGA und Composite-TV.',
      'NES- und SNES-Gamepads direkt, USB-HID-Gamepads und PS/2-Tastatur.',
      'Sechs Speicherstand-Slots mit Vorschaubildern, Paletten-Anpassung zur Laufzeit, CRT-Scanlines.',
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
    excerptUk: 'Емулятор SNES / Super Famicom для RP2350.',
    excerptBe: 'Эмулятар SNES / Super Famicom для RP2350.',
    excerptDe: 'SNES- / Super-Famicom-Emulator für RP2350.',
    summaryEn:
      'A SNES / Super Famicom emulator built on Snes9x for FRANK. Native 640×480 HDMI output, I2S audio, and a PSRAM-backed ROM cache.',
    summaryRu:
      'Эмулятор Super Nintendo / Super Famicom на основе Snes9x для FRANK. Реализованы нативный вывод HDMI 640×480, звук по I2S и кэширование ROM в PSRAM.',
    summaryUk:
      'Емулятор Super Nintendo / Super Famicom на основі Snes9x для FRANK. Реалізовано нативне виведення HDMI 640×480, звук по I2S та кешування ROM у PSRAM.',
    summaryBe:
      'Эмулятар Super Nintendo / Super Famicom на аснове Snes9x для FRANK. Рэалізаваны натыўны вывад HDMI 640×480, гук па I2S і кэшаванне ROM у PSRAM.',
    summaryDe:
      'Ein auf Snes9x basierender SNES- / Super-Famicom-Emulator für FRANK. Native HDMI-Ausgabe in 640×480, I2S-Audio und PSRAM-gestützter ROM-Cache.',
    historyEn:
      "Nintendo released the Super Famicom in 1990 in Japan, with the Super NES reaching North America in 1991 and Europe in 1992. It carried the company through the 16-bit war against the Sega Genesis, sold close to 50 million units, and shipped the games most people still cite when they talk about the golden age of console design — Super Mario World, A Link to the Past, Chrono Trigger, Super Metroid, Final Fantasy VI. frank-snes is a Snes9x port to the RP2350, with the cartridge ROM and SRAM mapped through PSRAM.",
    historyRu:
      'Super Famicom была выпущена в Японии в 1990 году; в Северной Америке консоль появилась в 1991 году под названием Super NES, а в Европе — в 1992 году. Платформа стала ключевой для Nintendo в эпоху 16-битных консолей и противостояния с Sega Genesis: общий тираж приблизился к 50 миллионам экземпляров. Именно на ней вышел ряд игр, считающихся образцами жанра, в том числе Super Mario World, A Link to the Past, Chrono Trigger, Super Metroid и Final Fantasy VI. frank-snes — порт Snes9x под RP2350; ROM и SRAM картриджа размещены в PSRAM.',
    historyUk:
      'Super Famicom була випущена в Японії 1990 року; в Північній Америці консоль з’явилася 1991 року під назвою Super NES, а в Європі — 1992 року. Платформа стала ключовою для Nintendo в епоху 16-бітних консолей та протистояння з Sega Genesis: загальний наклад наблизився до 50 мільйонів екземплярів. Саме на ній вийшла низка ігор, що вважаються зразками жанру, зокрема Super Mario World, A Link to the Past, Chrono Trigger, Super Metroid та Final Fantasy VI. frank-snes — порт Snes9x під RP2350; ROM та SRAM картриджа розміщено в PSRAM.',
    historyBe:
      'Super Famicom была выпушчана ў Японіі ў 1990 годзе; у Паўночнай Амерыцы кансоль з’явілася ў 1991 годзе пад назвай Super NES, а ў Еўропе — у 1992 годзе. Платформа стала ключавой для Nintendo ў эпоху 16-бітных кансоляў і супрацьстаяння з Sega Genesis: агульны наклад наблізіўся да 50 мільёнаў экзэмпляраў. Менавіта на ёй выйшаў шэраг гульняў, якія лічацца ўзорамі жанру, у тым ліку Super Mario World, A Link to the Past, Chrono Trigger, Super Metroid і Final Fantasy VI. frank-snes — порт Snes9x пад RP2350; ROM і SRAM картрыджа размешчаны ў PSRAM.',
    historyDe:
      'Nintendo brachte 1990 in Japan das Super Famicom auf den Markt; in Nordamerika folgte 1991 das Super NES, in Europa 1992. Die Plattform trug das Unternehmen durch den 16-Bit-Krieg gegen das Sega Genesis, verkaufte sich knapp 50 Millionen Mal und veröffentlichte viele jener Titel, die heute als Höhepunkt des Konsolendesigns gelten — Super Mario World, A Link to the Past, Chrono Trigger, Super Metroid, Final Fantasy VI. frank-snes ist ein Snes9x-Port auf den RP2350, bei dem ROM und Cartridge-SRAM über PSRAM abgebildet werden.',
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
    highlightsUk: [
      'Виведення зображення HDMI 640×480 (подвоєна нативна роздільна здатність SNES).',
      'Звук по I2S (SPC700 та DSP у складі Snes9x).',
      'Підтримка NES- та SNES-геймпадів напряму, USB HID- та XInput-контролерів, SNES Mouse через PS/2 або USB.',
      'Налаштування frameskip, вимкнення шарів та режим CRT-скан-ліній.',
      'Шість слотів збережень; увімкнено SuperFX, C4, OBC1, S-RTC.',
    ],
    highlightsBe: [
      'Вывад выявы HDMI 640×480 (падвоенае натыўнае разрозненне SNES).',
      'Гук па I2S (SPC700 і DSP у складзе Snes9x).',
      'Падтрымка NES- і SNES-геймпадаў напрамую, USB HID- і XInput-кантролераў, SNES Mouse праз PS/2 або USB.',
      'Налады frameskip, адключэння слаёў і рэжым CRT-скан-ліній.',
      'Шэсць слотаў захаванняў; уключаны SuperFX, C4, OBC1, S-RTC.',
    ],
    highlightsDe: [
      'HDMI-Ausgabe in 640×480 — verdoppelte native SNES-Auflösung.',
      'I2S-Audio (SPC700 + DSP via Snes9x).',
      'NES- und SNES-Gamepads direkt, USB-HID- und XInput-Controller, SNES-Mouse über PS/2 oder USB.',
      'Konfigurierbarer Frameskip, Layer-Toggles und CRT-Scanlines.',
      'Sechs Speicherstand-Slots; SuperFX, C4, OBC1, S-RTC einkompiliert.',
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
    excerptUk: 'Емулятор Sega Genesis для FRANK.',
    excerptBe: 'Эмулятар Sega Genesis для FRANK.',
    excerptDe: 'Sega-Genesis-Emulator für FRANK.',
    summaryEn:
      'A Gwenesis-based Sega Genesis emulator for the RP2350. Loads ROMs directly from an SD card; HDMI 320×240 video and I2S audio.',
    summaryRu:
      'Эмулятор Sega Genesis на основе Gwenesis для RP2350. ROM-образы загружаются непосредственно с SD-карты. Реализованы вывод изображения HDMI 320×240 и звук по I2S.',
    summaryUk:
      'Емулятор Sega Genesis на основі Gwenesis для RP2350. ROM-образи завантажуються безпосередньо з SD-карти. Реалізовано виведення зображення HDMI 320×240 та звук по I2S.',
    summaryBe:
      'Эмулятар Sega Genesis на аснове Gwenesis для RP2350. ROM-вобразы загружаюцца непасрэдна з SD-карты. Рэалізаваны вывад выявы HDMI 320×240 і гук па I2S.',
    summaryDe:
      'Ein auf Gwenesis basierender Sega-Genesis-Emulator für den RP2350. Lädt ROMs direkt von der SD-Karte; HDMI-Video in 320×240 und I2S-Audio.',
    historyEn:
      'Sega launched the Mega Drive in Japan in 1988 and as the Genesis in North America in 1989, opening the 16-bit era a year before the Super Famicom arrived. Its Motorola 68000 main CPU plus a Z80 sound co-processor, paired with the YM2612 FM synth, gave the console a sound and visual signature that defined the Sonic the Hedgehog years and the Sega-versus-Nintendo console wars of the early 1990s. frank-genesis brings that signature back on a single Pico-class board.',
    historyRu:
      'Mega Drive была выпущена Sega в Японии в 1988 году; в Северной Америке консоль появилась годом позже под названием Genesis. Платформа открыла 16-битную эру за год до выхода Super Famicom. Сочетание основного процессора Motorola 68000, звукового сопроцессора Z80 и FM-синтезатора YM2612 определило характерное звучание и графический стиль консоли — именно с ней связаны эпоха Sonic the Hedgehog и противостояние Sega и Nintendo в начале 1990-х годов. Прошивка frank-genesis воспроизводит работу этой архитектуры на плате класса Pico.',
    historyUk:
      'Mega Drive була випущена Sega в Японії 1988 року; в Північній Америці консоль з’явилася роком пізніше під назвою Genesis. Платформа відкрила 16-бітну еру за рік до виходу Super Famicom. Поєднання основного процесора Motorola 68000, звукового співпроцесора Z80 та FM-синтезатора YM2612 визначило характерне звучання та графічний стиль консолі — саме з нею пов’язані епоха Sonic the Hedgehog та протистояння Sega і Nintendo на початку 1990-х років. Прошивка frank-genesis відтворює роботу цієї архітектури на платі класу Pico.',
    historyBe:
      'Mega Drive была выпушчана Sega ў Японіі ў 1988 годзе; у Паўночнай Амерыцы кансоль з’явілася годам пазней пад назвай Genesis. Платформа адкрыла 16-бітную эру за год да выхаду Super Famicom. Спалучэнне асноўнага працэсара Motorola 68000, гукавога супрацэсара Z80 і FM-сінтэзатара YM2612 вызначыла характэрнае гучанне і графічны стыль кансолі — менавіта з ёй звязаны эпоха Sonic the Hedgehog і супрацьстаянне Sega і Nintendo ў пачатку 1990-х гадоў. Прашыўка frank-genesis узнаўляе працу гэтай архітэктуры на плаце класа Pico.',
    historyDe:
      'Sega brachte das Mega Drive 1988 in Japan und 1989 in Nordamerika als Genesis auf den Markt und eröffnete damit die 16-Bit-Ära ein Jahr vor dem Super Famicom. Die Hauptrechner-CPU Motorola 68000, der Sound-Co-Prozessor Z80 und der YM2612-FM-Synthesizer prägten den Klang und Look der Konsole — die Sonic-the-Hedgehog-Jahre und der Sega-gegen-Nintendo-Konsolenkrieg der frühen 1990er liefen genau auf dieser Hardware. frank-genesis bringt diese Signatur auf eine einzige Platine der Pico-Klasse zurück.',
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
    highlightsUk: [
      'Ядра VDP, M68K та Z80 на основі Gwenesis; FM-синтезатор YM2612 (з ARM-асемблерною оптимізацією) та звуковий генератор SN76489.',
      'Нативне виведення зображення HDMI 320×240 через PIO.',
      'Виведення звуку по I2S.',
      'Підтримка NES- та SNES-геймпадів напряму; USB HID-хост (вмикається опціонально при складанні).',
      'Збереження стану, налаштовуваний frameskip та режим CRT-скан-ліній.',
    ],
    highlightsBe: [
      'Ядра VDP, M68K і Z80 на аснове Gwenesis; FM-сінтэзатар YM2612 (з ARM-асэмблернай аптымізацыяй) і гукавы генератар SN76489.',
      'Натыўны вывад выявы HDMI 320×240 праз PIO.',
      'Вывад гуку па I2S.',
      'Падтрымка NES- і SNES-геймпадаў напрамую; USB HID-хост (уключаецца апцыянальна пры зборцы).',
      'Захаванне стану, наладжвальны frameskip і рэжым CRT-скан-ліній.',
    ],
    highlightsDe: [
      'Gwenesis-VDP, M68K- und Z80-Kerne; YM2612-FM mit ASM-Optimierung und SN76489-PSG.',
      'Native HDMI-Ausgabe in 320×240 über PIO.',
      'I2S-Audio-Ausgabe.',
      'NES- und SNES-Gamepads direkt, USB-HID-Host (per Build-Flag aktivierbar).',
      'Speicherstände, konfigurierbarer Frameskip, CRT-Scanlines.',
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
    excerptUk: 'Емулятор MSX / MSX2 / MSX2+ (ядро fMSX) для FRANK.',
    excerptBe: 'Эмулятар MSX / MSX2 / MSX2+ (ядро fMSX) для FRANK.',
    excerptDe: 'MSX-/MSX2-/MSX2+-Emulator (fMSX-Kern) für FRANK.',
    summaryEn:
      'A port of the fMSX core to FRANK. Supports MSX, MSX2, and MSX2+ titles on RP2350 with PSRAM, with HDMI, VGA (HSTX), or software composite output and switchable I2S, PWM, or HDMI data-island audio.',
    summaryRu:
      'Порт ядра fMSX на FRANK. Поддерживает запуск программ для MSX, MSX2 и MSX2+ на RP2350 с PSRAM. Реализован вывод изображения по HDMI, VGA (через HSTX) или программному композиту; вывод звука — переключаемый I2S, PWM или каналы данных HDMI.',
    summaryUk:
      'Порт ядра fMSX на FRANK. Підтримує запуск програм для MSX, MSX2 та MSX2+ на RP2350 з PSRAM. Реалізовано виведення зображення по HDMI, VGA (через HSTX) або програмним композитом; виведення звуку — перемикане I2S, PWM або каналами даних HDMI.',
    summaryBe:
      'Порт ядра fMSX на FRANK. Падтрымлівае запуск праграм для MSX, MSX2 і MSX2+ на RP2350 з PSRAM. Рэалізаваны вывад выявы па HDMI, VGA (праз HSTX) або праграмным кампазітам; вывад гуку — пераключальны I2S, PWM або каналы дадзеных HDMI.',
    summaryDe:
      'Eine Portierung des fMSX-Kerns auf FRANK. Unterstützt MSX-, MSX2- und MSX2+-Titel auf dem RP2350 mit PSRAM und liefert Bild über HDMI, VGA (HSTX) oder Software-Composite sowie umschaltbares Audio über I2S, PWM oder HDMI-Data-Island-Kanäle.',
    historyEn:
      "MSX was an open 8-bit standard introduced by Microsoft Japan and ASCII Corporation in 1983, designed so any manufacturer could ship a compatible machine. The platform thrived through three generations — MSX, MSX2 and MSX2+ — across Japan, Korea, the Netherlands, Brazil and the Soviet bloc, where it became one of the few capitalist computer architectures available behind the Iron Curtain. Konami and Hudson Soft published a parade of classics for it: Metal Gear, Castlevania, Bomberman, Parodius, Snatcher. frank-msx packs all three generations into one firmware via the long-running fMSX core.",
    historyRu:
      'MSX — открытый 8-битный стандарт, представленный компаниями Microsoft Japan и ASCII Corporation в 1983 году. Архитектура позволяла любому производителю выпускать совместимый компьютер. Платформа прошла три поколения — MSX, MSX2 и MSX2+ — и получила распространение в Японии, Корее, Нидерландах, Бразилии и странах соцлагеря, где стала одной из немногих доступных западных архитектур. Для MSX был выпущен ряд классических игр от Konami и Hudson Soft, в том числе Metal Gear, Castlevania, Bomberman, Parodius и Snatcher. Прошивка frank-msx обеспечивает поддержку всех трёх поколений в одной сборке на основе ядра fMSX.',
    historyUk:
      'MSX — відкритий 8-бітний стандарт, представлений компаніями Microsoft Japan та ASCII Corporation 1983 року. Архітектура дозволяла будь-якому виробнику випускати сумісний комп’ютер. Платформа пройшла три покоління — MSX, MSX2 та MSX2+ — і отримала поширення в Японії, Кореї, Нідерландах, Бразилії та країнах соцтабору, де стала однією з небагатьох доступних західних архітектур. Для MSX було випущено низку класичних ігор від Konami та Hudson Soft, зокрема Metal Gear, Castlevania, Bomberman, Parodius та Snatcher. Прошивка frank-msx забезпечує підтримку всіх трьох поколінь в одній збірці на основі ядра fMSX.',
    historyBe:
      'MSX — адкрыты 8-бітны стандарт, прадстаўлены кампаніямі Microsoft Japan і ASCII Corporation у 1983 годзе. Архітэктура дазваляла любому вытворцу выпускаць сумяшчальны кампутар. Платформа прайшла тры пакаленні — MSX, MSX2 і MSX2+ — і атрымала распаўсюджванне ў Японіі, Карэі, Нідэрландах, Бразіліі і краінах сацлагера, дзе стала адной з нямногіх даступных заходніх архітэктур. Для MSX быў выпушчаны шэраг класічных гульняў ад Konami і Hudson Soft, у тым ліку Metal Gear, Castlevania, Bomberman, Parodius і Snatcher. Прашыўка frank-msx забяспечвае падтрымку ўсіх трох пакаленняў у адной зборцы на аснове ядра fMSX.',
    historyDe:
      'MSX war ein offener 8-Bit-Standard, den Microsoft Japan und ASCII Corporation 1983 vorstellten — entworfen, damit jeder Hersteller einen kompatiblen Rechner anbieten konnte. Die Plattform hielt sich über drei Generationen — MSX, MSX2 und MSX2+ — in Japan, Korea, den Niederlanden, Brasilien und im Ostblock, wo sie zu den wenigen kapitalistischen Computer-Architekturen hinter dem Eisernen Vorhang gehörte. Konami und Hudson Soft veröffentlichten dafür eine Reihe von Klassikern: Metal Gear, Castlevania, Bomberman, Parodius, Snatcher. frank-msx bündelt alle drei Generationen über den langjährigen fMSX-Kern in einer Firmware.',
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
    highlightsUk: [
      'Підтримка MSX1, MSX2 та MSX2+; до 512 КБ оперативної пам’яті та 512 КБ VRAM, розміщених у PSRAM.',
      'Емуляція VDP V9938 та V9958, PSG AY-3-8910, Konami SCC+, OPLL YM2413, контролера дисковода WD1793.',
      'Виведення зображення по HDMI (PIO та HSTX), VGA (HSTX) та програмним композитом PAL/NTSC.',
      'Підтримка PS/2-клавіатури та миші, NES- і SNES-геймпадів, опціональний USB HID-стек.',
      'Завантаження касет (.CAS), MegaROM-маппери з можливістю ручного вибору, шість слотів збережень на кожен ROM.',
    ],
    highlightsBe: [
      'Падтрымка MSX1, MSX2 і MSX2+; да 512 КБ аператыўнай памяці і 512 КБ VRAM, размешчаных у PSRAM.',
      'Эмуляцыя VDP V9938 і V9958, PSG AY-3-8910, Konami SCC+, OPLL YM2413, кантролера дыскавода WD1793.',
      'Вывад выявы па HDMI (PIO і HSTX), VGA (HSTX) і праграмным кампазітам PAL/NTSC.',
      'Падтрымка PS/2-клавіятуры і мышы, NES- і SNES-геймпадаў, апцыянальны USB HID-стэк.',
      'Загрузка касет (.CAS), MegaROM-маперы з магчымасцю ручнога выбару, шэсць слотаў захаванняў на кожны ROM.',
    ],
    highlightsDe: [
      'Unterstützung für MSX1, MSX2 und MSX2+; bis zu 512 KB RAM und 512 KB VRAM im PSRAM.',
      'V9938- / V9958-VDP, AY-3-8910-PSG, Konami SCC+, YM2413-OPLL, WD1793-Floppy-Controller.',
      'Bildausgabe über HDMI (PIO und HSTX), VGA (HSTX) und Software-Composite PAL/NTSC.',
      'PS/2-Tastatur und -Maus, NES-/SNES-Gamepads, optionaler USB-HID-Stack.',
      'Cassette-Laden (.CAS), MegaROM-Mapper mit manueller Auswahl, sechs Speicherstand-Slots pro ROM.',
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
    excerptUk: 'Емулятор Commodore 64 (Frodo) для FRANK.',
    excerptBe: 'Эмулятар Commodore 64 (Frodo) для FRANK.',
    excerptDe: 'Commodore-64-Emulator (Frodo) für FRANK.',
    summaryEn:
      'A Frodo-based Commodore 64 emulator for FRANK. Loads .D64, .T64 and .CRT images from an SD card; HDMI or VGA output, with I2S or PWM audio.',
    summaryRu:
      'Эмулятор Commodore 64 на основе Frodo для FRANK. Поддерживается загрузка образов .D64, .T64 и .CRT с SD-карты. Реализован вывод изображения по HDMI или VGA, звук — I2S или PWM.',
    summaryUk:
      'Емулятор Commodore 64 на основі Frodo для FRANK. Підтримується завантаження образів .D64, .T64 та .CRT з SD-карти. Реалізовано виведення зображення по HDMI або VGA, звук — I2S або PWM.',
    summaryBe:
      'Эмулятар Commodore 64 на аснове Frodo для FRANK. Падтрымліваецца загрузка вобразаў .D64, .T64 і .CRT з SD-карты. Рэалізаваны вывад выявы па HDMI або VGA, гук — I2S або PWM.',
    summaryDe:
      'Ein auf Frodo basierender Commodore-64-Emulator für FRANK. Lädt .D64-, .T64- und .CRT-Images von der SD-Karte; HDMI- oder VGA-Ausgabe und wahlweise I2S- oder PWM-Audio.',
    historyEn:
      "Released in 1982, the Commodore 64 became the best-selling single computer model in history — Guinness lists somewhere between 12.5 and 17 million units. It put real computing inside the home for under $600, ran a software library that arguably invented PC gaming, and produced the SID sound chip whose composers — Rob Hubbard, Martin Galway, Jeroen Tel — are still cited as influences in modern chiptune. frank-c64 keeps that 6510 + SID combination intact on a chip the size of a coin.",
    historyRu:
      'Commodore 64, представленный в 1982 году, считается самой продаваемой моделью персонального компьютера в истории — по данным Guinness, его тираж составил от 12,5 до 17 миллионов экземпляров. Машина стоила менее 600 долларов и сделала персональные вычисления массовыми. Её программная библиотека во многом сформировала современный PC-гейминг, а звуковой чип SID и композиторы, работавшие на нём (Rob Hubbard, Martin Galway, Jeroen Tel), до сих пор остаются ориентирами для современной chiptune-сцены. Прошивка frank-c64 сохраняет работу связки процессора 6510 и звукового чипа SID.',
    historyUk:
      'Commodore 64, представлений 1982 року, вважається найбільш продаваною моделлю персонального комп’ютера в історії — за даними Guinness, його наклад склав від 12,5 до 17 мільйонів екземплярів. Машина коштувала менш як 600 доларів і зробила персональні обчислення масовими. Її програмна бібліотека багато в чому сформувала сучасний PC-гейминг, а звуковий чип SID та композитори, що працювали на ньому (Rob Hubbard, Martin Galway, Jeroen Tel), досі залишаються орієнтирами для сучасної chiptune-сцени. Прошивка frank-c64 зберігає роботу зв’язки процесора 6510 та звукового чипа SID.',
    historyBe:
      'Commodore 64, прадстаўлены ў 1982 годзе, лічыцца самай прадаванай мадэллю персанальнага кампутара ў гісторыі — паводле дадзеных Guinness, яго наклад склаў ад 12,5 да 17 мільёнаў экзэмпляраў. Машына каштавала менш за 600 долараў і зрабіла персанальныя вылічэнні масавымі. Яе праграмная бібліятэка шмат у чым сфармавала сучасны PC-гейминг, а гукавы чып SID і кампазітары, што працавалі на ім (Rob Hubbard, Martin Galway, Jeroen Tel), дагэтуль застаюцца арыенцірамі для сучаснай chiptune-сцэны. Прашыўка frank-c64 захоўвае працу звязкі працэсара 6510 і гукавога чыпа SID.',
    historyDe:
      'Der 1982 erschienene Commodore 64 wurde laut Guinness mit zwischen 12,5 und 17 Millionen Stück das meistverkaufte Einzelmodell eines Computers in der Geschichte. Er brachte echte Datenverarbeitung für unter 600 US-Dollar ins Wohnzimmer, lief auf einer Software-Bibliothek, die das PC-Gaming maßgeblich erfand, und brachte den SID-Soundchip hervor — dessen Komponisten Rob Hubbard, Martin Galway und Jeroen Tel die moderne Chiptune-Szene bis heute prägen. frank-c64 erhält die Kombination aus 6510 und SID auf einem münzgroßen Chip.',
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
    highlightsUk: [
      'За замовчуванням використовується Frodo Lite; цикл-точний Frodo SC доступний як опція складання.',
      'Емуляція процесора 6510 та звукових чипів SID 6581 і 8580.',
      'Виведення зображення по HDMI або VGA (вибирається при складанні, взаємовиключні режими).',
      'Виведення звуку по I2S або PWM (вибирається при складанні).',
      'Підтримка PS/2-клавіатури, USB HID-клавіатури та геймпадів, NES- і SNES-геймпадів.',
      'Підтримка картриджів, REU та образів дисків; вбудовані ROM Basic, Char та Kernal.',
    ],
    highlightsBe: [
      'Па змаўчанні выкарыстоўваецца Frodo Lite; цыкл-дакладны Frodo SC даступны як опцыя зборкі.',
      'Эмуляцыя працэсара 6510 і гукавых чыпаў SID 6581 і 8580.',
      'Вывад выявы па HDMI або VGA (выбіраецца пры зборцы, узаемавыключныя рэжымы).',
      'Вывад гуку па I2S або PWM (выбіраецца пры зборцы).',
      'Падтрымка PS/2-клавіятуры, USB HID-клавіятуры і геймпадаў, NES- і SNES-геймпадаў.',
      'Падтрымка картрыджаў, REU і вобразаў дыскаў; убудаваныя ROM Basic, Char і Kernal.',
    ],
    highlightsDe: [
      'Standardmäßig Frodo Lite; zyklusgenauer Frodo SC als Build-Option verfügbar.',
      '6510-CPU und SID-6581- / 8580-Soundemulation.',
      'HDMI- oder VGA-Ausgabe (zur Build-Zeit gegenseitig ausschließend wählbar).',
      'I2S- oder PWM-Audio, zur Build-Zeit auswählbar.',
      'PS/2-Tastatur, USB-HID-Tastatur und -Gamepads, NES-/SNES-Gamepads.',
      'Cartridge-, REU- und Disk-Image-Unterstützung; eingebettete Basic-/Char-/Kernal-ROMs.',
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
    excerptUk: 'Емулятор Apple //e для FRANK.',
    excerptBe: 'Эмулятар Apple //e для FRANK.',
    excerptDe: 'Apple-//e-Emulator für FRANK.',
    summaryEn:
      'An Apple //e emulator for FRANK. The classic 65C02 machine with Disk II support, all native video modes, and a choice of I2S or PWM audio.',
    summaryRu:
      'Эмулятор Apple //e для FRANK. Классическая машина на процессоре 65C02 с поддержкой контроллера Disk II, всеми нативными видеорежимами и выбором между I2S- и PWM-звуком.',
    summaryUk:
      'Емулятор Apple //e для FRANK. Класична машина на процесорі 65C02 з підтримкою контролера Disk II, всіма нативними відеорежимами та вибором між I2S- та PWM-звуком.',
    summaryBe:
      'Эмулятар Apple //e для FRANK. Класічная машына на працэсары 65C02 з падтрымкай кантролера Disk II, усімі натыўнымі відэарэжымамі і выбарам паміж I2S- і PWM-гукам.',
    summaryDe:
      'Ein Apple-//e-Emulator für FRANK. Der klassische 65C02-Rechner mit Disk-II-Unterstützung, allen nativen Videomodi und wahlweise I2S- oder PWM-Audio.',
    historyEn:
      "Apple introduced the //e in January 1983 as the longest-lived member of the Apple II line, staying in production for an entire decade. With 64 KB of RAM out of the box, expandable up to 1 MB, and built-in support for ProDOS, it became the standard machine in American classrooms through the 1980s — for many people the first computer they ever sat in front of. Educational landmarks like Oregon Trail, Where in the World Is Carmen Sandiego? and the original Karateka all shipped on its 5.25\" floppies.",
    historyRu:
      'Apple //e был представлен в январе 1983 года и стал самой долгоживущей моделью семейства Apple II: производство велось около десяти лет. Базовая конфигурация включала 64 КБ оперативной памяти с возможностью расширения до 1 МБ и встроенную поддержку ProDOS. На протяжении 1980-х годов компьютер широко использовался в учебных заведениях США. На его дискетах формата 5,25 дюйма были изданы такие значимые образовательные и приключенческие программы, как Oregon Trail, Where in the World Is Carmen Sandiego? и оригинальная Karateka.',
    historyUk:
      'Apple //e було представлено в січні 1983 року, і модель стала найдовшою в серії Apple II: виробництво тривало близько десяти років. Базова конфігурація включала 64 КБ оперативної пам’яті з можливістю розширення до 1 МБ та вбудовану підтримку ProDOS. Упродовж 1980-х років комп’ютер широко використовувався в навчальних закладах США. На його дискетах формату 5,25 дюйма було видано такі значущі освітні та пригодницькі програми, як Oregon Trail, Where in the World Is Carmen Sandiego? та оригінальна Karateka.',
    historyBe:
      'Apple //e быў прадстаўлены ў студзені 1983 года, і мадэль стала самай доўгажыхарнай у серыі Apple II: вытворчасць вялася каля дзесяці гадоў. Базавая канфігурацыя ўключала 64 КБ аператыўнай памяці з магчымасцю пашырэння да 1 МБ і ўбудаваную падтрымку ProDOS. На працягу 1980-х гадоў кампутар шырока выкарыстоўваўся ў навучальных установах ЗША. На яго дыскетах фармату 5,25 цаля былі выдадзены такія значныя адукацыйныя і прыгодніцкія праграмы, як Oregon Trail, Where in the World Is Carmen Sandiego? і арыгінальная Karateka.',
    historyDe:
      'Apple stellte den //e im Januar 1983 vor; er wurde zum langlebigsten Mitglied der Apple-II-Reihe und blieb ein ganzes Jahrzehnt in Produktion. Mit 64 KB RAM ab Werk, erweiterbar auf bis zu 1 MB, und integrierter ProDOS-Unterstützung wurde er in den 1980ern zum Standardrechner in US-amerikanischen Klassenzimmern — für viele Menschen der erste Computer überhaupt. Bildungsklassiker wie Oregon Trail, Where in the World Is Carmen Sandiego? und das originale Karateka erschienen alle auf seinen 5,25"-Disketten.',
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
    highlightsUk: [
      'Ядро 65C02 з усіма нативними відеорежимами Apple //e (Text, Lo-Res, Hi-Res, Double Hi-Res).',
      'Нативне виведення зображення 320×240 по HDMI або VGA через PIO.',
      'Виведення звуку по I2S або PWM (за замовчуванням використовується PWM).',
      'Підтримка Disk II з образами DSK, NIB, WOZ та BDSK; запис змін назад в образ.',
      'Підтримка PS/2-клавіатури, USB HID-клавіатури та NES-геймпада через USB.',
      'Складання під RP2040 та RP2350; PSRAM не обов’язковий.',
    ],
    highlightsBe: [
      'Ядро 65C02 з усімі натыўнымі відэарэжымамі Apple //e (Text, Lo-Res, Hi-Res, Double Hi-Res).',
      'Натыўны вывад выявы 320×240 па HDMI або VGA праз PIO.',
      'Вывад гуку па I2S або PWM (па змаўчанні выкарыстоўваецца PWM).',
      'Падтрымка Disk II з вобразамі DSK, NIB, WOZ і BDSK; запіс змен назад у вобраз.',
      'Падтрымка PS/2-клавіятуры, USB HID-клавіятуры і NES-геймпада праз USB.',
      'Зборка пад RP2040 і RP2350; PSRAM не абавязковы.',
    ],
    highlightsDe: [
      '65C02-Kern mit allen Apple-//e-Videomodi (Text, Lo-Res, Hi-Res, Double Hi-Res).',
      'Native HDMI- oder VGA-Ausgabe in 320×240 über PIO.',
      'I2S- oder PWM-Audio, zur Build-Zeit auswählbar (Standard ist PWM).',
      'Disk-II-Floppy-Unterstützung für DSK-, NIB-, WOZ- und BDSK-Images mit Rückschreiben.',
      'PS/2-Tastatur, USB-HID-Tastatur und NES-Gamepad über USB.',
      'Builds für RP2040 und RP2350; PSRAM optional.',
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
    excerptUk: 'Емулятор IBM PC i386 — DOS, Windows 3.x та 95, а також Linux.',
    excerptBe: 'Эмулятар IBM PC i386 — DOS, Windows 3.x і 95, а таксама Linux.',
    excerptDe: 'IBM-PC-i386-Emulator — startet DOS, Windows 3.x / 95 und Linux.',
    summaryEn:
      'A tiny386 port for FRANK. Boots DOS, Windows 3.x, Windows 95, and small Linux builds, with a complete VGA pipeline and a choice of I2S or PWM audio.',
    summaryRu:
      'Порт tiny386 для FRANK. Поддерживается загрузка MS-DOS, Windows 3.x, Windows 95 и небольших сборок Linux. Реализован полноценный VGA-конвейер и эмуляция звуковой карты с выводом по I2S или PWM.',
    summaryUk:
      'Порт tiny386 для FRANK. Підтримується завантаження MS-DOS, Windows 3.x, Windows 95 та невеликих збірок Linux. Реалізовано повноцінний VGA-конвеєр та емуляцію звукової карти з виведенням по I2S або PWM.',
    summaryBe:
      'Порт tiny386 для FRANK. Падтрымліваецца загрузка MS-DOS, Windows 3.x, Windows 95 і невялікіх зборак Linux. Рэалізаваны паўнавартасны VGA-канвеер і эмуляцыя гукавой карты з вывадам па I2S або PWM.',
    summaryDe:
      'Eine Portierung von tiny386 für FRANK. Bootet DOS, Windows 3.x, Windows 95 und kleine Linux-Builds, mit vollständiger VGA-Pipeline und wahlweise I2S- oder PWM-Audio.',
    historyEn:
      "Intel's 80386, released in October 1985, was the first 32-bit x86 chip and the architecture that anchored the next thirty years of personal computing. The combination of 386 + VGA + Sound Blaster + a fast hard drive defined the early-1990s gaming PC and made games like DOOM, Wing Commander and Civilization possible. Microsoft's transition from MS-DOS through Windows 3.1 to Windows 95 played out on this exact hardware. frank-386 reproduces that whole stack on a Pico-class board, with a FAT-formatted SD card serving as the disk.",
    historyRu:
      'Процессор Intel 80386, выпущенный в октябре 1985 года, стал первым 32-битным процессором архитектуры x86 и определил направление развития персональных компьютеров на последующие тридцать лет. Сочетание 386, видеоадаптера VGA, звуковой карты Sound Blaster и быстрого жёсткого диска сформировало стандартный игровой ПК начала 1990-х годов и обеспечило выпуск таких игр, как DOOM, Wing Commander и Civilization. На этой же аппаратной базе происходил переход Microsoft от MS-DOS к Windows 3.1 и далее к Windows 95. Прошивка frank-386 воспроизводит указанную программно-аппаратную среду на плате класса Pico; в качестве диска используется SD-карта с файловой системой FAT.',
    historyUk:
      'Процесор Intel 80386, випущений у жовтні 1985 року, став першим 32-бітним процесором архітектури x86 і визначив напрям розвитку персональних комп’ютерів на наступні тридцять років. Поєднання 386, відеоадаптера VGA, звукової карти Sound Blaster та швидкого жорсткого диска сформувало стандартний ігровий ПК початку 1990-х років і забезпечило випуск таких ігор, як DOOM, Wing Commander та Civilization. На цій же апаратній базі відбувався перехід Microsoft від MS-DOS до Windows 3.1 і далі до Windows 95. Прошивка frank-386 відтворює зазначене програмно-апаратне середовище на платі класу Pico; як диск використовується SD-карта з файловою системою FAT.',
    historyBe:
      'Працэсар Intel 80386, выпушчаны ў кастрычніку 1985 года, стаў першым 32-бітным працэсарам архітэктуры x86 і вызначыў напрамак развіцця персанальных кампутараў на наступныя трыццаць гадоў. Спалучэнне 386, відэаадаптара VGA, гукавой карты Sound Blaster і хуткага цвёрдага дыска сфармавала стандартны ігравы ПК пачатку 1990-х гадоў і забяспечыла выпуск такіх гульняў, як DOOM, Wing Commander і Civilization. На гэтай жа апаратнай базе адбываўся пераход Microsoft ад MS-DOS да Windows 3.1 і далей да Windows 95. Прашыўка frank-386 узнаўляе названае праграмна-апаратнае асяроддзе на плаце класа Pico; у якасці дыска выкарыстоўваецца SD-карта з файлавай сістэмай FAT.',
    historyDe:
      'Intels im Oktober 1985 vorgestellter 80386 war der erste 32-Bit-x86-Chip und die Architektur, die die nächsten dreißig Jahre des Personal Computing trug. Die Kombination aus 386, VGA, Sound Blaster und einer schnellen Festplatte definierte den Spiele-PC der frühen 1990er und machte Titel wie DOOM, Wing Commander und Civilization erst möglich. Microsofts Übergang von MS-DOS über Windows 3.1 zu Windows 95 spielte sich auf genau dieser Hardware ab. frank-386 reproduziert diesen gesamten Stack auf einer Platine der Pico-Klasse, wobei eine FAT-formatierte SD-Karte als Festplatte dient.',
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
    highlightsUk: [
      'Ядро i386 на основі tiny386 з гарячими ділянками на ARM-асемблері для Cortex-M33.',
      'Завантаження MS-DOS, Windows 3.x, Windows 95 та невеликих збірок Linux.',
      'Відеоконвеєр класу VGA, спільний для HDMI- та VGA-виходів (256-кольорові текстові та графічні режими).',
      'Емуляція AdLib / OPL2, Sound Blaster 16, PC Speaker, Tandy SN76489 та Disney Sound Source.',
      'Підтримка PS/2-клавіатури та миші, USB HID, NES- і SNES-геймпадів (з режимом емуляції миші).',
      'Шина PCI, контролери IDE та FDD, CMOS/RTC; мережевий диск із SD-карти через mapdrive.com.',
    ],
    highlightsBe: [
      'Ядро i386 на аснове tiny386 з гарачымі ўчасткамі на ARM-асэмблеры для Cortex-M33.',
      'Загрузка MS-DOS, Windows 3.x, Windows 95 і невялікіх зборак Linux.',
      'Відэаканвеер класа VGA, агульны для HDMI- і VGA-выхадаў (256-каляровыя тэкставыя і графічныя рэжымы).',
      'Эмуляцыя AdLib / OPL2, Sound Blaster 16, PC Speaker, Tandy SN76489 і Disney Sound Source.',
      'Падтрымка PS/2-клавіятуры і мышы, USB HID, NES- і SNES-геймпадаў (з рэжымам эмуляцыі мышы).',
      'Шына PCI, кантролеры IDE і FDD, CMOS/RTC; сеткавы дыск з SD-карты праз mapdrive.com.',
    ],
    highlightsDe: [
      'i386-Kern auf Basis von tiny386 mit Hot-Paths in Cortex-M33-ARM-Assembly.',
      'Bootet MS-DOS, Windows 3.x, Windows 95 und kleine Linux-Builds.',
      'VGA-Klasse-Video-Pipeline für HDMI- und VGA-Ausgang (256-Farben-Text- und -Grafikmodi).',
      'AdLib- / OPL2-, Sound-Blaster-16-, PC-Speaker-, Tandy-SN76489- und Disney-Sound-Source-Emulation.',
      'PS/2-Tastatur und -Maus, USB-HID, NES-/SNES-Gamepads (mit Maus-Emulation).',
      'PCI-Bus, IDE, FDD, CMOS/RTC; SD als Netzlaufwerk via mapdrive.com.',
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
    excerptUk: 'DOOM, Heretic, Hexen та Strife — увесь idTech1 в одній прошивці.',
    excerptBe: 'DOOM, Heretic, Hexen і Strife — увесь idTech1 у адной прашыўцы.',
    excerptDe: 'DOOM, Heretic, Hexen, Strife — idTech1 in einer einzigen Firmware.',
    summaryEn:
      'A combined idTech1 build that runs DOOM, Heretic, Hexen, and Strife from a single firmware image. Engine selected by the WAD on the SD card. HDMI 320×240 video and I2S audio.',
    summaryRu:
      'Объединённая сборка на движке idTech1: одна прошивка обеспечивает запуск DOOM, Heretic, Hexen и Strife. Игра выбирается через WAD-файл на SD-карте. Видео — HDMI 320×240, звук — I2S.',
    summaryUk:
      'Об’єднана збірка на рушії idTech1: одна прошивка забезпечує запуск DOOM, Heretic, Hexen та Strife. Гра вибирається через WAD-файл на SD-карті. Відео — HDMI 320×240, звук — I2S.',
    summaryBe:
      'Аб’яднаная зборка на рухавіку idTech1: адна прашыўка забяспечвае запуск DOOM, Heretic, Hexen і Strife. Гульня выбіраецца праз WAD-файл на SD-карце. Відэа — HDMI 320×240, гук — I2S.',
    summaryDe:
      'Ein kombinierter idTech1-Build, der DOOM, Heretic, Hexen und Strife aus einem einzigen Firmware-Image lädt. Die Engine wird durch das WAD auf der SD-Karte ausgewählt. HDMI-Video in 320×240 und I2S-Audio.',
    historyEn:
      'idTech1 — better known as the "DOOM engine" — appeared in 1993 and became the most influential first-person engine of the 1990s. It powered DOOM, Raven\'s Heretic and Hexen, and Rogue Entertainment\'s Strife, then fueled an enormous mod and source-port community after John Carmack open-sourced the code in 1997. frank-idtech1 keeps that lineage alive: the same engine, the same WAD format, running on a microcontroller.',
    historyRu:
      'Движок idTech1, известный как «движок DOOM», был представлен в 1993 году и стал одним из наиболее значимых FPS-движков 1990-х годов. На нём были выпущены DOOM, Heretic и Hexen студии Raven Software, а также Strife от Rogue Entertainment. После публикации исходного кода Джоном Кармаком в 1997 году вокруг движка сформировалось обширное сообщество модов и source-портов. Прошивка frank-idtech1 сохраняет совместимость с оригинальным движком и форматом WAD.',
    historyUk:
      'Рушій idTech1, відомий як «рушій DOOM», було представлено 1993 року, і він став одним із найбільш значущих FPS-рушіїв 1990-х років. На ньому було випущено DOOM, Heretic та Hexen студії Raven Software, а також Strife від Rogue Entertainment. Після публікації вихідного коду Джоном Кармаком 1997 року навколо рушія сформувалася велика спільнота модів та source-портів. Прошивка frank-idtech1 зберігає сумісність з оригінальним рушієм та форматом WAD.',
    historyBe:
      'Рухавік idTech1, вядомы як «рухавік DOOM», быў прадстаўлены ў 1993 годзе і стаў адным з найбольш значных FPS-рухавікоў 1990-х гадоў. На ім былі выпушчаны DOOM, Heretic і Hexen студыі Raven Software, а таксама Strife ад Rogue Entertainment. Пасля публікацыі зыходнага кода Джонам Кармакам у 1997 годзе вакол рухавіка сфармавалася вялікая супольнасць модаў і source-партоў. Прашыўка frank-idtech1 захоўвае сумяшчальнасць з арыгінальным рухавіком і фарматам WAD.',
    historyDe:
      'idTech1 — besser bekannt als „DOOM-Engine“ — erschien 1993 und wurde zur einflussreichsten First-Person-Engine der 1990er. Sie trieb DOOM, Ravens Heretic und Hexen sowie Rogue Entertainments Strife an und brachte nach der Veröffentlichung des Quellcodes durch John Carmack 1997 eine riesige Mod- und Source-Port-Community hervor. frank-idtech1 hält diese Linie am Leben: dieselbe Engine, dasselbe WAD-Format, lauffähig auf einem Mikrocontroller.',
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
    highlightsUk: [
      'Чотири рушії idTech1, об’єднані в одну прошивку з роздільними символьними префіксами.',
      'Вибір WAD-файлу при завантаженні виконується з SD-карти.',
      'Виведення зображення HDMI 320×240 через PIO.',
      'Музика у форматі OPL2 (через EMU8950); виведення звуку по I2S.',
      'Підтримка PS/2-клавіатури та миші, USB HID-клавіатури та миші.',
    ],
    highlightsBe: [
      'Чатыры рухавікі idTech1, аб’яднаныя ў адну прашыўку з раздзельнымі сімвальнымі прэфіксамі.',
      'Выбар WAD-файла пры загрузцы выконваецца з SD-карты.',
      'Вывад выявы HDMI 320×240 праз PIO.',
      'Музыка ў фармаце OPL2 (праз EMU8950); вывад гуку па I2S.',
      'Падтрымка PS/2-клавіятуры і мышы, USB HID-клавіятуры і мышы.',
    ],
    highlightsDe: [
      'Vier klassische idTech1-Engines in einem einzigen Binary, getrennt durch Symbolpräfixe pro Engine.',
      'WAD-Auswahl beim Boot von der SD-Karte.',
      'HDMI-Video in 320×240 über PIO.',
      'OPL2-Musik via EMU8950; I2S-Audio.',
      'PS/2-Tastatur und -Maus, USB-HID-Tastatur und -Maus.',
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
    excerptUk: 'Окрема прошивка DOOM для FRANK.',
    excerptBe: 'Асобная прашыўка DOOM для FRANK.',
    excerptDe: 'Eigenständiger DOOM-Port für FRANK.',
    summaryEn:
      'A standalone DOOM build for the RP2350, based on doomgeneric and Chocolate Doom. Faster cold boot than the combined idTech1 firmware when only DOOM is required.',
    summaryRu:
      'Отдельная сборка DOOM для RP2350 на основе doomgeneric и Chocolate Doom. Запускается быстрее, чем объединённая сборка idTech1, и предназначена для случаев, когда требуется только DOOM.',
    summaryUk:
      'Окрема збірка DOOM для RP2350 на основі doomgeneric і Chocolate Doom. Запускається швидше, ніж об’єднана збірка idTech1, і призначена для випадків, коли потрібен лише DOOM.',
    summaryBe:
      'Асобная зборка DOOM для RP2350 на аснове doomgeneric і Chocolate Doom. Запускаецца хутчэй, чым аб’яднаная зборка idTech1, і прызначана для выпадкаў, калі патрэбен толькі DOOM.',
    summaryDe:
      'Ein eigenständiger DOOM-Build für den RP2350 auf Basis von doomgeneric und Chocolate Doom. Schnellerer Kaltstart als die kombinierte idTech1-Firmware, wenn nur DOOM benötigt wird.',
    historyEn:
      'DOOM shipped on December 10, 1993, distributed by id Software as shareware over BBS uploads and FTP mirrors that nearly buckled under the demand. It defined the modern first-person shooter — texture-mapped 3D, a deathmatch mode that sold corporate America on networking, modding via WAD files, and a soundtrack that everyone of a certain age can still hum. After id open-sourced the engine in 1997, DOOM became the lingua franca of "can it run...?" lists.',
    historyRu:
      'DOOM был выпущен компанией id Software 10 декабря 1993 года и распространялся по модели shareware через сети BBS и FTP-зеркала. Игра определила облик современного FPS: текстурированная 3D-графика, режим deathmatch, поддержка пользовательских модификаций через WAD-файлы и характерный саундтрек. После публикации исходного кода движка в 1997 году DOOM был портирован на широкий ряд устройств; прошивка frank-doom продолжает этот ряд.',
    historyUk:
      'DOOM було випущено компанією id Software 10 грудня 1993 року, гра поширювалася за моделлю shareware через мережі BBS та FTP-дзеркала. Вона визначила обличчя сучасного FPS: текстурована 3D-графіка, режим deathmatch, підтримка користувацьких модифікацій через WAD-файли та характерний саундтрек. Після публікації вихідного коду рушія 1997 року DOOM було портовано на широкий ряд пристроїв; прошивка frank-doom продовжує цей ряд.',
    historyBe:
      'DOOM быў выпушчаны кампаніяй id Software 10 снежня 1993 года, гульня распаўсюджвалася па мадэлі shareware праз сеткі BBS і FTP-люстэркі. Яна вызначыла аблічча сучаснага FPS: тэкстураваная 3D-графіка, рэжым deathmatch, падтрымка карыстальніцкіх мадыфікацый праз WAD-файлы і характэрны саўндтрэк. Пасля публікацыі зыходнага кода рухавіка ў 1997 годзе DOOM быў партаваны на шырокі шэраг прылад; прашыўка frank-doom працягвае гэты шэраг.',
    historyDe:
      'DOOM erschien am 10. Dezember 1993 und wurde von id Software als Shareware über BBS-Uploads und FTP-Mirror verteilt, die unter dem Andrang fast zusammenbrachen. Es definierte den modernen Ego-Shooter — texturiertes 3D, ein Deathmatch-Modus, der die US-Wirtschaft vom Wert von Netzwerken überzeugte, Modding über WAD-Dateien und ein Soundtrack, den jeder ab einem gewissen Alter heute noch summen kann. Nachdem id 1997 die Engine quelloffen freigab, wurde DOOM zur Lingua franca der „Läuft das auf …?“-Listen.',
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
    highlightsUk: [
      'Рушій на основі doomgeneric та Chocolate Doom; менший розмір прошивки порівняно з об’єднаною збіркою.',
      'Нативне виведення HDMI 320×240 через PIO.',
      'Музика OPL2 через EMU8950 з внутрішнім циклом на ARM-асемблері.',
      'Виведення звуку по I2S.',
      'Підтримка PS/2-клавіатури та миші, USB HID-клавіатури та миші, USB-хабів.',
      'Завантаження будь-яких WAD-файлів формату DOOM з SD-карти; збереження — у каталог /savegame/.',
    ],
    highlightsBe: [
      'Рухавік на аснове doomgeneric і Chocolate Doom; меншы памер прашыўкі ў параўнанні з аб’яднанай зборкай.',
      'Натыўны вывад HDMI 320×240 праз PIO.',
      'Музыка OPL2 праз EMU8950 з унутраным цыклам на ARM-асэмблеры.',
      'Вывад гуку па I2S.',
      'Падтрымка PS/2-клавіятуры і мышы, USB HID-клавіятуры і мышы, USB-хабаў.',
      'Загрузка любых WAD-файлаў фармату DOOM з SD-карты; захаванні — у каталог /savegame/.',
    ],
    highlightsDe: [
      'doomgeneric + Chocolate-Doom-Engine, kleineres Image als der kombinierte Build.',
      'Native HDMI-Ausgabe in 320×240 über PIO.',
      'OPL2-Musik via EMU8950 mit innerer Schleife in ARM-Assembly.',
      'I2S-Audio.',
      'PS/2-Tastatur und -Maus, USB-HID-Tastatur und -Maus, USB-Hub unterstützt.',
      'Lädt beliebige DOOM-Engine-WADs von der SD-Karte; speichert nach /savegame/.',
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
    excerptUk: 'Окрема прошивка Heretic для FRANK.',
    excerptBe: 'Асобная прашыўка Heretic для FRANK.',
    excerptDe: 'Eigenständiger Heretic-Port für FRANK.',
    summaryEn:
      'A standalone Heretic build for FRANK based on Chocolate Heretic and doomgeneric. Smaller image and faster cold boot than the combined idTech1 firmware.',
    summaryRu:
      'Отдельная сборка Heretic для FRANK на основе Chocolate Heretic и doomgeneric. Меньший размер прошивки и более быстрая загрузка по сравнению с объединённой сборкой idTech1.',
    summaryUk:
      'Окрема збірка Heretic для FRANK на основі Chocolate Heretic і doomgeneric. Менший розмір прошивки та швидше завантаження порівняно з об’єднаною збіркою idTech1.',
    summaryBe:
      'Асобная зборка Heretic для FRANK на аснове Chocolate Heretic і doomgeneric. Меншы памер прашыўкі і хутчэйшая загрузка ў параўнанні з аб’яднанай зборкай idTech1.',
    summaryDe:
      'Ein eigenständiger Heretic-Build für FRANK auf Basis von Chocolate Heretic und doomgeneric. Kleineres Image und schnellerer Kaltstart als die kombinierte idTech1-Firmware.',
    historyEn:
      'Heretic was developed by Raven Software and published by id Software in December 1994, taking the DOOM engine into a fantasy setting. It introduced inventory items and full vertical aiming — small, surgical changes that other idTech1 games (including its own sequel Hexen) would inherit. Critically well-received and commercially solid, Heretic established Raven as id\'s long-running engine partner.',
    historyRu:
      'Heretic был разработан студией Raven Software и издан id Software в декабре 1994 года. Игра использовала движок DOOM, но переносила действие в фэнтезийный сеттинг. В Heretic была впервые реализована система инвентаря и полное вертикальное прицеливание — нововведения, которые позднее были унаследованы другими играми на idTech1, включая сиквел Hexen. Игра получила положительные оценки и устойчивые продажи, что закрепило за Raven Software статус постоянного партнёра id Software по разработке игр на их движках.',
    historyUk:
      'Heretic було розроблено студією Raven Software та видано id Software у грудні 1994 року. Гра використовувала рушій DOOM, але переносила дію у фентезійний сеттинг. У Heretic було вперше реалізовано систему інвентарю та повне вертикальне прицілювання — нововведення, які пізніше успадкували інші ігри на idTech1, включно з сиквелом Hexen. Гра отримала позитивні оцінки і стійкі продажі, що закріпило за Raven Software статус постійного партнера id Software з розробки ігор на їхніх рушіях.',
    historyBe:
      'Heretic быў распрацаваны студыяй Raven Software і выдадзены id Software у снежні 1994 года. Гульня выкарыстоўвала рухавік DOOM, але пераносіла дзеянне ў фэнтэзійны сэтынг. У Heretic упершыню была рэалізавана сістэма інвентара і поўнае вертыкальнае прыцэльванне — новаўвядзенні, якія пазней былі ўспадкаваны іншымі гульнямі на idTech1, уключаючы сіквел Hexen. Гульня атрымала станоўчыя адзнакі і ўстойлівыя продажы, што замацавала за Raven Software статус сталага партнёра id Software па распрацоўцы гульняў на іх рухавіках.',
    historyDe:
      'Heretic wurde von Raven Software entwickelt und im Dezember 1994 von id Software veröffentlicht. Es überführte die DOOM-Engine in eine Fantasy-Welt und führte Inventar-Items und volles vertikales Zielen ein — kleine, gezielte Änderungen, die spätere idTech1-Spiele (einschließlich des eigenen Nachfolgers Hexen) übernahmen. Mit guten Kritiken und solidem kommerziellem Erfolg etablierte Heretic Raven als langjährigen Engine-Partner von id.',
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
    highlightsUk: [
      'Рушій Chocolate Heretic + doomgeneric; пришвидшене завантаження порівняно з об’єднаною збіркою.',
      'Нативне виведення HDMI 320×240 через PIO.',
      'Музика OPL2 через EMU8950 (чистий C, без ARM-асемблерних оптимізацій).',
      'Виведення звуку по I2S.',
      'Завантаження HERETIC.WAD або HERETIC1.WAD (shareware) з SD-карти; збереження — у каталог heretic/saves/.',
      'Підтримка PS/2-клавіатури та миші, USB HID-клавіатури та миші.',
    ],
    highlightsBe: [
      'Рухавік Chocolate Heretic + doomgeneric; паскораная загрузка ў параўнанні з аб’яднанай зборкай.',
      'Натыўны вывад HDMI 320×240 праз PIO.',
      'Музыка OPL2 праз EMU8950 (чысты C, без ARM-асэмблерных аптымізацый).',
      'Вывад гуку па I2S.',
      'Загрузка HERETIC.WAD або HERETIC1.WAD (shareware) з SD-карты; захаванні — у каталог heretic/saves/.',
      'Падтрымка PS/2-клавіятуры і мышы, USB HID-клавіятуры і мышы.',
    ],
    highlightsDe: [
      'Chocolate-Heretic- + doomgeneric-Engine, schnellerer Kaltstart als das kombinierte Image.',
      'Native HDMI-Ausgabe in 320×240 über PIO.',
      'OPL2-Musik via EMU8950 (reiner C-Pfad).',
      'I2S-Audio.',
      'Lädt HERETIC.WAD oder HERETIC1.WAD (Shareware) von der SD-Karte; speichert nach heretic/saves/.',
      'PS/2-Tastatur und -Maus, USB-HID-Tastatur und -Maus.',
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
    excerptUk: 'Порт Wolfenstein 3D для FRANK.',
    excerptBe: 'Порт Wolfenstein 3D для FRANK.',
    excerptDe: 'Wolfenstein-3D-Port für FRANK.',
    summaryEn:
      'A Wolf4SDL-based Wolfenstein 3D port for the RP2350. Native 320×200 HDMI output, I2S audio with MAME YM3812 OPL emulation, PS/2 and USB input plus a NES gamepad.',
    summaryRu:
      'Порт Wolfenstein 3D на основе Wolf4SDL для RP2350. Нативный вывод HDMI 320×200, звук по I2S с эмуляцией OPL YM3812 от MAME; ввод — PS/2, USB HID и NES-геймпад.',
    summaryUk:
      'Порт Wolfenstein 3D на основі Wolf4SDL для RP2350. Нативне виведення HDMI 320×200, звук по I2S з емуляцією OPL YM3812 від MAME; ввід — PS/2, USB HID та NES-геймпад.',
    summaryBe:
      'Порт Wolfenstein 3D на аснове Wolf4SDL для RP2350. Натыўны вывад HDMI 320×200, гук па I2S з эмуляцыяй OPL YM3812 ад MAME; увод — PS/2, USB HID і NES-геймпад.',
    summaryDe:
      'Ein auf Wolf4SDL basierender Wolfenstein-3D-Port für den RP2350. Native HDMI-Ausgabe in 320×200, I2S-Audio mit MAME-YM3812-OPL-Emulation, Eingabe per PS/2, USB-HID und NES-Gamepad.',
    historyEn:
      'Released by id Software on May 5, 1992 and distributed by Apogee, Wolfenstein 3D effectively created the modern first-person shooter. Its raycaster engine ran texture-mapped 3D corridors at a smooth frame rate on a 386, the shareware first episode introduced millions of people to the format, and the design template — keys, doors, secret walls, increasingly large levels — defined the genre for the rest of the decade. id open-sourced the engine in 1995, which is why it has been ported to almost every device with a screen.',
    historyRu:
      'Wolfenstein 3D был выпущен компанией id Software 5 мая 1992 года и распространялся издателем Apogee. Игра фактически сформировала жанр современного FPS. Её движок на основе технологии raycasting обеспечивал плавное отображение текстурированных трёхмерных уровней на процессоре 386. Shareware-эпизод позволил миллионам пользователей познакомиться с жанром, а ключевые элементы дизайна — ключи, двери, секретные стены и постепенное усложнение уровней — определили облик FPS на следующее десятилетие. Исходный код движка был опубликован id Software в 1995 году, что обеспечило широкую поддержку Wolfenstein 3D на самых разных платформах.',
    historyUk:
      'Wolfenstein 3D було випущено компанією id Software 5 травня 1992 року, гра поширювалася видавцем Apogee. Гра фактично сформувала жанр сучасного FPS. Її рушій на основі технології raycasting забезпечував плавне відображення текстурованих тривимірних рівнів на процесорі 386. Shareware-епізод дозволив мільйонам користувачів познайомитися з жанром, а ключові елементи дизайну — ключі, двері, секретні стіни та поступове ускладнення рівнів — визначили обличчя FPS на наступне десятиліття. Вихідний код рушія було опубліковано id Software 1995 року, що забезпечило широку підтримку Wolfenstein 3D на найрізноманітніших платформах.',
    historyBe:
      'Wolfenstein 3D быў выпушчаны кампаніяй id Software 5 траўня 1992 года, гульня распаўсюджвалася выдаўцом Apogee. Гульня фактычна сфармавала жанр сучаснага FPS. Яе рухавік на аснове тэхналогіі raycasting забяспечваў плыўнае адлюстраванне тэкстураваных трохмерных узроўняў на працэсары 386. Shareware-эпізод дазволіў мільёнам карыстальнікаў пазнаёміцца з жанрам, а ключавыя элементы дызайну — ключы, дзверы, сакрэтныя сцены і паступовае ўскладненне ўзроўняў — вызначылі аблічча FPS на наступнае дзесяцігоддзе. Зыходны код рухавіка быў апублікаваны id Software у 1995 годзе, што забяспечыла шырокую падтрымку Wolfenstein 3D на самых розных платформах.',
    historyDe:
      'Am 5. Mai 1992 von id Software veröffentlicht und von Apogee vertrieben, schuf Wolfenstein 3D faktisch den modernen Ego-Shooter. Seine Raycaster-Engine zeigte texturierte 3D-Korridore mit flüssiger Bildrate auf einem 386, das erste Shareware-Episode brachte Millionen Menschen das Genre näher, und die Designvorlage — Schlüssel, Türen, Geheimwände, immer größere Levels — prägte das Genre für den Rest des Jahrzehnts. id stellte die Engine 1995 unter eine offene Lizenz, weshalb Wolfenstein 3D auf nahezu jedem Gerät mit Bildschirm zu finden ist.',
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
    highlightsUk: [
      'Рушій на основі Wolf4SDL; підтримка даних WL6, WL3 та WL1 (shareware) з автовизначенням.',
      'Нативне виведення HDMI 320×200 з потрійною буферизацією та vsync.',
      'Музика OPL через емулятор YM3812 від MAME; PC-спікер та цифрові звукові ефекти.',
      'Виведення звуку по I2S з використанням PIO та DMA ping-pong.',
      'Підтримка PS/2- та USB HID-клавіатури, NES-геймпада напряму.',
    ],
    highlightsBe: [
      'Рухавік на аснове Wolf4SDL; падтрымка дадзеных WL6, WL3 і WL1 (shareware) з аўтавызначэннем.',
      'Натыўны вывад HDMI 320×200 з патройнай буферызацыяй і vsync.',
      'Музыка OPL праз эмулятар YM3812 ад MAME; PC-спікер і лічбавыя гукавыя эфекты.',
      'Вывад гуку па I2S з выкарыстаннем PIO і DMA ping-pong.',
      'Падтрымка PS/2- і USB HID-клавіятуры, NES-геймпада напрамую.',
    ],
    highlightsDe: [
      'Wolf4SDL-basierte Engine; lädt vollständige WL6-, WL3- und WL1-Daten (Shareware) mit Auto-Erkennung.',
      'Native HDMI-Ausgabe in 320×200 mit Triple-Buffer und VSync.',
      'MAME-YM3812-OPL-Musik plus PC-Speaker und digitalisierte Sounds.',
      'I2S-Audio mit PIO + DMA-Ping-Pong.',
      'PS/2-Tastatur, USB-HID-Tastatur, NES-Gamepad direkt.',
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
    excerptUk: 'Порт Duke Nukem 3D для FRANK.',
    excerptBe: 'Порт Duke Nukem 3D для FRANK.',
    excerptDe: 'Duke-Nukem-3D-Port für FRANK.',
    summaryEn:
      'A Duke Nukem 3D port for the RP2350 derived from Chocolate Duke3D and the Duke3D ESP32 port. Native 320×200 HDMI video, OPL2 music via EMU8950, and I2S audio.',
    summaryRu:
      'Порт Duke Nukem 3D на RP2350 на основе Chocolate Duke3D и порта Duke3D для ESP32. Нативный вывод HDMI 320×200, музыка OPL2 через EMU8950, вывод звука по I2S.',
    summaryUk:
      'Порт Duke Nukem 3D на RP2350 на основі Chocolate Duke3D і порту Duke3D для ESP32. Нативне виведення HDMI 320×200, музика OPL2 через EMU8950, виведення звуку по I2S.',
    summaryBe:
      'Порт Duke Nukem 3D на RP2350 на аснове Chocolate Duke3D і порта Duke3D для ESP32. Натыўны вывад HDMI 320×200, музыка OPL2 праз EMU8950, вывад гуку па I2S.',
    summaryDe:
      'Ein Duke-Nukem-3D-Port für den RP2350 auf Basis von Chocolate Duke3D und dem Duke3D-ESP32-Port. Native HDMI-Ausgabe in 320×200, OPL2-Musik via EMU8950 und I2S-Audio.',
    historyEn:
      "3D Realms shipped Duke Nukem 3D in January 1996 on Ken Silverman's Build engine, leapfrogging DOOM's level geometry with sloped floors, room-over-room sectors, breakable scenery and an interactivity layer no other shooter of the era could match. The character — a one-liner-spouting B-movie commando — became one of the defining mascots of the 1990s PC era, and the LAN deathmatch culture that grew around the game ran in parallel to Quake. Source release came in 2003.",
    historyRu:
      '3D Realms выпустила Duke Nukem 3D в январе 1996 года на движке Build Кена Силвермана. По сравнению с DOOM движок предлагал наклонные полы, секторы «комната над комнатой», разрушаемое окружение и уровень интерактивности, недоступный другим шутерам того времени. Карикатурный главный герой стал одним из узнаваемых образов PC-гейминга 1990-х годов, а LAN-deathmatch вокруг игры существовал параллельно с Quake. Исходный код был опубликован в 2003 году.',
    historyUk:
      '3D Realms випустила Duke Nukem 3D в січні 1996 року на рушії Build Кена Сілвермана. Порівняно з DOOM рушій пропонував похилі підлоги, сектори «кімната над кімнатою», руйнівне оточення та рівень інтерактивності, недоступний іншим шутерам того часу. Карикатурний головний герой став одним із упізнаваних образів PC-гейминга 1990-х років, а LAN-deathmatch навколо гри існував паралельно з Quake. Вихідний код було опубліковано 2003 року.',
    historyBe:
      '3D Realms выпусціла Duke Nukem 3D у студзені 1996 года на рухавіку Build Кена Сілвермана. У параўнанні з DOOM рухавік прапаноўваў нахіленыя падлогі, сектары «пакой над пакоем», разбуральнае асяроддзе і ўзровень інтэрактыўнасці, недаступны іншым шутэрам таго часу. Карыкатурны галоўны герой стаў адным з пазнавальных вобразаў PC-гейминга 1990-х гадоў, а LAN-deathmatch вакол гульні існаваў паралельна з Quake. Зыходны код быў апублікаваны ў 2003 годзе.',
    historyDe:
      '3D Realms veröffentlichte Duke Nukem 3D im Januar 1996 auf Ken Silvermans Build-Engine und übertraf DOOM bei der Levelgeometrie deutlich: schräge Böden, Sektoren über Sektoren, zerstörbare Kulissen und ein Maß an Interaktivität, das kein anderer Shooter der Ära bot. Die Figur — ein One-Liner-spuckender B-Movie-Commando — wurde zu einem der prägenden Maskottchen der 1990er-PC-Ära, und die LAN-Deathmatch-Kultur rund um das Spiel lief parallel zu Quake. Der Quellcode wurde 2003 freigegeben.',
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
    highlightsUk: [
      'Рушій Build та код гри від 3D Realms (Кен Сілверман та звукова бібліотека Apogee).',
      'Нативне виведення HDMI 320×200 через PIO.',
      'Музика OPL2 через EMU8950; виведення звуку по I2S.',
      'Підтримка PS/2-клавіатури; USB HID-стек підключається опціонально.',
      'Для запуску потрібен DUKE3D.GRP на SD-карті.',
    ],
    highlightsBe: [
      'Рухавік Build і код гульні ад 3D Realms (Кен Сілверман і гукавая бібліятэка Apogee).',
      'Натыўны вывад HDMI 320×200 праз PIO.',
      'Музыка OPL2 праз EMU8950; вывад гуку па I2S.',
      'Падтрымка PS/2-клавіятуры; USB HID-стэк падключаецца апцыянальна.',
      'Для запуску патрабуецца DUKE3D.GRP на SD-карце.',
    ],
    highlightsDe: [
      'Build-Engine + 3D-Realms-Spielcode (Ken Silverman + Apogee-Audiolib).',
      'Native HDMI-Ausgabe in 320×200 über PIO.',
      'OPL2-Musik via EMU8950; I2S-Audio.',
      'PS/2-Tastatur; optionaler USB-HID-Stack.',
      'Erfordert DUKE3D.GRP auf der SD-Karte.',
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
    excerptUk: 'Prince of Persia — DOS-версія — на FRANK.',
    excerptBe: 'Prince of Persia — DOS-версія — на FRANK.',
    excerptDe: 'Prince of Persia — die DOS-Version, auf FRANK.',
    summaryEn:
      'A SDLPoP-based port of the DOS Prince of Persia for the RP2350. The original 320×200 framebuffer is letterboxed and scaled to a 640×480 HDMI output, with I2S audio.',
    summaryRu:
      'Порт DOS-версии Prince of Persia для RP2350 на основе SDLPoP. Оригинальный кадровый буфер 320×200 выводится с letterbox-масштабированием на HDMI 640×480; звук — I2S.',
    summaryUk:
      'Порт DOS-версії Prince of Persia для RP2350 на основі SDLPoP. Оригінальний кадровий буфер 320×200 виводиться з letterbox-масштабуванням на HDMI 640×480; звук — I2S.',
    summaryBe:
      'Порт DOS-версіі Prince of Persia для RP2350 на аснове SDLPoP. Арыгінальны кадравы буфер 320×200 выводзіцца з letterbox-маштабаваннем на HDMI 640×480; гук — I2S.',
    summaryDe:
      'Ein auf SDLPoP basierender Port des DOS-Prince-of-Persia für den RP2350. Der originale 320×200-Framebuffer wird letterboxed und auf eine HDMI-Ausgabe in 640×480 skaliert, mit I2S-Audio.',
    historyEn:
      "Prince of Persia was created by Jordan Mechner and released for the Apple II in 1989. Its rotoscoped animation, derived from footage of Mechner's brother running and jumping in a parking lot, gave the protagonist movement that no platformer had matched before. The game was eventually ported to roughly two dozen platforms, sold through the 1990s, and seeded a franchise that Ubisoft would later turn into Sands of Time. The original Apple II source code was released in 2012.",
    historyRu:
      'Prince of Persia создал Джордан Мекнер; игра вышла на Apple II в 1989 году. Ротоскопированная анимация, снятая с движений брата Мекнера на парковке, дала персонажу пластику, которой до этого не было ни в одном платформере. Игра была портирована примерно на два десятка платформ, продавалась все девяностые и заложила франшизу, которую Ubisoft позже превратила в Sands of Time. Оригинальные исходники Apple II были опубликованы в 2012 году.',
    historyUk:
      'Prince of Persia створив Джордан Мекнер; гра вийшла на Apple II 1989 року. Ротоскопована анімація, знята з рухів брата Мекнера на парковці, надала персонажу пластику, якої до цього не було в жодному платформері. Гру було портовано приблизно на два десятки платформ, вона продавалася всі дев’яності й заклала франшизу, яку Ubisoft пізніше перетворила на Sands of Time. Оригінальні вихідники Apple II було опубліковано 2012 року.',
    historyBe:
      'Prince of Persia стварыў Джордан Мекнер; гульня выйшла на Apple II у 1989 годзе. Ратаскапіраваная анімацыя, знятая з рухаў брата Мекнера на паркоўцы, дала персанажу пластыку, якой да гэтага не было ні ў адным платформеры. Гульня была партавана прыблізна на два дзясяткі платформ, прадавалася ўсе дзевяностыя і заклала франшызу, якую Ubisoft пазней ператварыла ў Sands of Time. Арыгінальныя зыходнікі Apple II былі апублікаваны ў 2012 годзе.',
    historyDe:
      'Prince of Persia wurde von Jordan Mechner entwickelt und 1989 für den Apple II veröffentlicht. Die rotoskopierte Animation — auf Filmmaterial seines auf einem Parkplatz laufenden und springenden Bruders aufgebaut — verlieh der Spielfigur eine Bewegungsqualität, die bis dahin in keinem Plattformer zu sehen war. Das Spiel wurde am Ende auf rund zwei Dutzend Plattformen portiert, verkaufte sich durch die 1990er und legte den Grundstein für eine Reihe, die Ubisoft später zu Sands of Time machte. Der originale Apple-II-Quellcode wurde 2012 veröffentlicht.',
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
    highlightsUk: [
      'Рушій на основі SDLPoP (David Nagy); оригінальні механіка та таймінги збережено.',
      'Виведення HDMI 640×480 через PIO; ігрова поверхня 320×200 виводиться з letterbox-масштабуванням.',
      'Виведення звуку по I2S.',
      'Підтримка PS/2- та USB HID-клавіатур.',
      'Ігрові дані та збереження розміщуються в PSRAM.',
    ],
    highlightsBe: [
      'Рухавік на аснове SDLPoP (David Nagy); арыгінальныя механіка і таймінгі захаваны.',
      'Вывад HDMI 640×480 праз PIO; ігравая паверхня 320×200 выводзіцца з letterbox-маштабаваннем.',
      'Вывад гуку па I2S.',
      'Падтрымка PS/2- і USB HID-клавіятур.',
      'Ігравыя дадзеныя і захаванні размяшчаюцца ў PSRAM.',
    ],
    highlightsDe: [
      'Engine auf Basis von SDLPoP (David Nagy); originale Spielmechanik und Timings erhalten.',
      'HDMI-Ausgabe in 640×480 über PIO; 320×200-Spielfläche letterboxed und skaliert.',
      'I2S-Audio.',
      'PS/2-Tastatur und USB-HID-Tastatur.',
      'Spieldaten und Speicherstände liegen im PSRAM.',
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
    excerptUk: 'Digger Remastered — працює без PSRAM.',
    excerptBe: 'Digger Remastered — працуе без PSRAM.',
    excerptDe: 'Digger Remastered — läuft ohne PSRAM.',
    summaryEn:
      "An Andrew Jenner's Digger Remastered port for the RP2350. Faithful CGA-mode rendering at 320×240 HDMI output. The firmware fits entirely in 512 KB of internal SRAM and runs without PSRAM.",
    summaryRu:
      'Порт Digger Remastered Эндрю Дженнера для RP2350. Точная отрисовка в режиме CGA с выводом HDMI 320×240. Прошивка полностью помещается в 512 КБ внутренней SRAM и не требует PSRAM.',
    summaryUk:
      'Порт Digger Remastered Ендрю Дженнера для RP2350. Точне відтворення в режимі CGA з виведенням HDMI 320×240. Прошивка повністю вміщається в 512 КБ внутрішньої SRAM і не потребує PSRAM.',
    summaryBe:
      'Порт Digger Remastered Эндру Джэнэра для RP2350. Дакладнае адлюстраванне ў рэжыме CGA з вывадам HDMI 320×240. Прашыўка цалкам змяшчаецца ў 512 КБ унутранай SRAM і не патрабуе PSRAM.',
    summaryDe:
      'Eine Portierung von Andrew Jenners Digger Remastered für den RP2350. Originalgetreue CGA-Darstellung mit HDMI-Ausgabe in 320×240. Die Firmware passt vollständig in 512 KB internen SRAM und kommt ohne PSRAM aus.',
    historyEn:
      "Digger was published by Windmill Software in 1983 for the IBM PC. It was one of the very first games to push the PC's tinny PC speaker and four-color CGA into something the arcade crowd would actually recognise — gold bags, emeralds and underground monsters cribbed straight from Mr. Do! and Dig Dug. Andrew Jenner picked it back up in 1998 with Digger Remastered, an open-source rebuild that fixed timing on modern PCs and added scoreboards, multiplayer and save states.",
    historyRu:
      'Digger был издан Windmill Software в 1983 году для IBM PC. Это одна из первых игр, наглядно использовавших PC-спикер и четырёхцветную графику CGA в аркадном стиле, отсылающем к Mr. Do! и Dig Dug. В 1998 году Эндрю Дженнер выпустил Digger Remastered — открытый ремейк, в котором были исправлены проблемы с таймингами на современных PC и добавлены таблицы рекордов, мультиплеер и сохранения.',
    historyUk:
      'Digger було видано Windmill Software 1983 року для IBM PC. Це одна з перших ігор, що наочно використовували PC-спікер та чотириколірну графіку CGA в аркадному стилі, який відсилає до Mr. Do! та Dig Dug. 1998 року Ендрю Дженнер випустив Digger Remastered — відкритий ремейк, у якому було виправлено проблеми з таймінгами на сучасних PC і додано таблиці рекордів, мультиплеєр та збереження.',
    historyBe:
      'Digger быў выдадзены Windmill Software у 1983 годзе для IBM PC. Гэта адна з першых гульняў, што наглядна выкарыстоўвалі PC-спікер і чатырохкаляровую графіку CGA у аркаднам стылі, які адсылае да Mr. Do! і Dig Dug. У 1998 годзе Эндру Джэнэр выпусціў Digger Remastered — адкрыты рымэйк, у якім былі выпраўлены праблемы з таймінгамі на сучасных PC і дададзены табліцы рэкордаў, мультыплэер і захаванні.',
    historyDe:
      'Digger erschien 1983 bei Windmill Software für den IBM PC. Es war eines der ersten Spiele, das den dünnen PC-Speaker und die vierfarbige CGA-Grafik in etwas verwandelte, das auch das Arcade-Publikum wiedererkannte — Goldsäcke, Smaragde und unterirdische Monster, direkt bei Mr. Do! und Dig Dug abgeschaut. Andrew Jenner griff 1998 mit Digger Remastered wieder zu, einem quelloffenen Rebuild, das das Timing auf modernen PCs reparierte und Bestenlisten, Mehrspieler und Speicherstände ergänzte.',
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
    highlightsUk: [
      'Порт Digger Remastered Ендрю Дженнера на RP2350.',
      'Автентичні палітри CGA (0/0i/1/1i та 2bpp-шрифт).',
      'Виведення HDMI 320×240 через PIO; 4-бітний упакований кадровий буфер.',
      'Виведення звуку по I2S.',
      'Працює в 512 КБ SRAM без вимоги PSRAM.',
      'Одночасна підтримка PS/2- та USB HID-клавіатур.',
    ],
    highlightsBe: [
      'Порт Digger Remastered Эндру Джэнэра на RP2350.',
      'Аўтэнтычныя палітры CGA (0/0i/1/1i і 2bpp-шрыфт).',
      'Вывад HDMI 320×240 праз PIO; 4-бітны спакаваны кадравы буфер.',
      'Вывад гуку па I2S.',
      'Працуе ў 512 КБ SRAM без патрабавання PSRAM.',
      'Адначасная падтрымка PS/2- і USB HID-клавіятур.',
    ],
    highlightsDe: [
      'Andrew Jenners Digger Remastered, auf den RP2350 portiert.',
      'Authentische CGA-Paletten (0/0i/1/1i und 2-bpp-Pack-Font).',
      'HDMI-Ausgabe in 320×240 über PIO; 4-Bit-gepackter Framebuffer.',
      'I2S-Audio.',
      'Läuft in 512 KB SRAM ohne PSRAM-Anforderung.',
      'PS/2-Tastatur und USB-HID-Tastatur gleichzeitig aktiv.',
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
    excerptUk:
      'Порт ScummVM (Cabal) — King’s Quest, Monkey Island, Day of the Tentacle, Full Throttle та інші.',
    excerptBe:
      'Порт ScummVM (Cabal) — King’s Quest, Monkey Island, Day of the Tentacle, Full Throttle і іншыя.',
    excerptDe:
      'ScummVM-Port (Cabal) — King’s Quest, Monkey Island, Day of the Tentacle, Full Throttle und mehr.',
    summaryEn:
      'A ScummVM port (Cabal branch) for FRANK. Plays adventure classics across AGI, SCI, SCUMM v1–v8, GOB and KYRA engines. Runs its entire heap out of PSRAM via a custom dlmalloc.',
    summaryRu:
      'Порт ScummVM (ветка Cabal) для FRANK. Поддерживается запуск классических квестов на движках AGI, SCI, SCUMM v1–v8, GOB и KYRA. Куча программы целиком размещена в PSRAM через собственную реализацию dlmalloc.',
    summaryUk:
      'Порт ScummVM (гілка Cabal) для FRANK. Підтримується запуск класичних квестів на рушіях AGI, SCI, SCUMM v1–v8, GOB та KYRA. Купа програми повністю розміщена в PSRAM через власну реалізацію dlmalloc.',
    summaryBe:
      'Порт ScummVM (галіна Cabal) для FRANK. Падтрымліваецца запуск класічных квэстаў на рухавіках AGI, SCI, SCUMM v1–v8, GOB і KYRA. Куча праграмы цалкам размешчана ў PSRAM праз уласную рэалізацыю dlmalloc.',
    summaryDe:
      'Ein ScummVM-Port (Cabal-Branch) für FRANK. Spielt Adventure-Klassiker über die Engines AGI, SCI, SCUMM v1–v8, GOB und KYRA und legt seinen gesamten Heap über ein eigenes dlmalloc ins PSRAM.',
    historyEn:
      "Point-and-click adventures defined PC gaming through the late 1980s and 1990s: Sierra On-Line's AGI and SCI engines powered King's Quest, Space Quest, Police Quest and Leisure Suit Larry; LucasArts' SCUMM ran Maniac Mansion, Monkey Island, Day of the Tentacle and Full Throttle; Coktel Vision shipped Gobliiins on GOB; Westwood put Kyrandia on its KYRA engine. ScummVM, founded in 2001, reverse-engineered all of those interpreters into a single open-source runtime. frank-quest is that runtime, on a microcontroller.",
    historyRu:
      'Point-and-click-квесты определили облик PC-гейминга в конце 1980-х и в 1990-х годах. Движки AGI и SCI компании Sierra On-Line использовались в сериях King\'s Quest, Space Quest, Police Quest и Leisure Suit Larry; SCUMM от LucasArts — в Maniac Mansion, Monkey Island, Day of the Tentacle и Full Throttle; GOB от Coktel Vision — в Gobliiins; KYRA от Westwood — в Kyrandia. Проект ScummVM, начатый в 2001 году, реализовал открытую среду исполнения всех этих интерпретаторов в едином виде. Прошивка frank-quest переносит этот рантайм на микроконтроллер.',
    historyUk:
      'Point-and-click-квести визначили обличчя PC-гейминга наприкінці 1980-х та в 1990-х роках. Рушії AGI та SCI компанії Sierra On-Line використовувалися в серіях King\'s Quest, Space Quest, Police Quest та Leisure Suit Larry; SCUMM від LucasArts — у Maniac Mansion, Monkey Island, Day of the Tentacle та Full Throttle; GOB від Coktel Vision — у Gobliiins; KYRA від Westwood — у Kyrandia. Проєкт ScummVM, започаткований 2001 року, реалізував відкрите середовище виконання всіх цих інтерпретаторів в єдиному вигляді. Прошивка frank-quest переносить цей рантайм на мікроконтролер.',
    historyBe:
      'Point-and-click-квэсты вызначылі аблічча PC-гейминга ў канцы 1980-х і ў 1990-х гадах. Рухавікі AGI і SCI кампаніі Sierra On-Line выкарыстоўваліся ў серыях King\'s Quest, Space Quest, Police Quest і Leisure Suit Larry; SCUMM ад LucasArts — у Maniac Mansion, Monkey Island, Day of the Tentacle і Full Throttle; GOB ад Coktel Vision — у Gobliiins; KYRA ад Westwood — у Kyrandia. Праект ScummVM, пачаты ў 2001 годзе, рэалізаваў адкрытае асяроддзе выканання ўсіх гэтых інтэрпрэтатараў у адзіным выглядзе. Прашыўка frank-quest пераносіць гэты рантайм на мікракантролер.',
    historyDe:
      'Point-and-Click-Adventures prägten das PC-Gaming der späten 1980er und der 1990er: Sierra On-Lines AGI- und SCI-Engines trieben King’s Quest, Space Quest, Police Quest und Leisure Suit Larry an; LucasArts’ SCUMM lief unter Maniac Mansion, Monkey Island, Day of the Tentacle und Full Throttle; Coktel Vision veröffentlichte Gobliiins auf GOB; Westwood setzte Kyrandia auf seine KYRA-Engine. Das 2001 gegründete ScummVM-Projekt bündelte all diese Interpreter durch Reverse Engineering in einer einzigen quelloffenen Laufzeitumgebung. frank-quest ist genau diese Laufzeit, auf einem Mikrocontroller.',
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
    highlightsUk: [
      'Увімкнено рушії AGI, SCI, SCUMM v1–v8, GOB та KYRA.',
      'Власна реалізація dlmalloc перенаправляє купу newlib у PSRAM (8 МБ).',
      'Виведення HDMI (ігрова поверхня 320×200, розгортка 320×240).',
      'Виведення звуку по I2S.',
      'Підтримка PS/2- та USB HID-клавіатур і мишей.',
      'Потрібні оригінальні файли ігор на SD-карті.',
    ],
    highlightsBe: [
      'Уключаны рухавікі AGI, SCI, SCUMM v1–v8, GOB і KYRA.',
      'Уласная рэалізацыя dlmalloc перанакіроўвае кучу newlib у PSRAM (8 МБ).',
      'Вывад HDMI (ігравая паверхня 320×200, разгортка 320×240).',
      'Вывад гуку па I2S.',
      'Падтрымка PS/2- і USB HID-клавіятур і мышэй.',
      'Патрабуюцца арыгінальныя файлы гульняў на SD-карце.',
    ],
    highlightsDe: [
      'AGI, SCI, SCUMM v1–v8, GOB und KYRA als Engines einkompiliert.',
      'Eigenes dlmalloc leitet den newlib-Heap auf PSRAM (8 MB) um.',
      'HDMI-Ausgabe (Spielfläche 320×200, Scanout 320×240).',
      'I2S-Audio.',
      'PS/2-Tastatur und -Maus, USB-HID-Tastatur und -Maus.',
      'Originale Spieldaten erforderlich (eigene Dateien auf der SD-Karte mitbringen).',
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
  'frank-fodder': {
    slug: 'frank-fodder',
    name: 'frank-fodder',
    category: 'game',
    excerptEn: 'Cannon Fodder (Open Fodder) port for FRANK.',
    excerptRu: 'Порт Cannon Fodder (Open Fodder) для FRANK.',
    excerptUk: 'Порт Cannon Fodder (Open Fodder) для FRANK.',
    excerptBe: 'Порт Cannon Fodder (Open Fodder) для FRANK.',
    excerptDe: 'Cannon-Fodder-Port (Open Fodder) für FRANK.',
    summaryEn:
      'An Open Fodder–based Cannon Fodder port for the RP2350. Runs both the Amiga and PC data backends with PAULA / RJP1 sound emulation, HDMI 640×480 video and PS/2 keyboard + mouse on independent PIOs.',
    summaryRu:
      'Порт Cannon Fodder на основе Open Fodder для RP2350. Поддерживаются Amiga- и PC-наборы данных, эмуляция PAULA / RJP1, вывод HDMI 640×480 и одновременная поддержка PS/2-клавиатуры и мыши на независимых PIO.',
    summaryUk:
      'Порт Cannon Fodder на основі Open Fodder для RP2350. Підтримуються Amiga- та PC-набори даних, емуляція PAULA / RJP1, виведення HDMI 640×480 та одночасна підтримка PS/2-клавіатури і миші на незалежних PIO.',
    summaryBe:
      'Порт Cannon Fodder на аснове Open Fodder для RP2350. Падтрымліваюцца Amiga- і PC-наборы дадзеных, эмуляцыя PAULA / RJP1, вывад HDMI 640×480 і адначасная падтрымка PS/2-клавіятуры і мышы на незалежных PIO.',
    summaryDe:
      'Ein auf Open Fodder basierender Cannon-Fodder-Port für den RP2350. Nutzt sowohl die Amiga- als auch die PC-Datenpfade mit PAULA-/RJP1-Sound-Emulation, HDMI-Ausgabe in 640×480 und PS/2-Tastatur + -Maus auf getrennten PIOs.',
    historyEn:
      'Cannon Fodder was developed by Sensible Software and published by Virgin Interactive in 1993, first on the Amiga and then across most of the 16-bit and PC platforms of the era. The combination of squad-level real-time tactics, dark satire ("War has never been so much fun"), and the Hill Street Blues-inspired theme tune made it a defining title of the British games scene. The Royal British Legion famously took issue with the poppy-and-graveyard imagery in the cover art. Open Fodder, by Roman Hargrave and contributors, reverse-engineered both the Amiga and PC data backends into one open-source engine; frank-fodder is that engine on a Pico-class board.',
    historyRu:
      'Cannon Fodder была разработана студией Sensible Software и издана Virgin Interactive в 1993 году — сначала на Amiga, затем на большинстве 16-битных платформ и PC того времени. Сочетание реального времени и тактики уровня отряда, чёрного юмора («War has never been so much fun») и фирменной темы в духе Hill Street Blues сделало игру одним из узнаваемых тайтлов британской игровой сцены. Британский королевский легион в своё время резко высказался против использования образа красного мака и кладбища на обложке. Open Fodder Романа Харгрейва и сообщества — реверс-инжиниринг Amiga- и PC-бэкендов в один открытый движок; frank-fodder переносит этот движок на плату класса Pico.',
    historyUk:
      'Cannon Fodder було розроблено студією Sensible Software та видано Virgin Interactive 1993 року — спочатку на Amiga, потім на більшості 16-бітних платформ та PC того часу. Поєднання реального часу і тактики рівня загону, чорного гумору («War has never been so much fun») та фірмової теми в дусі Hill Street Blues зробило гру одним з упізнаваних тайтлів британської ігрової сцени. Британський королівський легіон свого часу різко висловився проти використання образу червоного маку та цвинтаря на обкладинці. Open Fodder Романа Харгрейва та спільноти — реверс-інжиніринг Amiga- та PC-бекендів в один відкритий рушій; frank-fodder переносить цей рушій на плату класу Pico.',
    historyBe:
      'Cannon Fodder была распрацавана студыяй Sensible Software і выдадзена Virgin Interactive у 1993 годзе — спачатку на Amiga, затым на большасці 16-бітных платформ і PC таго часу. Спалучэнне рэальнага часу і тактыкі ўзроўню атрада, чорнага гумару («War has never been so much fun») і фірмовай тэмы ў духу Hill Street Blues зрабіла гульню адным з пазнавальных тайтлаў брытанскай ігравой сцэны. Брытанскі каралеўскі легіён у свой час рэзка выказаўся супраць выкарыстання вобразу чырвонага маку і могілак на вокладцы. Open Fodder Рамана Харгрэйва і супольнасці — рэверс-інжынірынг Amiga- і PC-бэкендаў у адзін адкрыты рухавік; frank-fodder пераносіць гэты рухавік на плату класа Pico.',
    historyDe:
      'Cannon Fodder wurde von Sensible Software entwickelt und 1993 von Virgin Interactive veröffentlicht, zunächst auf dem Amiga und danach auf nahezu allen 16-Bit- und PC-Plattformen der Ära. Die Kombination aus Echtzeit-Squad-Taktik, schwarzem Humor („War has never been so much fun“) und einer an Hill Street Blues angelehnten Titelmusik machte das Spiel zu einem prägenden Vertreter der britischen Spieleszene. Die Royal British Legion stieß sich öffentlichkeitswirksam an dem Mohnblumen-und-Friedhof-Motiv des Covers. Open Fodder von Roman Hargrave und Mitwirkenden setzte sowohl die Amiga- als auch die PC-Datenpfade per Reverse Engineering in eine quelloffene Engine um; frank-fodder bringt diese Engine auf eine Platine der Pico-Klasse.',
    highlightsEn: [
      'Cannon Fodder Amiga + PC data backends, mission selector, briefings, MPEG cutscenes, Hill Street Blues theme.',
      'Per-frame software rendering at 320×240 with palette translation, scaled to HDMI 640×480.',
      'Full Amiga PAULA / RJP1 sound emulation via I2S DAC or PWM speaker.',
      '8 MB QSPI PSRAM hosts ROM data, sprite caches, map state and the entire game heap (new/malloc wrapped onto PSRAM).',
      'PS/2 keyboard and PS/2 mouse on independent PIO state machines, plus optional USB HID host.',
      'Settings menu with options, briefing, debugger and copy-protection bypass for development.',
    ],
    highlightsRu: [
      'Бэкенды Cannon Fodder для Amiga и PC, селектор миссий, брифинги, MPEG-кат-сцены и тема Hill Street Blues.',
      'Покадровый программный рендер 320×240 с палитровой трансляцией; вывод масштабируется до HDMI 640×480.',
      'Полная эмуляция Amiga PAULA / RJP1 через I2S DAC или PWM-динамик.',
      '8 МБ QSPI PSRAM используются под ROM-данные, кэши спрайтов, состояние карт и всю игровую кучу (new/malloc перенаправлены в PSRAM).',
      'PS/2-клавиатура и PS/2-мышь на независимых PIO; опциональный USB HID-хост.',
      'Меню настроек, брифинг, отладчик и обход проверки копии для разработки.',
    ],
    highlightsUk: [
      'Бекенди Cannon Fodder для Amiga та PC, селектор місій, брифінги, MPEG-кат-сцени і тема Hill Street Blues.',
      'Покадровий програмний рендер 320×240 з палітровою трансляцією; виведення масштабується до HDMI 640×480.',
      'Повна емуляція Amiga PAULA / RJP1 через I2S DAC або PWM-динамік.',
      '8 МБ QSPI PSRAM використовуються під ROM-дані, кеші спрайтів, стан карт та всю ігрову купу (new/malloc перенаправлено в PSRAM).',
      'PS/2-клавіатура та PS/2-миша на незалежних PIO; опціональний USB HID-хост.',
      'Меню налаштувань, брифінг, відладчик та обхід перевірки копії для розробки.',
    ],
    highlightsBe: [
      'Бэкенды Cannon Fodder для Amiga і PC, селектар місій, брыфінгі, MPEG-кат-сцэны і тэма Hill Street Blues.',
      'Пакадравы праграмны рэндар 320×240 з палітравай трансляцыяй; вывад маштабуецца да HDMI 640×480.',
      'Поўная эмуляцыя Amiga PAULA / RJP1 праз I2S DAC або PWM-дынамік.',
      '8 МБ QSPI PSRAM выкарыстоўваюцца пад ROM-дадзеныя, кэшы спрайтаў, стан карт і ўсю ігравую кучу (new/malloc перанакіраваныя ў PSRAM).',
      'PS/2-клавіятура і PS/2-мыш на незалежных PIO; апцыянальны USB HID-хост.',
      'Меню наладаў, брыфінг, адладчык і абыход праверкі копіі для распрацоўкі.',
    ],
    highlightsDe: [
      'Cannon-Fodder-Amiga- und -PC-Datenpfade, Missionsauswahl, Briefings, MPEG-Zwischensequenzen, Hill-Street-Blues-Titelmusik.',
      'Bildweises Software-Rendering in 320×240 mit Paletten-Übersetzung, skaliert auf HDMI 640×480.',
      'Vollständige Amiga-PAULA-/RJP1-Sound-Emulation über I2S-DAC oder PWM-Lautsprecher.',
      '8 MB QSPI-PSRAM beherbergen ROM-Daten, Sprite-Caches, Map-State und den kompletten Spiel-Heap (new/malloc auf PSRAM umgeleitet).',
      'PS/2-Tastatur und PS/2-Maus auf getrennten PIO-State-Machines, plus optionaler USB-HID-Host.',
      'Einstellungsmenü mit Optionen, Briefing, Debugger und Kopierschutz-Bypass für die Entwicklung.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['PWM', 'I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-fodder',
    releases: 'https://github.com/rh1tech/frank-fodder/releases',
    thumbnail: 'images/frank-fodder/screen1.png',
    screenshots: [
      'images/frank-fodder/screen1.png',
      'images/frank-fodder/screen2.png',
      'images/frank-fodder/screen3.png',
      'images/frank-fodder/screen4.png',
      'images/frank-fodder/screen5.png',
      'images/frank-fodder/screen6.png',
      'images/frank-fodder/screen7.png',
      'images/frank-fodder/screen8.png',
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
    excerptUk:
      'Десктопна ОС для RP2350 — віконний інтерфейс, файловий менеджер, термінал, вбудовані застосунки.',
    excerptBe:
      'Дэсктопная АС для RP2350 — аконны інтэрфейс, файлавы менеджэр, тэрмінал, убудаваныя праграмы.',
    excerptDe:
      'Desktop-OS für den RP2350 — Fenster-GUI, Dateimanager, Terminal, eingebaute Apps.',
    summaryEn:
      'A desktop operating system for the RP2350 microcontroller. Windowed GUI with a mouse, terminal, file manager and apps — all running in 520 KB of SRAM. Window management, menus, dialogs, and preemptive multitasking, Windows 95-style, on a chip the size of a coin.',
    summaryRu:
      'Десктопная операционная система для микроконтроллера RP2350. Оконный интерфейс с мышью, терминал, файловый менеджер и приложения — всё в 520 КБ SRAM. Управление окнами, меню, диалоги и вытесняющая многозадачность в духе Windows 95 — на чипе размером с монету.',
    summaryUk:
      'Десктопна операційна система для мікроконтролера RP2350. Віконний інтерфейс з мишею, термінал, файловий менеджер та застосунки — все в 520 КБ SRAM. Керування вікнами, меню, діалоги та витісняюча багатозадачність у дусі Windows 95 — на чипі розміром з монету.',
    summaryBe:
      'Дэсктопная аперацыйная сістэма для мікракантролера RP2350. Аконны інтэрфейс з мышшу, тэрмінал, файлавы менеджэр і праграмы — усё ў 520 КБ SRAM. Кіраванне вокнамі, меню, дыялогі і выцясняльная шматзадачнасць у духу Windows 95 — на чыпе памерам з манету.',
    summaryDe:
      'Ein Desktop-Betriebssystem für den RP2350-Mikrocontroller. Fenster-GUI mit Maus, Terminal, Dateimanager und Apps — alles in 520 KB SRAM. Fenstermanagement, Menüs, Dialoge und präemptives Multitasking im Stil von Windows 95 auf einem münzgroßen Chip.',
    historyEn:
      "When Windows 95 launched in August 1995, the desktop metaphor — taskbar, start menu, draggable windows, modal dialogs — became the consumer interface for two decades of computing. Doing the same thing on an RP2350 is a different problem: 520 KB of SRAM, a 150 MHz Cortex-M33, no MMU, no swap. frank-os was written from scratch to fit those constraints — preemptive multitasking, a window manager, a file manager and a small app suite — while staying recognisable to anyone who grew up double-clicking on icons.",
    historyRu:
      'Когда в августе 1995 года вышла Windows 95, десктопная метафора — панель задач, меню «Пуск», перетаскиваемые окна, модальные диалоги — стала интерфейсом потребительских компьютеров на двадцать лет вперёд. Сделать то же самое на RP2350 — другая задача: 520 КБ SRAM, 150 МГц Cortex-M33, ни MMU, ни swap-файла. frank-os написана с нуля под эти ограничения — вытесняющая многозадачность, оконный менеджер, файловый менеджер и набор приложений — но при этом остаётся узнаваемой для всех, кто вырос на двойном клике по иконкам.',
    historyUk:
      'Коли в серпні 1995 року вийшла Windows 95, десктопна метафора — панель задач, меню «Пуск», перетягувані вікна, модальні діалоги — стала інтерфейсом споживчих комп’ютерів на двадцять років уперед. Зробити те саме на RP2350 — інша задача: 520 КБ SRAM, 150 МГц Cortex-M33, ні MMU, ні swap-файлу. frank-os написано з нуля під ці обмеження — витісняюча багатозадачність, віконний менеджер, файловий менеджер та набір застосунків — але при цьому вона залишається впізнаваною для всіх, хто виріс на подвійному кліку по іконках.',
    historyBe:
      'Калі ў жніўні 1995 года выйшла Windows 95, дэсктопная метафара — панэль задач, меню «Пуск», перацягвальныя вокны, мадальныя дыялогі — стала інтэрфейсам спажывецкіх кампутараў на дваццаць гадоў наперад. Зрабіць тое самае на RP2350 — іншая задача: 520 КБ SRAM, 150 МГц Cortex-M33, ні MMU, ні swap-файла. frank-os напісана з нуля пад гэтыя абмежаванні — выцясняльная шматзадачнасць, аконны менеджэр, файлавы менеджэр і набор праграм — але пры гэтым яна застаецца пазнавальнай для ўсіх, хто вырас на падвойным кліку па іконках.',
    historyDe:
      'Mit dem Start von Windows 95 im August 1995 wurde die Desktop-Metapher — Taskleiste, Startmenü, ziehbare Fenster, modale Dialoge — für zwei Jahrzehnte zur Standardoberfläche im Verbrauchermarkt. Dasselbe auf einem RP2350 zu bauen ist eine andere Aufgabe: 520 KB SRAM, 150-MHz-Cortex-M33, keine MMU, kein Swap. frank-os wurde von Grund auf für diese Randbedingungen geschrieben — präemptives Multitasking, Fenstermanager, Dateimanager und eine kleine App-Suite — und bleibt dabei für alle wiedererkennbar, die mit Doppelklicks auf Icons aufgewachsen sind.',
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
    highlightsUk: [
      'Віконний робочий стіл на RP2350 (лише M2); HSTX HDMI 640×480 4bpp або 320×240 8bpp.',
      'Витісняюча багатозадачність на FreeRTOS; композитор, USB та ввід виконуються в окремих задачах.',
      'Файловий менеджер, термінал, панель задач, меню «Пуск», alt-tab, модальні діалоги.',
      'Підтримка PS/2-клавіатури та миші, а також USB HID-клавіатури та миші.',
      'Виведення звуку по I2S.',
      'PSRAM не обов’язковий; за наявності використовується для запуску ELF-застосунків.',
    ],
    highlightsBe: [
      'Аконны працоўны стол на RP2350 (толькі M2); HSTX HDMI 640×480 4bpp або 320×240 8bpp.',
      'Выцясняльная шматзадачнасць на FreeRTOS; кампазітар, USB і ўвод выконваюцца ў асобных задачах.',
      'Файлавы менеджэр, тэрмінал, панэль задач, меню «Пуск», alt-tab, мадальныя дыялогі.',
      'Падтрымка PS/2-клавіятуры і мышы, а таксама USB HID-клавіятуры і мышы.',
      'Вывад гуку па I2S.',
      'PSRAM не абавязковы; пры наяўнасці выкарыстоўваецца для запуску ELF-праграм.',
    ],
    highlightsDe: [
      'Fenster-Desktop auf dem RP2350 (nur M2); HSTX-HDMI 640×480 4 bpp / 320×240 8 bpp.',
      'Präemptives Multitasking auf FreeRTOS; Compositor, USB und Eingabe laufen als getrennte Tasks.',
      'Dateimanager, Terminal, Taskleiste, Startmenü, Alt-Tab, modale Dialoge.',
      'PS/2-Tastatur und -Maus sowie USB-HID-Tastatur und -Maus.',
      'I2S-Audio.',
      'PSRAM optional — wird für ELF-Apps genutzt, sofern vorhanden.',
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
  'frank-video': {
    slug: 'frank-video',
    name: 'frank-video',
    category: 'os',
    excerptEn: 'MPEG-1 video player for FRANK — plays video from an SD card.',
    excerptRu: 'MPEG-1-видеоплеер для FRANK — воспроизведение видео с SD-карты.',
    excerptUk: 'MPEG-1-відеоплеєр для FRANK — відтворення відео з SD-карти.',
    excerptBe: 'MPEG-1-відэаплэер для FRANK — прайграванне відэа з SD-карты.',
    excerptDe: 'MPEG-1-Videoplayer für FRANK — spielt Videos von der SD-Karte ab.',
    summaryEn:
      'A pl_mpeg-based MPEG-1 video player for the RP2350. Plays 320×240 MPEG-1 video with stereo MPEG-1 Layer-II audio in real time, with HDMI output (PIO or HSTX with HDMI audio over Data Islands) and SD-card streaming through an 8 MB PSRAM ring buffer.',
    summaryRu:
      'MPEG-1-видеоплеер для RP2350 на основе pl_mpeg. Воспроизводит видео 320×240 с MPEG-1 Layer-II стереозвуком в реальном времени; вывод HDMI (PIO или HSTX с HDMI-звуком в Data Islands) и потоковая загрузка с SD-карты через кольцевой буфер в 8 МБ PSRAM.',
    summaryUk:
      'MPEG-1-відеоплеєр для RP2350 на основі pl_mpeg. Відтворює відео 320×240 з MPEG-1 Layer-II стереозвуком у реальному часі; виведення HDMI (PIO або HSTX з HDMI-звуком у Data Islands) та потокове завантаження з SD-карти через кільцевий буфер у 8 МБ PSRAM.',
    summaryBe:
      'MPEG-1-відэаплэер для RP2350 на аснове pl_mpeg. Прайграе відэа 320×240 з MPEG-1 Layer-II стэрэагукам у рэальным часе; вывад HDMI (PIO або HSTX з HDMI-гукам у Data Islands) і патокавая загрузка з SD-карты праз кольцавы буфер у 8 МБ PSRAM.',
    summaryDe:
      'Ein auf pl_mpeg basierender MPEG-1-Videoplayer für den RP2350. Spielt 320×240-MPEG-1-Video mit MPEG-1-Layer-II-Stereoaudio in Echtzeit ab, mit HDMI-Ausgabe (PIO oder HSTX mit HDMI-Audio über Data Islands) und SD-Karten-Streaming über einen 8-MB-PSRAM-Ringpuffer.',
    historyEn:
      'MPEG-1 was finalised by ISO/IEC in 1993 and became the format that put video on consumer optical media (Video CD, software DVD-Video stepping stones), web pages and embedded systems. Its decode complexity is small enough to run on modest hardware while still producing watchable picture and stereo audio. Dominic Szablewski\'s pl_mpeg packages the entire decoder into a single C header. frank-video wraps that decoder in an RP2350 platform layer — HDMI scanout, PSRAM ring buffer, SD streaming, drift-compensated audio — and turns FRANK into a small standalone video player.',
    historyRu:
      'Стандарт MPEG-1 был завершён ISO/IEC в 1993 году и стал форматом, который вывел видео на потребительские оптические носители (Video CD и далее), в веб-страницы и встроенные системы. Сложность декодирования невелика — формат запускается на скромном оборудовании, при этом картинка и стереозвук остаются приемлемыми. pl_mpeg Доминика Шаблевского — это весь декодер в одном C-заголовке. frank-video обёртывает этот декодер платформенным слоем RP2350 — HDMI-развёртка, кольцевой буфер в PSRAM, потоковая загрузка с SD, компенсация дрейфа звука — и превращает FRANK в компактный автономный видеоплеер.',
    historyUk:
      'Стандарт MPEG-1 було завершено ISO/IEC 1993 року, і він став форматом, який вивів відео на споживчі оптичні носії (Video CD і далі), у вебсторінки та вбудовані системи. Складність декодування невелика — формат запускається на скромному обладнанні, при цьому картинка і стереозвук залишаються прийнятними. pl_mpeg Домініка Шаблевського — це весь декодер в одному C-заголовку. frank-video обгортає цей декодер платформним шаром RP2350 — HDMI-розгортка, кільцевий буфер у PSRAM, потокове завантаження з SD, компенсація дрейфу звуку — і перетворює FRANK на компактний автономний відеоплеєр.',
    historyBe:
      'Стандарт MPEG-1 быў завершаны ISO/IEC у 1993 годзе, і ён стаў фарматам, які вывеў відэа на спажывецкія аптычныя носьбіты (Video CD і далей), у вэб-старонкі і ўбудаваныя сістэмы. Складанасць дэкадавання невялікая — фармат запускаецца на сціплым абсталяванні, пры гэтым карцінка і стэрэагук застаюцца прымальнымі. pl_mpeg Дамініка Шаблеўскага — гэта ўвесь дэкодэр у адным C-загалоўку. frank-video абгортвае гэты дэкодэр платформавым слоем RP2350 — HDMI-разгортка, кольцавы буфер у PSRAM, патокавая загрузка з SD, кампенсацыя дрэйфу гуку — і ператварае FRANK у кампактны аўтаномны відэаплэер.',
    historyDe:
      'MPEG-1 wurde 1993 von ISO/IEC finalisiert und wurde zum Format, das Video auf optische Verbrauchermedien (Video CD und Vorläufer von Software-DVDs), Webseiten und in eingebettete Systeme brachte. Der Dekoder ist klein genug, um auf bescheidener Hardware zu laufen und dabei ein ansehbares Bild und Stereo-Audio zu liefern. Dominic Szablewskis pl_mpeg packt den gesamten Dekoder in einen einzigen C-Header. frank-video umhüllt diesen Dekoder mit einer RP2350-Plattformschicht — HDMI-Scanout, PSRAM-Ringpuffer, SD-Streaming, drift-kompensiertes Audio — und macht FRANK zu einem kleinen, eigenständigen Videoplayer.',
    highlightsEn: [
      'pl_mpeg MPEG-1 decoder; 320×240 video line-doubled to HDMI 640×480.',
      'MPEG-1 Layer-II stereo audio decoded to PCM, output via I2S DAC or HDMI Data Islands (HSTX build).',
      'Wall-clock-paced decode with frame skipping and audio drift compensation — playback stays in sync over hours.',
      '8 MB QSPI PSRAM hosts the streaming ring buffer and pl_mpeg decoder state.',
      '6×6×6 sRGB-correct paletted output with 4×4 Bayer ordered dither.',
      'File browser with self-contained 5×7 font; PS/2 and USB HID keyboard supported.',
      'All-I-frame MPEG-1 conversion script (`tools/convert_video.sh`) tuned for the RP2350 decode budget.',
    ],
    highlightsRu: [
      'Декодер MPEG-1 на основе pl_mpeg; видео 320×240 с line-doubling выводится на HDMI 640×480.',
      'Стереозвук MPEG-1 Layer-II декодируется в PCM; вывод по I2S DAC или HDMI Data Islands (сборка HSTX).',
      'Декодирование по реальному времени с пропуском кадров и компенсацией дрейфа звука — синхронизация сохраняется часами.',
      '8 МБ QSPI PSRAM используются под кольцевой буфер потока и состояние декодера pl_mpeg.',
      'Палитровый вывод 6×6×6 с корректной sRGB-кривой и 4×4-Bayer-дизерингом.',
      'Файловый браузер со встроенным шрифтом 5×7; поддержка PS/2- и USB HID-клавиатуры.',
      'Скрипт конвертации (`tools/convert_video.sh`) в All-I-frame MPEG-1, рассчитанный на бюджет декодирования RP2350.',
    ],
    highlightsUk: [
      'Декодер MPEG-1 на основі pl_mpeg; відео 320×240 з line-doubling виводиться на HDMI 640×480.',
      'Стереозвук MPEG-1 Layer-II декодується в PCM; виведення по I2S DAC або HDMI Data Islands (збірка HSTX).',
      'Декодування за реальним часом із пропуском кадрів та компенсацією дрейфу звуку — синхронізація зберігається годинами.',
      '8 МБ QSPI PSRAM використовуються під кільцевий буфер потоку та стан декодера pl_mpeg.',
      'Палітрове виведення 6×6×6 з коректною sRGB-кривою та 4×4-Bayer-дизерингом.',
      'Файловий браузер із вбудованим шрифтом 5×7; підтримка PS/2- та USB HID-клавіатури.',
      'Скрипт конвертації (`tools/convert_video.sh`) у All-I-frame MPEG-1, розрахований на бюджет декодування RP2350.',
    ],
    highlightsBe: [
      'Дэкодэр MPEG-1 на аснове pl_mpeg; відэа 320×240 з line-doubling выводзіцца на HDMI 640×480.',
      'Стэрэагук MPEG-1 Layer-II дэкадуецца ў PCM; вывад па I2S DAC або HDMI Data Islands (зборка HSTX).',
      'Дэкадаванне па рэальным часе з пропускам кадраў і кампенсацыяй дрэйфу гуку — сінхранізацыя захоўваецца гадзінамі.',
      '8 МБ QSPI PSRAM выкарыстоўваюцца пад кольцавы буфер патоку і стан дэкодэра pl_mpeg.',
      'Палітравы вывад 6×6×6 з карэктнай sRGB-крывой і 4×4-Bayer-дызерынгам.',
      'Файлавы браўзер з убудаваным шрыфтом 5×7; падтрымка PS/2- і USB HID-клавіятуры.',
      'Скрыпт канвертацыі (`tools/convert_video.sh`) у All-I-frame MPEG-1, разлічаны на бюджэт дэкадавання RP2350.',
    ],
    highlightsDe: [
      'pl_mpeg-MPEG-1-Dekoder; 320×240-Video per Line-Doubling auf HDMI 640×480.',
      'MPEG-1-Layer-II-Stereoaudio nach PCM dekodiert, Ausgabe über I2S-DAC oder HDMI-Data-Islands (HSTX-Build).',
      'Wanduhr-getaktetes Dekodieren mit Frame-Skipping und Audio-Drift-Kompensation — über Stunden synchron.',
      '8 MB QSPI-PSRAM beherbergen den Streaming-Ringpuffer und den pl_mpeg-Dekoder-Zustand.',
      '6×6×6-sRGB-korrekte palettierte Ausgabe mit 4×4-Bayer-Dithering.',
      'Datei-Browser mit eingebauter 5×7-Schrift; PS/2- und USB-HID-Tastatur unterstützt.',
      'All-I-Frame-MPEG-1-Konvertierungsskript (`tools/convert_video.sh`), abgestimmt auf das Echtzeit-Dekoder-Budget des RP2350.',
    ],
    videoOutputs: ['HDMI'],
    audio: ['I2S'],
    psram: 'required',
    compatibility: ['M1', 'M2'],
    repository: 'https://github.com/rh1tech/frank-video',
    releases: 'https://github.com/rh1tech/frank-video/releases',
    thumbnail: 'images/frank-video/screen1.png',
    screenshots: [
      'images/frank-video/screen1.png',
      'images/frank-video/screen2.png',
      'images/frank-video/screen3.png',
    ],
  },
  'frank-kickstart': {
    slug: 'frank-kickstart',
    name: 'frank-kickstart',
    category: 'os',
    excerptEn: 'UF2 launcher / bootloader with an SD card browser.',
    excerptRu: 'Загрузчик / лаунчер UF2 с обозревателем SD-карты.',
    excerptUk: 'Завантажувач / лаунчер UF2 з оглядачем SD-карти.',
    excerptBe: 'Загрузчык / лаўнчар UF2 з аглядальнікам SD-карты.',
    excerptDe: 'UF2-Launcher / -Bootloader mit SD-Karten-Browser.',
    summaryEn:
      'A graphical launcher that reflashes FRANK with any UF2 firmware from the SD card without holding BOOTSEL or attaching a host computer. Reboot is handed off via a watchdog scratch register and a vector-table swap.',
    summaryRu:
      'Графический лаунчер, перепрошивающий FRANK любой прошивкой в формате UF2 непосредственно с SD-карты — без удержания BOOTSEL и без подключения к компьютеру. Перезагрузка управляется через scratch-регистр watchdog и подмену таблицы векторов.',
    summaryUk:
      'Графічний лаунчер, що перепрошиває FRANK будь-якою прошивкою у форматі UF2 безпосередньо з SD-карти — без утримання BOOTSEL та без підключення до комп’ютера. Перезавантаження керується через scratch-регістр watchdog і підміну таблиці векторів.',
    summaryBe:
      'Графічны лаўнчар, які перапрошывае FRANK любой прашыўкай у фармаце UF2 непасрэдна з SD-карты — без утрымання BOOTSEL і без падключэння да кампутара. Перазагрузка кіруецца праз scratch-рэгістр watchdog і падмену табліцы вектараў.',
    summaryDe:
      'Ein grafischer Launcher, der FRANK mit beliebiger UF2-Firmware direkt von der SD-Karte neu flasht — ohne BOOTSEL gedrückt zu halten oder einen Host-Rechner anzuschließen. Der Neustart wird über ein Watchdog-Scratch-Register und einen Vektor-Tabellen-Tausch übergeben.',
    historyEn:
      "The Pico's stock workflow asks you to hold a BOOTSEL button while plugging in USB and drag a UF2 file across to a USB mass-storage device. That is fine on the bench, awkward on a finished product. frank-kickstart borrows the spirit of the Amiga's Kickstart ROM — a tiny on-device bootstrap that hands control to whatever you actually want to run — and turns FRANK into something closer to a console: pick a UF2 from the SD card on screen, reboot into it, repeat.",
    historyRu:
      'Стандартный рабочий процесс Pico — зажать BOOTSEL, вставить USB, перетащить UF2-файл на появившийся USB-диск. На столе это нормально, на готовом устройстве — неудобно. frank-kickstart заимствует идею у Kickstart ROM от Amiga — маленький bootstrap внутри устройства, который передаёт управление тому, что реально нужно запустить, — и превращает FRANK во что-то похожее на консоль: выбираете UF2 на SD прямо на экране, перезагружаетесь в неё и повторяете.',
    historyUk:
      'Стандартний робочий процес Pico — затиснути BOOTSEL, увімкнути USB, перетягти UF2-файл на USB-диск, що з’явився. На столі це нормально, на готовому пристрої — незручно. frank-kickstart запозичує ідею з Kickstart ROM від Amiga — маленький bootstrap усередині пристрою, що передає керування тому, що справді потрібно запустити, — і перетворює FRANK на щось схоже на консоль: вибираєте UF2 на SD прямо на екрані, перезавантажуєтеся в нього і повторюєте.',
    historyBe:
      'Стандартны рабочы працэс Pico — заціснуць BOOTSEL, уставіць USB, перацягнуць UF2-файл на USB-дыск, які з’явіўся. На стале гэта нармальна, на гатовай прыладзе — нязручна. frank-kickstart запазычвае ідэю з Kickstart ROM ад Amiga — маленькі bootstrap унутры прылады, які перадае кіраванне таму, што сапраўды трэба запусціць, — і ператварае FRANK у нешта падобнае на кансоль: выбіраеце UF2 на SD прама на экране, перазагружаецеся ў яе і паўтараеце.',
    historyDe:
      'Der Standard-Workflow des Pico verlangt, BOOTSEL zu drücken, während USB angeschlossen wird, und eine UF2-Datei auf ein USB-Massenspeichergerät zu ziehen. Auf der Werkbank ist das in Ordnung, in einem fertigen Produkt umständlich. frank-kickstart greift den Geist des Amiga-Kickstart-ROMs auf — ein kleines On-Device-Bootstrap, das die Kontrolle an das übergibt, was tatsächlich laufen soll — und macht aus FRANK etwas, das eher einer Konsole ähnelt: UF2 von der SD-Karte am Bildschirm auswählen, hineinbooten, wiederholen.',
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
    highlightsUk: [
      'Перепрошивка будь-якого UF2 з SD-карти без BOOTSEL.',
      'Екранний браузер з мініатюрами і метаданими.',
      'Виведення зображення по HDMI на основі libdvi/PicoDVI (800×600 з внутрішнім подвоєним режимом 400×300).',
      'Підтримка PS/2-клавіатури, USB HID-клавіатури та геймпадів, NES- і SNES-геймпадів.',
      'До 128 записів прошивок за наявності PSRAM, 16 — без нього.',
    ],
    highlightsBe: [
      'Перапрашыўка любога UF2 з SD-карты без BOOTSEL.',
      'Экранны браўзер з мініяцюрамі і метададзенымі.',
      'Вывад выявы па HDMI на аснове libdvi/PicoDVI (800×600 з унутраным падвоеным рэжымам 400×300).',
      'Падтрымка PS/2-клавіятуры, USB HID-клавіятуры і геймпадаў, NES- і SNES-геймпадаў.',
      'Да 128 запісаў прашывак пры наяўнасці PSRAM, 16 — без яе.',
    ],
    highlightsDe: [
      'Flasht jede UF2 von der SD-Karte ohne BOOTSEL.',
      'On-Screen-Browser mit Vorschaubildern und Metadaten.',
      'HDMI-Ausgabe via libdvi/PicoDVI (800×600 mit intern verdoppeltem 400×300-Modus).',
      'PS/2-Tastatur, USB-HID-Tastatur / -Gamepad, NES-/SNES-Gamepads.',
      'Bis zu 128 Firmware-Einträge mit PSRAM, 16 ohne.',
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

export const CATEGORY_LABELS_UK: Record<FirmwareCategory, string> = {
  console: 'Ігрові консолі',
  computer: 'Комп’ютери',
  game: 'Порти ігор',
  os: 'ОС та утиліти',
};

export const CATEGORY_LABELS_BE: Record<FirmwareCategory, string> = {
  console: 'Ігравыя кансолі',
  computer: 'Кампутары',
  game: 'Порты гульняў',
  os: 'АС і ўтыліты',
};

export const CATEGORY_LABELS_DE: Record<FirmwareCategory, string> = {
  console: 'Spielkonsolen',
  computer: 'Computer',
  game: 'Spielportierungen',
  os: 'OS & Werkzeuge',
};

export const CATEGORY_ORDER: FirmwareCategory[] = ['console', 'computer', 'game', 'os'];
