import { AppHeader } from '../cmps/AppHeader'
import { AppFooter } from '../cmps/AppFooter'

import { MainAboutMe } from '../cmps/MainAboutMe'
import { Intoduction } from '../cmps/Intoduction'
import { Projects } from '../cmps/Projects'
import { ContactMe } from '../cmps/ContactMe'
import { UserMsg } from '../cmps/UserMsg'

export function HomePage() {
  return (
    <section className="home-page">
      <UserMsg />
      <AppHeader />

      <MainAboutMe />

      <section id="about">
        <Intoduction />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contactMe">
        <ContactMe />
      </section>

      <AppFooter />
    </section>
  )
}
