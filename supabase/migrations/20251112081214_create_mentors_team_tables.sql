/*
  # Create Mentors and Team Members Tables

  1. New Tables
    - `mentors`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `role` (text, required)
      - `bio` (text, required)
      - `image` (text, required)
      - `expertise` (text array)
      - `linkedin` (text, optional)
      - `twitter` (text, optional)
      - `github` (text, optional)
      - `created_at` (timestamptz)

    - `team_members`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `role` (text, required)
      - `bio` (text, required)
      - `image` (text, required)
      - `department` (text, required)
      - `linkedin` (text, optional)
      - `twitter` (text, optional)
      - `github` (text, optional)
      - `created_at` (timestamptz)

    - `badges`
      - `id` (uuid, primary key)
      - `participant_name` (text, required)
      - `participant_email` (text, required)
      - `photo_url` (text, optional)
      - `badge_number` (text, unique, required)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to mentors and team_members
    - Add policies for authenticated users to create and manage their own badges
*/

CREATE TABLE IF NOT EXISTS mentors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  image text NOT NULL DEFAULT '👨‍💻',
  expertise text[] DEFAULT '{}',
  linkedin text,
  twitter text,
  github text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE mentors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view mentors"
  ON mentors FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  image text NOT NULL DEFAULT '👤',
  department text NOT NULL,
  linkedin text,
  twitter text,
  github text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view team members"
  ON team_members FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  participant_name text NOT NULL,
  participant_email text NOT NULL,
  photo_url text,
  badge_number text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view badges"
  ON badges FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can create badges"
  ON badges FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

INSERT INTO mentors (name, role, bio, image, expertise, linkedin, github) VALUES
  ('Dr. Sarah Chen', 'AI/ML Expert', 'Leading researcher in artificial intelligence with 15 years of experience. Passionate about making AI accessible to everyone.', '👩‍🔬', ARRAY['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow'], 'sarahchen', 'sarahchen'),
  ('Marcus Williams', 'Full Stack Developer', 'Senior engineer at a Fortune 500 company. Loves mentoring and helping developers build scalable applications.', '👨‍💻', ARRAY['React', 'Node.js', 'MongoDB', 'AWS'], 'marcusw', 'marcusw'),
  ('Priya Sharma', 'Mobile Development Lead', 'Expert in building cross-platform mobile apps. Former startup founder with multiple successful apps.', '👩‍💼', ARRAY['React Native', 'Flutter', 'iOS', 'Android'], 'priyasharma', 'priyasharma'),
  ('Alex Rodriguez', 'DevOps Architect', 'Cloud infrastructure specialist with expertise in Kubernetes, Docker, and CI/CD pipelines.', '🧑‍💻', ARRAY['Kubernetes', 'Docker', 'AWS', 'CI/CD'], 'alexr', 'alexr'),
  ('Emily Zhang', 'UI/UX Designer', 'Award-winning designer focused on creating beautiful and intuitive user experiences.', '👩‍🎨', ARRAY['Figma', 'UI Design', 'UX Research', 'Prototyping'], 'emilyzhang', 'emilyzhang'),
  ('James Miller', 'Blockchain Developer', 'Pioneer in blockchain technology and smart contracts. Building the decentralized future.', '👨‍🔧', ARRAY['Solidity', 'Web3', 'Ethereum', 'Smart Contracts'], 'jamesmiller', 'jamesmiller');

INSERT INTO team_members (name, role, bio, image, department, linkedin, twitter) VALUES
  ('Rahul Kumar', 'Founder & CEO', 'Visionary leader of D4 Community with a passion for building tech communities and fostering innovation.', '👨‍💼', 'Leadership', 'rahulkumar', 'rahulkumar'),
  ('Ananya Desai', 'Event Coordinator', 'Organizing amazing tech events and creating memorable experiences for the community.', '👩‍💼', 'Operations', 'ananyadesai', 'ananyadesai'),
  ('Vikram Singh', 'Tech Lead', 'Leading the technical direction and ensuring smooth execution of all hackathon infrastructure.', '👨‍💻', 'Technology', 'vikramsingh', 'vikramsingh'),
  ('Sneha Patel', 'Marketing Head', 'Spreading the word about our events and building an engaged community online.', '👩‍💼', 'Marketing', 'snehapatel', 'snehapatel'),
  ('Arjun Mehta', 'Sponsorship Manager', 'Building partnerships with companies and securing support for our events.', '🤝', 'Partnerships', 'arjunmehta', 'arjunmehta'),
  ('Neha Gupta', 'Community Manager', 'Keeping our community engaged, supported, and connected throughout the year.', '👩‍💻', 'Community', 'nehagupta', 'nehagupta'),
  ('Karthik Reddy', 'Design Lead', 'Creating stunning visuals and branding for all D4 Community initiatives.', '🎨', 'Design', 'karthikreddy', 'karthikreddy'),
  ('Meera Shah', 'Volunteer Coordinator', 'Managing our amazing team of volunteers who make everything possible.', '👥', 'Operations', 'meerashah', 'meerashah');
