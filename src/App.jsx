import { useRef, useState } from "react";
import cfg from "./data/siteConfig.js";
import Fireworks from "./components/Fireworks.jsx";
import Diya from "./components/Diya.jsx";
import Hamper from "./components/Hamper.jsx";
import {
  Mandala,
  Particles,
  HangingLanterns,
  SkyLanterns,
  Photos,
  Envelope,
  Music,
} from "./components/Extras.jsx";
const T = cfg.text,
  N = cfg.friendName;
export default function App() {
  const [scene, setScene] = useState(0),
    [unlocked, setUnlocked] = useState(false),
    [leaving, setLeaving] = useState(false),
    busy = useRef(false);
  const [burst, setBurst] = useState(0);
  const go = (n, force) => {
    if (busy.current || (n > 0 && !unlocked && !force)) return;
    busy.current = true;
    setLeaving(true);
    setTimeout(() => {
      setScene(n);
      setLeaving(false);
      setBurst(cfg.fireworks.burstScenes.includes(n) ? Date.now() : 0);
      busy.current = false;
    }, 500);
  };
  const next = () => go(scene + 1);
  const Next = () => (
    <button className="gold-btn next" onClick={next}>
      Next
    </button>
  );
  const S = scenes(go, Next, setUnlocked)[scene];
  return (
    <main className="app">
      <Particles />
      <Fireworks rate={cfg.fireworks.rates[scene]} burst={burst} />
      <div className="frame" aria-hidden="true" />
      <Music src={cfg.music} />
      <section key={scene} className={`scene ${leaving ? "leave" : "enter"}`}>
        <S />
      </section>
    </main>
  );
}
const scenes = (go, Next, setUnlocked) => [
  function Entrance() {
    const [pw, setPw] = useState(""),
      [show, setShow] = useState(false),
      [err, setErr] = useState(false),
      [ok, setOk] = useState(false);
    const submit = (e) => {
      e.preventDefault();
      if (pw.trim().toLowerCase() === cfg.password.toLowerCase()) {
        setOk(true);
        setUnlocked(true);
        setTimeout(() => go(1, true), 100);
      } else {
        setErr(true);
      }
    };
    return (
      <>
        <HangingLanterns />
        <form className={`card ${ok ? "fade" : ""}`} onSubmit={submit}>
          <h1>{T.unlockTitle}</h1>
          <p className="sub">{T.unlockSub}</p>
          <p className="name">For {N} ✨</p>
          <div className="pw">
            <input
              type={show ? "text" : "password"}
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
                setErr(false);
              }}
              aria-label="Password"
              placeholder="Secret word"
              autoComplete="off"
            />
            <button
              type="button"
              className="eye"
              onClick={() => setShow((s) => !s)}
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>
          {err && (
            <p className="err" role="alert">
              {T.wrong}
            </p>
          )}
          <button className="gold-btn" type="submit">
            {T.unlockBtn}
          </button>
        </form>
      </>
    );
  },
  function Light() {
    const [lit, setLit] = useState(true);
    return (
      <>
        <HangingLanterns />
        <div className="stack">
          <h1>{T.lightTitle}</h1>
          <p className="sub">{T.lightSub}</p>
          <div className="art">
            <Mandala />
            <Diya lit={lit} onToggle={() => setLit((l) => !l)} />
          </div>
        </div>
        <Next />
      </>
    );
  },
  () => (
    <>
      <div className="stack">
        <h1>Happy Diwali, {N}!</h1>
        <p className="sub">{T.greetMsg}</p>
        <div className="art small">
          <Mandala size={220} />
          <Diya size={170} />
        </div>
      </div>
      <Next />
    </>
  ),
  () => (
    <>
      <HangingLanterns />
      <div className="stack">
        <div className="spot" />
        <h1>{T.beforeTitle}</h1>
        <p className="sub">{T.beforeMsg}</p>
        <p className="sub personal">{T.personal1}</p>
      </div>
      <Next />
    </>
  ),
  function HamperScene() {
    const [done, setDone] = useState(false);
    return (
      <>
        <div className="stack">
          <h1>{T.hamperTitle}</h1>
          <p className="sub">{done ? T.hamperDone : T.hamperSub}</p>
          <Hamper btn={T.hamperBtn} onOpened={() => setDone(true)} />
        </div>
        {done && <Next />}
      </>
    );
  },
  () => (
    <>
      <div className="stack">
        <div className="art">
          <Mandala heart />
        </div>
        <h1>{T.wishTitle}</h1>
        <p className="sub">{T.wishMsg}</p>
        <p className="sub personal">{T.personal2}</p>
      </div>
      <Next />
    </>
  ),
  () => (
    <>
      <div className="stack wide">
        <h1>{T.memTitle}</h1>
        <p className="sub">{T.memSub}</p>
        <Photos photos={cfg.photos} captions={cfg.captions} />
      </div>
      <Next />
    </>
  ),
  () => (
    <>
      <SkyLanterns />
      <div className="stack top">
        <h1>{T.skyTitle}</h1>
        <p className="sub">{T.skySub}</p>
      </div>
      <Next />
    </>
  ),
  () => (
    <>
      <div className="stack">
        <h1>{T.letterTitle}</h1>
        <Envelope letter={cfg.letter} />
      </div>
      <Next />
    </>
  ),
  () => (
    <div className="stack final">
      <p className="label">{T.finalLabel}</p>
      <h1 className="big">
        Happy Diwali,
        <br />
        {N}!
      </h1>
      <p className="sub">{T.finalSub}</p>
      <div className="art small">
        <Mandala size={200} />
        <Diya size={160} />
      </div>
      <p className="sub">{T.finalMsg}</p>
      <div className="actions">
        <button className="gold-btn" onClick={() => go(1, true)}>
          Experience Again
        </button>
        <button
          className="ghost-btn"
          onClick={() => {
            setUnlocked(false);
            go(0, true);
          }}
        >
          Back to Beginning
        </button>
      </div>
    </div>
  ),
];
