export interface Mentor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  linkedin?: string;
  twitter?: string;
  github?: string;
  created_at?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  department: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  created_at?: string;
}
