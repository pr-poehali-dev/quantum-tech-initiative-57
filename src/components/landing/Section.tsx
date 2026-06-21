import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, showPricing, plans }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showPricing && plans && (
        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className={`flex flex-col items-center justify-center rounded-xl border px-6 py-5 min-w-[120px] cursor-pointer transition-all
                ${plan.highlight
                  ? 'border-[#3B82F6] bg-[#3B82F6]/10 shadow-[0_0_24px_#3B82F6aa]'
                  : 'border-white/10 bg-white/5 hover:border-[#3B82F6] hover:bg-[#3B82F6]/10'
                }`}
              onClick={() => window.open('https://funpay.com', '_blank')}
            >
              {plan.highlight && (
                <span className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-widest mb-2">Топ</span>
              )}
              <span className="text-white font-semibold text-sm mb-1">{plan.name}</span>
              <span className="text-2xl font-bold text-white">{plan.price}</span>
              <span className="text-neutral-500 text-xs mt-1">{plan.period}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#3B82F6] bg-transparent border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-colors"
            onClick={() => window.open('https://funpay.com', '_blank')}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}