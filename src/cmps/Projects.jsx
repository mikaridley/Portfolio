import marshmelloPreview from '../assets/imgs/marshmelloPreview.png'
import simplePenPreview from '../assets/imgs/simplePenPreview.png'
import memeCraftPreview from '../assets/imgs/memeCraftPreview.png'
import { ProjectPreview } from './ProjectPreview'

export function Projects() {
  return (
    <section className="projects">
      <h2>Top Projects</h2>
      <ProjectPreview
        name={'marshmello'}
        description={
          'Project management tool that uses boards, lists, and cards to organize tasks and collaborate with a team.'
        }
        image={marshmelloPreview}
        liveUrl={'https://marshmello-0v1f.onrender.com/'}
        gitUrl={'https://github.com/mikaridley/Marshmello'}
      />

      <ProjectPreview
        name={'simple-pen'}
        description={
          'Sticky-note-style app for quickly capturing and syncing notes, lists, and photos across your devices.'
        }
        image={simplePenPreview}
        liveUrl={'https://mikaridley.github.io/SimplePen/#/note'}
        gitUrl={'https://github.com/mikaridley/SimplePen'}
      />

      <ProjectPreview
        name={'meme-craft'}
        description={
          'A digital tool that allows you to quickly overlay clever or humorous captions onto popular images to create viral internet content.'
        }
        image={memeCraftPreview}
        liveUrl={'https://mikaridley.github.io/Meme-Craft/'}
        gitUrl={'https://github.com/mikaridley/Meme-Craft'}
      />
    </section>
  )
}
