import "./globals.css";
import mainLogo from '../../public/assets/header/logo.png'
import LenisProvider from './_components/LenisProvider'


const baseURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tekalp.fr';

export const metadata = {
  title: "Tekalp - Ouvrage de protection contre les mouvements de terrain",
  description: `Technologie modulaire, constituée de blocs en béton préfabriqués, liaisonnés par des armatures continues permettant une mise en œuvre d'ouvrages articulés en 2D/3D.`,
  openGraph: {
    url: baseURL,
    type: 'website',
    title: "Tekalp - Ouvrage de protection contre les mouvements de terrain",
    description: `Technologie modulaire, constituée de blocs en béton préfabriqués, liaisonnés par des armatures continues permettant une mise en œuvre d'ouvrages articulés en 2D/3D.`,
    images: [
      {
        url: mainLogo.src,
        width: 350,
        height: 350,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    title: "Tekalp - Ouvrage de protection contre les mouvements de terrain",
    description: `Technologie modulaire, constituée de blocs en béton préfabriqués, liaisonnés par des armatures continues permettant une mise en œuvre d'ouvrages articulés en 2D/3D.`,
    images: [mainLogo.src],
  },
  metadataBase: new URL(baseURL),

  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    maskIcon: { url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    manifest: '/site.webmanifest',
  },
  msapplicationTileColor: '#da532c',
};

export const viewport = {
  with:"device-width",
  initialScale:1,
  userScalable:false,
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="overflow-x-clip">
      <LenisProvider>
        {children}
      </LenisProvider>
      </body>
    </html>
  );
}
