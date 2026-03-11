import mikaAvatar from '../assets/imgs/mika-avatar.png'
import { SocialLinks } from './SocialLinks'
import { Tooltip } from '@mui/material'

export function MainAboutMe() {
  return (
    <section className="main-about-me">
      <div className="about-me">
        <h1>MIKA RIDLEY</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I build websites and I love it. Let me bring your ideas to life through code.
        </p>

        <Tooltip title="Open in new tab">
          <a
            className="resume-btn btn"
            href="/Full Stack Developer - Mika Ridley.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </Tooltip>
      </div>

      <img className="avatar" src={mikaAvatar} />

      <SocialLinks />
    </section>
  )
}
