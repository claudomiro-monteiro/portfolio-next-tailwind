import { Spiral as Hamburger } from 'hamburger-react'
import { useMobileButton } from './header'

export default function MobileButton() {
  const { handleMobileButton, openSidebar } = useMobileButton()

  return (
    <div className="flex sm:hidden">
      <Hamburger
        toggle={handleMobileButton}
        toggled={openSidebar}
        duration={0.3}
        easing="ease-in"
        color={openSidebar ? '#10b981' : '#111827'}
        size={24}
        rounded
      />
    </div>
  )
}
