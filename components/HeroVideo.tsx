import { HeroVideoDialog } from '@/components/ui/hero-video-dialog'

export function HeroVideoDialogDemo() {
  return (
    <div className="relative w-full">
      <HeroVideoDialog
        className="dark:hidden block w-full"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/gBDC_aHYIbw"
        thumbnailSrc="/thumbnail.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block w-full"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/gBDC_aHYIbw"
        thumbnailSrc="/thumbnail.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}
