import { usePrimaryPage } from '@/PageManager'
import { cn } from '@/lib/utils'

export default function Icon({ className }: { className?: string }) {
  const { navigate } = usePrimaryPage()

  return (
    <img
      src="/mbits/pwa-192x192.png"
      alt="mBITs"
      className={cn('cursor-pointer', className)}
      onClick={() => navigate('home')}
      style={{
        height: '32px',        /* Keeps it header-sized */
        width: '32px',
        borderRadius: '0px',   /* Enforces square terminal look */
        objectFit: 'contain'
      }}
    />
  )
}
