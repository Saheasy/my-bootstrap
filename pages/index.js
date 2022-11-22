/* eslint react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import coverImg from '../public/cover.jpeg'

export default function Home() {
  return (
    <>
      <Head>
          <title>Spencer's Portfolio</title>
        </Head>
      <main>
          <Header />
          <div class="px-4 py-5 my-0 text-center bg-secondary">
            <h1 class="display-5 fw-bold">Spencer Sahu</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">- Developer | Mentor | Enthusiast -</p>
            </div>
          </div>
          <div class="card">
                <div class="card-header">
                    <ul class="nav d-flex justify-content-evenly" data-bs-tabs="tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" data-bs-toggle="tab" href="#dhcp">| About Me |</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#static">| Projects |</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" data-bs-toggle="tab" href="#dhcp">| Certifications |</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#static">| Volunteering |</a>
                        </li>
                    </ul>
                </div>
                <form class="card-body tab-content">
                    <div class="tab-pane active" id="dhcp">
                        <p class="card-text">Change DHCP Network settings.</p>
                    </div>
                    <div class="tab-pane" id="static">
                        <p class=" card-text">Change Static Network settings.</p>
                    </div>
                    <button class="btn btn-primary" type="submit">Save</button>
                </form>
           </div>
      </main>
    </>
  )
}
