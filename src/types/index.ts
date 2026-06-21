import type { ReactNode } from "react"

export interface PricingPlan {
  name: string
  price: string
  period: string
  highlight?: boolean
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  showPricing?: boolean
  plans?: PricingPlan[]
}

export interface SectionProps extends Section {
  isActive: boolean
}