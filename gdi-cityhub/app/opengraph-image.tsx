import { ImageResponse } from 'next/og'

export const alt = 'GDI CityHub | Transformacion Digital para Comercios Locales'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          gap: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span style={{ fontSize: 72, fontWeight: 'bold', color: 'white', letterSpacing: '-3px' }}>
            GDI&nbsp;
          </span>
          <span style={{ fontSize: 72, fontWeight: 'bold', color: '#3B82F6', letterSpacing: '-3px' }}>
            CityHub
          </span>
        </div>
        <div
          style={{
            fontSize: 30,
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Transformacion Digital para Comercios Locales
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          <div style={{ background: '#111111', border: '1px solid rgba(59,130,246,0.4)', borderRadius: '8px', padding: '8px 20px', color: '#3B82F6', fontSize: 20 }}>
            Paginas Web
          </div>
          <div style={{ background: '#111111', border: '1px solid rgba(59,130,246,0.4)', borderRadius: '8px', padding: '8px 20px', color: '#3B82F6', fontSize: 20 }}>
            Apps / MVPs
          </div>
          <div style={{ background: '#111111', border: '1px solid rgba(59,130,246,0.4)', borderRadius: '8px', padding: '8px 20px', color: '#3B82F6', fontSize: 20 }}>
            Agentes IA
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
