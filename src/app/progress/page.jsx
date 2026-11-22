import Image from "next/image";

export const metadata = {
  title: "Our Progress",
  description:
    "Honu 1.0 is complete and Cornell Nexus is building Honu 2.0. See how each system is changing.",
};

const DONATE_URL =
  "https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=16421&cid=27217&dids=5455&sort=1&bledit=1";

const timeline = [
  { years: "2023–2025", text: "Manufactured our first physical prototype.", current: false },
  {
    years: "2025–2026",
    text: "Integrated our power distribution and sensor systems, and connected our software to the hardware.",
    current: false,
  },
  {
    years: "2026–Present",
    text: "Building Honu 2.0, a lighter, autonomous rover that fixes what we learned from 1.0.",
    current: true,
  },
];

// To add a real photo, put it in /public/honu/ and set `image`, e.g.
// image: "/honu/chassis-1.jpg". Until then a placeholder box is shown.
const systems = [
  {
    num: "01",
    name: "Chassis",
    tagline: "The frame everything on Honu mounts to.",
    v1: {
      text: "Built two years ago on a new team's budget, Honu 1.0's chassis carries every system on two formed side plates and load-bearing aluminum rails.",
      label: "Honu 1.0 chassis render",
      caption: "Honu 1.0 chassis",
      image: null,
    },
    v2: {
      text: "A lighter frame with thinner plates and better materials, designed around what we now know about our filtration and electronics.",
      label: "Honu 2.0 progress photo",
      caption: "Honu 2.0 chassis in progress",
      image: null,
    },
  },
  {
    num: "02",
    name: "Drivetrain",
    tagline: "The motors, gears, and wheels that move Honu across the sand.",
    v1: {
      text: "A direct drivetrain on wide, soft wheels for high-friction sand, with motor plates above the rear wheels carrying the gear stage.",
      label: "Honu 1.0 drivetrain render",
      caption: "Honu 1.0 drivetrain",
      image: null,
    },
    v2: {
      text: "A new indirect drivetrain with a dead axle that takes load off the motors, so Honu drives reliably on the beach using less power.",
      label: "Honu 2.0 progress photo",
      caption: "Honu 2.0 drivetrain in progress",
      image: null,
    },
  },
  {
    num: "03",
    name: "Power",
    tagline: "How Honu collects, stores, and shares its energy.",
    v1: {
      text: "Fully solar. A base-station battery charges Honu's 12V battery, which feeds two power distribution boards: one for filtration and one for driving.",
      label: "Honu 1.0 power render",
      caption: "Honu 1.0 power",
      image: null,
    },
    v2: {
      text: "A simpler split: one board for 5V electronics and one for 12V motors, cutting down the number of voltage step-downs.",
      label: "Honu 2.0 progress photo",
      caption: "Honu 2.0 power in progress",
      image: null,
    },
  },
  {
    num: "04",
    name: "Filtration",
    tagline: "The system that separates microplastics from sand.",
    v1: {
      text: "Our electrostatic system, the only one of its kind: an Archimedes screw lifts sand onto a vibrating feeder and a charged drum powered by our 24 kV Van de Graaff generator.",
      label: "Honu 1.0 filtration render",
      caption: "Honu 1.0 filtration",
      image: null,
    },
    v2: {
      text: "A vibrating Archimedes screw that works as both intake and feeder, plus research into vibration insulation at this scale.",
      label: "Honu 2.0 progress photo",
      caption: "Honu 2.0 filtration in progress",
      image: null,
    },
  },
];

function Photo({ item }) {
  return (
    <figure className="w-full">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#0d3b47] via-[#1d6f84] to-[#5fb3c6]">
        {item.image ? (
          <Image src={item.image} alt={item.caption} fill className="object-cover" />
        ) : (
          <>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white opacity-10" />
            <span className="absolute bottom-3 left-3 rounded-full bg-[#0b2a33cc] px-3 py-1 text-xs tracking-wide text-white">
              {item.label}
            </span>
          </>
        )}
      </div>
      <figcaption className="mt-2 text-xs text-[#4a6670]">{item.caption}</figcaption>
    </figure>
  );
}

function Version({ heading, item, accent }) {
  return (
    <div className="grid items-center gap-6 md:grid-cols-[2fr_3fr] md:gap-8">
      <div>
        <div
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            accent ? "text-teal" : "text-[#0b2a33]"
          }`}
        >
          {heading}
        </div>
        <p className="leading-relaxed text-[#0b2a33]">{item.text}</p>
      </div>
      <Photo item={item} />
    </div>
  );
}

export default function Progress() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#03161c] px-6 py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_10%,#1e5562_0%,transparent_50%),radial-gradient(ellipse_at_90%_70%,#10404c_0%,transparent_45%)]" />
        <div className="relative mx-auto max-w-4xl">
          <h1 className="text-4xl font-medium uppercase leading-tight md:text-5xl">
            Our Progress &amp; the Future of Honu
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-[#cfe3e8]">
            Honu 1.0 is complete, and we&apos;re already building Honu 2.0. Our first robot
            isn&apos;t retiring: it&apos;s becoming our test platform for every new part that goes
            into its successor.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-2xl font-medium uppercase tracking-wide text-[#0b2a33]">
            Honu&apos;s Life
          </h2>
          <ol className="relative ml-2 border-l-2 border-[#9fd3e0]">
            {timeline.map((t) => (
              <li key={t.years} className="relative mb-8 pl-8 last:mb-0">
                <span
                  className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full ring-4 ring-[#d7eef4] ${
                    t.current ? "bg-aqua" : "bg-[#0d4a58]"
                  }`}
                />
                <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-8">
                  <div className="font-semibold text-[#0b2a33]">{t.years}</div>
                  <div className="text-[#0b2a33]">{t.text}</div>
                </div>
              </li>
            ))}
          </ol>
          <a
            href="#changes"
            className="mt-10 inline-block text-xs uppercase tracking-[0.15em] text-[#4a6670] hover:text-teal"
          >
            Scroll to see what&apos;s changing ↓
          </a>
        </div>
      </section>

      {/* 1.0 vs 2.0 */}
      <section id="changes" className="scroll-mt-4 bg-[#f2f6f8] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-medium uppercase tracking-wide text-[#0b2a33]">
            From Honu 1.0 to 2.0
          </h2>
          <div className="flex flex-col gap-6">
            {systems.map((s) => (
              <article
                key={s.num}
                className="rounded-xl border border-[#0b2a33] bg-white p-6 md:p-10"
              >
                <header className="mb-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-semibold text-teal">{s.num}</span>
                    <h3 className="text-2xl uppercase text-[#0b2a33]">{s.name}</h3>
                  </div>
                  <p className="ml-9 mt-1 text-[#4a6670]">{s.tagline}</p>
                </header>
                <Version heading="Honu 1.0" item={s.v1} />
                <hr className="my-8 border-[#e3eaed]" />
                <Version heading="In Honu 2.0…" item={s.v2} accent />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section className="bg-white px-6 py-16">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-[#0b2a33] px-6 py-14 text-center text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,#1d5a68_0%,transparent_55%),radial-gradient(ellipse_at_85%_90%,#12495a_0%,transparent_50%)]" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.25em] text-[#cfe3e8]">
              Help us heal the oceans
            </div>
            <h2 className="mt-3 text-3xl font-bold uppercase md:text-4xl">Help us build Honu 2.0</h2>
            <p className="mt-3 text-[#cfe3e8]">
              Every contribution brings our next rover closer to the beach.
            </p>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-white px-8 py-2 font-semibold text-[#0b2a33] duration-300 hover:bg-aqua"
            >
              Donate
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
