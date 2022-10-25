import { FC, ReactNode } from 'react'

import { motion } from 'framer-motion'

import { pageTransition } from '@/animations/variants'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'

type Props = {
  children: ReactNode
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <motion.div {...pageTransition}>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </motion.div>
  )
}

export default DefaultLayout
