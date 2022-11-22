import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <nav class="navbar bg-light navbar-image">
        <div class="container-fluid py-0">
            <div>
                <Link class="px-2" href="mailto:saheasy@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                <Link class="px-2" href="https://www.facebook.com/theSahu27/">
                    <FontAwesomeIcon icon={faFacebook}  />
                </Link>
                <Link class="px-2" href="https://www.linkedin.com/in/spencersahu/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
                <Link class="px-2" href="https://github.com/Saheasy">
                    <FontAwesomeIcon icon={faGithubAlt} />
                </Link>
            </div>
          
          <div class="d-flex">
            <Link href="/" class="text-decoration-none px-2">Portfolio</Link>
            <Link href="/" class="text-decoration-none px-2">Projects</Link>
          </div>
        </div>
      </nav>
  )
}
