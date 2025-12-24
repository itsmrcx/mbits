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
        height: '100%',        /* Fill the container */
        width: '100%',         /* Fill the container */
        minWidth: '48px',      /* Force minimum size */
        minHeight: '48px',     /* Force minimum size */
        borderRadius: '0px',   
        objectFit: 'contain'   /* Keeps the aspect ratio perfect */
      }}
    />
  )
}
