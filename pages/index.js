/* eslint react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import coverImg from '../public/cover.jpeg'
import KitchenSinkExample from '../components/KitchenSink'
import credlyCard from '../components/credlyCard'

export default function Home() {
  return (
    <>
      <Head>
          <title>Spencer's Portfolio</title>
        </Head>
      <main>
          <Header />
          <div class="px-4 py-5 my-0 text-center cover-image">
            <h1 class="display-5 fw-bold text-white">Spencer Sahu</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4 text-white">- Developer | Mentor | Enthusiast -</p>
            </div>
          </div>
          <div class="card content-image">
                <div class="card-header navbar-image">
                    <ul class="nav d-flex justify-content-evenly" data-bs-tabs="tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" data-bs-toggle="tab" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#accolades">Accolades</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body tab-content">
                    <div class="tab-pane active" id="about">
                        <p class="card-text">Spencer's About Page</p>
                        <KitchenSinkExample></KitchenSinkExample>
                    </div>

                    <div class="tab-pane" id="projects">
                        <p class=" card-text">Spencer's Project Page</p>
                        <KitchenSinkExample></KitchenSinkExample>
                    </div>
                    <div class="tab-pane" id="accolades">
                        <p class=" card-text">Spencer's Accolade Page</p>
                        <div class="d-flex">
                          <img src="https://www.credly.com/badges/598b60e4-f1c3-4ec9-9275-95acf5f15964/public_url"></img>
                          <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="598b60e4-f1c3-4ec9-9275-95acf5f15964" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="https://cdn.credly.com/assets/utilities/embed.js"></script>
                        </div>
                    </div>
                </div>
           </div>
      </main>
    </>
  )
}
