import { UseChatHelpers } from 'ai/react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Попробуйте финансового ИИ-ассистента!
        </h1>
        <p className="leading-normal text-sm">
          ИИ-чатбот, отвечающий на финансовые вопросы в виде интерактивных виджетов, используя данные в реальном времени.
          Изготовлено командой Deplonis в рамках BICAP Hackathon 2024
        </p>
      </div>
    </div>
  )
}
