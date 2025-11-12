import { Target, Heart, Users, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="bg-gradient-to-br from-black via-red-900 to-black py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-6xl">🦇</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Hack-N-Win 3.0</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Where Innovation Meets the Dark Knight's Legacy
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 border-2 border-red-600 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
                The Hackathon
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Hack-N-Win 3.0 is not just another hackathon – it's an epic journey into the world of
                innovation, inspired by the determination and brilliance of Batman. Just as Bruce Wayne
                uses technology and intellect to protect Gotham, we challenge you to use your coding
                prowess to build solutions that make a difference.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This is the third iteration of our flagship event, bringing together the brightest minds
                in technology to collaborate, innovate, and create groundbreaking projects over an
                intense weekend of coding, learning, and fun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To empower students and developers to push the boundaries of technology, fostering
                  innovation and creating solutions that impact real-world problems.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-600 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">Our Vision</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To create a vibrant ecosystem where technology enthusiasts can learn, grow, and build
                  the future together, one hackathon at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-950 py-16 md:py-20 border-t-2 border-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white">
            About D4 Community
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border-2 border-red-600 mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                D4 Community is a passionate tech community dedicated to fostering innovation, collaboration,
                and growth among developers, designers, and technology enthusiasts. Founded with the belief
                that the best learning happens through community-driven experiences, we've been organizing
                impactful events that bring together minds eager to learn and build.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our community thrives on the principle of "Learn, Build, Share" – we believe in empowering
                individuals to acquire new skills, create innovative projects, and share knowledge with others.
                Through hackathons, workshops, and collaborative projects, we've built a supportive ecosystem
                where everyone can grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 text-center hover:border-red-600 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Innovation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Encouraging creative thinking and breakthrough solutions to complex problems.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 text-center hover:border-red-600 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Community</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Building a supportive network where everyone can learn and grow together.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 text-center hover:border-red-600 transition-all">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Excellence</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Striving for the highest standards in every project and learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white">
              Join the Movement
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Be part of something bigger. Join D4 Community and Hack-N-Win 3.0 to experience the
              future of collaborative innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#register"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                Register for Hackathon
              </a>
              <a
                href="/team"
                className="bg-black dark:bg-white text-white dark:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
