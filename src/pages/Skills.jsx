import React from 'react';
import { Card } from '../components/index.js';

function Skills() {
  return (
    <div className="min-h-screen px-6 py-10 bg-[#F3F4F6] dark:bg-[#111827] transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center text-[#3B82F6] dark:text-[#3B82F6] mb-10">
        My Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        <Card
          src="/HTML5.png"
          alt="Html Logo"
          label="HTML"
        />
        <Card
          src="/CSS3.png"
          alt="Css Logo"
          label="CSS"
        />
        <Card
          src="/JavaScript.png"
          alt="Javascript Logo"
          label="JavaScript"
        />
        <Card
          src="/React.png"
          alt="React.js logo"
          label="React.js"
        />
        <Card
          src="/Node.js.png"
          alt="Node.js logo"
          label="Node.js"
        />
        <Card
          src="/MongoDB.png"
          alt="MongoDB logo"
          label="MongoDB"
        />
      </div>
    </div>
  );
}

export default Skills;
