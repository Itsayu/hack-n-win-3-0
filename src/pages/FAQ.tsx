import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Hack-N-Win 3.0?',
    answer:
      'Hack-N-Win 3.0 is a Batman-themed hackathon organized by D4 Community where developers, designers, and innovators come together to build amazing projects over an intense weekend of coding, learning, and collaboration.',
  },
  {
    question: 'Who can participate?',
    answer:
      'Anyone with a passion for technology can participate! Whether you\'re a student, professional developer, designer, or just someone who loves to code, you\'re welcome to join. All skill levels are encouraged to participate.',
  },
  {
    question: 'Do I need a team to participate?',
    answer:
      'You can participate solo or as part of a team (up to 4 members). If you don\'t have a team, we\'ll have team formation sessions at the beginning of the event where you can meet other participants and form teams.',
  },
  {
    question: 'Is there a registration fee?',
    answer:
      'No! Hack-N-Win 3.0 is completely free to participate. We want to make this event accessible to everyone in the tech community.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Bring your laptop, charger, and any other devices you might need for development. Also bring your creativity, enthusiasm, and a positive attitude! We\'ll provide food, drinks, and workspace.',
  },
  {
    question: 'Will there be prizes?',
    answer:
      'Yes! We have amazing prizes for winners in multiple categories including Best Overall Project, Best Innovation, Best Design, and special sponsor prizes. Stay tuned for the complete prize pool announcement.',
  },
  {
    question: 'Will mentors be available?',
    answer:
      'Absolutely! We have industry experts as mentors who will be available throughout the hackathon to help with technical challenges, brainstorming, and project guidance.',
  },
  {
    question: 'What kind of projects can we build?',
    answer:
      'You can build anything! Web apps, mobile apps, hardware projects, AI/ML solutions, blockchain applications – the sky\'s the limit. We encourage innovative solutions that solve real-world problems.',
  },
  {
    question: 'Will food be provided?',
    answer:
      'Yes! We\'ll provide meals, snacks, and beverages throughout the event to keep you fueled and energized.',
  },
  {
    question: 'How will projects be judged?',
    answer:
      'Projects will be judged based on innovation, technical complexity, design, functionality, and presentation. Each team will get a chance to present their project to our panel of judges.',
  },
  {
    question: 'Can I start working on my project before the hackathon?',
    answer:
      'No, all projects must be started at the hackathon. However, you can come with ideas, research, and planning. The actual coding must begin during the event.',
  },
  {
    question: 'What if I have more questions?',
    answer:
      'Feel free to reach out to us at help.d4community@gmail.comm or connect with us on our social media channels. We\'re here to help!',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <section className="bg-gradient-to-br from-black via-red-900 to-black py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <HelpCircle className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Everything you need to know about Hack-N-Win 3.0
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-lg font-bold text-black dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-950 py-16 md:py-20 border-t-2 border-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Can't find the answer you're looking for? Reach out to our team and we'll get back to you
              as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:help.d4community@gmail.comm"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/#register"
                className="bg-black dark:bg-white text-white dark:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
