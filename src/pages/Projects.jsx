import React from 'react'
import { ProjectCard } from '../components'

function Projects() {
  return (
    <div className=" px-6 py-10 bg-[#F3F4F6] dark:bg-[#111827] transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center text-[#3B82F6] dark:text-[#3B82F6] mb-6">
        My Projects
      </h1>

      <div className="flex gap-8 items-center justify-center">
        <ProjectCard
          heading="PostHub - a blog platform"
          detail="Built a full-stack React application with user authentication (signup, login, logout) using Appwrite as the backend service. Implemented dynamic routing and protected routes with React Router DOM for seamless navigation."
          link="https://github.com/ankush1423/PostHub-a-blog-platform"
        />
        <ProjectCard
          heading="TubeHub - a backend service"
          detail="Developed RESTful backend APIs for a YouTube-like platform using Node.js, Express.js, MongoDB, and Mongoose. Implemented secure user authentication and authorization with JWT for protected routes."
          link="https://github.com/ankush1423/StreamCore-API-YouTube-like-backend-service"
        />
        <ProjectCard
          heading="Backend - for-blog-app"
          detail="Developed RESTful backend APIs for my blog-app using Node.js, Express.js, MongoDB, and Mongoose. Implemented secure user authentication and authorization with JWT for protected routes."
          link="https://github.com/ankush1423/Backend---for-blog-app"
        />
      </div>
    </div>
  )
}

export default Projects
