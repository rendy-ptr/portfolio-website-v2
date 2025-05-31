'use client';
import {
  Code,
  Terminal,
  Globe,
  Server,
  Cpu,
  Palette,
  Database,
  Cloud,
} from 'lucide-react';
const skills = [
  {
    name: 'JavaScript',
    level: 75,
    color: 'bg-yellow-400',
    icon: <Code className="h-6 w-6" />,
  },
  {
    name: 'TypeScript',
    level: 75,
    color: 'bg-blue-400',
    icon: <Terminal className="h-6 w-6" />,
  },
  {
    name: 'React',
    level: 75,
    color: 'bg-cyan-400',
    icon: <Globe className="h-6 w-6" />,
  },
  {
    name: 'Next.js',
    level: 75,
    color: 'bg-green-400',
    icon: <Server className="h-6 w-6" />,
  },
  {
    name: 'Node.js',
    level: 75,
    color: 'bg-pink-400',
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    name: 'Python',
    level: 75,
    color: 'bg-purple-400',
    icon: <Code className="h-6 w-6" />,
  },
  {
    name: 'Golang',
    level: 30,
    color: 'bg-orange-400',
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    name: 'Laravel',
    level: 70,
    color: 'bg-indigo-400',
    icon: <Server className="h-6 w-6" />,
  },
  {
    name: 'HTML/CSS',
    level: 85,
    color: 'bg-red-400',
    icon: <Palette className="h-6 w-6" />,
  },
  {
    name: 'MongoDB',
    level: 70,
    color: 'bg-green-500',
    icon: <Database className="h-6 w-6" />,
  },
  {
    name: 'PostgreSQL',
    level: 70,
    color: 'bg-blue-500',
    icon: <Database className="h-6 w-6" />,
  },
  {
    name: 'Docker',
    level: 50,
    color: 'bg-cyan-500',
    icon: <Cloud className="h-6 w-6" />,
  },
];

export default skills;
