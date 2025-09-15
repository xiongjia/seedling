import { Telescope } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'

export const ComingSoon = () => {
  const { t } = useTranslation()
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <Telescope size={72} />
        <h1 className="text-4xl leading-tight font-bold">
          {t('coming.soon.title')}
        </h1>
        <p className="text-muted-foreground text-center">
          <Trans components={{ br: <br /> }}>{t('coming.soon.desc')}</Trans>
        </p>
      </div>
    </div>
  )
}
