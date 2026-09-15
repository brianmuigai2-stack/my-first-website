import { useState, useEffect, useRef } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music } from 'lucide-react'

const playlist = [
  {
    title: 'Creative Minds',
    artist: 'Background Music',
    src: import.meta.env.BASE_URL + 'audio/music.mp3',
  },
]

export function MusicPlayer() {
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(30)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [trackIndex, setTrackIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const savedVolume = localStorage.getItem('musicVolume')
    if (savedVolume) setVolume(parseFloat(savedVolume))
    const interacted = localStorage.getItem('musicPlayerInteracted')
    if (interacted === 'true') {
      const t = setTimeout(() => setOpen(true), 2000)
      return () => clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
      localStorage.setItem('musicVolume', String(volume))
    }
  }, [volume])

  const togglePlay = async () => {
    if (!audioRef.current) return
    try {
      if (playing) {
        audioRef.current.pause()
      } else {
        await audioRef.current.play()
        localStorage.setItem('musicPlayerInteracted', 'true')
      }
      setPlaying(!playing)
    } catch (err) {
      console.log('Autoplay prevented:', err)
    }
  }

  const next = () => {
    setTrackIndex((i) => (i + 1) % playlist.length)
    setPlaying(false)
    setProgress(0)
  }

  const prev = () => {
    setTrackIndex((i) => (i - 1 + playlist.length) % playlist.length)
    setPlaying(false)
    setProgress(0)
  }

  const current = playlist[trackIndex]

  return (
    <>
      <audio ref={audioRef} src={current.src} preload="auto" loop />
      <div
        className={`music-player ${open ? 'active' : ''}`}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          zIndex: 900,
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRight: 'none',
          borderBottom: 'none',
          borderTopRightAngle: 0,
        }}
      >
        <div
          id="music-toggle"
          className="music-player-toggle"
          title="Click to open music player"
          onClick={() => {
            setOpen((v) => !v)
            localStorage.setItem('musicPlayerInteracted', 'true')
          }}
          style={{
            background: 'var(--primary)',
            color: 'var(--primary-foreground)',
            width: '44px',
            height: '44px',
            borderRadius: '8px 0 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontFamily: 'monospace',
            fontSize: '20px',
            borderTop: '1px solid var(--border)',
            borderLeft: '1px solid var(--border)',
            borderRight: 'none',
          }}
        >
          <Music size={18} />
        </div>

        <div
          className="music-player-controls"
          style={{
            width: '300px',
            padding: '12px 14px',
            display: open ? 'block' : 'none',
          }}
        >
          <div className="music-info" style={{ marginBottom: '8px' }}>
            <span className="music-title" style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: 'var(--foreground)' }}>{current.title}</span>
            <span className="music-artist" style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--muted-foreground)' }}>{current.artist}</span>
          </div>

          <div className="progress-bar" style={{ marginBottom: '8px' }}>
            <div
              className="progress"
              style={{
                width: `${progress}%`,
                height: '3px',
                background: 'var(--primary)',
                transition: 'width 0.1s linear',
                borderRadius: '2px',
              }}
            />
          </div>

          <div className="music-controls" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="control-btn"
                title="Previous track"
                onClick={prev}
                style={{ background: 'transparent', border: 'none', color: 'var(--muted-foreground)', cursor: 'pointer' }}
              >
                <SkipBack size={14} />
              </button>
              <button
                className="control-btn play-pause"
                title={playing ? 'Pause' : 'Play'}
                onClick={togglePlay}
                style={{
                  background: 'var(--primary)',
                  border: 'none',
                  color: 'var(--primary-foreground)',
                  cursor: 'pointer',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {playing ? <Pause size={14} /> : <Play size={14} />}
              </button>
              <button
                className="control-btn"
                title="Next track"
                onClick={next}
                style={{ background: 'transparent', border: 'none', color: 'var(--muted-foreground)', cursor: 'pointer' }}
              >
                <SkipForward size={14} />
              </button>
            </div>
            <div className="volume-control" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                className="control-btn"
                title={muted ? 'Unmute' : 'Mute'}
                onClick={() => setMuted((m) => !m)}
                style={{ background: 'transparent', border: 'none', color: 'var(--muted-foreground)', cursor: 'pointer' }}
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <input
                type="range"
                id="volume-slider"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value, 10))}
                style={{ width: '60px' }}
                aria-label="Volume"
              />
            </div>
          </div>

          <div className="music-hint">
            <small style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'var(--muted-foreground)' }}>Click play to start music</small>
          </div>
        </div>
      </div>
    </>
  )
}
