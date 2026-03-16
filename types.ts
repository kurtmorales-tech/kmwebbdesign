import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  // New fields for detail view
  client?: string;
  duration?: string;
  date?: string; // Added for schema datePublished
  tags?: string[];
  challenge?: string;
  solution?: string;
  results?: string[];
  link?: string;
  gallery?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface MetaProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, any>;
}