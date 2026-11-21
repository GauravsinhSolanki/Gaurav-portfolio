import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { profile } from './content/profile';

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadFont(file: string) {
  return readFile(join(process.cwd(), 'node_modules/geist/dist/fonts/geist-sans', file));
}

export default async function OpenGraphImage() {
  const [regular, semibold] = await Promise.all([
    loadFont('Geist-Regular.ttf'),
    loadFont('Geist-SemiBold.ttf'),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          backgroundColor: '#181818',
          color: '#F5F5F5',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', fontSize: 24, color: '#F7CD6E', fontWeight: 600 }}>
            {profile.name} · {profile.role} at {profile.company}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 72, lineHeight: 1.05, fontWeight: 600, letterSpacing: -2 }}>
            <span>{profile.heroTitle[0]}</span>
            <span style={{ color: '#9B9B9B' }}>{profile.heroTitle[1]}</span>
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#A3A3A3' }}>{profile.stack}</div>
        </div>
        <div style={{ display: 'flex', gap: 48 }}>
          {[
            ['8+', 'Products built, all live'],
            ['2', 'Client portals, U.S. and Canada'],
            ['<3 wk', 'Scratch to client testing'],
          ].map(([value, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 56, fontWeight: 600, color: '#F7CD6E' }}>{value}</span>
              <span style={{ fontSize: 22, color: '#A3A3A3' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: regular, weight: 400, style: 'normal' },
        { name: 'Geist', data: semibold, weight: 600, style: 'normal' },
      ],
    },
  );
}
