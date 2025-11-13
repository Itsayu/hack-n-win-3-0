import { Shield, Heart, Users, AlertCircle } from 'lucide-react';


export default function CodeOfConduct() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <BatAnimation />
      <section className="bg-gradient-to-br from-black via-red-900 to-black py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Code of Conduct</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Creating a safe, inclusive, and welcoming environment for everyone
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 border-2 border-red-600 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
                Our Pledge
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We as organizers, mentors, sponsors, and participants pledge to make participation in
                Hack-N-Win 3.0 a harassment-free experience for everyone, regardless of age, body size,
                visible or invisible disability, ethnicity, sex characteristics, gender identity and
                expression, level of experience, education, socio-economic status, nationality, personal
                appearance, race, religion, or sexual identity and orientation.
              </p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
                      Our Standards
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Examples of behavior that contributes to a positive environment:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✓</span>
                        <span>Using welcoming and inclusive language</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✓</span>
                        <span>Being respectful of differing viewpoints and experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✓</span>
                        <span>Gracefully accepting constructive criticism</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✓</span>
                        <span>Focusing on what is best for the community</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✓</span>
                        <span>Showing empathy towards other community members</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
                      Unacceptable Behavior
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Examples of unacceptable behavior include:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>
                          The use of sexualized language or imagery and unwelcome sexual attention
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Trolling, insulting or derogatory comments, and personal attacks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Public or private harassment of any kind</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>
                          Publishing others' private information without explicit permission
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>
                          Other conduct which could reasonably be considered inappropriate in a
                          professional setting
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
                      Enforcement Responsibilities
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Event organizers are responsible for clarifying and enforcing our standards of
                      acceptable behavior and will take appropriate and fair corrective action in
                      response to any behavior that they deem inappropriate, threatening, offensive, or
                      harmful.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Event organizers have the right and responsibility to remove, edit, or reject
                      participants, projects, or contributions that are not aligned with this Code of
                      Conduct, and will communicate reasons for moderation decisions when appropriate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">Scope</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      This Code of Conduct applies within all event spaces, both online and offline, and
                      also applies when an individual is officially representing the community in public
                      spaces. Examples include using an official event email address, posting via an
                      official social media account, or acting as an appointed representative at an
                      online or offline event.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-black rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Reporting Issues</h2>
              <p className="text-lg text-gray-300 mb-6 text-center">
                If you experience or witness unacceptable behavior, or have any other concerns, please
                report it by contacting the event organizers immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:conduct@d4community.com"
                  className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all text-center"
                >
                  Report via Email
                </a>
                <a
                  href="#"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all text-center"
                >
                  Talk to an Organizer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
