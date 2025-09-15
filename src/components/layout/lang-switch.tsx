import { Check, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/hooks/use-language'
import { cn } from '@/lib/utils'

export const LangSwitch = () => {
  const { t } = useTranslation()
  const [lang, changeLanguage] = useLanguage()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="scale-95 rounded-full">
          <Languages className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Languages className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            changeLanguage('en')
          }}
        >
          {t('lang.en')}{' '}
          <Check
            size={14}
            className={cn('ms-auto', lang !== 'en' && 'hidden')}
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            changeLanguage('zh')
          }}
        >
          {t('lang.zh')}{' '}
          <Check
            size={14}
            className={cn('ms-auto', lang !== 'zh' && 'hidden')}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
